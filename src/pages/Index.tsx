import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Clock,
  Droplets,
  Factory,
  FlaskConical,
  Hotel,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Layout from "@/components/Layout";
import AutoImageSlider from "@/components/AutoImageSlider";
import ProductCard from "@/components/ProductCard";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { companyHighlights, content } from "@/content/content";
import { hasRealProductImage, products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import { buildInquiryMailto } from "@/lib/contact";
import industryLaundry from "@/assets/sectors/laundry/industrial-laundry.jpg";
import laundryIndustrialMachines from "@/assets/sectors/laundry/laundry-industrial-machines.webp";
import laundryCommercialLifestyle from "@/assets/sectors/laundry/laundry-commercial-lifestyle.jpeg";
import industrialFloorCleaning from "@/assets/sectors/maintenance/industrial-floor-cleaning.jpeg";
import industrialPlantVisit from "@/assets/sectors/maintenance/industrial-plant-visit.jpeg";
import aquamaticLimon from "@/assets/products/neodeter/aquamatic-limon.jpg";
import neoclorDxPlusUsage from "@/assets/products/neodeter/neoclor-dx-plus-usage.webp";
import neocloramFpUsage from "@/assets/products/neodeter/neocloram-fp-usage.webp";
import neograsRemoverPlusUsage from "@/assets/products/neodeter/neogras-remover-plus-usage.webp";
import neograsKitchenCleaning from "@/assets/sectors/food/neogras-kitchen-cleaning.webp";

const solutionVisuals = {
  "Lavandería Industrial": {
    icon: Droplets,
    images: [
      { src: industryLaundry, alt: "Lavandería industrial" },
      { src: laundryIndustrialMachines, alt: "Equipos de lavandería industrial" },
    ],
  },
  "Lavandería Comercial": {
    icon: Package,
    images: [
      { src: laundryCommercialLifestyle, alt: "Lavandería comercial" },
      { src: aquamaticLimon, alt: "Aquamatic Limón" },
    ],
  },
  "Alimentos, Hoteles y Restaurantes": {
    icon: Hotel,
    images: [
      { src: neoclorDxPlusUsage, alt: "Desinfección de alimentos con Neoclor DX Plus" },
      { src: neocloramFpUsage, alt: "Limpieza y desinfección de superficies con Neocloram FP" },
      { src: neograsRemoverPlusUsage, alt: "Desengrase de hornos y cocinas" },
      { src: neograsKitchenCleaning, alt: "Limpieza de campanas y superficies de cocina industrial" },
    ],
  },
  "Mantenimiento Industrial": {
    icon: Wrench,
    images: [
      { src: industrialPlantVisit, alt: "Visita técnica a operación industrial" },
      { src: industrialFloorCleaning, alt: "Limpieza de áreas industriales con SS Industrial" },
    ],
  },
} as const;

const advantages = [
  { icon: Clock, title: "Trayectoria comprobada", description: content.advantages[0] },
  { icon: Factory, title: "Operacion local", description: content.advantages[1] },
  { icon: FlaskConical, title: "Portafolio adaptable", description: content.advantages[2] },
  { icon: ShieldCheck, title: "Respaldo tecnico", description: content.advantages[3] },
  { icon: Sparkles, title: "Enfoque ambiental", description: content.advantages[4] },
  { icon: Building2, title: "Control permanente", description: content.advantages[6] },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: content.company.legalName,
  url: content.seo.siteUrl,
  slogan: content.company.tagline,
  description: content.company.description,
  foundingDate: content.company.foundedDate,
  telephone: content.contact.phoneDisplay,
  email: content.contact.email,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: content.contact.phoneDisplay,
      email: content.contact.email,
      areaServed: "PE",
      availableLanguage: "es",
    },
    ...content.contact.centralPhones.map((phone) => ({
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: phone.display,
      email: content.contact.email,
      areaServed: "PE",
      availableLanguage: "es",
    })),
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PE",
    addressLocality: "Lima",
    streetAddress: content.contact.office.address,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: content.seo.siteName,
  url: content.seo.siteUrl,
  inLanguage: "es-PE",
};

