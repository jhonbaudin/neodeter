import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplets,
  Factory,
  Hotel,
  Leaf,
  Package,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import AutoImageSlider from "@/components/AutoImageSlider";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { content } from "@/content/content";
import { products } from "@/data/products";
import industryFood from "@/assets/sectors/food/food-processing.jpg";
import industryLaundry from "@/assets/sectors/laundry/industrial-laundry.jpg";
import laundryIndustrialMachines from "@/assets/sectors/laundry/laundry-industrial-machines.webp";
import laundryCommercialLifestyle from "@/assets/sectors/laundry/laundry-commercial-lifestyle.webp";
import industryMaintenance from "@/assets/sectors/maintenance/industrial-maintenance.jpg";
import aquamaticLimon from "@/assets/products/neodeter/aquamatic-limon.jpg";

const solutionMap = {
  "Lavandería Industrial": {
    images: [
      { src: industryLaundry, alt: "Lavandería industrial" },
      { src: laundryIndustrialMachines, alt: "Equipos de lavandería industrial" },
    ],
    icon: Droplets,
    productFilters: ["Lavandería Industrial"],
  },
  "Lavandería Comercial": {
    images: [
      { src: laundryCommercialLifestyle, alt: "Lavandería comercial" },
      { src: aquamaticLimon, alt: "Aquamatic Limón" },
    ],
    icon: Package,
    productFilters: ["Lavandería Industrial"],
  },
  "Alimentos, Hoteles y Restaurantes": {
    images: [{ src: industryFood, alt: "Alimentos, hoteles y restaurantes" }],
    icon: Hotel,
    productFilters: ["Industria Alimentaria", "Hoteles y Restaurantes"],
  },
  "Mantenimiento Industrial": {
    images: [{ src: industryMaintenance, alt: "Mantenimiento industrial" }],
    icon: Wrench,
    productFilters: ["Mantenimiento Industrial"],
  },
} as const;

const industryCards = [
  {
    name: "Industria alimentaria",
    description: "Higiene y desinfección para áreas de proceso, superficies y equipos.",
    icon: Factory,
  },
  {
    name: "Hoteles y restaurantes",
    description: "Soluciones para cocina, housekeeping, textiles y áreas comunes.",
    icon: Hotel,
  },
  {
    name: "Lavanderías industriales",
    description: "Productos para lavado, remoción de manchas y cuidado textil.",
    icon: Droplets,
  },
  {
    name: "Agroindustria",
    description: "Apoyo a operaciones que requieren limpieza y control higiénico constante.",
    icon: Leaf,
  },
  {
    name: "Hospitales",
    description: "Rutinas de limpieza y desinfección orientadas a entornos sensibles.",
    icon: ShieldCheck,
  },
  {
    name: "Empresas de mantenimiento",
    description: "Líneas de desengrase, limpieza técnica y soporte para servicios externos.",
    icon: Wrench,
  },
] as const;

const IndustriesPage = () => {
  return (
    <Layout>
      <Seo
        title="Industrias y aplicaciones"
        description="Neo Deter del Perú atiende sectores como lavandería industrial, alimentos, hoteles, restaurantes, agroindustria, hospitales y mantenimiento."
        path="/industrias"
      />

      <PageBanner
        title="Industrias y aplicaciones"
        subtitle="Soluciones orientadas a los sectores donde la higiene, la desinfección y el mantenimiento son parte crítica de la operación."
      />

      <section className="section-container py-12">
        <div className="mb-8 max-w-3xl">
          <span className="section-label">Soluciones principales</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground">
            Soluciones organizadas según el tipo de operación
          </h2>
          <p className="mt-4 text-muted-foreground leading-8">
            Presentamos las principales líneas de trabajo de Neo Deter para ayudarte a identificar
            con mayor rapidez la solución más cercana a tu industria.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {content.solutions.map((solution) => {
            const visual = solutionMap[solution.name as keyof typeof solutionMap];
            const relatedProducts = products
              .filter((product) =>
                visual.productFilters.some((filter) => product.industry.includes(filter)),
              )
              .slice(0, 3);

            return (
              <div key={solution.name} className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-card">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <AutoImageSlider images={visual.images} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8">
                      <visual.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{solution.name}</h3>
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">{solution.description}</p>

                  {relatedProducts.length > 0 && (
                    <div className="mt-5 rounded-2xl border border-border/70 bg-muted/45 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Productos relacionados
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        {relatedProducts.map((product) => (
                          <li key={product.id}>• {product.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild size="sm">
                      <Link to="/productos">Ver productos</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link to="/contacto">
                        Solicitar asesoría <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="section-container">
          <div className="mb-8 max-w-3xl">
            <span className="section-label">Sectores priorizados</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground">
              Sectores que atendemos
            </h2>
            <p className="mt-4 text-muted-foreground leading-8">
              Trabajamos con operaciones que requieren soluciones de limpieza, desinfección y mantenimiento
              adaptadas a sus procesos, superficies y exigencias de higiene.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industryCards.map((industry) => (
              <Link
                key={industry.name}
                to={`/productos?industry=${encodeURIComponent(industry.name)}`}
                className="group rounded-[1.5rem] border border-border/80 bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8">
                  <industry.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{industry.name}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {industry.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                  Ver productos relacionados <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 gradient-primary">
        <div className="section-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="rounded-[1.5rem] bg-slate-950/18 p-6 shadow-[0_24px_60px_-34px_rgba(5,20,38,0.72)] ring-1 ring-white/12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white">Asesoría por sector</h3>
            <p className="mt-2 max-w-2xl text-base leading-8 text-white">
              Nuestro equipo puede orientarte sobre la línea de solución más adecuada para tu operación.
            </p>
          </div>
          <Button asChild size="lg" variant="hero">
            <Link to="/contacto">Contactar al equipo comercial</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default IndustriesPage;
