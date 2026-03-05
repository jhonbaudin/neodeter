import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Download, MessageCircle, ChevronRight, Sparkles, Settings, Search } from "lucide-react";
import { useState } from "react";

const tabs = ["Descripción", "Aplicaciones", "Especificaciones", "Seguridad"];

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("Descripción");
  const [selectedPresentation, setSelectedPresentation] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="section-container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Producto no encontrado</h1>
          <Button asChild className="mt-4"><Link to="/productos">Volver al catálogo</Link></Button>
        </div>
      </Layout>
    );
  }

  const related = products.filter((p) => p.id !== product.id && p.industry.some((i) => product.industry.includes(i))).slice(0, 3);
  const benefitIcons = [Sparkles, Settings, Search];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="section-container py-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/productos" className="hover:text-foreground">Productos</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="section-container pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-muted rounded-lg overflow-hidden aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-1">{product.name}</h1>
            <p className="text-secondary font-medium mb-4">Línea: {product.line}</p>
            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="space-y-2 mb-6">
              {product.benefits.map((b, i) => (
                <div key={b} className="flex items-center gap-2 text-foreground">
                  {benefitIcons[i] && (() => { const Icon = benefitIcons[i]; return <Icon className="w-5 h-5 text-accent" />; })()}
                  <span className="font-medium">{b}</span>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-2">Presentaciones disponibles:</h4>
              <div className="flex flex-wrap gap-2">
                {product.presentations.map((p, i) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPresentation(i)}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                      selectedPresentation === i
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:border-primary"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="flex-1">
                <Download className="w-4 h-4 mr-2" /> Descargar Ficha Técnica
              </Button>
              <Button size="lg" variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <MessageCircle className="w-4 h-4 mr-2" /> Solicitar Cotización
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex border-b border-border mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              {activeTab === "Descripción" && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Descripción del Producto</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              )}
              {activeTab === "Aplicaciones" && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Aplicaciones</h3>
                  <ul className="space-y-2">
                    {product.applications.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === "Especificaciones" && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Especificaciones Técnicas</h3>
                  <div className="space-y-2">
                    {product.specs.map((s) => (
                      <div key={s.label} className="flex justify-between py-2 border-b border-border">
                        <span className="font-medium text-foreground">{s.label}</span>
                        <span className="text-muted-foreground">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "Seguridad" && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Información de Seguridad</h3>
                  <ul className="space-y-2">
                    {product.safety.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {activeTab === "Descripción" && (
              <div className="bg-card rounded-lg border border-border p-5">
                <h4 className="font-semibold text-foreground mb-3">Especificaciones</h4>
                {product.specs.map((s) => (
                  <div key={s.label} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="font-medium text-foreground text-sm">{s.label}</span>
                    <span className="text-muted-foreground text-sm">{s.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-foreground mb-6">Productos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="gradient-accent py-10">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-accent-foreground">¿Necesitas asesoría técnica?</h3>
            <p className="text-accent-foreground/80">Nuestro equipo te ayudará a elegir el producto ideal para tu industria.</p>
          </div>
          <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
            <MessageCircle className="w-4 h-4 mr-2" /> Contáctanos Ahora
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetailPage;
