import {
  Building2,
  Clock3,
  Factory,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Seo from "@/components/Seo";
import { content } from "@/content/content";
import standImage from "@/assets/company/events/stand-booth.jpeg";
import teamImage from "@/assets/company/team/team-office.jpeg";


const pillars = [
  {
    icon: Clock3,
    title: "Trayectoria industrial",
    description:
      "Operacion peruana con origen en 1964 y experiencia sostenida en limpieza, desinfeccion, lavanderia y mantenimiento.",
  },
  {
    icon: Sparkles,
    title: "Soluciones integrales",
    description:
      "El enfoque comercial y tecnico se adapta a las necesidades de cada cliente, sector e infraestructura.",
  },
  {
    icon: Factory,
    title: "Fabricacion local",
    description:
      "La empresa combina produccion y atencion comercial en Lima para responder con mayor cercania al mercado.",
  },
  {
    icon: Leaf,
    title: "Compromiso ambiental",
    description:
      "La propuesta de valor incorpora formulaciones y practicas alineadas con cuidado del entorno y uso responsable.",
  },
  {
    icon: ShieldCheck,
    title: "Respaldo tecnico",
    description:
      "La asesoría tecnica forma parte del modelo comercial para recomendar lineas y procesos de uso segun cada operacion.",
  },
  {
    icon: Building2,
    title: "Cobertura multisectorial",
    description:
      "Neo Deter atiende operaciones industriales, horeca, lavanderias, agroindustria, hospitales y empresas de mantenimiento.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <Seo
        title="Nosotros"
        description="Conoce la trayectoria de Neo Deter del Peru, empresa peruana especializada en soluciones quimicas para limpieza, desinfeccion y mantenimiento industrial."
        path="/nosotros"
      />

      <PageBanner
        title="Nosotros"
        subtitle="Una base industrial y comercial construida para atender necesidades reales de higiene, desinfeccion y mantenimiento."
      />

      <div className="section-container space-y-16 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="surface-panel p-8">
            <span className="section-label">Perfil corporativo</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground">
              {content.company.legalName}
            </h2>
            <p className="mt-5 text-muted-foreground leading-8">{content.company.summary}</p>
            <p className="mt-5 text-muted-foreground leading-8">
              Fundada el 20 de julio de 1964, la empresa se ha consolidado como un proveedor confiable
              de soluciones para higiene, desinfeccion, lavanderia y mantenimiento industrial en Peru.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-muted/45 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Oficina comercial
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {content.contact.office.address}
                </p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-muted/45 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Fábrica
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {content.contact.factory.address}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="surface-panel overflow-hidden">
              <img src={teamImage} alt="Equipo de Neo Deter del Peru" className="h-72 w-full object-cover" />
            </div>
            <div className="surface-panel overflow-hidden">
              <img src={standImage} alt="Presencia comercial de Neo Deter del Peru" className="h-72 w-full object-cover" />
            </div>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <span className="section-label">Identidad corporativa</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground">Misión y visión</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[content.company.mission, content.company.vision].map((statement) => (
              <div key={statement} className="surface-panel p-8">
                <p className="whitespace-pre-line text-sm leading-7 text-muted-foreground">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8">
            <span className="section-label">Cómo trabajamos</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground">Nuestra forma de trabajo</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="surface-panel p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8">
                  <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="surface-panel gradient-primary p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                Fundacion
              </p>
              <p className="mt-2 text-4xl font-bold text-primary-foreground">1964</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                Especialidades
              </p>
              <p className="mt-2 text-4xl font-bold text-primary-foreground">{content.solutions.length}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                Sectores priorizados
              </p>
              <p className="mt-2 text-4xl font-bold text-primary-foreground">{content.industries.length}</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
