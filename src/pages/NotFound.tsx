import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <Seo title="404" description="La pagina solicitada no existe." noIndex />
      <div className="section-container flex min-h-[60vh] items-center justify-center py-16">
        <div className="surface-panel max-w-xl p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
          <h1 className="mt-4 text-4xl font-bold text-foreground">Pagina no encontrada</h1>
          <p className="mt-4 text-muted-foreground leading-7">
            La ruta solicitada no existe o fue movida. Puedes volver al inicio y continuar navegando.
          </p>
          <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            Volver al inicio
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
