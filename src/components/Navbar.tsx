import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";
import { content } from "@/content/content";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Productos", to: "/productos" },
  { label: "Industrias", to: "/industrias" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Certificaciones", to: "/certificaciones" },
  { label: "Contacto", to: "/contacto" },
];

const isActiveLink = (pathname: string, to: string) =>
  to === "/" ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-xl">
      <div className="section-container flex h-20 items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <BrandLogo imageClassName="h-11 md:h-12" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActiveLink(location.pathname, link.to)
                  ? "bg-primary/8 text-primary"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={content.contact.phoneHref}
            className="hidden items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground xl:flex"
          >
            <Phone className="h-3.5 w-3.5" /> {content.contact.phoneDisplay}
          </a>
          <Button asChild variant="cta" size="sm">
            <Link to="/contacto">Solicitar Cotización</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex items-center justify-center rounded-full border border-border/80 bg-card p-2 text-foreground shadow-sm transition-colors hover:bg-muted/60 lg:hidden"
          onClick={() => setOpen((currentOpen) => !currentOpen)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-card shadow-card lg:hidden">
          <div className="section-container space-y-1 px-0 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                  isActiveLink(location.pathname, link.to)
                    ? "bg-primary/8 text-primary"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-1 pt-2">
              <a href={content.contact.phoneHref} className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                {content.contact.phoneDisplay}
              </a>
            </div>
            <Button asChild className="mt-2 w-full">
              <Link to="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
