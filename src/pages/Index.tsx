import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import {
  Droplets, Factory, Hotel, Wrench, Award, Package, Building2, Send,
  ShieldCheck, Clock, CheckCircle2, ArrowRight, Star, Phone, Zap,
  TrendingUp, Users, MessageCircle
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import industryLaundry from "@/assets/industry-laundry.jpg";
import industryFood from "@/assets/industry-food.jpg";
import industryHotel from "@/assets/industry-hotel.jpg";
import industryMaintenance from "@/assets/industry-maintenance.jpg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const solutions = [
  { title: "Lavandería Industrial", desc: "Detergentes especializados que reducen costos operativos hasta un 30%.", icon: Droplets, image: industryLaundry },
  { title: "Industria Alimentaria", desc: "Productos de grado alimentario que cumplen con normas HACCP y BPM.", icon: Factory, image: industryFood },
  { title: "Hoteles y Restaurantes", desc: "Soluciones que garantizan higiene impecable y reducen tiempos de limpieza.", icon: Hotel, image: industryHotel },
  { title: "Mantenimiento Industrial", desc: "Desengrasantes de alto rendimiento para maquinaria pesada y pisos.", icon: Wrench, image: industryMaintenance },
];

const stats = [
  { value: "+60", label: "Años en el Mercado", icon: Clock },
  { value: "70+", label: "Productos Especializados", icon: Package },
  { value: "100+", label: "Industrias Atendidas", icon: Building2 },
  { value: "98%", label: "Clientes Satisfechos", icon: Star },
];

const trustLogos = [
  "Alicorp", "Gloria", "Backus", "Sodexo", "Marriott", "San Fernando"
];

const testimonials = [
  {
    quote: "Desde que implementamos los productos de QuímicaPro, redujimos nuestros costos de limpieza en un 35% y mejoramos los estándares de higiene.",
    author: "Carlos Méndez",
    role: "Gerente de Operaciones",
    company: "Lavandería Industrial del Sur",
  },
  {
    quote: "La asesoría técnica que nos brindaron fue clave para cumplir con las certificaciones HACCP en nuestra planta de alimentos.",
    author: "María Fernández",
    role: "Jefa de Calidad",
    company: "Procesadora de Alimentos SAC",
  },
  {
    quote: "Excelente relación calidad-precio. Los desengrasantes industriales superaron nuestras expectativas en rendimiento.",
    author: "Roberto Sánchez",
    role: "Director de Mantenimiento",
    company: "Metalúrgica Nacional",
  },
];

