import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border py-3 shadow-lg sm:block hidden">
      <div className="section-container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">¿Necesitas una cotización?</p>
            <p className="text-xs text-muted-foreground">Asesoría técnica gratuita · Respuesta en 24h</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+51999999999" className="text-sm font-bold text-primary hidden md:block">+51 999 999 999</a>
          <Button asChild size="sm" variant="cta">
            <Link to="/contacto">
              Solicitar Cotización <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
