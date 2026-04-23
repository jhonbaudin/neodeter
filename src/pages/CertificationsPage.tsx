import { FileCheck, Factory, FlaskConical, Leaf, ShieldCheck, Users } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { content } from "@/content/content";

const qualityBlocks = [
  {
    icon: ShieldCheck,
    title: "Control de calidad",
    description:
      "Trabajamos con control de calidad constante en formulación, producción y entrega para sostener un servicio confiable.",
  },
  {
    icon: FlaskConical,
    title: "Documentación técnica",
    description:
      "Ponemos a disposición respaldo técnico y comercial para facilitar la evaluación de cada línea de producto.",
  },
  {
    icon: Users,
    title: "Asesoría especializada",
    description:
      "La recomendación del producto se apoya en acompañamiento técnico y en el entendimiento de cada proceso operativo.",
  },
  {
    icon: Leaf,
    title: "Enfoque ambiental",
    description:
      "Mantenemos un compromiso activo con formulaciones y prácticas alineadas con el cuidado del entorno.",
  },
  {
    icon: Factory,
    title: "Fabricación local",
    description:
      "La producción en Perú y la cercanía comercial nos permiten responder con mayor rapidez a cada cliente.",
  },
  {
    icon: FileCheck,
    title: "Respaldo documental",
    description:
      "Esta sección está orientada a reunir fichas, hojas de seguridad y respaldos documentales de cada solución.",
  },
];

const splitStatement = (statement: string) => {
  const [title, ...bodyParts] = statement.split("\n");

  return {
    title,
    body: bodyParts.join("\n"),
  };
};

const CertificationsPage = () => {
  const { title, body } = splitStatement(content.company.qualityPolicy);

  return (
    <Layout>
      <Seo
        title="Calidad, respaldo y documentación técnica"
        description="Conoce el enfoque de Neo Deter del Perú en control de calidad, respaldo documental y acompañamiento técnico para operaciones B2B."
        path="/certificaciones"
      />

      <PageBanner
        title="Certificaciones y respaldo"
        subtitle="Compromiso con la calidad, la documentación técnica y el respaldo comercial para distintas operaciones industriales."
      />

      <div className="section-container py-12">
        <section className="mb-14">
          <div className="mb-8 max-w-3xl">
            <span className="section-label">Calidad</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground">Política de calidad</h2>
          </div>

          <div className="surface-panel p-8 md:p-10">
            <p className="leading-8 text-muted-foreground">
              <span className="mb-4 block font-semibold text-foreground">{title}</span>
              <span className="whitespace-pre-line">{body}</span>
            </p>
          </div>
        </section>

        <div className="mb-8 max-w-3xl">
          <span className="section-label">Respaldo comercial</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground">
            Calidad, soporte técnico y documentación para cada operación
          </h2>
          <p className="mt-4 text-muted-foreground leading-8">
            Compartimos los criterios con los que abordamos calidad, soporte técnico y respaldo comercial
            para acompañar a nuestros clientes en sus procesos de evaluación y compra.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {qualityBlocks.map((block) => (
            <div key={block.title} className="surface-panel p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8">
                <block.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{block.description}</p>
            </div>
          ))}
        </div>

        <section className="mt-14 overflow-hidden rounded-[1.75rem] gradient-primary p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
            <div className="rounded-[1.5rem] bg-slate-950/18 p-6 shadow-[0_24px_60px_-34px_rgba(5,20,38,0.72)] ring-1 ring-white/12 backdrop-blur-sm md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Soporte comercial
              </p>
              <h3 className="mt-3 text-3xl font-bold text-white">
                Solicita fichas técnicas, hojas de seguridad o información de respaldo
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white">
                Nuestro equipo puede orientarte y compartir la información necesaria para evaluar
                la solución más adecuada para tu operación.
              </p>
            </div>
            <Button asChild size="lg" variant="hero">
              <a href={content.contact.emailHref}>Solicitar información</a>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CertificationsPage;