const benefits = [
  { icon: Zap, title: "Resultados inmediatos", desc: "Fórmulas de acción rápida que optimizan tiempos de limpieza." },
  { icon: TrendingUp, title: "Reduce costos", desc: "Alta concentración que reduce el costo por uso hasta un 40%." },
  { icon: ShieldCheck, title: "Certificaciones", desc: "Productos con certificaciones ISO, NSF y HACCP." },
  { icon: Users, title: "Asesoría técnica", desc: "Equipo de especialistas disponible para tu industria." },
];

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "¡Consulta enviada!", description: "Un asesor técnico te contactará en menos de 24 horas." });
    setForm({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <Layout>
      {/* Hero — Conversion focused */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-primary opacity-85" />
        </div>
        <div className="relative section-container py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              +60 años de experiencia · Certificados ISO 9001
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-5">
              Reduce costos de limpieza industrial hasta un{" "}
              <span className="text-accent">40%</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-4 max-w-xl">
              Detergentes y desinfectantes de alta concentración para lavanderías, industria alimentaria, hoteles y mantenimiento industrial.
            </p>
            <div className="flex items-center gap-4 text-primary-foreground/70 text-sm mb-8">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-accent" /> Asesoría gratuita</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-accent" /> Envío nacional</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-accent" /> Ficha técnica</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="xl" variant="hero">
                <Link to="/contacto">
                  Solicitar Cotización Gratis <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="hero-outline">
                <Link to="/productos">Ver Catálogo</Link>
              </Button>
            </div>
            <p className="text-primary-foreground/50 text-xs mt-4">Respuesta en menos de 24 horas · Sin compromiso</p>
          </div>
        </div>
      </section>

      {/* Social Proof — Client Logos */}
      <section className="py-8 border-b border-border bg-card">
        <div className="section-container">
          <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wider mb-5">
            Empresas que confían en nosotros
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustLogos.map((name) => (
              <div key={name} className="text-muted-foreground/40 font-bold text-lg md:text-xl tracking-wide">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — Value Proposition */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              ¿Por qué elegir QuímicaPro?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Más de 60 años formulando productos que optimizan la operación de industrias en todo el país.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card rounded-lg border border-border p-6 text-center shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluciones por industria */}
      <section className="py-16 bg-muted/50">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Soluciones por Industria</h2>
              <p className="text-muted-foreground">Productos especializados para cada sector productivo.</p>
            </div>
            <Button asChild variant="link" className="mt-2 md:mt-0">
              <Link to="/industrias">Ver todas las industrias <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol) => (
              <Link key={sol.title} to="/industrias" className="group bg-card rounded-lg border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                <div className="aspect-video overflow-hidden relative">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <sol.icon className="w-5 h-5 text-secondary" />
                    <h3 className="font-semibold text-foreground">{sol.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{sol.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 group-hover:gap-2 transition-all">
                    Ver soluciones <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Productos Destacados</h2>
              <p className="text-muted-foreground">Nuestros productos de mayor demanda en el mercado industrial.</p>
            </div>
            <Button asChild variant="link" className="mt-2 md:mt-0">
              <Link to="/productos">Ver catálogo completo <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Social Proof */}
      <section className="py-16 bg-muted/50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-muted-foreground">Resultados reales de empresas que confían en nosotros.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-card rounded-lg border border-border p-6 shadow-card relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground text-sm leading-relaxed mb-5">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-primary font-medium">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + Experiencia */}
      <section className="py-16">
        <div className="section-container">
          <div className="gradient-primary rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-8">
              Respaldados por décadas de experiencia
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <s.icon className="w-8 h-8 text-primary-foreground/60 mx-auto mb-2" />
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground">{s.value}</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Form — Main Conversion */}
      <section className="py-16 bg-muted/50" id="cotizacion">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Solicita tu cotización sin compromiso
              </h2>
              <p className="text-muted-foreground mb-6">
                Completa el formulario y un asesor técnico especializado te contactará en menos de 24 horas con una propuesta personalizada para tu industria.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Asesoría técnica personalizada y gratuita",
                  "Cotización detallada con precios por volumen",
                  "Fichas técnicas y hojas de seguridad incluidas",
                  "Muestras gratuitas para evaluación",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">¿Prefieres llamarnos?</p>
                  <p className="text-lg font-bold text-primary">+51 999 999 999</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-card-hover">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-accent">Respuesta en menos de 24h</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-5">Solicitar Cotización</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="Nombre completo *" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
                </div>
                <div>
                  <input className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="Empresa *" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  <input className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" type="tel" placeholder="Teléfono" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
                </div>
                <div>
                  <textarea className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" rows={3} placeholder="¿Qué productos necesitas? ¿Para qué industria?" value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} />
                </div>
                <Button type="submit" size="lg" variant="cta" className="w-full shadow-cta">
                  <Send className="w-4 h-4 mr-2" /> Solicitar Cotización Gratis
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Sin compromiso · Tus datos están seguros
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="gradient-accent py-12">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-3">
            ¿Listo para optimizar tu limpieza industrial?
          </h2>
          <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">
            Únete a más de 100 empresas que ya redujeron sus costos con nuestras soluciones.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="xl" variant="hero-outline" className="border-accent-foreground/40 text-accent-foreground hover:bg-accent-foreground/10">
              <Link to="/contacto">
                Solicitar Cotización <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-accent-foreground hover:bg-accent-foreground/10">
              <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
