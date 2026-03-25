import aquamaticLimon from "@/assets/products/neodeter/aquamatic-limon.jpg";
import aquamaticLimonFront from "@/assets/products/neodeter/aquamatic-limon/aquamatic-limon-front.webp";
import aquamaticLimonAngleLeft from "@/assets/products/neodeter/aquamatic-limon/aquamatic-limon-angle-left.webp";
import aquamaticLimonAngleRight from "@/assets/products/neodeter/aquamatic-limon/aquamatic-limon-angle-right.webp";
import aquamaticLimonPackshot from "@/assets/products/neodeter/aquamatic-limon/aquamatic-limon-packshot.webp";
import biolavajillaView01 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-01.webp";
import biolavajillaView02 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-02.webp";
import biolavajillaView03 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-03.webp";
import biolavajillaView04 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-04.webp";
import biolavajillaView05 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-05.webp";
import biolavajillaView06 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-06.webp";
import biolavajillaView07 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-07.webp";
import biolavajillaView08 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-08.webp";
import biolavajillaView09 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-09.webp";
import biolavajillaView10 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-10.webp";
import biolavajillaView11 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-11.webp";
import biolavajillaView12 from "@/assets/products/neodeter/biolavajilla/biolavajilla-view-12.webp";
import genericProductPlaceholder from "@/assets/products/neodeter/not-found.png";
import neoalkadeterView01 from "@/assets/products/neodeter/neoalkadeter/neoalkadeter-view-01.webp";
import neoclorDxView01 from "@/assets/products/neodeter/neoclor-dx-family/neoclor-dx-view-01.webp";
import neoclorDxView02 from "@/assets/products/neodeter/neoclor-dx-family/neoclor-dx-view-02.webp";
import neoclorDxView03 from "@/assets/products/neodeter/neoclor-dx-family/neoclor-dx-view-03.webp";
import neocloramFamily4kgView01 from "@/assets/products/neodeter/neocloram-family/neocloram-family-4kg-view-01.webp";
import neocloramFamily4kgView02 from "@/assets/products/neodeter/neocloram-family/neocloram-family-4kg-view-02.webp";
import neocloramFamily4kgView03 from "@/assets/products/neodeter/neocloram-family/neocloram-family-4kg-view-03.webp";
import neocloramFamily4kgView04 from "@/assets/products/neodeter/neocloram-family/neocloram-family-4kg-view-04.webp";
import neocloramFamily4kgView05 from "@/assets/products/neodeter/neocloram-family/neocloram-family-4kg-view-05.webp";
import neocloramFamily20kgView01 from "@/assets/products/neodeter/neocloram-family/neocloram-family-20kg-view-01.webp";
import neocloramFamily20kgView02 from "@/assets/products/neodeter/neocloram-family/neocloram-family-20kg-view-02.webp";
import neofrutView01 from "@/assets/products/neodeter/neofrut-family/neofrut-view-01.webp";
import neofrutView02 from "@/assets/products/neodeter/neofrut-family/neofrut-view-02.webp";
import neograsView01 from "@/assets/products/neodeter/neogras-family/neogras-view-01.webp";
import neograsView02 from "@/assets/products/neodeter/neogras-family/neogras-view-02.webp";
import neograsView03 from "@/assets/products/neodeter/neogras-family/neogras-view-03.webp";
import neograsView04 from "@/assets/products/neodeter/neogras-family/neogras-view-04.webp";
import neograsView05 from "@/assets/products/neodeter/neogras-family/neogras-view-05.webp";
import neoxolC30ApView01 from "@/assets/products/neodeter/neoxol-c-30ap/neoxol-c-30ap-view-01.webp";
import neoxolC30ApView02 from "@/assets/products/neodeter/neoxol-c-30ap/neoxol-c-30ap-view-02.webp";
import neoxolC30ApView03 from "@/assets/products/neodeter/neoxol-c-30ap/neoxol-c-30ap-view-03.webp";
import ssIndustrialView01 from "@/assets/products/neodeter/ss-industrial/ss-industrial-view-01.webp";
import ssIndustrialView02 from "@/assets/products/neodeter/ss-industrial/ss-industrial-view-02.webp";

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
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

const biolavajillaFamilyGallery: Product["galleryImages"] = [
  { src: biolavajillaView01, alt: "Biolavajilla vista 1", fit: "contain" },
  { src: biolavajillaView02, alt: "Biolavajilla vista 2", fit: "contain" },
  { src: biolavajillaView03, alt: "Biolavajilla vista 3", fit: "contain" },
  { src: biolavajillaView04, alt: "Biolavajilla vista 4", fit: "contain" },
  { src: biolavajillaView05, alt: "Biolavajilla vista 5", fit: "contain" },
  { src: biolavajillaView06, alt: "Biolavajilla vista 6", fit: "contain" },
  { src: biolavajillaView07, alt: "Biolavajilla vista 7", fit: "contain" },
  { src: biolavajillaView08, alt: "Biolavajilla vista 8", fit: "contain" },
  { src: biolavajillaView09, alt: "Biolavajilla vista 9", fit: "contain" },
  { src: biolavajillaView10, alt: "Biolavajilla vista 10", fit: "contain" },
  { src: biolavajillaView11, alt: "Biolavajilla vista 11", fit: "contain" },
  { src: biolavajillaView12, alt: "Biolavajilla vista 12", fit: "contain" },
];

const neoalkadeterGallery: Product["galleryImages"] = [
  { src: neoalkadeterView01, alt: "NeoAlkadeter presentación comercial", fit: "contain" },
];

const neoclorDxFamilyGallery: Product["galleryImages"] = [
  { src: neoclorDxView01, alt: "NeoClor DX familia vista 1", fit: "contain" },
  { src: neoclorDxView02, alt: "NeoClor DX familia vista 2", fit: "contain" },
  { src: neoclorDxView03, alt: "NeoClor DX familia vista 3", fit: "contain" },
];

const neocloramFamilyGallery: Product["galleryImages"] = [
  { src: neocloramFamily4kgView01, alt: "NeoCloram familia 4 kg vista 1", fit: "contain" },
  { src: neocloramFamily4kgView02, alt: "NeoCloram familia 4 kg vista 2", fit: "contain" },
  { src: neocloramFamily4kgView03, alt: "NeoCloram familia 4 kg vista 3", fit: "contain" },
  { src: neocloramFamily4kgView04, alt: "NeoCloram familia 4 kg vista 4", fit: "contain" },
  { src: neocloramFamily4kgView05, alt: "NeoCloram familia 4 kg vista 5", fit: "contain" },
  { src: neocloramFamily20kgView01, alt: "NeoCloram familia 20 kg vista 1", fit: "contain" },
  { src: neocloramFamily20kgView02, alt: "NeoCloram familia 20 kg vista 2", fit: "contain" },
];

const neofrutFamilyGallery: Product["galleryImages"] = [
  { src: neofrutView01, alt: "NeoFrut familia vista 1", fit: "contain" },
  { src: neofrutView02, alt: "NeoFrut familia vista 2", fit: "contain" },
];

const neograsFamilyGallery: Product["galleryImages"] = [
  { src: neograsView01, alt: "NeoGras familia vista 1", fit: "contain" },
  { src: neograsView02, alt: "NeoGras familia vista 2", fit: "contain" },
  { src: neograsView03, alt: "NeoGras familia vista 3", fit: "contain" },
  { src: neograsView04, alt: "NeoGras familia vista 4", fit: "contain" },
  { src: neograsView05, alt: "NeoGras familia vista 5", fit: "contain" },
];

const neoxolC30ApGallery: Product["galleryImages"] = [
  { src: neoxolC30ApView01, alt: "NeoXol C-30AP vista 1", fit: "contain" },
  { src: neoxolC30ApView02, alt: "NeoXol C-30AP vista 2", fit: "contain" },
  { src: neoxolC30ApView03, alt: "NeoXol C-30AP vista 3", fit: "contain" },
];

const ssIndustrialGallery: Product["galleryImages"] = [
  { src: ssIndustrialView01, alt: "SS Industrial vista 1", fit: "contain" },
  { src: ssIndustrialView02, alt: "SS Industrial vista 2", fit: "contain" },
];

