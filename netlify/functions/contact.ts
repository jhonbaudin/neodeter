import { Buffer } from "node:buffer";
import tls from "node:tls";
import contactSettingsContent from "../../src/content/contact-settings.json";
import {
  buildInquirySubject,
  buildInquiryText,
  type InquiryData,
} from "../../src/lib/contact";

type ContactSettingsContent = {
  inboxEmails?: string[];
};

type ContactRequestBody = InquiryData & {
  subjectPrefix?: string;
};

type SmtpConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  fromEmail: string;
  fromName: string;
};

const trimValue = (value?: string | null) => {
  if (typeof value !== "string") return undefined;

  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
};

const isValidEmail = (value?: string) =>
  typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isAscii = (value: string) =>
  Array.from(value).every((char) => (char.codePointAt(0) ?? 0) <= 0x7f);

const encodeHeader = (value: string) => {
  if (isAscii(value)) return value;

  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
};

const escapeAddressName = (value: string) => value.replace(/["\\]/g, "\\$&");

const formatAddress = (email: string, name?: string) => {
  const cleanName = trimValue(name);

  return cleanName
    ? `"${escapeAddressName(encodeHeader(cleanName))}" <${email}>`
    : email;
};

const sanitizeHeaderValue = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const buildMessageId = (fromEmail: string) => {
  const domain = fromEmail.split("@")[1] || "neodeter.pe";
  const token = `${Date.now()}.${Math.random().toString(36).slice(2)}`;

  return `<${token}@${domain}>`;
};

const smtpResponseCode = (response: string) => {
  const match = response.match(/(?:^|\n)(\d{3})(?:\s|$)/);

  return match ? Number(match[1]) : undefined;
};

const getSmtpConfig = (): SmtpConfig | null => {
  const host = trimValue(process.env.SMTP_HOST);
  const username = trimValue(process.env.SMTP_USER);
  const password = trimValue(process.env.SMTP_PASSWORD);
  const fromEmail = trimValue(process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_FROM_EMAIL);
  const fromName = trimValue(process.env.CONTACT_FROM_NAME) ?? "Neo Deter del Perú";
  const port = Number(trimValue(process.env.SMTP_PORT) ?? "465");

  if (!host || !username || !password || !fromEmail || !Number.isFinite(port)) {
    return null;
  }

  return {
    host,
    port,
    username,
    password,
    fromEmail,
    fromName,
  };
};

const contactRecipients = (
  (contactSettingsContent as ContactSettingsContent).inboxEmails ?? []
)
  .map((email) => trimValue(email))
  .filter((email): email is string => Boolean(email) && isValidEmail(email));

const allowedOrigins = new Set([
  "https://neodeter.pe",
  "https://www.neodeter.pe",
  "https://neodeter.netlify.app",
]);

const responseHeaders = (request: Request) => {
  const origin = request.headers.get("Origin") ?? "";
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };

  if (allowedOrigins.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Vary"] = "Origin";
  }

  return headers;
};

const jsonResponse = (request: Request, body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: responseHeaders(request),
  });

const readSmtpResponse = (socket: tls.TLSSocket) =>
  new Promise<string>((resolve, reject) => {
    let buffer = "";

    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const onData = (chunk: Buffer) => {
      buffer += chunk.toString("utf8");

      const lines = buffer.split(/\r?\n/).filter(Boolean);
      const lastLine = lines.at(-1);

      if (lastLine && /^\d{3}\s/.test(lastLine)) {
        cleanup();
        resolve(buffer);
      }
    };

    socket.on("data", onData);
    socket.once("error", onError);
  });

const sendSmtpCommand = async (
  socket: tls.TLSSocket,
  command: string,
  expectedCodes: number[],
) => {
  socket.write(`${command}\r\n`);

  const response = await readSmtpResponse(socket);
  const code = smtpResponseCode(response);

  if (!code || !expectedCodes.includes(code)) {
    throw new Error(`SMTP rechazó el comando: ${response.trim()}`);
  }

  return response;
};

