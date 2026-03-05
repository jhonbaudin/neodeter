import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import industryFood from "@/assets/industry-food.jpg";
import industryLaundry from "@/assets/industry-laundry.jpg";
import industryHotel from "@/assets/industry-hotel.jpg";
import industryMaintenance from "@/assets/industry-maintenance.jpg";
import industryHospital from "@/assets/industry-hospital.jpg";
import industryAgro from "@/assets/industry-agro.jpg";
import { MessageCircle } from "lucide-react";

const industriesData = [
  { title: "Industria Alimentaria", desc: "Productos sanitizantes para equipos y superficies en el procesamiento de alimentos, garantizando los más altos estándares de higiene.", image: industryFood, filter: "Industria Alimentaria" },
  { title: "Lavanderías Industriales", desc: "Detergentes especializados para lavanderías y tintorerías industriales con formulaciones de alto rendimiento.", image: industryLaundry, filter: "Lavandería Industrial" },
  { title: "Hoteles y Restaurantes", desc: "Soluciones de limpieza para cocinas, habitaciones y áreas comunes en el sector hotelero y gastronómico.", image: industryHotel, filter: "Hoteles y Restaurantes" },
  { title: "Hospitales y Clínicas", desc: "Detergentes hospitalarios para limpieza y desinfección en áreas críticas y de alto riesgo.", image: industryHospital, filter: "Industria Alimentaria" },
  { title: "Agroindustria", desc: "Desinfectantes y productos de higiene para el control sanitario en el sector agroindustrial.", image: industryAgro, filter: "Mantenimiento Industrial" },
  { title: "Mantenimiento Industrial", desc: "Desengrasantes y limpiadores para maquinaria, equipos pesados y pisos industriales.", image: industryMaintenance, filter: "Mantenimiento Industrial" },
];

const IndustriesPage = () => {
  return (
    <Layout>
      <PageBanner title="Industrias y Soluciones" subtitle="Soluciones integrales de limpieza y desinfección para diversos sectores industriales." />

      <section className="section-container py-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Sectores que Atendemos</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Brindamos soluciones químicas profesionales adaptadas a las necesidades de cada industria, garantizando resultados efectivos y la máxima higiene.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => {
            const relatedProducts = products.filter((p) => p.industry.includes(ind.filter)).slice(0, 2);
            return (
              <div key={ind.title} className="bg-card rounded-lg border border-border overflow-hidden shadow-card">
                <div className="aspect-video overflow-hidden">
                  <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-lg mb-2">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{ind.desc}</p>
                  {relatedProducts.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-foreground mb-1">Productos recomendados:</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5">
                        {relatedProducts.map((p) => (
                          <li key={p.id}>• {p.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Button asChild size="sm">
                    <Link to="/productos">Ver Soluciones</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="gradient-primary py-10">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-primary-foreground">+60 Años de Experiencia</h3>
            <p className="text-primary-foreground/80">Nuestro equipo te ayudará a elegir el producto ideal para tu industria.</p>
          </div>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <MessageCircle className="w-4 h-4 mr-2" /> Contáctanos Ahora
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default IndustriesPage;
