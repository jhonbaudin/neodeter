import contactSettingsContent from "./contact-settings.json";

type ContactSettingsContent = {
  publicEmail?: string;
  inboxEmails?: string[];
  phoneNumber?: string;
  whatsappNumber?: string;
  phoneDisplay?: string;
  phoneHref?: string;
  whatsappDisplay?: string;
  whatsappMessage?: string;
  schedule?: string;
};

const defaultContactSettings = {
  publicEmail: "atencionalcliente@neodeter.pe",
  inboxEmails: ["atencionalcliente@neodeter.pe"],
  phoneNumber: "+51 995 003 664",
  whatsappNumber: "+51 995 003 664",
  whatsappMessage:
    "Hola, quisiera recibir asesoría comercial sobre sus soluciones químicas industriales.",
  schedule: "Lunes a viernes de 8:30 a.m. a 5:30 p.m.",
} as const;

const trimValue = (value?: string | null) => {
  if (typeof value !== "string") return undefined;

  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
};

const normalizeEmailList = (emails?: string[]) => {
  if (!Array.isArray(emails)) {
    return defaultContactSettings.inboxEmails;
  }

  const nextEmails = emails
    .map((email) => trimValue(email))
    .filter((email): email is string => Boolean(email));

  return nextEmails.length ? nextEmails : defaultContactSettings.inboxEmails;
};

const normalizePhoneDisplay = (value?: string, fallback?: string) =>
  trimValue(value) ?? fallback ?? defaultContactSettings.phoneNumber;

const toDigitsOnly = (value: string) => value.replace(/\D/g, "");

export const buildPhoneHref = (phoneNumber: string) => {
  const digitsOnly = toDigitsOnly(phoneNumber);
  if (!digitsOnly.length) {
    return `tel:${toDigitsOnly(defaultContactSettings.phoneNumber)}`;
  }

  return phoneNumber.trim().startsWith("+")
    ? `tel:+${digitsOnly}`
    : `tel:${digitsOnly}`;
};

const rawContactSettings = contactSettingsContent as ContactSettingsContent;
const inboxEmails = normalizeEmailList(rawContactSettings.inboxEmails);
const publicEmail =
  trimValue(rawContactSettings.publicEmail) ??
  inboxEmails[0] ??
  defaultContactSettings.publicEmail;
const phoneNumber = normalizePhoneDisplay(
  rawContactSettings.phoneNumber ?? rawContactSettings.phoneDisplay,
  defaultContactSettings.phoneNumber,
);
const whatsappNumber = normalizePhoneDisplay(
  rawContactSettings.whatsappNumber ?? rawContactSettings.whatsappDisplay,
  defaultContactSettings.whatsappNumber,
);

export const contactSettings = {
  publicEmail,
  inboxEmails,
  phoneNumber,
  whatsappNumber,
  whatsappMessage:
    trimValue(rawContactSettings.whatsappMessage) ??
    defaultContactSettings.whatsappMessage,
  schedule:
    trimValue(rawContactSettings.schedule) ?? defaultContactSettings.schedule,
} as const;

export const buildWhatsAppBaseHref = (whatsappNumber: string) =>
  `https://wa.me/${toDigitsOnly(whatsappNumber) || toDigitsOnly(defaultContactSettings.whatsappNumber)}`;

export const buildWhatsAppHref = (
  whatsappNumber: string,
  whatsappMessage: string,
) =>
  `${buildWhatsAppBaseHref(whatsappNumber)}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;
