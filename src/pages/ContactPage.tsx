import { useState } from "react";
import { Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { content } from "@/content/content";
import { useToast } from "@/hooks/use-toast";
import { buildInquiryMailto } from "@/lib/contact";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
    acceptedTerms: false,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.acceptedTerms) {
      toast({
        title: "Falta tu confirmación",
        description: "Debes aceptar los términos de contacto antes de continuar.",
      });
      return;
    }

    window.location.href = buildInquiryMailto(form, "Consulta desde neodeter.pe");
    toast({
      title: "Abriremos tu correo",
      description: "Preparamos tu consulta para que la envíes directamente al equipo comercial.",
    });
    setForm({ nombre: "", empresa: "", email: "", mensaje: "", acceptedTerms: false });
  };

  return (
    <Layout>
      <Seo
        title="Contacto"
        description="Contacta a Neo Deter del Perú para recibir asesoría comercial sobre productos químicos de limpieza, desinfección y mantenimiento industrial."
        path="/contacto"
      />

      <PageBanner
        title="Contacto"
        subtitle="Canales comerciales directos para consultas B2B, asesoría técnica y atención personalizada."
      />

      <div className="section-container py-12">
        <div className="grid gap-10 xl:grid-cols-[1.05fr,0.95fr]">
          <div className="surface-panel p-8">
            <span className="section-label">Consulta comercial</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground">Escríbenos y conversemos sobre tu operación</h2>
            <p className="mt-4 text-muted-foreground leading-8">
              Cuéntanos qué productos, líneas o necesidades de limpieza tienes y nuestro equipo
              comercial podrá orientarte con una atención más rápida y clara.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Nombre *</label>
                <input
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  placeholder="Tu nombre completo"
                  value={form.nombre}
                  onChange={(event) => setForm({ ...form, nombre: event.target.value })}
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Empresa</label>
                <input
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  placeholder="Nombre de tu empresa"
                  value={form.empresa}
                  onChange={(event) => setForm({ ...form, empresa: event.target.value })}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Email *</label>
                <input
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  type="email"
                  placeholder="tu@empresa.com"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Mensaje</label>
                <textarea
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  rows={5}
                  placeholder="Cuéntanos qué productos, líneas o industrias te interesan."
                  value={form.mensaje}
                  onChange={(event) => setForm({ ...form, mensaje: event.target.value })}
                />
              </div>
              <div className="rounded-2xl border border-border/70 bg-muted/40 p-4">
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={form.acceptedTerms}
                    onChange={(event) =>
                      setForm({ ...form, acceptedTerms: event.target.checked })
                    }
                    className="mt-1 rounded border-input"
                    required
                  />
                  <span>
                    Acepto los términos y condiciones de contacto y autorizo el uso de mis
                    datos para atender esta consulta comercial.
                  </span>
                </label>
                <p className="mt-2 text-xs text-muted-foreground">
                  Tus datos serán utilizados únicamente para responder esta solicitud y dar
                  seguimiento comercial a tu consulta.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button type="submit" size="lg">
                  <Send className="mr-2 h-4 w-4" /> Enviar por correo
                </Button>
                <Button asChild type="button" size="lg" variant="outline">
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

          <div className="space-y-6">
            <div className="surface-panel p-8">
              <span className="section-label">Canales directos</span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">Información de contacto</h2>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/8">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Celular comercial y WhatsApp</p>
                    <a href={content.contact.phoneHref} className="text-sm text-muted-foreground hover:text-foreground">
                      {content.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/8">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Central comercial</p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
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

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/8">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Correo comercial</p>
                    <a href={content.contact.emailHref} className="text-sm text-muted-foreground hover:text-foreground">
                      {content.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/8">
                    <Clock3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horario</p>
                    <p className="text-sm text-muted-foreground">{content.contact.schedule}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-panel p-8">
              <h3 className="text-xl font-bold text-foreground">Ubicaciones</h3>
              <div className="mt-6 space-y-5">
                {[content.contact.office, content.contact.factory].map((location) => (
                  <div key={location.label} className="rounded-2xl border border-border/70 bg-muted/45 p-5">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">{location.label}</p>
                        <p className="mt-1 text-sm leading-7 text-muted-foreground">{location.address}</p>
                      </div>
                    </div>
                    <div className="mt-5 overflow-hidden rounded-2xl border border-border/70 bg-background">
                      <iframe
                        title={`Mapa de ${location.label}`}
                        src={location.mapEmbedSrc}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        className="h-64 w-full border-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