const Index = () => {
  const { toast } = useToast();
  const featuredProducts = products.filter(hasRealProductImage).slice(0, 3);
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.location.href = buildInquiryMailto(form, "Solicitud comercial desde neodeter.pe");
    toast({
      title: "Abriremos tu correo",
      description: "Preparamos tu solicitud para que la envíes directamente al equipo comercial.",
    });
    setForm({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <Layout>
      <Seo
        title="Soluciones quimicas para limpieza y desinfeccion industrial"
        description={content.seo.defaultDescription}
        path="/"
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />

      <section className="relative overflow-hidden border-b border-primary/10 gradient-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(65_79%_46%_/_0.22),transparent_24%),radial-gradient(circle_at_78%_22%,hsl(83_68%_44%_/_0.16),transparent_28%)]" />
        <div className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-white/8 blur-3xl" />
        <div className="absolute bottom-[-5rem] right-[-3rem] h-64 w-64 rounded-full bg-accent/25 blur-3xl" />

        <div className="relative section-container py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr,0.85fr]">
            <div className="max-w-3xl rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(4,24,54,0.34),rgba(4,24,54,0.14))] p-6 shadow-[0_28px_70px_-40px_rgba(0,0,0,0.4)] backdrop-blur-[2px] md:p-8">
              <div className="mb-6 flex w-full max-w-full flex-col items-start gap-1.5 rounded-[1.5rem] border border-white/24 bg-white/12 px-4 py-2 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-white/90 backdrop-blur-sm sm:inline-flex sm:w-auto sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:text-[11px] sm:tracking-[0.22em]">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="min-w-0 break-words whitespace-normal">{content.company.tagline}</span>
              </div>

              <h1 className="max-w-[10ch] text-[2.2rem] font-bold leading-[1.04] text-white drop-shadow-[0_20px_44px_rgba(0,0,0,0.3)] sm:max-w-3xl sm:text-4xl md:text-6xl">
                {content.hero.title}
              </h1>
              <p
                className="mt-5 max-w-[18rem] text-base leading-7 !text-white sm:max-w-2xl sm:text-lg sm:leading-8 md:text-xl"
                style={{ color: "rgba(255, 255, 255, 0.96)", textShadow: "0 8px 24px rgba(0, 0, 0, 0.2)" }}
              >
                {content.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {content.productCategories.slice(0, 4).map((category) => (
                  <Link
                    key={category}
                    to={`/productos?category=${encodeURIComponent(category)}`}
                    className="rounded-full border border-white/32 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/18"
                  >
                    {category}
                  </Link>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="xl" variant="hero">
                  <Link to="/productos">
                    {content.hero.ctaPrimary} <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="hero-outline">
                  <Link to="/contacto">{content.hero.ctaSecondary}</Link>
                </Button>
              </div>
            </div>

            <div className="surface-panel relative overflow-hidden p-7 md:p-8">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-accent/15 blur-2xl" />
              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Perfil corporativo
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-foreground">
                      {content.company.name}
                    </h2>
                  </div>
                  <span className="rounded-full bg-primary/6 px-3 py-1 text-xs font-semibold text-primary">
                    Desde {content.company.foundedYear}
                  </span>
                </div>

                <p className="text-sm leading-7 text-muted-foreground">
                  {content.company.summary}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  {companyHighlights.map((highlight) => (
                    <div key={highlight.label} className="rounded-2xl border border-border/70 bg-muted/55 p-4">
                      <p className="text-2xl font-bold text-primary">{highlight.value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{highlight.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-secondary/12 bg-secondary/8 p-5">
                  <p className="text-sm font-semibold text-foreground">Cobertura de atencion</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {content.industries.map((industry) => (
                      <span
                        key={industry}
                        className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">Por qué Neo Deter</span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">
                Experiencia industrial, fabricación local y atención especializada
              </h2>
            </div>
            <p className="max-w-xl text-muted-foreground">
              Acompañamos a empresas que necesitan soluciones confiables para higiene,
              desinfección, lavandería y mantenimiento en distintos entornos de operación.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.title} className="surface-panel p-6 transition-transform hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">Lineas de solucion</span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">Sectores y aplicaciones prioritarias</h2>
            </div>
            <Button asChild variant="link" className="justify-start px-0 md:justify-end">
              <Link to="/industrias">
                Ver industrias <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {content.solutions.map((solution) => {
              const visual = solutionVisuals[solution.name as keyof typeof solutionVisuals];

              return (
                <Link
                  key={solution.name}
                  to="/industrias"
                  className="group overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <AutoImageSlider
                      images={visual.images}
                      imageClassName="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/8">
                        <visual.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{solution.name}</h3>
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">{solution.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                      Conocer enfoque <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="section-container">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">Soluciones destacadas</span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">Algunas referencias del portafolio</h2>
            </div>
            <p className="max-w-xl text-muted-foreground">
              Explora algunas de las líneas de solución que hoy forman parte de la navegación del sitio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid gap-8 xl:grid-cols-[0.85fr,1.15fr]">
            <div className="surface-panel p-8">
              <span className="section-label">Cobertura y atención</span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">Atención comercial y puntos de contacto</h2>
              <p className="mt-4 text-muted-foreground leading-7">
                Estamos disponibles para atender consultas comerciales, coordinar asesoría técnica
                y orientar la selección de soluciones según tu operación.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/45 p-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Celular comercial y WhatsApp</p>
                    <a href={content.contact.phoneHref} className="text-sm text-muted-foreground hover:text-foreground">
                      {content.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/45 p-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Central comercial</p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                      {content.contact.centralPhones.map((phone, index) => (
                        <span key={phone.href} className="inline-flex items-center gap-2">
                          <a href={phone.href} className="hover:text-foreground">
                            {phone.display}
                          </a>
                          {index < content.contact.centralPhones.length - 1 ? <span>/</span> : null}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/45 p-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{content.contact.office.label}</p>
                    <p className="text-sm text-muted-foreground">{content.contact.office.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/45 p-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{content.contact.factory.label}</p>
                    <p className="text-sm text-muted-foreground">{content.contact.factory.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-panel p-8">
              <div className="mb-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Contacto comercial
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Solicitar asesoria</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Déjanos tus datos y una breve descripción de tu necesidad para preparar mejor la atención comercial.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <input
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    placeholder="Nombre completo *"
                    value={form.nombre}
                    onChange={(event) => setForm({ ...form, nombre: event.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    placeholder="Empresa *"
                    value={form.empresa}
                    onChange={(event) => setForm({ ...form, empresa: event.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    type="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    required
                  />
                  <input
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    type="tel"
                    placeholder="Telefono"
                    value={form.telefono}
                    onChange={(event) => setForm({ ...form, telefono: event.target.value })}
                  />
                </div>
                <div>
                  <textarea
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    rows={4}
                    placeholder="Cuéntanos qué línea o industria te interesa."
                    value={form.mensaje}
                    onChange={(event) => setForm({ ...form, mensaje: event.target.value })}
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button type="submit" size="lg" variant="cta" className="flex-1 min-w-[220px]">
                    <Send className="mr-2 h-4 w-4" /> Enviar por correo
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1 min-w-[220px]">
                    <a href={content.contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Al enviar, se abrirá tu correo con la consulta prellenada para que puedas revisarla antes de enviarla.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 gradient-accent">
        <div className="section-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
              Atención B2B
            </p>
            <h2 className="mt-2 text-3xl font-bold text-accent-foreground">
              Conversemos sobre las necesidades de tu operación
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero-outline" className="border-accent-foreground/40 text-accent-foreground hover:bg-accent-foreground/10">
              <Link to="/contacto">
                Solicitar asesoria <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-accent-foreground hover:bg-accent-foreground/10">
              <a href={content.contact.whatsappBaseHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