const sendEmail = async ({
  config,
  to,
  replyTo,
  subject,
  text,
}: {
  config: SmtpConfig;
  to: string[];
  replyTo: string;
  subject: string;
  text: string;
}) =>
  new Promise<void>((resolve, reject) => {
    const socket = tls.connect({
      host: config.host,
      port: config.port,
      servername: config.host,
      timeout: 15000,
    });

    socket.once("timeout", () => {
      socket.destroy();
      reject(new Error("Timeout conectando al servidor SMTP."));
    });

    socket.once("error", reject);

    socket.once("secureConnect", async () => {
      try {
        const greeting = await readSmtpResponse(socket);
        const greetingCode = smtpResponseCode(greeting);

        if (greetingCode !== 220) {
          throw new Error(`SMTP no aceptó la conexión: ${greeting.trim()}`);
        }

        await sendSmtpCommand(socket, `EHLO ${config.host}`, [250]);
        await sendSmtpCommand(socket, "AUTH LOGIN", [334]);
        await sendSmtpCommand(
          socket,
          Buffer.from(config.username, "utf8").toString("base64"),
          [334],
        );
        await sendSmtpCommand(
          socket,
          Buffer.from(config.password, "utf8").toString("base64"),
          [235],
        );
        await sendSmtpCommand(socket, `MAIL FROM:<${config.fromEmail}>`, [250]);

        for (const recipient of to) {
          await sendSmtpCommand(socket, `RCPT TO:<${recipient}>`, [250, 251]);
        }

        await sendSmtpCommand(socket, "DATA", [354]);

        const safeSubject = sanitizeHeaderValue(subject);
        const safeReplyTo = sanitizeHeaderValue(replyTo);
        const messageBody = text.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");
        const message = [
          `From: ${formatAddress(config.fromEmail, config.fromName)}`,
          `To: ${to.join(", ")}`,
          `Reply-To: ${safeReplyTo}`,
          `Subject: ${encodeHeader(safeSubject)}`,
          `Message-ID: ${buildMessageId(config.fromEmail)}`,
          "MIME-Version: 1.0",
          'Content-Type: text/plain; charset="UTF-8"',
          "Content-Transfer-Encoding: 8bit",
          "",
          messageBody,
        ].join("\r\n");

        socket.write(`${message}\r\n.\r\n`);

        const dataResponse = await readSmtpResponse(socket);
        const dataCode = smtpResponseCode(dataResponse);

        if (dataCode !== 250) {
          throw new Error(`SMTP no aceptó el mensaje: ${dataResponse.trim()}`);
        }

        await sendSmtpCommand(socket, "QUIT", [221]);
        socket.end();
        resolve();
      } catch (error) {
        socket.destroy();
        reject(error);
      }
    });
  });

export default async (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...responseHeaders(request),
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (request.method !== "POST") {
    return jsonResponse(request, { error: "Método no permitido." }, 405);
  }

  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    return jsonResponse(
      request,
      {
        error:
          "El servicio de correo aún no está configurado. Configura SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD y CONTACT_FROM_EMAIL en Netlify.",
      },
      500,
    );
  }

  if (!contactRecipients.length) {
    return jsonResponse(
      request,
      {
        error:
          "No hay correos receptores válidos configurados para recibir consultas.",
      },
      500,
    );
  }

  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return jsonResponse(request, { error: "No se pudo leer la solicitud enviada." }, 400);
  }

  const inquiryData: InquiryData = {
    nombre: trimValue(body.nombre) ?? "",
    empresa: trimValue(body.empresa),
    email: trimValue(body.email),
    telefono: trimValue(body.telefono),
    mensaje: trimValue(body.mensaje),
  };

  if (!inquiryData.nombre) {
    return jsonResponse(request, { error: "El nombre es obligatorio." }, 400);
  }

  if (!isValidEmail(inquiryData.email)) {
    return jsonResponse(request, { error: "Ingresa un correo válido." }, 400);
  }

  try {
    await sendEmail({
      config: smtpConfig,
      to: contactRecipients,
      replyTo: inquiryData.email ?? smtpConfig.fromEmail,
      subject: buildInquirySubject(
        inquiryData,
        trimValue(body.subjectPrefix) ?? "Consulta comercial",
      ),
      text: buildInquiryText(inquiryData),
    });
  } catch (error) {
    return jsonResponse(
      request,
      {
        error:
          error instanceof Error
            ? error.message
            : "El proveedor de correo rechazó el envío.",
      },
      502,
    );
  }

  return jsonResponse(request, { ok: true });
};
