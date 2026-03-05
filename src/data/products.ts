import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

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
}

export const products: Product[] = [
  {
    id: "1",
    name: "Detergente Alcalino Industrial",
    slug: "detergente-alcalino-industrial",
    shortDescription: "Desengrasante alcalino de alto rendimiento para lavandería industrial e industria alimentaria.",
    description: "Detergente alcalino industrial de alto rendimiento, ideal para remover grasas, aceites y suciedad pesada en lavanderías y plantas de producción. Compatible con sistemas automáticos y manuales.",
    image: product1,
    line: "Lavandería Industrial",
    type: "Detergentes",
    industry: ["Lavandería Industrial", "Industria Alimentaria"],
    presentations: ["20 L", "5 L", "1 L", "Saco 25 kg"],
    benefits: ["Alta concentración", "Efecto desengrasante", "Uso profesional"],
    specs: [
      { label: "pH", value: "11.5 - 13.0" },
      { label: "Apariencia", value: "Líquido azul" },
      { label: "Olor", value: "Característico" },
      { label: "Densidad", value: "1.20 g/cm³" },
    ],
    applications: ["Lavado de ropa industrial", "Limpieza de superficies grasosas", "Desengrase de maquinaria textil"],
    safety: ["Usar guantes de protección", "Evitar contacto con los ojos", "Almacenar en lugar fresco y ventilado"],
  },
  {
    id: "2",
    name: "Desinfectante Clorado",
    slug: "desinfectante-clorado",
    shortDescription: "Desinfectante clorado para superficies y equipos en la industria alimentaria.",
    description: "Desinfectante de amplio espectro a base de cloro, formulado para la desinfección de superficies, equipos y utensilios en la industria alimentaria y hospitalaria.",
    image: product2,
    line: "Industria Alimentaria",
    type: "Desinfectantes",
    industry: ["Industria Alimentaria", "Hoteles y Restaurantes"],
    presentations: ["20 L", "5 L", "1 L"],
    benefits: ["Amplio espectro", "Acción rápida", "Grado alimentario"],
    specs: [
      { label: "pH", value: "12.0 - 13.0" },
      { label: "Apariencia", value: "Líquido transparente" },
      { label: "Cloro activo", value: "5%" },
      { label: "Densidad", value: "1.08 g/cm³" },
    ],
    applications: ["Desinfección de superficies de contacto con alimentos", "Sanitización de equipos de cocina", "Limpieza de áreas de producción"],
    safety: ["No mezclar con ácidos", "Usar en áreas ventiladas", "Protección ocular requerida"],
  },
  {
    id: "3",
    name: "Desengrasante Industrial",
    slug: "desengrasante-industrial",
    shortDescription: "Desengrasante concentrado para maquinaria y superficies industriales.",
    description: "Potente desengrasante industrial formulado para la eliminación de grasas pesadas, aceites minerales y residuos industriales en maquinaria y superficies metálicas.",
    image: product3,
    line: "Mantenimiento Industrial",
    type: "Desengrasantes",
    industry: ["Mantenimiento Industrial"],
    presentations: ["20 L", "5 L"],
    benefits: ["Biodegradable", "No corrosivo", "Alta concentración"],
    specs: [
      { label: "pH", value: "12.5 - 13.5" },
      { label: "Apariencia", value: "Líquido verde" },
      { label: "Olor", value: "Cítrico" },
      { label: "Densidad", value: "1.05 g/cm³" },
    ],
    applications: ["Desengrase de motores", "Limpieza de pisos industriales", "Mantenimiento de maquinaria"],
    safety: ["Usar equipo de protección personal", "No ingerir", "Mantener fuera del alcance de niños"],
  },
  {
    id: "4",
    name: "Detergente Textil Líquido",
    slug: "detergente-textil-liquido",
    shortDescription: "Detergente líquido especializado para textiles industriales y hotelería.",
    description: "Detergente líquido de alta eficiencia para el lavado de textiles en lavanderías industriales y hotelería. Formulación suave que protege las fibras.",
    image: product4,
    line: "Lavandería Industrial",
    type: "Detergentes",
    industry: ["Lavandería Industrial", "Hoteles y Restaurantes"],
    presentations: ["20 L", "5 L", "1 L"],
    benefits: ["Protege fibras", "Baja espuma", "Apto para agua fría"],
    specs: [
      { label: "pH", value: "7.0 - 8.5" },
      { label: "Apariencia", value: "Líquido azul claro" },
      { label: "Olor", value: "Floral" },
      { label: "Densidad", value: "1.02 g/cm³" },
    ],
    applications: ["Lavado de sábanas y toallas", "Limpieza de uniformes", "Lavado de manteles"],
    safety: ["Producto de baja toxicidad", "Enjuagar en caso de contacto con la piel"],
  },
  {
    id: "5",
    name: "Blanqueador Líquido",
    slug: "blanqueador-liquido",
    shortDescription: "Blanqueador concentrado para textiles y superficies.",
    description: "Blanqueador líquido concentrado con acción desinfectante para el blanqueamiento de textiles y la desinfección de superficies en entornos industriales y hospitalarios.",
    image: product5,
    line: "Lavandería Industrial",
    type: "Desinfectantes",
    industry: ["Lavandería Industrial", "Hoteles y Restaurantes"],
    presentations: ["20 L", "5 L"],
    benefits: ["Alto poder blanqueante", "Acción desinfectante", "Concentrado"],
    specs: [
      { label: "pH", value: "12.0 - 13.0" },
      { label: "Apariencia", value: "Líquido amarillo claro" },
      { label: "Cloro activo", value: "8%" },
      { label: "Densidad", value: "1.12 g/cm³" },
    ],
    applications: ["Blanqueamiento de textiles blancos", "Desinfección de superficies", "Tratamiento de agua"],
    safety: ["No mezclar con otros productos químicos", "Usar protección respiratoria", "Almacenar en lugar oscuro"],
  },
  {
    id: "6",
    name: "Limpiador Multiusos Concentrado",
    slug: "limpiador-multiusos-concentrado",
    shortDescription: "Limpiador multiusos para pisos y superficies en general.",
    description: "Limpiador multiusos concentrado con fragancia agradable, ideal para la limpieza diaria de pisos, paredes y superficies en hoteles, restaurantes e instituciones educativas.",
    image: product6,
    line: "Hoteles y Restaurantes",
    type: "Solventes",
    industry: ["Hoteles y Restaurantes", "Mantenimiento Industrial"],
    presentations: ["20 L", "5 L", "1 L", "Caja 4x5L"],
    benefits: ["Fragancia duradera", "Biodegradable", "Rendimiento superior"],
    specs: [
      { label: "pH", value: "7.0 - 8.0" },
      { label: "Apariencia", value: "Líquido amarillo" },
      { label: "Olor", value: "Limón" },
      { label: "Densidad", value: "1.01 g/cm³" },
    ],
    applications: ["Limpieza de pisos", "Limpieza de baños", "Limpieza de áreas comunes"],
    safety: ["Producto seguro para uso diario", "Enjuagar con agua en caso de irritación"],
  },
];

export const productLines = ["Lavandería Industrial", "Industria Alimentaria", "Hoteles y Restaurantes", "Mantenimiento Industrial"];
export const productTypes = ["Detergentes", "Desinfectantes", "Solventes", "Desengrasantes"];
export const industries = ["Lavandería Industrial", "Industria Alimentaria", "Hoteles y Restaurantes", "Mantenimiento Industrial"];
export const presentations = ["20 L", "5 L", "1 L", "Saco 25 kg", "Caja 4x5L"];
