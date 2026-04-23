const whatsappMessage = encodeURIComponent(
  "Hola, quisiera recibir asesoría comercial sobre sus soluciones químicas industriales.",
);
const officeMapQuery = encodeURIComponent(
  "Av. Caminos del Inca 1089 Of. 201, Surco, Lima, Perú",
);
const factoryMapQuery = encodeURIComponent(
  "Car. Panamericana Sur Km. 17.5 Lote 80 A, Urb. La Concordia, San Juan de Miraflores, Lima, Perú",
);
const officeMapEmbedSrc = `https://www.google.com/maps?q=${officeMapQuery}&z=17&output=embed`;
const factoryMapEmbedSrc = `https://www.google.com/maps?q=${factoryMapQuery}&z=16&output=embed`;
const missionStatement =
  "MISIÓN\nDesarrollar, elaborar y comercializar productos químicos amigables con el medio ambiente para satisfacer las necesidades de nuestros clientes en las áreas de higiene, desinfección, mantenimiento industrial y lavandería, mediante la inversión constante en la innovación, la gestión y el desarrollo de nuestros integrantes. Aseguramos la rentabilidad de nuestro negocio y la mejora de nuestra calidad de vida y la de nuestra sociedad.";
const visionStatement =
  "VISIÓN\nSer una empresa reconocida regionalmente por la innovación, el alto desempeño de sus productos y servicio técnico, así como su gestión ambiental responsable, caracterizándonos por un entorno laboral creativo, motivador, profesional y respetuoso.";
const qualityPolicyStatement =
  "NEO DETER DEL PERU S.A.C\nSomos una empresa industrial del sector químico que diseña, desarrolla, produce y comercializa productos químicos para higiene, desinfección, mantenimiento industrial y lavandería. Somos responsables con nuestras decisiones y acciones para la satisfacción de las necesidades de nuestros clientes y demás grupos de interés, la mejora continua de nuestros procesos, productos y servicios conforme al Sistema de Gestión de la Calidad ISO 9001 vigente, el cumplimiento de la normatividad aplicable a nuestras operaciones, la rentabilidad constante de nuestro negocio, cuidado del medio ambiente, la inversión en innovación y capacitación. Entregaremos cada vez mejor calidad, mayor rapidez y más conocimiento.";

export const content = {
  company: {
    name: "Neo Deter del Perú",
    legalName: "Neo Deter del Perú SAC",
    tagline: "Tecnología química integrada a la naturaleza",
    description:
      "Empresa peruana especializada en la fabricación y comercialización de productos químicos de limpieza para diversos sectores.",
    foundedYear: "1964",
    foundedDate: "1964-07-20",
    summary:
      "Proveedor de soluciones integrales en higiene, desinfección, lavandería y mantenimiento industrial, adaptándose a las necesidades específicas de cada cliente.",
    mission: missionStatement,
    vision: visionStatement,
    qualityPolicy: qualityPolicyStatement,
  },
  seo: {
    siteName: "Neo Deter del Perú",
    siteUrl: "https://neodeter.pe",
    locale: "es_PE",
    defaultTitle:
      "Neo Deter del Perú | Soluciones químicas para limpieza y desinfección industrial",
    titleTemplate: "%s | Neo Deter del Perú",
    defaultDescription:
      "Fabricación y comercialización de productos químicos para limpieza, desinfección, lavandería y mantenimiento industrial en Perú.",
    keywords: [
      "productos químicos de limpieza",
      "limpieza industrial Perú",
      "detergentes industriales",
      "desinfección industrial",
      "lavandería industrial",
      "productos para hoteles y restaurantes",
      "mantenimiento industrial",
      "productos químicos Perú",
    ],
  },
  hero: {
    title: "Soluciones químicas para limpieza y desinfección industrial",
    subtitle:
      "Productos especializados para lavandería, industria alimentaria, hoteles, restaurantes y mantenimiento industrial.",
    ctaPrimary: "Ver productos",
    ctaSecondary: "Solicitar asesoría",
  },
  solutions: [
    {
      name: "Lavandería Industrial",
      description:
        "Detergentes especializados para remover manchas complejas como grasas, sangre, aceites y residuos industriales.",
    },
    {
      name: "Lavandería Comercial",
      description:
        "Productos para lavado de prendas, ropa de cama, manteles y textiles en general.",
    },
    {
      name: "Alimentos, Hoteles y Restaurantes",
      description:
        "Soluciones de higiene y desinfección para industria alimentaria y sector horeca.",
    },
    {
      name: "Mantenimiento Industrial",
      description:
        "Productos químicos para limpieza, desengrase y mantenimiento en entornos industriales.",
    },
  ],
  productCategories: [
    "Detergentes industriales",
    "Desinfectantes",
    "Desengrasantes",
    "Lavandería industrial",
    "Limpieza de superficies",
  ],
  industries: [
    "Industria alimentaria",
    "Hoteles y restaurantes",
    "Lavanderías industriales",
    "Agroindustria",
    "Hospitales",
    "Empresas de mantenimiento",
  ],
  advantages: [
    "Más de 60 años de experiencia",
    "Fabricación local en Perú",
    "Productos adaptados a cada cliente",
    "Asesoría técnica especializada",
    "Compromiso con el medio ambiente",
    "Uso de insumos biodegradables",
    "Control de calidad constante",
  ],
  contact: {
    office: {
      label: "Oficina comercial",
      address: "Av. Caminos del Inca 1089 Of. 201, Surco, Lima",
      mapHref: `https://www.google.com/maps/search/?api=1&query=${officeMapQuery}`,
      mapEmbedSrc: officeMapEmbedSrc,
    },
    factory: {
      label: "Fábrica",
      address:
        "Car. Panamericana Sur Km. 17.5 Lote 80 A, Urb. La Concordia (Alt. Paradero Toyota), San Juan de Miraflores, Lima",
      mapHref: `https://www.google.com/maps/search/?api=1&query=${factoryMapQuery}`,
      mapEmbedSrc: factoryMapEmbedSrc,
    },
    centralPhones: [
      {
        display: "(01) 372-8568",
        href: "tel:+5113728568",
      },
      {
        display: "(01) 372-3822",
        href: "tel:+5113723822",
      },
    ],
    phoneDisplay: "+51 995 003 664",
    phoneHref: "tel:+51995003664",
    email: "atencionalcliente@neodeter.pe",
    emailHref: "mailto:atencionalcliente@neodeter.pe",
    whatsappDisplay: "+51 995 003 664",
    whatsappBaseHref: "https://wa.me/51995003664",
    whatsappHref: `https://wa.me/51995003664?text=${whatsappMessage}`,
    schedule: "Lunes a viernes de 8:00 a.m. a 6:00 p.m.",
  },
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/neodeterperu/",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/neodeter/",
    },
    {
      label: "X",
      href: "https://x.com/neodeter",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/neo-deter-del-peru-sac/?originalSubdomain=pe",
    },
  ],
  cookies: {
    message:
      "Utilizamos cookies para mejorar la navegación, analizar el tráfico del sitio y ofrecer una experiencia más útil para nuestros visitantes.",
    acceptLabel: "Aceptar cookies",
  },
  colors: {
    primary: "#024A93",
    secondary: "#82BB24",
    accent: "#C5D419",
    background: "#FFFFFF",
    text: "#1A1A1A",
  },
} as const;

export const companyHighlights = [
  { value: "1964", label: "Inicio de operaciones" },
  { value: "4", label: "Líneas de solución" },
  { value: "6", label: "Sectores priorizados" },
  { value: "2", label: "Puntos de atención en Lima" },
] as const;
