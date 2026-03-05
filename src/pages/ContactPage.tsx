import { useState } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle, Phone, MapPin, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Consulta enviada", description: "Nos pondremos en contacto contigo pronto." });
    setForm({ nombre: "", empresa: "", email: "", mensaje: "" });
  };

  return (
    <Layout>
      <PageBanner title="Contacto" subtitle="Estamos aquí para ayudarte. Escríbenos y te responderemos a la brevedad." />

      <div className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Envíanos tu Consulta</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Nombre *</label>
                <input className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm" placeholder="Tu nombre completo" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Empresa</label>
                <input className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm" placeholder="Nombre de tu empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                <input className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm" type="email" placeholder="tu@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
                <textarea className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm" rows={5} placeholder="¿En qué podemos ayudarte?" value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button type="submit" size="lg">
                  <Send className="w-4 h-4 mr-2" /> Enviar Consulta
                </Button>
                <Button type="button" size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                  <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Información de Contacto</h2>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Teléfono", value: "+51 999 999 999" },
                { icon: Mail, label: "Email", value: "info@quimicapro.com" },
                { icon: MapPin, label: "Dirección", value: "Av. Industrial 1234, Lima, Perú" },
                { icon: Clock, label: "Horario", value: "Lun - Vie: 8:00 AM - 6:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-muted rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-foreground mb-2">¿Necesitas asesoría técnica?</h3>
              <p className="text-sm text-muted-foreground">
                Nuestro equipo de expertos está disponible para ayudarte a seleccionar los productos adecuados para tu industria. Contáctanos y te brindaremos una asesoría personalizada sin compromiso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
