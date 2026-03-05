import { Link } from "react-router-dom";
import { Beaker, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Beaker className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-lg font-bold">QuímicaPro</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Soluciones químicas profesionales para la limpieza y desinfección industrial.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-primary-foreground">Productos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/productos" className="hover:text-primary-foreground transition-colors">Catálogo</Link></li>
              <li><Link to="/industrias" className="hover:text-primary-foreground transition-colors">Industrias</Link></li>
              <li><Link to="/certificaciones" className="hover:text-primary-foreground transition-colors">Certificaciones</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-primary-foreground">Empresa</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/nosotros" className="hover:text-primary-foreground transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-primary-foreground transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-primary-foreground">Contacto</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +51 999 999 999</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Lima, Perú</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@quimicapro.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          © 2024 QuímicaPro. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
