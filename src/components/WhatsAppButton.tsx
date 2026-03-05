import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20solicitar%20información%20sobre%20sus%20productos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full gradient-accent px-5 py-3 shadow-lg hover:scale-105 transition-transform animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-5 h-5 text-accent-foreground" />
      <span className="text-accent-foreground font-semibold text-sm hidden sm:inline">Cotizar por WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