export const products: Product[] = [
  {
    id: "acerac-plus-10",
    name: "Acerac Plus 10",
    slug: "acerac-plus-10",
    shortDescription:
      "Desincrustante ácido líquido para remover incrustaciones minerales y orgánicas en equipos, pisos, paredes y superficies de proceso.",
    description:
      "Acerac Plus 10 es un detergente ácido desincrustante formulado con ácidos especializados, humectantes no iónicos biodegradables y agentes emulsionantes. Está orientado a operaciones que necesitan remover carbonatos, sulfatos, piedra de leche, piedra de cerveza, óxidos y mezclas orgánicas e inorgánicas en superficies industriales.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Desincrustantes",
    industry: ["Industria Alimentaria"],
    presentations: ["4 kg", "20 kg", "210 kg"],
    benefits: [
      "Contribución mínima a la carga de efluentes en su concentración de uso",
      "No emana vapores tóxicos",
      "No deja residuos después del enjuague",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido incoloro" },
      { label: "pH (solución al 1%)", value: "1.0 ± 0.5" },
      { label: "% de acidez (como H3PO4)", value: "Mínimo 10" },
      { label: "Densidad", value: "1.2 ± 0.2 g/ml" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Baja" },
    ],
    applications: [
      "Remoción de carbonatos, sulfatos, óxidos y mezclas orgánicas e inorgánicas",
      "Limpieza de equipos, pisos y paredes con incrustaciones por dureza de agua",
      "Uso en industrias láctea, pesquera, cervecera y de bebidas carbonatadas",
    ],
    safety: [
      "No recomendable sobre aluminio, níquel, galvanizados ni poliamidas",
      "Aplicar diluido de 1% a 5% v/v según temperatura y tiempo de contacto",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/acerac-plus-10.pdf",
  },
  {
    id: "acerac-plus-30",
    name: "Acerac Plus 30",
    slug: "acerac-plus-30",
    shortDescription:
      "Desincrustante ácido de espuma media para remoción de incrustaciones en superficies, griferías, equipos y sistemas de proceso.",
    description:
      "Acerac Plus 30 es un detergente ácido desincrustante formulado para remover incrustaciones por dureza de agua, piedra de leche, piedra de cerveza, óxidos y depósitos orgánicos o inorgánicos. Está dirigido a operaciones de alimentos y bebidas que requieren limpieza ácida con enjuague completo.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Desincrustantes",
    industry: ["Industria Alimentaria"],
    presentations: ["4 kg", "20 kg", "210 kg"],
    benefits: [
      "No emana vapores tóxicos y no deja residuos después del enjuague",
      "Altamente biodegradable con insumos listados por FDA y clasificados como GRAS",
      "Contribución mínima a la carga de efluentes en su concentración de uso",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ligeramente ámbar" },
      { label: "Olor", value: "Característico irritante" },
      { label: "pH (solución al 1%)", value: "1.0 ± 0.5" },
      { label: "% de acidez (como H3PO4)", value: "10% - 60%" },
      { label: "Densidad", value: "1.2 ± 0.2 gr/cc" },
      { label: "Nivel de espuma", value: "Media" },
    ],
    applications: [
      "Remoción de incrustaciones por dureza de agua, carbonatos, sulfatos y óxidos",
      "Limpieza de equipos, pisos, paredes y griferías en industrias láctea, pesquera y cervecera",
      "Uso en bebidas carbonatadas y sistemas con presencia de CO2",
    ],
    safety: [
      "No recomendable sobre aluminio, níquel, galvanizados ni poliamidas",
      "Para griferías y metales blandos como bronce, limitar el tiempo de contacto a 1 minuto",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/acerac-plus-30.pdf",
  },
  {
    id: "acerac-plus-60",
    name: "Acerac Plus 60",
    slug: "acerac-plus-60",
    shortDescription:
      "Desincrustante ácido altamente concentrado para limpieza de incrustaciones difíciles en equipos y superficies industriales.",
    description:
      "Acerac Plus 60 es un detergente ácido desincrustante altamente concentrado, formulado con ácidos especializados, humectantes no iónicos biodegradables y agentes emulsionantes. Está orientado a procesos con incrustaciones severas generadas por dureza de agua y depósitos minerales u orgánicos.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Desincrustantes",
    industry: ["Industria Alimentaria"],
    presentations: ["4 kg", "20 kg", "210 kg"],
    benefits: [
      "Alta concentración para incrustaciones exigentes",
      "No emana vapores tóxicos",
      "No deja residuos después del enjuague",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido incoloro" },
      { label: "Olor", value: "Característico irritante" },
      { label: "pH (solución al 1%)", value: "1.0 ± 0.5" },
      { label: "% de acidez (como H3PO4)", value: "10% - 60%" },
      { label: "Densidad", value: "1.2 ± 0.2 gr/cc" },
      { label: "Nivel de espuma", value: "Media" },
    ],
    applications: [
      "Remoción de carbonatos, sulfatos, piedra de leche, piedra de cerveza y óxidos",
      "Limpieza de equipos, pisos y paredes con incrustaciones severas",
      "Uso en industrias láctea, pesquera, cervecera y de bebidas carbonatadas",
    ],
    safety: [
      "No recomendable sobre aluminio, níquel, galvanizados ni poliamidas",
      "Aplicar diluido de 1% a 5% v/v según el sistema y tiempo de contacto",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/acerac-plus-60.pdf",
  },
  {
    id: "aquadeter",
    name: "Aquadeter",
    slug: "aquadeter",
    shortDescription:
      "Detergente líquido altamente concentrado para lavado de prendas delicadas y textiles en procesos de lavandería comercial e industrial.",
    description:
      "Aquadeter es un detergente líquido altamente concentrado orientado al lavado de prendas delicadas como chompas, toallas, camisas, chaquetas y sábanas. Su formulación permite lavar y conservar la calidad de las fibras tanto en procesos domésticos como industriales, con uso en máquina o a mano.",
    image: genericProductPlaceholder,
    line: "Lavandería Comercial",
    type: "Detergentes",
    industry: ["Lavandería Comercial", "Lavandería Industrial"],
    presentations: ["5 gal", "55 gal"],
    benefits: [
      "Tensoactivo biodegradable",
      "Excelentes resultados de lavado con alta humectación y remoción de suciedad",
      "No requiere suavizante adicional en condiciones normales de uso",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido ligeramente lechoso" },
      { label: "Olor", value: "Floral" },
      { label: "Color", value: "Verde" },
      { label: "pH (concentrado)", value: "12.0 ± 0.5" },
      { label: "Densidad", value: "1.00 ± 0.05 gr/cc" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Lavado de chompas, toallas, camisas, chaquetas y sábanas",
      "Uso en lavandería comercial, industrial y doméstica",
      "Aplicación en máquina de lavar y lavado manual",
    ],
    safety: [
      "Seguir la recomendación de 10 cc/kg de ropa para suciedad media y 20 cc/kg para suciedad pesada",
      "Consultar la ficha de datos de seguridad antes del uso",
      "Mantener el envase correctamente cerrado y rotulado",
    ],
    technicalSheetUrl: "/fichas-tecnicas/aquadeter.pdf",
  },
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
        src: aquamaticLimonFront,
        alt: "Aquamatic Limón vista frontal",
        fit: "contain",
      },
      {
        src: aquamaticLimonAngleLeft,
        alt: "Aquamatic Limón vista lateral izquierda",
        fit: "contain",
      },
      {
        src: aquamaticLimonAngleRight,
        alt: "Aquamatic Limón vista lateral derecha",
        fit: "contain",
      },
      {
        src: aquamaticLimonPackshot,
        alt: "Aquamatic Limón packshot de presentación",
        fit: "contain",
      },
    ],
  },
  {
    id: "antibac-lac",
    name: "Antibac LAC",
    slug: "antibac-lac",
    shortDescription:
      "Jabón líquido sin perfume para lavado de manos en plantas de alimentos, hoteles, restaurantes y operaciones afines.",
    description:
      "Antibac LAC es un jabón líquido elaborado con aditivos, surfactantes y humectantes que ayudan a proteger la piel. Utiliza ácido láctico como principio activo y coadyuvante, aportando propiedades de limpieza, eliminación y control del crecimiento de la población microbiana sin agregar olor ni color.",
    image: genericProductPlaceholder,
    line: "Hoteles y Restaurantes",
    type: "Higiene de manos",
    industry: ["Industria Alimentaria", "Hoteles y Restaurantes"],
    presentations: ["4 L", "20 L"],
    benefits: [
      "Puede aplicarse con cualquier dispensador a granel",
      "Suaviza las manos",
      "No contiene olor ni color agregados",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido incoloro" },
      { label: "Olor", value: "Característico, sin perfume" },
      { label: "pH", value: "3.5 ± 0.5" },
      { label: "Densidad", value: "1.04 ± 0.05 gr/cc" },
      { label: "% de materia activa", value: "5 ± 0.5%" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Lavado directo de manos en áreas de proceso",
      "Uso en plantas de alimentos, hoteles, restaurantes y servicios afines",
      "Aplicación pura con dispensador o equipo adecuado",
    ],
    safety: [
      "Usar puro con dispensador o equipo adecuado",
      "Aplicar de 1 cc a 2 cc por dosificación y enjuagar con abundante agua",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/antibac-lac.pdf",
  },
  {
    id: "aromaclin",
    name: "Aromaclin",
    slug: "aromaclin",
    shortDescription:
      "Detergente desinfectante concentrado con aroma floral para limpieza de pisos, paredes, superficies y lavado de ropa fuera de áreas de alimentos.",
    description:
      "Aromaclin es un detergente desinfectante líquido de espuma media formulado con tensoactivos no iónicos y catiónicos biodegradables, agentes dispersantes y emulsionificantes. Está diseñado para limpiar, desinfectar y ayudar a controlar olores amoniacales en superficies y textiles, con fuerte aroma floral.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Desinfectantes",
    industry: ["Mantenimiento Industrial", "Hoteles y Restaurantes"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "Limpia y desinfecta en un solo paso",
      "Altamente biodegradable y sin álcalis cáusticos",
      "Ayuda a eliminar olores amoniacales",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido verde" },
      { label: "Olor", value: "Floral" },
      { label: "pH (solución al 1%)", value: "5.5 ± 0.5" },
      { label: "Densidad", value: "1.0 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Media" },
    ],
    applications: [
      "Limpieza y desinfección de paredes, pisos y superficies de cemento, metal o plástico",
      "Lavado de ropa conservando la calidad de fibras y pigmentos",
      "Uso con escobilla, paño o trapeador en operaciones no alimentarias",
    ],
    safety: [
      "No recomendable en áreas de procesamiento de alimentos por su fuerte aroma",
      "Usar puro o diluido hasta 1 parte de producto en 20 partes de agua",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/aromaclin.pdf",
  },
  {
    id: "biolavajilla-h7",
    name: "Biolavajilla H7",
    slug: "biolavajilla-h7",
    shortDescription:
      "Desengrasante neutro enzimático para lavado diario de vajilla, cristalería, hornos, parrillas y menaje de cocina.",
    description:
      "Biolavajilla H7 es un detergente desengrasante multiuso neutro y enzimático con acción eficaz sobre grasas y aceites de origen animal y vegetal. Su formulación incorpora tensoactivos biodegradables, inhibidores de corrosión, acondicionadores de agua y sobreengrasantes que ayudan a proteger la piel durante el uso frecuente.",
    image: biolavajillaView01,
    imageFit: "contain",
    line: "Hoteles y Restaurantes",
    type: "Desengrasantes",
    industry: ["Hoteles y Restaurantes", "Industria Alimentaria"],
    presentations: ["4 L", "20 L"],
    benefits: [
      "Excelente poder detergente y desengrasante por acción natural de enzimas",
      "Su pH neutro y los sobreengrasantes ayudan a proteger la piel",
      "Libre de fosfatos y con insumos reconocidos como seguros para la industria alimentaria",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido viscoso verde" },
      { label: "Olor", value: "Característico" },
      { label: "pH", value: "7.0 ± 0.5" },
      { label: "Densidad", value: "1.02 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Lavado diario de vajilla, cristalería, cubiertos y menaje de cocina",
      "Limpieza de hornos, parrillas e instrumentos de laboratorio",
      "Uso manual con paño, esponja o remojo",
    ],
    safety: [
      "Diluir 1:20 para tareas pesadas y entre 0.5% a 2% v/v para tareas medianas o ligeras",
      "El uso de temperatura de hasta 60 ºC mejora la limpieza y reduce la concentración necesaria",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/biolavajilla-h7.pdf",
    galleryImages: biolavajillaFamilyGallery,
  },
  {
    id: "biolavajilla",
    name: "Biolavajilla",
    slug: "biolavajilla",
    shortDescription:
      "Desengrasante neutro enzimático de alta espuma para limpieza diaria de vajilla, hornos, parrillas y utensilios.",
    description:
      "Biolavajilla es un detergente desengrasante multiuso neutro enzimático con excelente acción sobre grasas y aceites de origen animal y vegetal. Está formulado con tensoactivos biodegradables, inhibidores de corrosión, acondicionadores de agua y enzimas específicas para limpieza frecuente en cocina y servicios de alimentos.",
    image: biolavajillaView01,
    imageFit: "contain",
    line: "Hoteles y Restaurantes",
    type: "Desengrasantes",
    industry: ["Hoteles y Restaurantes", "Industria Alimentaria"],
    presentations: ["4 L", "20 L"],
    benefits: [
      "Excelente poder detergente y desengrasante por acción natural de enzimas",
      "Protege la piel por su pH y por su contenido de cocamidas",
      "Libre de fosfatos y apto para limpieza de recipientes y utensilios en industria alimentaria",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ámbar claro" },
      { label: "Olor", value: "Característico" },
      { label: "pH (solución al 0.5%)", value: "7.0 ± 1" },
      { label: "Densidad", value: "1.02 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Lavado diario de vajilla, hornos, parrillas, cubiertos y cristalería",
      "Limpieza de menaje de cocina y comedor",
      "Aplicación manual con paño, esponja o pulverizado",
    ],
    safety: [
      "Diluir 1:50 para tareas pesadas y entre 0.5% a 2% v/v para tareas medianas o ligeras",
      "El uso de temperatura de hasta 60 ºC mejora la limpieza y permite reducir la concentración",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/biolavajilla.pdf",
    galleryImages: biolavajillaFamilyGallery,
  },
  {
    id: "deter-400e",
    name: "Deter 400E",
    slug: "deter-400e",
    shortDescription:
      "Detergente alcalino en polvo de baja espuma para limpieza CIP y lavado frecuente de superficies en plantas de alimentos.",
    description:
      "Deter 400E es un detergente alcalino en polvo de muy baja espuma, formulado con tensoactivos aniónicos altamente biodegradables y agentes dispersantes y emulsionificantes. Está diseñado para limpieza regular de tanques, circuitos CIP, equipos y superficies en contacto con alimentos.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Detergentes",
    industry: ["Industria Alimentaria"],
    presentations: ["20 kg"],
    benefits: [
      "La baja espuma facilita el enjuague y el ahorro de agua",
      "Producto concentrado de grano fino para menores diluciones",
      "Insumos aprobados para superficies en contacto con alimentos",
    ],
    specs: [
      { label: "Apariencia", value: "Polvo blanco granulado" },
      { label: "Olor", value: "Sin olor a perfume" },
      { label: "pH (solución al 1%)", value: "11.0 - 12.0" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Biodegradabilidad", value: "98% a 99%" },
      { label: "Nivel de espuma", value: "Baja" },
    ],
    applications: [
      "Limpieza regular y frecuente de tanques y circuitos tipo CIP",
      "Lavado de paredes, pisos, equipos y utensilios en plantas de alimentos",
      "Mantenimiento de superficies en contacto con alimentos",
    ],
    safety: [
      "Diluir completamente antes de usar por su granulación fina",
      "Usar concentraciones de 1% a 3% en agua según temperatura y tiempo de contacto",
      "Enjuagar bien después de recircular el producto y consultar la ficha de seguridad",
    ],
    technicalSheetUrl: "/fichas-tecnicas/deter-400e.pdf",
  },
  {
    id: "formula-2929",
    name: "Fórmula 2929",
    slug: "formula-2929",
    shortDescription:
      "Detergente en polvo concentrado para lavado de textiles blancos y de color en lavandería comercial e industrial.",
    description:
      "Fórmula 2929 es un detergente en polvo concentrado con elevado poder detergente y desengrasante, orientado al lavado en lavadoras domésticas, semi industriales e industriales. Su formulación de espuma controlada ayuda a obtener limpieza efectiva en fibras textiles blancas y de color, tanto en agua fría como caliente.",
    image: genericProductPlaceholder,
    line: "Lavandería Industrial",
    type: "Detergentes",
    industry: ["Lavandería Industrial", "Lavandería Comercial"],
    presentations: ["20 kg"],
    benefits: [
      "Biodegradable y con espuma controlada",
      "Alto contenido de agentes de limpieza, suspensión de suciedad y abrillantadores",
      "Deja la ropa más blanca, brillante y con buen poder despercudidor",
    ],
    specs: [
      { label: "Apariencia", value: "Polvo granulado blanco" },
      { label: "Olor", value: "Sin olor a perfume" },
      { label: "pH (solución al 1%)", value: "10.0 ± 0.5" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Lavado de textiles blancos y de color a toda temperatura",
      "Uso en lavadoras domésticas, semi industriales e industriales",
      "Procesos de lavandería con suciedad media o pesada",
    ],
    safety: [
      "Seguir la dosificación recomendada según carga de ropa y nivel de suciedad",
      "El técnico de lavandería debe ajustar el proceso según operación y experiencia",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/formula-2929.pdf",
  },
  {
    id: "hipoclorito-de-sodio-5",
    name: "Hipoclorito de Sodio 5%",
    slug: "hipoclorito-de-sodio-5",
    shortDescription:
      "Desinfectante blanqueador clorinado para superficies, alimentos y aplicaciones de lavandería o industria textil.",
    description:
      "Hipoclorito de Sodio 5% es un desinfectante blanqueador diluido y estable, orientado a operaciones que requieren acción germicida y blanqueadora. Puede utilizarse en superficies en contacto con alimentos, equipos, pisos, paredes y ropa hospitalaria, además de aplicaciones de blanqueo en lavandería e industria textil.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria", "Lavandería Industrial", "Hospitales"],
    presentations: ["1 gal", "5 gal", "55 gal"],
    benefits: [
      "Acción germicida de amplio espectro",
      "Efecto residual prolongado y fácilmente medible",
      "Más estable que productos con mayor concentración de hipoclorito de sodio",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido amarillo claro" },
      { label: "Olor", value: "A cloro" },
      { label: "pH (solución al 1%)", value: "9.0 a 10.0" },
      { label: "Densidad", value: "1.07 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
    ],
    applications: [
      "Desinfección de superficies, equipos, pisos y paredes en contacto con alimentos",
      "Desinfección de frutas, verduras y carnes según dosificación recomendada",
      "Blanqueo de ropa hospitalaria y uso en industria textil o lavandería",
    ],
    safety: [
      "No se recomienda desinfección por remojo prolongado en acero inoxidable ni metales blandos",
      "Ajustar la concentración según el pH del agua y el nivel de limpieza previo",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/hipoclorito-de-sodio-5.pdf",
  },
  {
    id: "lavajilla",
    name: "Lavajilla",
    slug: "lavajilla",
    shortDescription:
      "Detergente líquido para lavado de vajilla, cristalería y cubiertos con acción desengrasante de uso manual.",
    description:
      "Lavajilla es un detergente desengrasante multiuso neutro con acción eficaz sobre grasas y aceites de origen animal y vegetal. Está formulado con tensoactivos aniónicos y no iónicos biodegradables de espuma media-alta para limpieza diaria de utensilios y menaje de cocina.",
    image: genericProductPlaceholder,
    line: "Hoteles y Restaurantes",
    type: "Detergentes",
    industry: ["Hoteles y Restaurantes", "Industria Alimentaria"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "Excelente poder detergente y desengrasante",
      "Insumos reconocidos como seguros para limpieza de recipientes y utensilios en industria alimentaria",
      "Puede reducir concentración cuando se usa con temperatura de hasta 60 ºC",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ámbar" },
      { label: "Olor", value: "Característico limón" },
      { label: "pH", value: "8.0 ± 0.5" },
      { label: "Densidad", value: "1.06 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Limpieza diaria de vajilla, cristalería y cubiertos",
      "Lavado manual con paño, esponja o remojo",
      "Uso en cocinas, comedores y operaciones de alimentos",
    ],
    safety: [
      "No aplicar sobre objetos muy calientes",
      "No mezclar con sustancias cloradas",
      "Consultar la hoja de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/lavajilla.pdf",
  },
  {
    id: "dishmatic",
    name: "Dishmatic",
    slug: "dishmatic",
    shortDescription:
      "Detergente alcalino de baja espuma para máquinas lavaplatos industriales o caseras, con acción detergente y desengrasante.",
    description:
      "Dishmatic es un detergente desengrasante alcalino líquido formulado con tensoactivos anfóteros biodegradables e inhibidores de corrosión. Está orientado al lavado de vajilla, cristalería, cubiertos y menaje de cocina en máquinas lavaplatos, con desempeño de baja espuma y trabajo a temperatura elevada.",
    image: genericProductPlaceholder,
    line: "Hoteles y Restaurantes",
    type: "Detergentes",
    industry: ["Hoteles y Restaurantes", "Industria Alimentaria"],
    presentations: ["4 L", "20 L", "220 L"],
    benefits: [
      "Excelente poder detergente y desengrasante",
      "Elimina grasas y manchas de comida resecas",
      "Libre de fosfatos y apto para limpieza de recipientes y utensilios en industria alimentaria",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido" },
      { label: "Color", value: "Ligeramente ámbar" },
      { label: "Olor", value: "Característico" },
      { label: "pH (concentrado)", value: "12.0 ± 0.5 en agua blanda" },
      { label: "Densidad", value: "1.18 ± 0.05 gr/cm3" },
      { label: "Espuma", value: "Baja" },
    ],
    applications: [
      "Lavado de vajilla, cristalería, cubiertos y menaje de cocina en máquinas lavaplatos",
      "Uso en máquinas industriales o caseras",
      "Procesos de lavado con agua corriente y temperatura de hasta 85 °C",
    ],
    safety: [
      "Usar diluciones entre 0.5% y 2% v/v según suciedad y operación",
      "Consultar la hoja de seguridad antes del uso",
      "Mantener el envase debidamente cerrado y rotulado",
    ],
    technicalSheetUrl: "/fichas-tecnicas/dishmatic.pdf",
  },
  {
    id: "mezsol-dl-nc",
    name: "Mezsol DL-NC",
    slug: "mezsol-dl-nc",
    shortDescription:
      "Solvente desengrasante ecológico y dieléctrico para limpieza de equipos eléctricos, mecánicos y suciedades insolubles en agua.",
    description:
      "Mezsol DL-NC es un solvente dieléctrico desengrasante formulado con solventes no clorados, alta volatilidad, elevado punto de inflamación y muy bajo contenido aromático. Está diseñado para eliminar grasas, aceites, ceras, polvo, alquitrán y otras suciedades insolubles en agua sin dañar plásticos, polímeros o lacas.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Solventes",
    industry: ["Mantenimiento Industrial"],
    presentations: ["5 gal", "55 gal"],
    benefits: [
      "No contiene sustancias que agotan la capa de ozono ni químicos CFC",
      "Muy baja toxicidad y menor agresión a mucosas y piel que otros solventes",
      "Desengrasa rápido, no deja película aceitosa y desplaza humedad",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido incoloro" },
      { label: "Olor", value: "Ligero a solvente" },
      { label: "Rigidez dieléctrica", value: "Mayor a 24 Kv/2,5 mm" },
      { label: "Punto de inflamación TAG", value: "> 35 ºC" },
      { label: "Gravedad específica", value: "0,8 ± 0,05 g/cc" },
      { label: "Solubilidad", value: "No miscible en agua" },
    ],
    applications: [
      "Limpieza de contactores, motores eléctricos y mecánicos, reguladores y tableros",
      "Desengrase de generadores, montacargas eléctricos y equipos de aire acondicionado",
      "Mantenimiento de piezas y equipos eléctricos fuera de operación que no pueden limpiarse con agua",
    ],
    safety: [
      "Usar guantes de nitrilo, lentes de seguridad y protección respiratoria adecuada",
      "No reciclar envases de solvente para uso doméstico",
      "Consultar la hoja de seguridad y teléfono de emergencia antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/mezsol-dl-nc.pdf",
  },
  {
    id: "neoacid-3339",
    name: "NeoAcid 3339",
    slug: "neoacid-3339",
    shortDescription:
      "Detergente líquido ácido para remoción de incrustaciones calcáreas e inorgánicas en superficies y equipos de proceso.",
    description:
      "NeoAcid 3339 es un detergente líquido ácido de espuma media-alta formulado principalmente con ácido fosfórico, tensoactivos aniónicos altamente biodegradables y agentes emulsionantes. Está orientado a remover incrustaciones producidas por dureza de agua y depósitos inorgánicos en superficies en contacto con alimentos.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Desincrustantes",
    industry: ["Industria Alimentaria"],
    presentations: ["4 kg", "20 kg", "210 kg"],
    benefits: [
      "Contribución mínima a la carga de efluentes por su concentración de uso",
      "No emana vapores tóxicos",
      "Fácil y rápido enjuague",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido ligeramente lechoso, ligeramente marrón" },
      { label: "Olor", value: "Característico" },
      { label: "pH (solución al 1%)", value: "2.0 ± 0.5" },
      { label: "% de acidez (como H3PO4)", value: "30% - 50%" },
      { label: "Densidad", value: "1.28 ± 0.05 gr/cc" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Remoción de carbonatos, sulfatos, piedra de leche, piedra de cerveza y óxidos",
      "Limpieza de equipos, pisos y paredes en industrias láctea, pesquera, cervecera y de agua de mesa",
      "Aplicación manual, por pulverización, espuma o remojo sobre superficies externas",
    ],
    safety: [
      "No recomendable sobre aluminio, níquel, galvanizados ni poliamidas",
      "Usar de 1% a 5% v/v según suciedad, temperatura y tiempo de contacto",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoacid-3339.pdf",
  },
  {
    id: "neoacid-p-84",
    name: "NeoAcid P-84",
    slug: "neoacid-p-84",
    shortDescription:
      "Detergente ácido oxigenado sin espuma para limpieza y desincrustación de tanques, tuberías y circuitos CIP en industrias de alimentos y bebidas.",
    description:
      "NeoAcid P-84 es un detergente líquido ácido de muy baja espuma con alto poder de limpieza y desincrustación. Su formulación combina tensoactivos aniónicos biodegradables, agentes emulsionantes, secuestrantes y ácidos especializados que ayudan a remover residuos orgánicos y minerales, además de actuar como coadyuvante en la desinfección.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Desincrustantes",
    industry: ["Industria Alimentaria"],
    presentations: ["4 kg", "20 kg", "210 kg"],
    benefits: [
      "Los componentes principales se biodegradan en oxígeno y agua",
      "No genera espuma aun en altas turbulencias dentro de circuitos cerrados",
      "Seguro sobre acero inoxidable, aluminio, plásticos y vitón",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ligeramente amarillo" },
      { label: "pH (solución al 1%)", value: "2.0 ± 0.5" },
      { label: "Densidad", value: "1.18 ± 0.05 g/ml" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Sin espuma" },
    ],
    applications: [
      "Limpieza ácida de carbonatos, sulfatos, piedra de leche, piedra de cerveza, óxidos, sarro y caliche",
      "Recirculación en tanques, tuberías y circuitos CIP de acero inoxidable",
      "Uso en industrias láctea, cervecera, pesquera y de alimentos en general",
    ],
    safety: [
      "Usar concentraciones de 0.5% a 5% v/v según temperatura, tiempo de contacto y modo de aplicación",
      "Consultar la ficha de datos de seguridad antes del uso",
      "Verificar trazas por comparación de pH en el agua de enjuague final",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoacid-p-84.pdf",
  },
  {
    id: "neoacid-se",
    name: "NeoAcid SE",
    slug: "neoacid-se",
    shortDescription:
      "Detergente ácido sin espuma para desincrustación de tuberías y circuitos CIP en industrias láctea, cervecera y de bebidas carbonatadas.",
    description:
      "NeoAcid SE es un detergente líquido ácido de muy baja espuma y alto poder desincrustante. Está formulado con una mezcla de ácidos especializados, tensoactivos aniónicos biodegradables, agentes emulsionantes y secuestrantes para limpieza ácida de circuitos internos, especialmente en sistemas con presencia de CO2.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Desincrustantes",
    industry: ["Industria Alimentaria"],
    presentations: ["20 kg", "210 kg"],
    benefits: [
      "No genera espuma aun en altas turbulencias dentro de circuitos cerrados",
      "Seguro sobre acero inoxidable, aluminio, plásticos y vitón",
      "Posee actividad pasivante sobre acero inoxidable y aluminio",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido incoloro traslúcido" },
      { label: "Olor", value: "Característico" },
      { label: "pH (solución al 1%)", value: "2.0 ± 0.5" },
      { label: "% de acidez (como H3PO4)", value: "30% - 50%" },
      { label: "Densidad", value: "1.28 ± 0.05 gr/cc" },
      { label: "Nivel de espuma", value: "Baja" },
    ],
    applications: [
      "Limpieza ácida de carbonatos, sulfatos, piedra de leche, piedra de cerveza y óxidos",
      "Recirculación en tuberías y circuitos internos CIP",
      "Uso en industria láctea, cerveza y bebidas carbonatadas con presencia de CO2",
    ],
    safety: [
      "Aplicar exclusivamente en tuberías y circuitos internos a 0.5% o 1% v/v",
      "Recircular por un máximo de 15 minutos a temperatura de hasta 80 ºC",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoacid-se.pdf",
  },
  {
    id: "neoalkadeter",
    name: "NeoAlkadeter",
    slug: "neoalkadeter",
    shortDescription:
      "Auxiliar de lavandería y reforzador alcalino para prelavado de ropa muy sucia en lavandería industrial.",
    description:
      "NeoAlkadeter es un auxiliar de lavandería con importante poder saponificante sobre grasas humanas, animales y vegetales. Actúa como ablandador de suciedad y reforzador para detergentes de baja alcalinidad, ayudando a mejorar el prelavado de ropa con alta carga de suciedad.",
    image: neoalkadeterView01,
    imageFit: "contain",
    line: "Lavandería Industrial",
    type: "Auxiliares",
    industry: ["Lavandería Industrial"],
    presentations: ["4 kg", "20 kg", "1 gal", "5 gal", "200 kg", "200 L"],
    benefits: [
      "Tensoactivo biodegradable",
      "No es inflamable a ninguna dilución",
      "Ayuda a reducir el tiempo normal de lavado",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido incoloro" },
      { label: "pH (solución al 1%)", value: "12.0 ± 0.5" },
      { label: "% de alcalinidad", value: "14 ± 1" },
      { label: "Densidad", value: "1.18 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Baja" },
    ],
    applications: [
      "Reforzador en lavandería industrial para prelavado de ropa muy sucia",
      "Ablandamiento de suciedad antes del ciclo principal de lavado",
      "Adición al agua antes de ingresar la ropa al proceso",
    ],
    safety: [
      "Utilizar entre 5 y 10 gramos por litro de agua según el grado de suciedad",
      "Consultar la ficha de datos de seguridad antes del uso",
      "Mantener el envase correctamente rotulado y herméticamente cerrado",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoalkadeter.pdf",
    galleryImages: neoalkadeterGallery,
  },
  {
    id: "neobleach-5",
    name: "Neobleach 5",
    slug: "neobleach-5",
    shortDescription:
      "Desinfectante blanqueador clorado a base de hipoclorito de sodio para superficies, agua y procesos de lavandería.",
    description:
      "Neobleach 5 es un desinfectante blanqueador diluido y estable a base de hipoclorito de sodio. Está diseñado para desinfección de superficies, tratamiento de agua y blanqueo de ropa, con efecto residual prolongado y buena estabilidad en el tiempo.",
    image: genericProductPlaceholder,
    line: "Lavandería Industrial",
    type: "Blanqueadores",
    industry: ["Lavandería Industrial", "Industria Alimentaria", "Hospitales"],
    presentations: ["1 gal", "5 gal", "55 gal"],
    benefits: [
      "Acción germicida de amplio espectro",
      "Efecto residual prolongado y fácilmente medible",
      "Producto económico y estable en el tiempo",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ligeramente amarillo" },
      { label: "Olor", value: "A cloro" },
      { label: "pH (solución al 1%)", value: "9.0 a 10.0" },
      { label: "% hipoclorito de sodio", value: "5% a 6%" },
      { label: "Densidad", value: "1.07 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
    ],
    applications: [
      "Desinfección de superficies, equipos, pisos y paredes",
      "Potabilización y desinfección de agua de proceso o bebida",
      "Blanqueo de ropa doméstica e industrial",
    ],
    safety: [
      "No se recomienda la desinfección por remojo prolongado en acero inoxidable ni metales blandos",
      "Consultar la ficha de seguridad antes del uso",
      "Ajustar la dosificación según aplicación, pH del agua y temperatura",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neobleach-5.pdf",
  },
  {
    id: "neocar-plus",
    name: "NeoCar Plus",
    slug: "neocar-plus",
    shortDescription:
      "Champú neutro para lavado de carrocerías con poder limpiador, desengrasante y abrillantador.",
    description:
      "NeoCar Plus es un champú líquido neutro formulado con tensoactivos aniónicos, abrillantadores, inhibidores de corrosión y acondicionadores de agua. Está diseñado para remover suciedad, grasas orgánicas y residuos derivados del petróleo, protegiendo pintura y superficies metálicas durante el lavado.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Shampoo automotriz",
    industry: ["Mantenimiento Industrial"],
    presentations: ["5 gal", "55 gal"],
    benefits: [
      "Altamente concentrado",
      "Espuma duradera, no corrosivo y no inflamable",
      "No contiene solventes clorados ni produce daño al medio ambiente",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido azul" },
      { label: "Olor", value: "Característico" },
      { label: "Densidad", value: "1.06 ± 0.05 gr/cc" },
      { label: "pH (solución al 0.5%)", value: "7.5 ± 0.5" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Lavado de carrocerías y superficies metálicas pintadas",
      "Eliminación de suciedad, grasas y residuos de petróleo o derivados",
      "Aplicación por rociado, pulverizado o manual con trapo o esponja",
    ],
    safety: [
      "Usar diluciones de 2% a 5% v/v en agua fría o hasta 80 ºC",
      "Evitar contacto directo con piel y ojos usando implementos de seguridad adecuados",
      "Consultar la hoja de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neocar-plus.pdf",
  },
  {
    id: "neofoam-clo2-remover",
    name: "NeoFoam ClO2 Remover",
    slug: "neofoam-clo2-remover",
    shortDescription:
      "Detergente alcalino oxiclorado de alta espuma para limpieza enérgica de superficies verticales, equipos y áreas de proceso en alimentos y bebidas.",
    description:
      "NeoFoam ClO2 Remover es un detergente altamente concentrado formulado con tensoactivos de alta espuma, alcalinizantes y soluciones de clorito de sodio y dióxido de cloro. Su espuma consistente se adhiere a superficies verticales, aportando limpieza, desengrase y ayuda al control de la población microbiana en operaciones de alimentos y bebidas.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria"],
    presentations: ["4 kg", "20 kg"],
    benefits: [
      "Espuma uniforme y de larga duración que mejora el tiempo de contacto",
      "Enjuague rápido y sin residuos",
      "Las especies oxicloradas no forman trihalometanos ni subproductos tóxicos conocidos",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido" },
      { label: "Olor", value: "Característico" },
      { label: "pH (solución al 1%)", value: "12.5 ± 0.5" },
      { label: "% alcalinidad total", value: "11 ± 1" },
      { label: "Oxicloros (como Cl2)", value: "Mínimo 1500 ppm" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Limpieza de superficies verticales, equipos, tanques, llenadoras, mesas de corte y jabas",
      "Uso con equipo dosificador de espuma o manualmente en plantas de jugos, bebidas, viñas, cerveceras, lecherías, cárnicas y pesqueras",
      "Lavado por remojo de piezas con tiempos de contacto prolongados",
    ],
    safety: [
      "Usar concentraciones de 2% a 5% v/v según proceso y suciedad",
      "Luego del prelavado, dejar actuar al menos 5 minutos y enjuagar con agua a presión",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neofoam-clo2-remover.pdf",
  },
  {
    id: "neofrut-kv",
    name: "NeoFrut KV",
    slug: "neofrut-kv",
    shortDescription:
      "Detergente líquido potásico para lavado de plantaciones, frutos y hortalizas como etapa previa a la desinfección.",
    description:
      "NeoFrut KV es un detergente líquido sin contenido de sodio, formulado con tensoactivos aniónicos lineales potásicos biodegradables. Está diseñado para limpieza de plantaciones, tubérculos, hortalizas y frutos, ayudando a preparar la materia prima para una desinfección más efectiva.",
    image: neofrutView01,
    imageFit: "contain",
    line: "Agrícola",
    type: "Detergentes",
    industry: ["Agrícola", "Industria Alimentaria"],
    presentations: ["4 L", "20 L", "210 L"],
    benefits: [
      "Ayuda a eliminar mecánicamente insectos como mosca blanca y queresas",
      "Libre de fosfatos",
      "Las aguas residuales pueden descomponerse rápidamente por microorganismos de la naturaleza",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido translúcido verde" },
      { label: "Olor", value: "Sin olor" },
      { label: "pH (solución al 1%)", value: "5.5 ± 0.5" },
      { label: "Ingrediente activo", value: "Alquilaril sulfonato de potasio" },
      { label: "Densidad", value: "1.00 ± 0.05 gr/cc" },
      { label: "Espuma", value: "Alta" },
    ],
    applications: [
      "Lavado de naranjos, maracuyá, mandarinas, uvas, tomates, paltos, lechugas, perejil y espárragos",
      "Preparación de materia prima en campo, planta o uso doméstico previo a desinfección",
      "Aplicación por remojo, equipos de lavado con presión o procesos de prelavado en planta",
    ],
    safety: [
      "Mantener el producto en lugar fresco y seco",
      "No mezclar con sustancias fuertemente ácidas",
      "Consultar la hoja de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neofrut-kv.pdf",
    galleryImages: neofrutFamilyGallery,
  },
  {
    id: "neofrut-kb-l2",
    name: "NeoFrut KB-L2",
    slug: "neofrut-kb-l2",
    shortDescription:
      "Detergente líquido potásico de alta espuma para lavado de plantaciones y preparación de fruta u hortaliza antes de desinfección.",
    description:
      "NeoFrut KB-L2 es un detergente líquido formulado con tensoactivos aniónicos lineales potásicos biodegradables. Está diseñado para el lavado de plantaciones y materia prima agrícola, ayudando a remover suciedad superficial e insectos y a preparar la superficie para una desinfección más efectiva o para la acción de controladores biológicos.",
    image: neofrutView01,
    imageFit: "contain",
    line: "Agrícola",
    type: "Detergentes",
    industry: ["Agrícola", "Industria Alimentaria"],
    presentations: ["4 L", "20 L", "210 L"],
    benefits: [
      "Ayuda a eliminar mecánicamente insectos como thrips, mosca blanca y queresas",
      "Libre de fosfatos",
      "Compatible con controladores biológicos y hongos entomopatógenos según los estudios citados en la ficha",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ámbar claro" },
      { label: "Olor", value: "Sin olor característico" },
      { label: "pH (concentrado)", value: "5.5 ± 0.5" },
      { label: "Ingrediente activo", value: "Alquilaril sulfonato de potasio" },
      { label: "Densidad", value: "1.00 ± 0.05 gr/cc" },
      { label: "Espuma", value: "Alta" },
    ],
    applications: [
      "Lavado de plantaciones de cítricos, tomates, paltos, uvas, mangos y hortalizas",
      "Preparación de materia prima para mejorar la etapa de desinfección en planta de proceso",
      "Aplicación con equipos de presión en campo o por prelavado y enjuague en planta",
    ],
    safety: [
      "Usar de 60 cc a 200 cc por cilindro de 200 L para lavado de plantaciones",
      "No mezclar con sustancias fuertemente alcalinas",
      "Mantener el envase cerrado en un lugar fresco y seco",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neofrut-kb-l2.pdf",
    galleryImages: neofrutFamilyGallery,
  },
  {
    id: "neogel-tc",
    name: "NeoGel TC",
    slug: "neogel-tc",
    shortDescription:
      "Gel desinfectante instantáneo de manos a base de alcohol etílico para plantas de alimentos, restaurantes, hospitales y laboratorios.",
    description:
      "NeoGel TC es un gel desinfectante de manos formulado a base de alcohol etílico. Está pensado para higiene rápida de manos en entornos donde se requiere control sanitario constante, incluyendo plantas de alimentos, restaurantes, hospitales, laboratorios y puntos sin acceso inmediato a agua.",
    image: genericProductPlaceholder,
    line: "Hoteles y Restaurantes",
    type: "Higiene de manos",
    industry: ["Hoteles y Restaurantes", "Industria Alimentaria", "Hospitales"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "No necesita enjuague",
      "Ideal en lugares donde no se encuentra agua",
      "Puede aplicarse con dispensador de jabón líquido y ofrece alto rendimiento por litro",
    ],
    specs: [
      { label: "Apariencia", value: "Gel traslúcido" },
      { label: "Olor", value: "A alcohol" },
      { label: "pH", value: "6.0 ± 0.5" },
      { label: "Materia activa", value: "Alcohol etílico" },
      { label: "% de materia activa", value: "60% a 70%" },
      { label: "Nivel de espuma", value: "Sin espuma" },
    ],
    applications: [
      "Desinfección de manos en plantas procesadoras de alimentos, lácteos, bebidas y cerveza",
      "Uso en restaurantes, cocinas, hospitales, laboratorios y hogar",
      "Aplicación directa con dispensador cerrado que evite evaporación",
    ],
    safety: [
      "Producto de uso directo, sin diluir y sin enjuague",
      "Aplicar dos descargas por uso según el dispensador",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neogel-tc.pdf",
  },
  {
    id: "neoglass",
    name: "NeoGlass",
    slug: "neoglass",
    shortDescription:
      "Limpiavidrios líquido para vidrios, espejos, cerámica y porcelana sanitaria, con secado rápido y sin manchas.",
    description:
      "NeoGlass es un limpiavidrios líquido con acción limpiadora, desengrasante y solvente. Está formulado con tensoactivos biodegradables, agentes alcohólicos, emulsificantes y acondicionadores de agua para remover suciedad sobre vidrio, espejos, cerámica y porcelana sin dañarlos ni dejar velos.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Limpiavidrios",
    industry: ["Mantenimiento Industrial"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "Evaporación rápida sin dejar manchas",
      "Brinda transparencia y brillo a las superficies",
      "No irrita las mucosas y no produce riesgo al medio ambiente",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido sin sedimentos" },
      { label: "Olor", value: "Ligeramente frutal" },
      { label: "pH (concentrado)", value: "11.5 ± 0.5" },
      { label: "Densidad", value: "1.0 ± 0.05" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Espuma", value: "Media" },
    ],
    applications: [
      "Remoción de suciedad sobre vidrio, cerámica, espejos y porcelana sanitaria",
      "Uso en todo tipo de ambientes",
      "Aplicación con pulverizador y secado con paño limpio",
    ],
    safety: [
      "Usar puro o diluido 1:1 según la suciedad a eliminar",
      "Consultar la ficha de seguridad antes del uso",
      "Mantener el envase correctamente cerrado y rotulado",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoglass.pdf",
  },
  {
    id: "neogras-bm-20",
    name: "NeoGras BM-20",
    slug: "neogras-bm-20",
    shortDescription:
      "Detergente alcalino de muy baja espuma para limpieza CIP de tanques y circuitos con eliminación rápida de aceites y grasas.",
    description:
      "NeoGras BM-20 es un producto alcalino cáustico de muy baja espuma, diseñado para limpieza básica de tanques y circuitos tipo CIP. Su formulación con acomplejantes, tensoactivos especializados y dispersantes lo hace especialmente útil para desengrase rápido y enjuague eficiente en sistemas cerrados.",
    image: neograsView01,
    imageFit: "contain",
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial", "Industria Alimentaria"],
    presentations: ["25 kg", "200 kg"],
    benefits: [
      "Enjuagabilidad muy rápida sin dejar residuos",
      "Actúa en aguas de alta dureza hasta 600 ppm como carbonato de calcio",
      "No contribuye significativamente a la carga de efluentes por su baja concentración de uso",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido incoloro" },
      { label: "pH (solución al 1%)", value: "12.0 ± 0.5" },
      { label: "% de alcalinidad", value: "19% ± 1" },
      { label: "Densidad", value: "1.2 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Baja" },
    ],
    applications: [
      "Limpieza y eliminación de aceites y grasas orgánicas en tanques y circuitos tipo CIP",
      "Uso en plantas de bebidas carbonatadas, cerveceras, lecherías, jugos, viñas y pesqueras",
      "Procesos de limpieza alcalina interna de tanques y circuitos de acero inoxidable",
    ],
    safety: [
      "En metales blandos o aleaciones vigilar concentración y tiempo de contacto",
      "Usar concentraciones de 0.5% a 2% v/v en agua y hasta 80 ºC",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neogras-bm-20.pdf",
    galleryImages: neograsFamilyGallery,
  },
  {
    id: "neoclean",
    name: "NeoClean",
    slug: "neoclean",
    shortDescription:
      "Limpiador líquido sin aroma para higiene de manos en laboratorios, hospitales, plantas de alimentos y operaciones de alto recambio.",
    description:
      "NeoClean es una fórmula limpiadora elaborada con aditivos, surfactantes y humectantes que ayudan a proteger la piel durante el uso diario. Está pensada para limpieza frecuente de manos en entornos donde se prefiere un producto sin olor añadido.",
    image: neoxolC30ApView01,
    imageFit: "contain",
    line: "Hoteles y Restaurantes",
    type: "Higiene de manos",
    industry: ["Hoteles y Restaurantes", "Industria Alimentaria", "Hospitales"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "Puede aplicarse con cualquier dispensador a granel",
      "Puede usarse directamente",
      "Por su composición ayuda a proteger la piel en el uso diario",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido celeste" },
      { label: "Olor", value: "Sin olor" },
      { label: "pH (concentrado)", value: "7.0 ± 0.5" },
      { label: "Densidad", value: "1.0 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Limpieza de manos en laboratorios, hospitales y plantas procesadoras de alimentos",
      "Uso diario en operaciones donde se prefiere un producto sin aroma",
      "Aplicación pura con dispensador o equipo adecuado",
    ],
    safety: [
      "Usar puro con dispensador o equipo adecuado",
      "Aplicar de 1 cc a 2 cc por uso y enjuagar con abundante agua",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoclean.pdf",
  },
  {
    id: "neoclean-lavanda",
    name: "NeoClean Lavanda",
    slug: "neoclean-lavanda",
    shortDescription:
      "Limpiador líquido con aroma a lavanda para higiene de manos y limpieza frecuente en entornos institucionales y de servicio.",
    description:
      "NeoClean Lavanda es una fórmula limpiadora elaborada con aditivos, surfactantes y humectantes que ayudan a proteger la piel. Aporta propiedades de limpieza y suavidad, dejando las manos con un aroma ligero a lavanda en el uso diario.",
    image: genericProductPlaceholder,
    line: "Hoteles y Restaurantes",
    type: "Higiene de manos",
    industry: ["Hoteles y Restaurantes", "Industria Alimentaria", "Hospitales"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "Puede aplicarse con cualquier dispensador a granel",
      "Puede usarse directamente",
      "Por su composición ayuda a proteger la piel en el uso diario",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido celeste" },
      { label: "Olor", value: "A lavanda" },
      { label: "pH (concentrado)", value: "7.0 ± 0.5" },
      { label: "Densidad", value: "1.0 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Limpieza de manos en laboratorios, hospitales y plantas procesadoras de alimentos",
      "Uso diario en entornos donde se busca un aroma suave a lavanda",
      "Aplicación pura con dispensador o equipo adecuado",
    ],
    safety: [
      "Usar puro con dispensador o equipo adecuado",
      "Aplicar de 1 cc a 2 cc por uso y enjuagar con abundante agua",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoclean-lavanda.pdf",
  },
  {
    id: "neoclean-68-ct",
    name: "NeoClean 68-CT",
    slug: "neoclean-68-ct",
    shortDescription:
      "Desengrasante líquido cítrico de uso directo para limpieza frecuente de grasas ligeras en entornos de taller y operación.",
    description:
      "NeoClean 68-CT es un desengrasante con suave aroma cítrico, elaborado con tensoactivos especializados, dispersantes y humectantes de uso cosmético. Su formulación aporta propiedades detergentes, desengrasantes y disolventes, con uso directo sin diluir sobre suciedad grasa orgánica e inorgánica.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial", "Hoteles y Restaurantes"],
    presentations: ["1 gal", "5 gal", "55 gal"],
    benefits: [
      "Uso directo sin diluir para tareas frecuentes",
      "Suave aroma cítrico",
      "Puede aplicarse manualmente o con dispensador de jabón",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido verde" },
      { label: "Olor", value: "Ligero aroma cítrico" },
      { label: "pH (concentrado)", value: "5.5 ± 0.5" },
      { label: "Densidad", value: "1.00 ± 0.05 gr/cm3" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Espuma", value: "Alta" },
    ],
    applications: [
      "Limpieza frecuente de superficies con grasas orgánicas e inorgánicas",
      "Uso sobre aceites, grasas vegetales, animales, minerales y tintes",
      "Aplicación en talleres y entornos de mantenimiento ligero",
    ],
    safety: [
      "Usar directamente, sin diluir",
      "Mantener el producto en un lugar fresco y seco con el envase cerrado",
      "Consultar la hoja de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoclean-68-ct.pdf",
  },
  {
    id: "neocloram",
    name: "NeoCloram",
    slug: "neocloram",
    shortDescription:
      "Detergente alcalino para limpieza y desengrase externo de superficies, equipos y áreas de proceso en plantas de alimentos.",
    description:
      "NeoCloram es un detergente alcalino formulado con tensoactivos aniónicos y no iónicos, agentes acomplejantes, humectantes, emulsificantes, dispersantes y saponificantes biodegradables. Está diseñado para limpieza y desengrase de suciedades orgánicas y proteicas sobre superficies en contacto con alimentos.",
    image: neocloramFamily4kgView01,
    imageFit: "contain",
    line: "Industria Alimentaria",
    type: "Detergentes",
    industry: ["Industria Alimentaria"],
    presentations: ["4 kg", "20 kg"],
    benefits: [
      "Ayuda a eliminar moléculas de proteínas y grasas",
      "Baja contribución a la carga de efluentes por su concentración de uso",
      "Componentes listados por FDA para uso en superficies relacionadas con alimentos",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido viscoso ámbar claro" },
      { label: "Olor", value: "Característico" },
      { label: "pH (solución al 1%)", value: "12.0 ± 0.5" },
      { label: "Densidad", value: "1.08 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Limpieza y desengrase externo de pisos, paredes, equipos, tanques, llenadoras, mesas de corte y jabas",
      "Uso en plantas procesadoras de alimentos, bebidas, viñas, cerveceras, lecherías, cárnicas y pesqueras",
      "Aplicación con escobilla, paño, remojo, aspersión, pulverización o dosificador de espuma",
    ],
    safety: [
      "Usar concentraciones de 0.5% a 5% según nivel de suciedad y temperatura",
      "Diluir bien en agua y enjuagar inmediatamente con agua a presión luego del tiempo de contacto",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neocloram.pdf",
    galleryImages: neocloramFamilyGallery,
  },
  {
    id: "neocloram-4460",
    name: "NEOCLORAM 4460",
    slug: "neocloram-4460",
    shortDescription:
      "Detergente alcalino espumoso reforzado para limpieza y desengrase externo de superficies y equipos en plantas de alimentos.",
    description:
      "NEOCLORAM 4460 es un detergente alcalino reforzado formulado con tensoactivos aniónicos, agentes acomplejantes, humectantes, emulsificantes, dispersantes y saponificantes biodegradables. Su formulación ayuda en la limpieza, el desengrase y el control de la población microbiana sobre suciedades orgánicas y proteicas.",
    image: neocloramFamily4kgView01,
    imageFit: "contain",
    line: "Industria Alimentaria",
    type: "Detergentes",
    industry: ["Industria Alimentaria"],
    presentations: ["4 kg", "20 kg"],
    benefits: [
      "Ayuda a eliminar proteínas y grasas por su contenido de álcalis y clorito estabilizado",
      "Baja contribución a la carga de efluentes en su concentración de uso",
      "Componentes listados por FDA para uso relacionado con alimentos",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido ámbar" },
      { label: "Olor", value: "Característico" },
      { label: "pH (solución al 0.5%)", value: "10.0 ± 0.5" },
      { label: "% materia activa aniónica", value: "13.4 ± 0.5" },
      { label: "% alcalinidad", value: "1.33 ± 0.5" },
      { label: "Densidad", value: "1.059 ± 0.05 gr/cc" },
    ],
    applications: [
      "Limpieza y desengrase externo de pisos, paredes, equipos, tanques, llenadoras, mesas de corte y jabas",
      "Uso en plantas procesadoras de alimentos, bebidas, viñas, cerveceras, lecherías, cárnicas y pesqueras",
      "Aplicación con escobilla, paño, remojo, aspersión, pulverización o dosificador de espuma",
    ],
    safety: [
      "Usar concentraciones de 1% a 10% según nivel de suciedad",
      "Diluir bien antes de aplicar y dejar actuar 5 minutos antes del enjuague a presión",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neocloram-4460.pdf",
    galleryImages: neocloramFamilyGallery,
  },
  {
    id: "neoclor-dx5",
    name: "NeoClor DX5",
    slug: "neoclor-dx5",
    shortDescription:
      "Solución acidificada de clorito de sodio con efecto desinfectante para ambientes, equipos, alimentos, botellones y tratamiento de agua.",
    description:
      "NeoClor DX5 es una dilución al 5% de NeoClor DX Plus, formulada como solución acidificada de clorito de sodio con acción oxidante bactericida, virucida y fungicida. Está orientada a desinfección de ambientes, superficies, alimentos, botellones y agua, con uso en concentraciones bajas y sin necesidad de enjuague en varias aplicaciones.",
    image: neoclorDxView01,
    imageFit: "contain",
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "No forma subproductos tóxicos en comparación con el cloro",
      "No es corrosivo ni traslada olor o sabor a cloro",
      "Trabaja en un rango de pH más amplio que el hipoclorito de sodio",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ligeramente amarillo" },
      { label: "Potencial de dióxido de cloro en solución", value: "Mínimo 5%" },
      { label: "% de oxicloros (como ClO2)", value: "5% a 6%" },
      { label: "pH (solución al 1%)", value: "8.0 ± 1" },
      { label: "Densidad", value: "1.07 ± 0.05" },
      { label: "Nivel de espuma", value: "Sin espuma" },
    ],
    applications: [
      "Desinfección de ambientes, superficies, equipos, salas de procesamiento y pisos",
      "Desinfección de tuberías, pasteurizadores, enfriadoras, llenadoras y botellones PET",
      "Desinfección de alimentos por inmersión y tratamiento de agua",
    ],
    safety: [
      "Evitar el contacto directo con piel y ojos usando implementos de seguridad personal",
      "Validar en proceso las concentraciones sugeridas por laboratorio",
      "Consultar la hoja de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoclor-dx5.pdf",
    galleryImages: neoclorDxFamilyGallery,
  },
  {
    id: "neoclor-dx-10",
    name: "NeoClor DX 10",
    slug: "neoclor-dx-10",
    shortDescription:
      "Desinfectante sanitizante oxiclorado de amplio espectro para superficies, alimentos, agua y circuitos CIP.",
    description:
      "NeoClor DX 10 es un sanitizante líquido a base de dióxido de cloro y clorito de sodio estabilizado, formulado con catalizadores que favorecen la liberación continua del principio activo. Está orientado a desinfección de superficies, alimentos, agua y circuitos, con desempeño oxidante de amplio espectro.",
    image: neoclorDxView01,
    imageFit: "contain",
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria"],
    presentations: ["1 gal", "5 gal", "20 L"],
    benefits: [
      "No forma subproductos tóxicos en comparación con el cloro",
      "No necesita enjuague en desinfección de superficies a las concentraciones recomendadas",
      "Seguro sobre metales, plásticos, gomas y puede usarse en circuitos CIP",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido ámbar-amarillo" },
      { label: "pH (solución al 1%)", value: "5.5 ± 0.5" },
      { label: "Densidad", value: "1.074 ± 0.05 g/ml" },
      { label: "% de oxicloros iniciales (como ClO2)", value: "3% - 6%" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Sin espuma" },
    ],
    applications: [
      "Sanitización de pisos, paredes, equipos, circuitos y salas de proceso",
      "Conservación y desinfección de lácteos, avícolas, pescado, carnes, frutas y verduras",
      "Purificación y desodorización de agua en cisternas, piscinas y torres de enfriamiento",
    ],
    safety: [
      "Mantener almacenado en un lugar ventilado",
      "Validar en proceso las concentraciones sugeridas por laboratorio",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoclor-dx-10.pdf",
    galleryImages: neoclorDxFamilyGallery,
  },
  {
    id: "neoclor-sh",
    name: "NeoClor SH",
    slug: "neoclor-sh",
    shortDescription:
      "Detergente líquido alcalino clorado de muy baja espuma para limpieza de tanques, tuberías y sistemas CIP.",
    description:
      "NeoClor SH es un detergente alcalino cáustico clorado, de muy baja espuma, formulado para limpieza de tanques, circuitos y sistemas CIP. Su composición combina álcalis, hipoclorito de sodio y tensoactivos para remover residuos proteicos y apoyar la desinfección en operaciones de alimentos y bebidas.",
    image: neoclorDxView01,
    imageFit: "contain",
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria"],
    presentations: ["20 kg", "200 kg"],
    benefits: [
      "Enjuagabilidad rápida sin dejar residuos",
      "Su alto contenido de álcalis y cloro reduce tiempos en el proceso de limpieza",
      "Posee inhibidores de corrosión y trabaja en aguas de alta dureza",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido" },
      { label: "Color", value: "Amarillo claro" },
      { label: "Olor", value: "A cloro" },
      { label: "pH (solución al 1%)", value: "12 ± 0.5 en agua blanda" },
      { label: "Densidad", value: "1.2 ± 0.05 gr/cm3" },
      { label: "Solubilidad", value: "Completa en agua" },
    ],
    applications: [
      "Limpieza de tanques, circuitos, tuberías y sistemas CIP",
      "Uso en plantas de jugos, bebidas carbonatadas, viñas, cerveceras, lecherías, cárnicas y pesqueras",
      "Aplicación como desatorador y coadyuvante a la desinfección",
    ],
    safety: [
      "Usar de 0.3% a 1% v/v según tanque, circuito o remojo",
      "Evitar el contacto directo con piel y ojos utilizando implementos de seguridad personal",
      "Consultar la hoja de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoclor-sh.pdf",
    galleryImages: neoclorDxFamilyGallery,
  },
  {
    id: "neodegreaser",
    name: "NeoDegreaser",
    slug: "neodegreaser",
    shortDescription:
      "Desengrasante neutro biodegradable para limpieza regular y frecuente de superficies, equipos y utensilios en contacto con alimentos.",
    description:
      "NeoDegreaser es un desengrasante disolvente neutro multiuso formulado con tensoactivos aniónicos y no iónicos altamente biodegradables, agentes disolventes, humectantes, emulsificantes, antiespumantes y acondicionadores de agua. Está diseñado para remoción frecuente de grasas y aceites de origen animal, vegetal o mineral.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial", "Industria Alimentaria"],
    presentations: ["4 kg", "20 kg"],
    benefits: [
      "Baja contribución a la carga de efluentes",
      "La baja espuma facilita el enjuague y el ahorro de agua",
      "No contiene solventes clorados y no es inflamable",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido color rosado" },
      { label: "Olor", value: "Frutal" },
      { label: "pH (concentrado)", value: "8.0 ± 0.5" },
      { label: "Densidad", value: "1.05 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Media" },
    ],
    applications: [
      "Limpieza regular de pisos, paredes, equipos, mesas y utensilios",
      "Uso sobre superficies en contacto con alimentos y metales blandos",
      "Aplicación manual o con máquina lavadora de pisos, aspersión, remojo o mopa",
    ],
    safety: [
      "Usar diluciones de 2% a 5% para suciedades normales no carbonizadas",
      "Enjuagar con agua a presión luego del tiempo de contacto en lavado manual",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neodegreaser.pdf",
  },
  {
    id: "neodegreaser-7030",
    name: "NEODEGREASER 7030",
    slug: "neodegreaser-7030",
    shortDescription:
      "Desengrasante neutro biodegradable para limpieza regular con uso concentrado o diluido en equipos, pisos y superficies en contacto con alimentos.",
    description:
      "NEODEGREASER 7030 es un desengrasante disolvente neutro multiuso de acción eficaz sobre grasas y aceites de origen animal, vegetal o mineral. Su formulación combina tensoactivos biodegradables, agentes disolventes, humectantes, emulsificantes, antiespumantes y acondicionadores de agua para procesos de limpieza frecuentes o intensivos.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial", "Industria Alimentaria"],
    presentations: ["1 L", "4 L", "20 L"],
    benefits: [
      "Baja contribución a la carga de efluentes",
      "No produce daño interno en equipos de limpieza con partes de aluminio, bronce o plástico",
      "No contiene solventes clorados, no es inflamable y no es tóxico",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido color rosado" },
      { label: "Olor", value: "Frutal" },
      { label: "pH (concentrado)", value: "8.0 ± 0.5" },
      { label: "Densidad", value: "1.04 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua a toda temperatura" },
      { label: "Nivel de espuma", value: "Media" },
    ],
    applications: [
      "Limpieza regular y frecuente de pisos, paredes, equipos, mesas y utensilios",
      "Uso en superficies en contacto con alimentos, incluso sobre aluminio, bronce o aleaciones",
      "Aplicación con máquina, manualmente, por aspersión, remojo o mopa",
    ],
    safety: [
      "Para suciedad muy alta puede usarse concentrado",
      "En suciedad media o tareas livianas seguir las diluciones recomendadas según método de limpieza",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neodegreaser-7030.pdf",
  },
  {
    id: "neocloram-fp",
    name: "Neocloram FP",
    slug: "neocloram-fp",
    shortDescription:
      "Detergente desinfectante alcalino con especies oxicloradas para limpieza, desinfección y desengrase externo en plantas de alimentos.",
    description:
      "NeoCloram FP es un detergente desinfectante alcalino formulado con especies oxicloradas, tensoactivos aniónicos y no iónicos, agentes acomplejantes, humectantes, emulsificantes, dispersantes y saponificantes biodegradables. Está orientado a limpieza, desinfección y desengrase externo de superficies en contacto con alimentos y áreas de proceso.",
    image: neocloramFamily4kgView01,
    imageFit: "contain",
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria"],
    presentations: ["4 kg", "20 kg", "210 kg"],
    benefits: [
      "Ayuda a eliminar proteínas y grasas por su contenido de álcalis y clorito estabilizado",
      "Las especies oxicloradas no forman trihalometanos ni subproductos tóxicos o cancerígenos conocidos",
      "Baja contribución a la carga de efluentes en su concentración de uso",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ámbar" },
      { label: "Olor", value: "Sin olor" },
      { label: "pH (solución al 0.5%)", value: "10.0 ± 1" },
      { label: "% alcalinidad total", value: "4 ± 0.5" },
      { label: "% de oxicloros", value: "0.4 ± 0.2" },
      { label: "Densidad", value: "1.1 ± 0.05" },
      { label: "Nivel de espuma", value: "Espuma media" },
    ],
    applications: [
      "Limpieza, desinfección y desengrase de pisos, paredes, equipos, tanques, llenadoras, mesas de corte y jabas",
      "Uso en plantas procesadoras de alimentos, bebidas, viñas, cerveceras, lecherías, cárnicas y pesqueras",
      "Aplicación con escobilla, paño, remojo, aspersión, pulverización o dosificador de espuma",
    ],
    safety: [
      "Usar concentraciones de 1% a 5% según operación y nivel de suciedad",
      "Diluir bien en agua y enjuagar inmediatamente con agua a presión luego del tiempo de contacto",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neocloram-fp.pdf",
    galleryImages: neocloramFamilyGallery,
  },
  {
    id: "neoclor-dx-plus",
    name: "Neoclor DX Plus",
    slug: "neoclor-dx-plus",
    shortDescription:
      "Desinfectante sanitizante oxiclorado concentrado para superficies, alimentos, agua, circuitos CIP y conservación de procesos.",
    description:
      "NeoClor DX Plus es un sanitizante líquido a base de dióxido de cloro y clorito de sodio estabilizado en medio acuoso. Su acción oxidante de amplio espectro permite eliminar e inhibir microbios patógenos, con aplicación en superficies, alimentos, agua y circuitos sin necesidad de enjuague en concentraciones recomendadas.",
    image: neoclorDxView01,
    imageFit: "contain",
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "No forma subproductos tóxicos en comparación con el cloro",
      "No necesita enjuague en superficies a las concentraciones recomendadas",
      "Puede usarse en circuitos CIP y es seguro sobre metales, plásticos y gomas compatibles",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido amarillo claro" },
      { label: "pH (solución al 1%)", value: "8.5 ± 1" },
      { label: "Densidad", value: "1.2 ± 0.05 g/ml" },
      { label: "% de oxicloros (como ClO2)", value: "12% hasta 17%" },
      { label: "% clorito de sodio", value: "25 ± 4" },
      { label: "Nivel de espuma", value: "Sin espuma" },
    ],
    applications: [
      "Sanitización de pisos, paredes, equipos, circuitos y salas de procesamiento",
      "Desinfección de alimentos, frutas, verduras, legumbres y botellones PET",
      "Tratamiento de agua, purificación y desodorización en sistemas industriales",
    ],
    safety: [
      "Validar en proceso las concentraciones sugeridas por laboratorio",
      "Mantener el envase cerrado, ventilado y correctamente rotulado",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoclor-dx-plus.pdf",
    galleryImages: neoclorDxFamilyGallery,
  },
  {
    id: "neogras-forte",
    name: "NeoGras Forte",
    slug: "neogras-forte",
    shortDescription:
      "Detergente alcalino de alta espuma para limpieza de superficies verticales, equipos, tanques y mesas en plantas de alimentos y bebidas.",
    description:
      "NeoGras Forte es un detergente muy enérgico y altamente concentrado, formulado con tensoactivos de alta espuma, agentes acomplejantes, humectantes y alcalinizantes. Está diseñado para limpieza y desengrase de superficies verticales, con espuma adherente y prolongado tiempo de contacto.",
    image: neograsView01,
    imageFit: "contain",
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial", "Industria Alimentaria"],
    presentations: ["4 kg", "20 kg"],
    benefits: [
      "Espuma consistente y uniforme que se adhiere fácilmente a superficies",
      "Enjuagabilidad rápida sin dejar residuos",
      "No contribuye significativamente a la carga de efluentes en su concentración de uso",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido ligeramente amarillo sin sedimentos" },
      { label: "pH (solución al 1%)", value: "12.0 ± 0.5" },
      { label: "% alcalinidad total", value: "17 ± 1" },
      { label: "Densidad", value: "1.21 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Limpieza de superficies verticales, equipos, tanques, llenadoras, mesas de corte y jabas",
      "Uso con equipo dosificador de espuma o manualmente en plantas de jugos, bebidas, viñas, cerveceras, lecherías, cárnicas y pesqueras",
      "Lavado por remojo de piezas en agua a temperatura de hasta 80 ºC",
    ],
    safety: [
      "Usar concentraciones desde 2% hasta 10% v/v según el nivel de suciedad",
      "Aplicar sanitizante después del enjuague si se requiere desinfección completa",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neogras-forte.pdf",
    galleryImages: neograsFamilyGallery,
  },
  {
    id: "neogras-rp-se",
    name: "NEOGRAS RP SE",
    slug: "neogras-rp-se",
    shortDescription:
      "Desengrasante no clorado sin espuma para remoción de grasas pesadas en jabas, moldes, hornos, cocinas y superficies de proceso.",
    description:
      "NEOGRAS RP SE es un detergente desengrasante líquido muy enérgico, altamente alcalino y concentrado, con espuma baja. Está formulado con surfactantes biodegradables, secuestrantes, humectantes, emulsificantes y dispersantes para remover grasas y proteínas resecas sobre superficies metálicas o plásticas.",
    image: neograsView01,
    imageFit: "contain",
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial", "Industria Alimentaria"],
    presentations: ["4 kg", "20 kg"],
    benefits: [
      "Alto poder de humectación y penetración",
      "No emana vapores tóxicos ni irritantes",
      "Biodegradable y con rápida enjuagabilidad",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ligeramente amarillo" },
      { label: "pH (solución al 1%)", value: "12.5 ± 0.5" },
      { label: "% alcalinidad total", value: "23 ± 1" },
      { label: "Densidad", value: "1.23 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Baja" },
    ],
    applications: [
      "Limpieza de jabas, contenedores, moldes, hornos y cocinas con grasa pegoteada",
      "Uso en embutidos, panaderías, restaurantes, pesqueras y avícolas",
      "Remoción de suciedad grasosa y aceitosa a temperatura ambiente o hasta 80 ºC",
    ],
    safety: [
      "Retirar suciedades gruesas antes de aplicar el producto cuando sea posible",
      "Usar entre 2% y 5% según suciedad, temperatura y tiempo de contacto",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neogras-rp-se.pdf",
    galleryImages: neograsFamilyGallery,
  },
  {
    id: "neorol-3",
    name: "NeoRol 3",
    slug: "neorol-3",
    shortDescription:
      "Desengrasante biodegradable alcalino no cáustico para pisos, maquinarias, piezas de motor, tanques y superficies con residuos petroleros.",
    description:
      "NeoRol 3 es un desengrasante líquido alcalino no cáustico, formulado con emulsificantes, dispersantes, tensoactivos aniónicos, estabilizadores alcohólicos y ablandadores de agua. Está orientado a remover aceites, grasas minerales, residuos de petróleo y suciedades orgánicas e inorgánicas sobre una amplia variedad de superficies.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial"],
    presentations: ["5 gal", "55 gal"],
    benefits: [
      "No corrosivo",
      "No es inflamable a cualquier dilución",
      "Muy baja toxicidad y sin solventes clorados",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido amarillo" },
      { label: "Olor", value: "Ligero a alcohol" },
      { label: "Densidad", value: "1.01 ± 0.05 gr/cc" },
      { label: "pH concentrado", value: "13 - 14" },
      { label: "Solubilidad", value: "Completa en agua" },
    ],
    applications: [
      "Limpieza de pisos, maquinarias, piezas de motor, tanques, cisternas y plataformas",
      "Remoción de grasas pesadas en motores diésel o gasolina y piezas mecánicas",
      "Uso sobre aluminio, bronce y acero inoxidable con dilución adecuada",
    ],
    safety: [
      "Usar puro o diluido hasta 1:50 según suciedad y superficie",
      "No reciclar envases de desengrasante para uso doméstico",
      "Consultar la hoja de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neorol-3.pdf",
  },
  {
    id: "neorol-ct",
    name: "NeoRol CT",
    slug: "neorol-ct",
    shortDescription:
      "Desengrasante cítrico biodegradable alcalino no cáustico para superficies, maquinaria, piezas y limpieza general.",
    description:
      "NeoRol CT es un desengrasante líquido alcalino no cáustico y cítrico, formulado con emulsificantes, dispersantes, tensoactivos aniónicos, estabilizadores alcohólicos y ablandadores de agua. Está diseñado para remover aceites, grasas minerales, residuos de petróleo y suciedad general con aroma cítrico y alta biodegradabilidad.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial"],
    presentations: ["5 gal", "55 gal"],
    benefits: [
      "Aroma cítrico sin dañar mucosas ni piel",
      "Altamente biodegradable y no afecta la capa de ozono",
      "Muy baja toxicidad y sin solventes clorados",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido amarillo" },
      { label: "Olor", value: "Cítrico" },
      { label: "Densidad", value: "1.01 ± 0.05 gr/cc" },
      { label: "pH concentrado", value: "13.5 ± 0.5" },
      { label: "Solubilidad", value: "Completa en agua" },
    ],
    applications: [
      "Limpieza de pisos, maquinarias, piezas de motor, tanques, cisternas y plataformas",
      "Remoción de grasas pesadas en motores y piezas mecánicas",
      "Uso en bandejas y piezas de aluminio, bronce o acero inoxidable con dilución apropiada",
    ],
    safety: [
      "Usar puro o diluido hasta 1:50 según la carga de suciedad",
      "No reciclar envases de desengrasante para uso doméstico",
      "Consultar la hoja de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neorol-ct.pdf",
  },
  {
    id: "neorol-cabinet",
    name: "NeoRol Cabinet",
    slug: "neorol-cabinet",
    shortDescription:
      "Descarbonizante desengrasante ecológico para remover grasas, hollín, pintura y depósitos carbonizados en piezas de motor.",
    description:
      "NeoRol Cabinet es un limpiador descarbonizante y removedor enérgico de grasas, aceites, pintura y depósitos de carbón o hollín. Está formulado con álcalis no cáusticos, agentes emulsificantes, dispersantes, antiredepositantes y ablandadores de agua, con espuma baja y uso por inmersión directa o diluida.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial"],
    presentations: ["5 gal", "55 gal"],
    benefits: [
      "No es inflamable a cualquier dilución",
      "No contiene solventes clorados",
      "Muy baja toxicidad y sin daño relevante al medio ambiente según su ficha",
    ],
    specs: [
      { label: "Apariencia", value: "Líquida" },
      { label: "Color", value: "Incoloro (según patrón)" },
      { label: "Alcalinidad como NaOH", value: "7.5 ± 0.5" },
      { label: "pH concentrado", value: "12 ± 0.5" },
      { label: "Densidad", value: "1.141 ± 0.05" },
      { label: "Solubilidad a 21 °C", value: "Completa en agua" },
    ],
    applications: [
      "Limpieza interna de monoblocks, culatas de fierro y componentes de motor",
      "Remoción de aceite degradado, lodos y hollín de combustión",
      "Uso por inmersión en tanques adecuados para el tamaño de las piezas",
    ],
    safety: [
      "Usar sin diluir o diluido hasta 1:5 en agua corriente",
      "Trabajar con temperatura de hasta 80 °C controlando el tiempo de contacto",
      "No es adecuado para aluminio u otros metales blandos",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neorol-cabinet.pdf",
  },
  {
    id: "neogras-remover-plus",
    name: "Neogras Remover Plus",
    slug: "neogras-remover-plus",
    shortDescription:
      "Desengrasante líquido muy enérgico y sin solventes para remoción de grasas pesadas, proteínas resecas y suciedad carbonizada.",
    description:
      "NeoGras Remover Plus es un desengrasante líquido altamente alcalino y concentrado, formulado con surfactantes biodegradables, agentes secuestrantes, humectantes, emulsificantes y dispersantes de aceites y grasas. Está orientado a la limpieza de hornos, cocinas, freidoras, moldes y superficies con suciedad orgánica pesada o carbonizada.",
    image: neograsView01,
    imageFit: "contain",
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Hoteles y Restaurantes", "Mantenimiento Industrial", "Industria Alimentaria"],
    presentations: ["4 kg", "20 kg"],
    benefits: [
      "Alto poder de humectación y penetración",
      "No emana vapores tóxicos ni irritantes",
      "Posee inhibidores de corrosión y enjuagabilidad rápida",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ámbar" },
      { label: "pH (solución al 1%)", value: "12.5 ± 0.5" },
      { label: "% alcalinidad total", value: "13 ± 0.5" },
      { label: "Densidad", value: "1.16 ± 0.05 gr/cc" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Limpieza de hornos, cocinas, planchas freidoras, jabas y moldes",
      "Recuperación de ollas, sartenes y utensilios con grasa quemada",
      "Uso en embutidos, panaderías, restaurantes, pesqueras, avícolas y embotelladoras",
    ],
    safety: [
      "Usar entre 3% y 10% según temperatura y tiempo de contacto",
      "En recuperación de utensilios, pasivar luego con detergente ácido según protocolo",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neogras-remover-plus.pdf",
    galleryImages: neograsFamilyGallery,
  },
  {
    id: "neosanit-gq",
    name: "NeoSanit GQ",
    slug: "neosanit-gq",
    shortDescription:
      "Desinfectante catiónico de amplio espectro a base de amonio cuaternario de quinta generación para superficies, ambientes, ropa hospitalaria y alimentos previamente lavados.",
    description:
      "NeoSanit GQ es un sanitizante y desinfectante líquido catiónico formulado con amonio cuaternario de quinta generación. Está diseñado para eliminar bacterias Gram positivas y negativas, hongos, levaduras, algas y virus, manteniendo actividad incluso en presencia de materia orgánica a las dosis especificadas.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria", "Hoteles y Restaurantes", "Hospitales"],
    presentations: ["4 L", "20 L"],
    benefits: [
      "Tiene efecto limpiador y residual prolongado",
      "No pierde efectividad en presencia de materia orgánica",
      "En algunos usos no requiere enjuague posterior",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ligeramente ámbar" },
      { label: "Olor", value: "Característico" },
      { label: "pH (solución al 1%)", value: "7.5 ± 0.5" },
      { label: "Densidad", value: "1.020 ± 0.05 g/ml" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Desinfección de ropa hospitalaria y alimentos previamente lavados",
      "Sanitización de mesas de trabajo, paredes, utensilios de cocina y superficies",
      "Housekeeping en lavamanos, duchas, pisos, paredes e inodoros",
    ],
    safety: [
      "Usar las diluciones recomendadas según ropa, superficies, pediluvios o ambientes",
      "Respetar el uso sobre superficies previamente lavadas",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neosanit-gq.pdf",
  },
  {
    id: "neosep-clo2",
    name: "NeoSep ClO2",
    slug: "neosep-clo2",
    shortDescription:
      "Detergente alcalino oxiclorado de enjuague rápido para limpieza y desinfección CIP en un solo paso.",
    description:
      "NeoSep ClO2 es un producto alcalino cáustico de muy baja espuma diseñado para limpieza y desinfección de tanques, circuitos y sistemas CIP en un solo paso. Su formulación de oxicloros, acomplejantes y tensoactivos especializados permite enjuague rápido y reducción de etapas operativas en procesos de bebidas y alimentos.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria"],
    presentations: ["25 kg"],
    benefits: [
      "Enjuagabilidad muy rápida sin dejar residuos",
      "Permite reducir pasos de limpieza y desinfección, ahorrando agua y tiempo",
      "No forma subproductos tóxicos como trihalometanos o cloroformos",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ámbar" },
      { label: "Apariencia (solución al 1%)", value: "Clara sin sedimentos" },
      { label: "Olor", value: "Sin olor" },
      { label: "pH (producto puro)", value: ">13" },
      { label: "% de alcalinidad (solución al 1%)", value: "0.2% ± 0.05 como NaOH" },
      { label: "Oxicloros (como Cl2)", value: "Mínimo 1500 ppm" },
    ],
    applications: [
      "Limpieza alcalina interna y desinfección de tanques y circuitos de acero inoxidable",
      "Uso en plantas de bebidas carbonatadas, cerveceras, lecherías, jugos, viñas y pesqueras",
      "Procesos CIP en 3, 4 o 5 pasos según la lógica operativa del sistema",
    ],
    safety: [
      "Usar de 0.5% a 2% v/v y hasta 80 ºC según el sistema",
      "En metales blandos o aleaciones vigilar la concentración",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neosep-clo2.pdf",
  },
  {
    id: "neosilicom",
    name: "NeoSilicom",
    slug: "neosilicom",
    shortDescription:
      "Protector, limpiador y abrillantador de superficies para madera, plástico, vinílico y melamine.",
    description:
      "NeoSilicom es una mezcla lista para usar de emulsión de silicona, aditivos y tensoactivos no iónicos biodegradables. Está diseñada para limpiar, proteger contra luz ultravioleta, repeler polvo y agua, y mejorar el brillo de superficies decorativas o de mobiliario.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Abrillantadores",
    industry: ["Mantenimiento Industrial"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "Repele el polvo y el agua",
      "Evapora rápido sin dejar manchas",
      "Brinda transparencia, brillo y suavidad a las superficies",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido lechoso" },
      { label: "Olor", value: "Característico" },
      { label: "pH (concentrado)", value: "8.5 ± 0.5" },
      { label: "Densidad", value: "1.00 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Soluble en agua" },
      { label: "Nivel de espuma", value: "Sin espuma" },
    ],
    applications: [
      "Limpieza y brillo de madera laqueada o barnizada",
      "Mantenimiento de superficies de plástico, vinílico y melamine",
      "Aplicación pura con pulverizador o paño limpio",
    ],
    safety: [
      "Usar puro, aspersando una pequeña lluvia fina sobre la superficie",
      "Si es necesario, pulir con paño limpio y seco",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neosilicom.pdf",
  },
  {
    id: "neoxol-c-30ap",
    name: "NeoXol C-30AP",
    slug: "neoxol-c-30ap",
    shortDescription:
      "Desoxidante, desengrasante y desincrustante líquido para cobre, bronce y metales blandos con depósitos minerales u óxido.",
    description:
      "NeoXol C-30AP es un producto líquido formulado para eliminación de óxido, suciedades minerales y orgánicas sobre cobre, bronce y otros metales blandos. Combina ácidos especializados y tensoactivos no iónicos biodegradables para desoxidar, desengrasar, decapar y desincrustar sin fosfatar.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Desincrustantes",
    industry: ["Mantenimiento Industrial"],
    presentations: ["20 kg", "210 kg"],
    benefits: [
      "Limpia y elimina óxidos en un solo paso",
      "Los residuales se degradan fácilmente",
      "No es corrosivo al cobre ni a sus aleaciones en el uso indicado",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido ligeramente amarillo" },
      { label: "pH (concentrado)", value: "< 1.0" },
      { label: "% de acidez (como HCl)", value: "18 - 22" },
      { label: "Densidad", value: "1.14 ± 0.05 gr/cm3" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Media" },
    ],
    applications: [
      "Eliminación de óxidos, grasa, polvo, carbonatos, sulfatos y silicatos",
      "Limpieza de piezas y superficies de cobre, bronce y otros metales blandos",
      "Uso como desatorador y desincrustante por remojo, brochado o aplicación manual",
    ],
    safety: [
      "Usar puro o diluido hasta 1:5 según suciedad y tipo de metal",
      "Respetar tiempos máximos de contacto y enjuagar inmediatamente con agua",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/neoxol-c-30ap.pdf",
    galleryImages: neoxolC30ApGallery,
  },
  {
    id: "perfumador",
    name: "Perfumador",
    slug: "perfumador",
    shortDescription:
      "Perfumador de ropa y ambientes para aportar aroma duradero a prendas, cortinas, alfombras y espacios cerrados.",
    description:
      "Perfumador es un producto formulado con esencias especiales y aditivos para proporcionar un olor agradable, sugestivo y de amplia duración a la ropa y a los ambientes. Seca rápido y no deja manchas indeseables sobre prendas, alfombras o cortinas.",
    image: genericProductPlaceholder,
    line: "Lavandería Comercial",
    type: "Aromatizantes",
    industry: ["Lavandería Comercial", "Hoteles y Restaurantes"],
    presentations: ["1 L", "4 L"],
    benefits: [
      "Producto volátil de extensa duración",
      "No produce daño al medio ambiente",
      "No deja manchas sobre ropa, alfombras o cortinas",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido" },
      { label: "Olor", value: "Twylen o Lavanda" },
      { label: "pH", value: "7.0 ± 0.5" },
      { label: "Densidad", value: "0.88 ± 0.05 gr/cc" },
    ],
    applications: [
      "Perfumar prendas en lavandería dentro de bolsas cerradas",
      "Aplicación directa con atomizador en ambientes cerrados",
      "Uso sobre cortinas, muebles, alfombras y textiles decorativos",
    ],
    safety: [
      "Producto inflamable",
      "Aplicar en pequeñas cantidades al ambiente o textil",
      "Consultar la ficha de datos de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/perfumador.pdf",
  },
  {
    id: "pineclin",
    name: "Pineclin",
    slug: "pineclin",
    shortDescription:
      "Detergente desengrasante desodorizante con aroma a pino para limpieza general de superficies y apoyo a rutinas de mantenimiento.",
    description:
      "Pineclin es un detergente líquido altamente concentrado con efecto desengrasante, desodorizante y coadyuvante a la desinfección. Su formulación incorpora aceites de pino concentrados, tensoactivos aniónicos biodegradables y agentes dispersantes y emulsificantes para remover suciedad orgánica en superficies de uso frecuente.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Detergentes",
    industry: ["Mantenimiento Industrial"],
    presentations: ["1 gal", "5 gal", "55 gal"],
    benefits: [
      "Integra limpieza, desengrase y desodorización en un solo paso",
      "Contiene tensoactivos biodegradables y aceites de pino concentrados",
      "Puede aplicarse con escobilla, paño o trapeador en rutinas de mantenimiento general",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido verde" },
      { label: "Olor", value: "Pino" },
      { label: "pH (concentrado)", value: "10.5 ± 0.5" },
      { label: "Densidad", value: "1.0 ± 0.05 gr/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Alta" },
    ],
    applications: [
      "Limpieza y desengrase de paredes, pisos y superficies metálicas, de cemento o plástico",
      "Desodorización de áreas de mantenimiento y servicios generales",
      "Apoyo a protocolos de higiene previos a una desinfección posterior cuando sea requerida",
    ],
    safety: [
      "Diluir 1 parte de producto en 4 partes de agua para limpieza general",
      "Diluir 1 parte de producto en 2 partes de agua para desengrase de manos",
      "No es recomendable en áreas de procesamiento de alimentos por su fuerte aroma a pino",
    ],
    technicalSheetUrl: "/fichas-tecnicas/pineclin.pdf",
  },
  {
    id: "qx",
    name: "QX",
    slug: "qx",
    shortDescription:
      "Desinfectante blanqueador clorado a base de hipoclorito de sodio para superficies, alimentos, agua de proceso y lavandería.",
    description:
      "QX es un desinfectante blanqueador clorado formulado con hipoclorito de sodio. Se utiliza por su poder germicida, efecto residual y capacidad de blanqueo en operaciones de alimentos, higiene de superficies, tratamiento de agua y lavandería institucional o industrial.",
    image: genericProductPlaceholder,
    line: "Lavandería Industrial",
    type: "Blanqueadores",
    industry: ["Lavandería Industrial", "Industria Alimentaria"],
    presentations: ["1 gal", "5 gal", "55 gal"],
    benefits: [
      "Acción germicida de amplio espectro",
      "Efecto residual prolongado y fácil de medir",
      "Solución económica y estable para rutinas de desinfección y blanqueo",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido traslúcido amarillo verdoso" },
      { label: "% NaOCl", value: "7.5% a 8.0%" },
      { label: "Densidad", value: "1.12 ± 0.05 g/ml" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Enjuagabilidad", value: "Completa con agua" },
      { label: "Vida útil", value: "5 meses" },
    ],
    applications: [
      "Desinfección de superficies, equipos, pisos y paredes en contacto con alimentos",
      "Desinfección de agua de proceso y de bebida",
      "Blanqueo y desinfección en lavandería e higiene hospitalaria",
    ],
    safety: [
      "Dosificar de 0.66 cc a 2.0 cc por litro para superficies según el pH y la limpieza previa",
      "Para alimentos, trabajar de 0.66 cc a 2.5 cc por litro según el tipo de producto a desinfectar",
      "No se recomienda remojo prolongado en acero inoxidable ni en metales blandos",
    ],
    technicalSheetUrl: "/fichas-tecnicas/qx.pdf",
  },
  {
    id: "ramton",
    name: "Ramton",
    slug: "ramton",
    shortDescription:
      "Tensoactivo de alta espuma para aplicaciones industriales en procesos textiles, de baterías y operaciones mineras.",
    description:
      "Ramton es un producto líquido orgánico con propiedades detergentes, dispersantes y desengrasantes. Contiene tensoactivos aniónicos biodegradables, presenta muy alta espuma y alta viscosidad, y mantiene su desempeño tanto en aguas duras como blandas.",
    image: genericProductPlaceholder,
    line: "Mantenimiento Industrial",
    type: "Tensoactivos",
    industry: ["Mantenimiento Industrial", "Lavandería Industrial"],
    presentations: ["20 kg", "200 kg"],
    benefits: [
      "Muy alta espuma para aplicaciones donde se requiere cobertura sostenida",
      "Trabaja adecuadamente en presencia de ácidos o álcalis",
      "Mantiene eficacia tanto en aguas duras como blandas",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido ámbar traslúcido" },
      { label: "pH", value: "8.5 ± 0.5" },
      { label: "Solubilidad", value: "Soluble en agua" },
      { label: "Densidad", value: "1.1 ± 0.05 gr/cc" },
    ],
    applications: [
      "Industria textil para remover residuos oleosos, grasos y suciedad pigmentaria",
      "Industria de baterías para limitar la liberación de gases durante el cargado de placas",
      "Industria minera en procesos donde la espuma ayuda a controlar emisiones",
    ],
    safety: [
      "En presencia de alta concentración de álcalis cáusticos puede liberar amoníaco",
      "En caso de contacto con los ojos, enjuagar con abundante agua y buscar asistencia médica si persiste la irritación",
      "En caso de ingestión, administrar abundante agua o leche",
    ],
    technicalSheetUrl: "/fichas-tecnicas/ramton.pdf",
  },
  {
    id: "suavideter-especial",
    name: "Suavideter Especial",
    slug: "suavideter-especial",
    shortDescription:
      "Suavizante de ropa premium para el último enjuague, orientado a textiles que requieren tacto suave y buena estabilidad al planchado.",
    description:
      "Suavideter Especial es un auxiliar de lavandería formulado para proporcionar suavidad y tersura a algodón, rayón y mezclas de poliéster. Está pensado para procesos de enjuague final en lavandería, con dispersión rápida en agua fría y buen desempeño sobre toallas, jeans en proceso, camisas, chaquetas y sábanas.",
    image: genericProductPlaceholder,
    line: "Lavandería Industrial",
    type: "Suavizantes",
    industry: ["Lavandería Industrial"],
    presentations: ["1 gal", "5 gal", "55 gal"],
    benefits: [
      "Deja la ropa suave y tersa",
      "Se dispersa rápidamente en agua fría",
      "Ofrece buena resistencia al amarillamiento durante el planchado doméstico",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido lechoso" },
      { label: "Olor", value: "Floral suave" },
      { label: "pH (concentrado)", value: "3.5 ± 0.5" },
      { label: "Densidad", value: "0.996 ± 0.05 g/cc" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Nivel de espuma", value: "Sin espuma" },
    ],
    applications: [
      "Suavizado de toallas, jeans en proceso, camisas, chaquetas y sábanas",
      "Aplicación en el último enjuague con agua fría",
      "Uso en textiles de algodón, rayón y mezclas de poliéster",
    ],
    safety: [
      "Añadir 5 g por kg de ropa y dejar actuar unos minutos en el enjuague final",
      "No almacenar el producto diluido",
      "Mantener en lugares frescos y secos, fuera del alcance de los niños",
    ],
    technicalSheetUrl: "/fichas-tecnicas/suavideter-especial.pdf",
  },
  {
    id: "suavideter",
    name: "Suavideter",
    slug: "suavideter",
    shortDescription:
      "Suavizante de ropa para lavandería industrial con aplicación en el último enjuague de textiles de alta rotación.",
    description:
      "Suavideter es un auxiliar de lavandería diseñado para aportar suavidad y tersura a algodón, rayón y mezclas de poliéster. Se incorpora en el último enjuague con agua fría y está orientado a procesos de lavandería que requieren cuidado textil, fácil dispersión y buen comportamiento frente a planchado y blanqueo.",
    image: genericProductPlaceholder,
    line: "Lavandería Industrial",
    type: "Suavizantes",
    industry: ["Lavandería Industrial"],
    presentations: ["1 gal", "5 gal", "55 gal"],
    benefits: [
      "Deja la ropa suave y tersa",
      "Se dispersa rápidamente en agua fría",
      "No afecta el tono ni la firmeza de los colorantes",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido lechoso" },
      { label: "Olor", value: "Floral suave" },
      { label: "Color", value: "Verde" },
      { label: "pH", value: "4.0 ± 0.5" },
      { label: "Densidad", value: "1.00 ± 0.05 gr/cc" },
      { label: "Nivel de espuma", value: "Espuma baja" },
    ],
    applications: [
      "Suavizado de toallas, jeans en proceso, camisas, chaquetas y sábanas",
      "Aplicación en el último enjuague con agua fría",
      "Uso en procesos industriales de lavandería textil",
    ],
    safety: [
      "Añadir 5 g por kg de ropa durante el último enjuague",
      "Mantener el producto en lugares frescos y secos",
      "Consultar la ficha de seguridad para el protocolo operativo",
    ],
    technicalSheetUrl: "/fichas-tecnicas/suavideter.pdf",
  },
  {
    id: "supergras",
    name: "SuperGras",
    slug: "supergras",
    shortDescription:
      "Desengrasante líquido altamente alcalino para eliminación de grasas pesadas y suciedad carbonizada en superficies de proceso.",
    description:
      "SuperGras es un desengrasante detergente líquido altamente alcalino, de espuma media, formulado con surfactantes aniónicos biodegradables, agentes secuestrantes, humectantes, emulsificantes y dispersantes. Está orientado a tareas exigentes sobre hornos, planchas, freidoras, jabas y otras superficies con grasa pesada o proteína reseca.",
    image: neograsView01,
    imageFit: "contain",
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial", "Industria Alimentaria", "Hoteles y Restaurantes"],
    presentations: ["4 kg", "20 kg"],
    benefits: [
      "Remueve grasas pesadas, proteínas resecas y residuos carbonizados",
      "Trabaja con espuma media y admite uso con temperatura",
      "Apto para operaciones de alimentos, horeca y manufactura",
    ],
    specs: [
      { label: "Apariencia", value: "Líquido lechoso" },
      { label: "Olor", value: "Característico" },
      { label: "pH (solución al 1%)", value: "12.0 ± 0.5" },
      { label: "% Alcalinidad total", value: "11 ± 1" },
      { label: "Densidad", value: "1.15 ± 0.05 gr/cc" },
      { label: "Nivel de espuma", value: "Media" },
    ],
    applications: [
      "Limpieza de cocinas, hornos, planchas freidoras y jabas",
      "Recuperación de moldes y superficies con grasa pesada",
      "Uso en embutidos, panaderías, restaurantes, pesqueras, avícolas y embotelladoras",
    ],
    safety: [
      "Usar diluido desde 1% hasta 10% según el nivel de suciedad",
      "La temperatura máxima de trabajo puede llegar a 60 °C según la tarea",
      "Consultar la ficha de seguridad antes del uso",
    ],
    technicalSheetUrl: "/fichas-tecnicas/supergras.pdf",
    galleryImages: neograsFamilyGallery,
  },
  {
    id: "trimet",
    name: "Trimet",
    slug: "trimet",
    shortDescription:
      "Aflojador de suciedad en polvo para prelavado textil y apoyo alcalino en procesos con tierra, grasa y suciedad pesada.",
    description:
      "Trimet es un aflojador de suciedad en polvo con poder saponificante para grasas orgánicas. Su formulación contiene álcalis no cáusticos y ablandadores de agua, por lo que está orientado al prelavado de ropa muy sucia y puede complementar al detergente principal del proceso.",
    image: genericProductPlaceholder,
    line: "Lavandería Industrial",
    type: "Auxiliares",
    industry: ["Lavandería Industrial"],
    presentations: ["25 kg"],
    benefits: [
      "Ayuda a obtener un lavado excelente en ropa muy sucia",
      "Disminuye el tiempo normal de lavado",
      "Aporta alta humectación y emulsificación de grasas",
    ],
    specs: [
      { label: "Apariencia", value: "Polvo granulado blanco" },
      { label: "Olor", value: "Sin aroma" },
      { label: "pH (solución al 1%)", value: "12.3 ± 0.3" },
      { label: "% Alcalinidad (como NaOH)", value: "Mínimo 20" },
    ],
    applications: [
      "Prelavado de ropa con tierra y grasa pesada",
      "Uso combinado con el detergente principal del proceso",
      "Aplicación como detergente alcalino para pisos cuando se requiere",
    ],
    safety: [
      "Agregar Trimet al agua antes de incorporar la ropa",
      "Dosificar entre 2.5 g y 5 g por kg de ropa según el grado de suciedad",
      "Mantener las bolsas bien cerradas y almacenar en lugares secos por su carácter higroscópico",
    ],
    technicalSheetUrl: "/fichas-tecnicas/trimet.pdf",
  },
  {
    id: "deterlac",
    name: "Deterlac",
    slug: "deterlac",
    shortDescription:
      "Detergente en polvo alcalino para limpieza frecuente de superficies, equipos y utensilios en plantas de alimentos.",
    description:
      "Deterlac es un detergente en polvo alcalino con elevado poder desengrasante, formulado con tensoactivos aniónicos altamente biodegradables, agentes dispersantes y emulsificantes. Está diseñado para limpieza regular y frecuente de superficies y materiales en contacto con alimentos sin incorporar aromas ni colorantes.",
    image: genericProductPlaceholder,
    line: "Industria Alimentaria",
    type: "Detergentes",
    industry: ["Industria Alimentaria"],
    presentations: ["20 kg"],
    benefits: [
      "Contribución mínima a la carga de efluentes en su concentración de uso",
      "La espuma baja facilita el enjuague y el ahorro de agua",
      "Todos los insumos de la fórmula están listados por FDA CFR21 para superficies en contacto con alimentos",
    ],
    specs: [
      { label: "Apariencia", value: "Polvo granulado color blanco" },
      { label: "Olor", value: "Característico" },
      { label: "pH (solución al 1%)", value: "11.0 ± 0.5 en agua blanda (20 °C)" },
      { label: "Enjuagabilidad", value: "Completa con agua" },
      { label: "Espuma", value: "Media" },
      { label: "Biodegradabilidad", value: "98% a 99%" },
    ],
    applications: [
      "Limpieza de paredes, pisos, equipos y utensilios en plantas de alimentos",
      "Uso con máquinas lavadoras de piso",
      "Preparación de soluciones para limpieza con escobilla y espuma",
    ],
    safety: [
      "Diluir completamente antes de usar por su granulación fina",
      "Trabajar normalmente entre 1% y 3%, equivalente a 10 a 30 g por litro de agua",
      "Evitar el contacto directo con piel y ojos por tratarse de un producto alcalino-cáustico",
    ],
    technicalSheetUrl: "/fichas-tecnicas/deterlac.pdf",
  },
  {
    id: "shampo-alfombras",
    name: "Shampo Alfombras",
    slug: "shampo-alfombras",
    shortDescription:
      "Shampoo concentrado para alfombras formulado para limpieza por espuma y control de malos olores.",
    description:
      "Shampo Alfombras es un detergente líquido concentrado y altamente espumoso, formulado con tensoactivos aniónicos biodegradables y blanqueadores ópticos. Está diseñado para la limpieza de alfombras mediante espuma, con buena respuesta incluso en aguas de alta dureza.",
    image: genericProductPlaceholder,
    line: "Lavandería Comercial",
    type: "Detergentes",
    industry: ["Lavandería Comercial", "Hoteles y Restaurantes"],
    presentations: ["1 gal", "5 gal"],
    benefits: [
      "Ayuda a eliminar malos olores en alfombras",
      "No deteriora los colores de las fibras tratadas",
      "No requiere enjuague en máquina; en lavado manual solo exige retiro del residuo de espuma",
    ],
    specs: [
      { label: "Aspecto", value: "Líquido" },
      { label: "Color", value: "Celeste" },
      { label: "Espuma", value: "Alta" },
      { label: "pH (concentrado)", value: "9.0 ± 0.5" },
      { label: "Densidad (25 °C)", value: "1.03 ± 0.05 gr/cc" },
    ],
    applications: [
      "Limpieza de alfombras mediante acción mecánica de la espuma",
      "Uso en rutinas de limpieza de textiles de piso en hoteles, oficinas y espacios comerciales",
      "Aplicación manual con escobilla y retiro posterior de residuos con paño seco",
    ],
    safety: [
      "Diluir entre 1:5 y 1:20 según el nivel de suciedad a remover",
      "Agitar la solución diluida hasta producir espuma antes de aplicarla",
      "Eliminar los residuos de espuma con un paño seco al finalizar el lavado",
    ],
    technicalSheetUrl: "/fichas-tecnicas/shampo-alfombras.pdf",
  },
  {
    id: "ss-industrial",
    name: "SS Industrial",
    slug: "ss-industrial",
    shortDescription:
      "Detergente alcalino en polvo para limpieza frecuente de superficies, equipos y utensilios en plantas de alimentos.",
    description:
      "SS Industrial es un detergente en polvo alcalino de baja causticidad, formulado con tensoactivos aniónicos altamente biodegradables, agentes dispersantes y emulsificantes. Está orientado a la limpieza regular y frecuente de superficies en contacto con alimentos, equipos y utensilios dentro de plantas de proceso.",
    image: ssIndustrialView01,
    imageFit: "contain",
    line: "Industria Alimentaria",
    type: "Detergentes",
    industry: ["Industria Alimentaria"],
    presentations: ["15 kg"],
    benefits: [
      "Contribución mínima a la carga de efluentes en la concentración de uso",
      "Formulación concentrada de grano fino que trabaja a menores diluciones",
      "Insumos aprobados para superficies en contacto con alimentos bajo criterios FDA CFR21",
    ],
    specs: [
      { label: "Apariencia", value: "Polvo blanco granulado" },
      { label: "Olor", value: "Característico" },
      { label: "pH (solución al 1%)", value: "11.0 ± 0.5 en agua blanda" },
      { label: "% Alcalinidad total", value: "16 a 21" },
      { label: "Solubilidad", value: "Completa en agua" },
      { label: "Biodegradabilidad", value: "98% a 99%" },
    ],
    applications: [
      "Limpieza de paredes, pisos y superficies en contacto con alimentos",
      "Lavado frecuente de equipos y utensilios dentro de plantas de alimentos",
      "Preparación de soluciones espumantes para higiene regular de superficies",
    ],
    safety: [
      "Diluir completamente antes de usar por su granulación fina",
      "Trabajar normalmente entre 1% y 3% en agua, equivalente a 10 a 30 g por litro",
      "Preparar la solución previamente en baldes con agua a presión para producir espuma",
    ],
    technicalSheetUrl: "/fichas-tecnicas/ss-industrial.pdf",
    galleryImages: ssIndustrialGallery,
  },
];

const unique = (values: string[]) => Array.from(new Set(values));

export const hasRealProductImage = (product: Product) =>
  product.image !== genericProductPlaceholder;

export const productLines = unique(products.map((product) => product.line));
export const productTypes = unique(products.map((product) => product.type));
export const industries = unique(products.flatMap((product) => product.industry));
export const presentations = unique(products.flatMap((product) => product.presentations));
