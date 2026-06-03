export interface InquiryData {
  nombre: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
}

export const buildInquirySubject = (
  data: InquiryData,
  subjectPrefix = "Consulta comercial",
) => {
  const subjectTarget = data.empresa?.trim() || data.nombre.trim() || "Neo Deter";
  return `${subjectPrefix} - ${subjectTarget}`;
};

export const buildInquiryText = (data: InquiryData) => {
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

  return lines.join("\n");
};

export const submitInquiry = async (
  data: InquiryData,
  subjectPrefix = "Consulta comercial",
) => {
  const contactEndpoint =
    import.meta.env.VITE_CONTACT_ENDPOINT || "/.netlify/functions/contact";
  const response = await fetch(contactEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      subjectPrefix,
    }),
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as
      | { error?: string }
      | null;

    throw new Error(
      payload?.error ?? "No se pudo enviar la consulta en este momento.",
    );
  }

  return response.json().catch(() => null);
};
