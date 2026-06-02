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

const trimValue = (value?: string | null) => {
  if (typeof value !== "string") return undefined;

  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
};

const isValidEmail = (value?: string) =>
  typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const contactRecipients = (
  (contactSettingsContent as ContactSettingsContent).inboxEmails ?? []
)
  .map((email) => trimValue(email))
  .filter((email): email is string => Boolean(email) && isValidEmail(email));

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

export default async (request: Request) => {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Método no permitido." }, 405);
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return jsonResponse(
      {
        error:
          "El servicio de correo aún no está configurado. Configura RESEND_API_KEY y CONTACT_FROM_EMAIL en Netlify.",
      },
      500,
    );
  }

  if (!contactRecipients.length) {
    return jsonResponse(
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
    return jsonResponse({ error: "No se pudo leer la solicitud enviada." }, 400);
  }

  const inquiryData: InquiryData = {
    nombre: trimValue(body.nombre) ?? "",
    empresa: trimValue(body.empresa),
    email: trimValue(body.email),
    telefono: trimValue(body.telefono),
    mensaje: trimValue(body.mensaje),
  };

  if (!inquiryData.nombre) {
    return jsonResponse({ error: "El nombre es obligatorio." }, 400);
  }

  if (!isValidEmail(inquiryData.email)) {
    return jsonResponse({ error: "Ingresa un correo válido." }, 400);
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: contactRecipients,
      subject: buildInquirySubject(
        inquiryData,
        trimValue(body.subjectPrefix) ?? "Consulta comercial",
      ),
      text: buildInquiryText(inquiryData),
      reply_to: inquiryData.email,
    }),
  });

  const resendPayload = (await resendResponse.json().catch(() => null)) as
    | { id?: string; message?: string; error?: string }
    | null;

  if (!resendResponse.ok) {
    return jsonResponse(
      {
        error:
          resendPayload?.message ||
          resendPayload?.error ||
          "El proveedor de correo rechazó el envío.",
      },
      502,
    );
  }

  return jsonResponse({ ok: true, id: resendPayload?.id ?? null });
};
