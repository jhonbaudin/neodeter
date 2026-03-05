import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { ShieldCheck, Leaf, FlaskConical, Award, FileCheck, Recycle } from "lucide-react";

const certifications = [
  { icon: ShieldCheck, title: "ISO 9001:2015", desc: "Sistema de gestión de calidad certificado, asegurando procesos estandarizados y mejora continua en todas nuestras operaciones." },
  { icon: FlaskConical, title: "ISO 14001:2015", desc: "Gestión ambiental certificada, minimizando el impacto de nuestras operaciones en el medio ambiente." },
  { icon: Award, title: "NSF International", desc: "Productos registrados y aprobados para uso en la industria alimentaria bajo los estándares más exigentes." },
  { icon: FileCheck, title: "HACCP", desc: "Cumplimiento de análisis de peligros y puntos críticos de control para productos de grado alimentario." },
  { icon: Leaf, title: "Compromiso Ambiental", desc: "Formulaciones biodegradables y procesos de producción sostenibles que reducen la huella ecológica." },
  { icon: Recycle, title: "Envases Reciclables", desc: "Programa de reciclaje de envases y reducción de residuos plásticos en nuestra cadena de suministro." },
];

const CertificationsPage = () => {
  return (
    <Layout>
      <PageBanner title="Certificaciones" subtitle="Comprometidos con los más altos estándares de calidad y seguridad." />

      <div className="section-container py-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Estándares de Calidad</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Nuestros productos y procesos están respaldados por certificaciones internacionales que garantizan la calidad, seguridad y responsabilidad ambiental.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-card rounded-lg border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <cert.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.desc}</p>
            </div>
          ))}
        </div>

        <section className="mt-16 gradient-primary rounded-lg p-8">
          <h3 className="text-xl font-bold text-primary-foreground mb-3">Nuestro Compromiso</h3>
          <p className="text-primary-foreground/80 max-w-2xl">
            Mantenemos un programa de mejora continua que incluye auditorías internas y externas, capacitación del personal y actualización constante de nuestros procesos para cumplir con las normativas más exigentes del mercado.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default CertificationsPage;
