import { content } from "@/content/content";

interface InquiryData {
  nombre: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
}

export const buildInquiryMailto = (data: InquiryData, subjectPrefix = "Consulta comercial") => {
  const subjectTarget = data.empresa?.trim() || data.nombre.trim() || content.company.name;
  const subject = `${subjectPrefix} - ${subjectTarget}`;

  const lines = [
    "Hola,",
    "",
    "Comparto mis datos para recibir información comercial:",
    "",
    `Nombre: ${data.nombre.trim() || "-"}`,
    `Empresa: ${data.empresa?.trim() || "-"}`,
    `Email: ${data.email?.trim() || "-"}`,
    `Teléfono: ${data.telefono?.trim() || "-"}`,
    "",
    "Mensaje:",
    data.mensaje?.trim() || "-",
  ];

  return `mailto:${content.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
};
