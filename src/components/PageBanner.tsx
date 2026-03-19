import { Sparkles } from "lucide-react";
import { content } from "@/content/content";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

const PageBanner = ({ title, subtitle, eyebrow = content.company.tagline }: PageBannerProps) => {
  return (
    <div className="page-banner">
      <div className="absolute left-[-4rem] top-8 h-36 w-36 rounded-full bg-white/8 blur-3xl" />
      <div className="absolute bottom-0 right-[-3rem] h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative section-container">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/90 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner;
