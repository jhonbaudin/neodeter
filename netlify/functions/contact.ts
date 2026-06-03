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

type BrevoErrorPayload = {
  code?: string;
  message?: string;
};

const BREVO_SEND_EMAIL_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

const trimValue = (value?: string | null) => {
  if (typeof value !== "string") return undefined;

  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
};

const isValidEmail = (value?: string) =>
  typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const sanitizeHeaderValue = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const getBrevoConfig = () => {
  const apiKey = trimValue(process.env.BREVO_API_KEY);
  const fromEmail = trimValue(process.env.CONTACT_FROM_EMAIL);
  const fromName = trimValue(process.env.CONTACT_FROM_NAME) ?? "Neo Deter del Perú";

  if (!apiKey || !fromEmail) {
    return null;
  }

  return {
    apiKey,
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

const sendEmail = async ({
  apiKey,
  fromEmail,
  fromName,
  to,
  replyTo,
  replyToName,
  subject,
  text,
}: {
  apiKey: string;
  fromEmail: string;
  fromName: string;
  to: string[];
  replyTo: string;
  replyToName: string;
  subject: string;
  text: string;
}) => {
  const response = await fetch(BREVO_SEND_EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        email: fromEmail,
        name: fromName,
      },
      to: to.map((email) => ({ email })),
      replyTo: {
        email: replyTo,
        name: replyToName,
      },
      subject: sanitizeHeaderValue(subject),
      textContent: text,
    }),
  });

  const payload = (await response.json().catch(() => null)) as
    | BrevoErrorPayload
    | { messageId?: string }
    | null;

  if (!response.ok) {
    throw new Error(
      (payload as BrevoErrorPayload | null)?.message ||
        "Brevo rechazó el envío del correo.",
    );
  }

  return "messageId" in (payload ?? {}) ? payload?.messageId : null;
};

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

  const brevoConfig = getBrevoConfig();

  if (!brevoConfig) {
    return jsonResponse(
      request,
      {
        error:
          "El servicio de correo aún no está configurado. Configura BREVO_API_KEY y CONTACT_FROM_EMAIL en Netlify.",
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
    const messageId = await sendEmail({
      ...brevoConfig,
      to: contactRecipients,
      replyTo: inquiryData.email ?? brevoConfig.fromEmail,
      replyToName: inquiryData.nombre,
      subject: buildInquirySubject(
        inquiryData,
        trimValue(body.subjectPrefix) ?? "Consulta comercial",
      ),
      text: buildInquiryText(inquiryData),
    });

    return jsonResponse(request, { ok: true, id: messageId });
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
};
