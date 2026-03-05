import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20solicitar%20información%20sobre%20sus%20productos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-accent flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-accent-foreground" />
    </a>
  );
};

export default WhatsAppButton;
