import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";

const values = [
  { icon: Target, title: "Innovación", desc: "Investigación constante para desarrollar productos de última generación." },
  { icon: Heart, title: "Compromiso", desc: "Dedicación total a la satisfacción de nuestros clientes y socios." },
  { icon: Award, title: "Calidad", desc: "Estándares rigurosos en cada etapa de producción y distribución." },
  { icon: Users, title: "Responsabilidad", desc: "Comprometidos con el medio ambiente y la seguridad ocupacional." },
];

const AboutPage = () => {
  return (
    <Layout>
      <PageBanner title="Nosotros" subtitle="Más de 60 años brindando soluciones químicas profesionales." />

      <div className="section-container py-12 space-y-16">
        {/* Historia */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Nuestra Historia</h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Fundada hace más de 60 años, nuestra empresa ha sido pionera en el desarrollo y distribución de productos químicos para la limpieza y desinfección industrial. Desde nuestros inicios, hemos trabajado estrechamente con industrias de diversos sectores, adaptando nuestras fórmulas a las necesidades cambiantes del mercado y manteniendo siempre los más altos estándares de calidad y seguridad.
          </p>
        </section>

        {/* Misión y Visión */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Misión</h3>
            </div>
            <p className="text-muted-foreground">
              Proveer soluciones químicas de limpieza y desinfección industrial de alta calidad, contribuyendo a la higiene, seguridad y eficiencia operativa de nuestros clientes en todos los sectores productivos.
            </p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Eye className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Visión</h3>
            </div>
            <p className="text-muted-foreground">
              Ser la empresa líder en soluciones químicas industriales en la región, reconocida por la innovación, calidad y compromiso con la sostenibilidad ambiental y la satisfacción del cliente.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-lg border border-border p-5 text-center">
                <v.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experiencia */}
        <section className="gradient-primary rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-primary-foreground" />
            <h2 className="text-2xl font-bold text-primary-foreground">Experiencia que Respalda</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary-foreground">+60</div>
              <div className="text-sm text-primary-foreground/70">Años</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground">70+</div>
              <div className="text-sm text-primary-foreground/70">Productos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground">100+</div>
              <div className="text-sm text-primary-foreground/70">Clientes</div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
