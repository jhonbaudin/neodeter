import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Droplets, Factory, Hotel, Wrench, Award, Package, Building2, Send } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import industryLaundry from "@/assets/industry-laundry.jpg";
import industryFood from "@/assets/industry-food.jpg";
import industryHotel from "@/assets/industry-hotel.jpg";
import industryMaintenance from "@/assets/industry-maintenance.jpg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const solutions = [
  { title: "Lavandería Industrial", desc: "Detergentes y productos especializados para lavanderías industriales.", icon: Droplets, image: industryLaundry },
  { title: "Industria Alimentaria", desc: "Productos sanitizantes de grado alimentario para procesos industriales.", icon: Factory, image: industryFood },
  { title: "Hoteles y Restaurantes", desc: "Soluciones de limpieza para cocinas, habitaciones y áreas comunes.", icon: Hotel, image: industryHotel },
  { title: "Mantenimiento Industrial", desc: "Desengrasantes y limpiadores para maquinaria y equipos pesados.", icon: Wrench, image: industryMaintenance },
];

const stats = [
  { value: "+60", label: "Años en el Mercado", icon: Award },
  { value: "70+", label: "Productos Especializados", icon: Package },
  { value: "100+", label: "Industrias Atendidas", icon: Building2 },
];

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Consulta enviada", description: "Nos pondremos en contacto contigo pronto." });
    setForm({ nombre: "", empresa: "", email: "", mensaje: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-primary opacity-80" />
        </div>
        <div className="relative section-container py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              Soluciones químicas profesionales para limpieza industrial
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Detergentes y desinfectantes especializados para lavanderías, industria alimentaria, hoteles y mantenimiento.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/productos">Ver Productos</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contacto">Solicitar Asesoría</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Nuestras Soluciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol) => (
              <Link key={sol.title} to="/industrias" className="group bg-card rounded-lg border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <sol.icon className="w-5 h-5 text-secondary" />
                    <h3 className="font-semibold text-foreground">{sol.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{sol.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 bg-muted/50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia + Contacto */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Más de 60 Años de Experiencia</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-6 bg-card rounded-lg border border-border">
                  <s.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Solicita Asesoría Técnica</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm" placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
                <input className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm" placeholder="Empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
                <input className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <textarea className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm" rows={3} placeholder="Mensaje" value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} />
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" /> Enviar Consulta
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
