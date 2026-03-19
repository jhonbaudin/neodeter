import aquamaticLimon from "@/assets/products/neodeter/aquamatic-limon.jpg";
import aquamaticLimon20Kg from "@/assets/products/neodeter/presentations/aquamatic-limon-20kg.png";
import neoclorDxPlus from "@/assets/products/neodeter/neoclor-dx-plus.jpg";
import neocloramFp from "@/assets/products/neodeter/neocloram-fp.jpg";
import neograsRemoverPlus from "@/assets/products/neodeter/neogras-remover-plus.jpg";
import ssIndustrial from "@/assets/products/neodeter/ss-industrial.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  line: string;
  type: string;
  industry: string[];
  presentations: string[];
  benefits: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  safety: string[];
  technicalSheetUrl?: string | null;
  galleryImages?: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
  }[];
}

export const products: Product[] = [
  {
    id: "aquamatic-limon",
    name: "Aquamatic Limón",
    slug: "aquamatic-limon",
    shortDescription:
      "Detergente para lavandería comercial e industrial orientado al lavado de ropa y textiles de alta rotación.",
    description:
      "Aquamatic Limón es una solución para procesos de lavandería comercial e industrial. Está pensada para operaciones que requieren limpieza constante de ropa, textiles y prendas de uso intensivo en servicios institucionales y comerciales.",
    image: aquamaticLimon,
    line: "Lavandería Industrial",
    type: "Detergentes",
    industry: ["Lavandería Industrial"],
    presentations: ["20 kg"],
    benefits: [
      "Orientado a lavandería comercial e industrial",
      "Apto para lavado frecuente de textiles",
      "Presentación para operaciones de alto volumen",
    ],
    specs: [
      { label: "Tipo", value: "Detergente para lavado de ropa" },
      { label: "Segmento", value: "Lavandería comercial e industrial" },
      { label: "Presentación referencial", value: "Bolsa de 20 kg" },
    ],
    applications: [
      "Lavado de ropa en lavanderías comerciales",
      "Procesos textiles de alto volumen",
      "Atención de ropa de cama, mantelería y prendas de trabajo",
    ],
    safety: [
      "Ficha técnica pendiente de validación en el proyecto",
      "Solicitar hoja de seguridad antes de la implementación operativa",
      "Usar según la dosificación y protocolo definido por la empresa",
    ],
    technicalSheetUrl: "/contacto?producto=aquamatic-limon&solicitud=ficha-tecnica",
    galleryImages: [
      {
        src: aquamaticLimon,
        alt: "Aquamatic Limón en operación de lavandería comercial e industrial",
        fit: "cover",
      },
      {
        src: aquamaticLimon20Kg,
        alt: "Aquamatic Limón presentación de 20 kg",
        fit: "contain",
      },
    ],
  },
  {
    id: "neocloram-fp",
    name: "Neocloram FP",
    slug: "neocloram-fp",
    shortDescription:
      "Detergente desinfectante alcalino para limpieza y desengrase de superficies en hoteles, restaurantes, catering y plantas de alimentos.",
    description:
      "Neocloram FP combina acción detergente, desinfectante y desengrasante para suciedades orgánicas y proteicas. Está formulado para limpieza externa de pisos, paredes, equipos y superficies en contacto con alimentos en operaciones gastronómicas e industriales.",
    image: neocloramFp,
    line: "Industria Alimentaria",
    type: "Desengrasantes",
    industry: ["Industria Alimentaria", "Hoteles y Restaurantes"],
    presentations: ["4 kg", "20 kg", "210 kg"],
    benefits: [
      "Limpieza, desinfección y desengrase en una sola formulación",
      "Sin aromas ni colorantes",
      "Apto para superficies en contacto con alimentos",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ámbar" },
      { label: "Olor", value: "Sin olor" },
      { label: "pH", value: "10.0 ± 1 (solución al 0.5%)" },
      { label: "Nivel de espuma", value: "Espuma media" },
    ],
    applications: [
      "Limpieza y desengrase de pisos y paredes",
      "Lavado externo de equipos, tanques y llenadoras",
      "Uso en plantas de alimentos, bebidas, restaurantes y catering",
    ],
    safety: [
      "Consultar ficha de datos de seguridad antes del uso",
      "Diluir correctamente antes de aplicar",
      "Enjuagar con agua luego del tiempo de contacto recomendado",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neocloram-fp.pdf",
  },
  {
    id: "neoclor-dx-plus",
    name: "Neoclor DX Plus",
    slug: "neoclor-dx-plus",
    shortDescription:
      "Desinfectante sanitizante oxiclorado para desinfección de alimentos, superficies y equipos en plantas procesadoras.",
    description:
      "NeoClor DX Plus es un desinfectante sanitizante líquido a base de dióxido de cloro y clorito de sodio estabilizado. Está orientado a operaciones que requieren control microbiológico en alimentos, superficies en contacto con alimentos y sistemas de agua.",
    image: neoclorDxPlus,
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "Acción bactericida, virucida y fungicida",
      "Aplicación en alimentos y superficies de contacto",
      "Formulación de baja espuma",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido amarillo claro" },
      { label: "pH", value: "8.5 ± 1 (solución al 1%)" },
      { label: "Densidad", value: "1.2 ± 0.05 g/ml" },
      { label: "Nivel de espuma", value: "Sin espuma" },
    ],
    applications: [
      "Desinfección de frutas, verduras y legumbres",
      "Sanitización de pisos, paredes, equipos y circuitos",
      "Purificación y desodorización de agua en sistemas industriales",
    ],
    safety: [
      "Consultar ficha de seguridad antes de manipular el producto",
      "Usar las concentraciones recomendadas para cada proceso",
      "Mantener el envase cerrado y correctamente rotulado",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoclor-dx-plus.pdf",
  },
  {
    id: "neogras-remover-plus",
    name: "Neogras Remover Plus",
    slug: "neogras-remover-plus",
    shortDescription:
      "Desengrasante líquido altamente alcalino para limpieza de hornos, cocinas, planchas y suciedades grasosas difíciles.",
    description:
      "NeoGras Remover Plus es un desengrasante enérgico sin solventes, diseñado para remover grasas pesadas, proteínas resecas y suciedad carbonizada sobre superficies metálicas o plásticas en entornos gastronómicos e industriales.",
    image: neograsRemoverPlus,
    line: "Hoteles y Restaurantes",
    type: "Desengrasantes",
    industry: ["Hoteles y Restaurantes", "Mantenimiento Industrial"],
    presentations: ["4 kg", "20 kg"],
    benefits: [
      "Remueve grasas pegadas y carbonizadas",
      "No contiene solventes",
      "Alta concentración para limpiezas exigentes",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ámbar" },
      { label: "pH", value: "12.5 ± 0.5 (solución al 1%)" },
      { label: "Densidad", value: "1.16 ± 0.05 gr/cc" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Limpieza de hornos, cocinas y planchas freidoras",
      "Lavado de ollas, sartenes, jabas y moldes",
      "Desengrase de superficies con suciedad orgánica pesada",
    ],
    safety: [
      "Consultar ficha de seguridad antes del uso",
      "Aplicar la dilución según temperatura y tiempo de contacto",
      "Usar equipo de protección adecuado para limpiezas alcalinas",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neogras-remover-plus.pdf",
  },
  {
    id: "ss-industrial",
    name: "SS Industrial",
    slug: "ss-industrial",
    shortDescription:
      "Detergente alcalino en polvo biodegradable para limpieza frecuente de superficies, pisos, equipos y utensilios.",
    description:
      "SS Industrial es un detergente alcalino en polvo de baja causticidad, formulado con tensoactivos aniónicos biodegradables. Está diseñado para limpieza regular y frecuente de superficies y materiales en operaciones industriales y de alimentos.",
    image: ssIndustrial,
    line: "Mantenimiento Industrial",
    type: "Detergentes",
    industry: ["Industria Alimentaria", "Mantenimiento Industrial"],
    presentations: ["15 kg"],
    benefits: [
      "Alta biodegradabilidad",
      "Baja causticidad para limpieza frecuente",
      "Apto para superficies en contacto con alimentos",
    ],
    specs: [
      { label: "Apariencia", value: "Polvo blanco granulado" },
      { label: "pH", value: "11.0 ± 0.5 (solución al 1%)" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Biodegradabilidad", value: "98% a 99%" },
    ],
    applications: [
      "Limpieza de pisos, paredes y superficies de trabajo",
      "Lavado de equipos y utensilios",
      "Mantenimiento frecuente en plantas y talleres",
    ],
    safety: [
      "Diluir bien antes de aplicar",
      "Usar según concentración recomendada de 1% a 3%",
      "Consultar ficha de seguridad para el protocolo operativo",
    ],
    technicalSheetUrl: "/fichas-tecnicas/ss-industrial.pdf",
  },
];

const unique = (values: string[]) => Array.from(new Set(values));

export const productLines = unique(products.map((product) => product.line));
export const productTypes = unique(products.map((product) => product.type));
export const industries = unique(products.flatMap((product) => product.industry));
export const presentations = unique(products.flatMap((product) => product.presentations));
