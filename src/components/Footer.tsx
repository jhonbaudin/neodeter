import { Link } from "react-router-dom";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { content } from "@/content/content";
import qualityCertificate from "@/assets/certifications/quality-certificate.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialIcons = {
    Instagram,
    Facebook,
    X: Twitter,
    LinkedIn: Linkedin,
  } as const;

  return (
    <footer className="mt-16 bg-primary text-primary-foreground">
      <div className="section-container pt-14 pb-24 md:pb-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr,0.8fr,0.9fr,1.1fr]">
          <div>
            <BrandLogo framed imageClassName="h-12 md:h-14" className="mb-5" />
            <p className="max-w-sm text-sm leading-6 text-primary-foreground/72">
              {content.company.summary}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/72">
              {content.company.tagline}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {content.socialLinks.map((socialLink) => {
                const Icon = socialIcons[socialLink.label];

                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLink.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-primary-foreground/78 transition-all hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/14 hover:text-primary-foreground"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
            <Link
              to="/certificaciones"
              className="mt-6 inline-flex max-w-[9.5rem] rounded-[1.25rem] bg-transparent p-0 transition-transform hover:scale-[1.02]"
            >
              <img
                src={qualityCertificate}
                alt="Certificado de calidad"
                className="h-auto w-full object-contain"
              />
            </Link>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-primary-foreground">Explorar</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/72">
              <li><Link to="/productos" className="hover:text-primary-foreground transition-colors">Catálogo</Link></li>
              <li><Link to="/industrias" className="hover:text-primary-foreground transition-colors">Industrias</Link></li>
              <li><Link to="/certificaciones" className="hover:text-primary-foreground transition-colors">Certificaciones</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-primary-foreground">Empresa</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/72">
              <li><Link to="/nosotros" className="hover:text-primary-foreground transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-primary-foreground transition-colors">Contacto</Link></li>
              <li>
                <a
                  href={content.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary-foreground transition-colors"
                >
                  WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-primary-foreground">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/72">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Celular comercial</p>
                  <a href={content.contact.phoneHref} className="hover:text-primary-foreground transition-colors">
                    {content.contact.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Central</p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    {content.contact.centralPhones.map((phone, index) => (
                      <span key={phone.href} className="inline-flex items-center gap-2">
                        <a href={phone.href} className="hover:text-primary-foreground transition-colors">
                          {phone.display}
                        </a>
                        {index < content.contact.centralPhones.length - 1 ? <span>/</span> : null}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={content.contact.emailHref} className="break-all hover:text-primary-foreground transition-colors">
                  {content.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">{content.contact.office.label}</p>
                  <p>{content.contact.office.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">{content.contact.factory.label}</p>
                  <p>{content.contact.factory.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/18 pt-6 text-center text-sm text-primary-foreground/52">
          © {currentYear} {content.company.legalName}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
