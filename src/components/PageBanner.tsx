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
        <div className="mb-5 flex w-full max-w-full flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-primary-foreground/90 backdrop-blur-sm sm:inline-flex sm:w-auto sm:text-[11px] sm:tracking-[0.22em]">
          <Sparkles className="h-3.5 w-3.5" />
          <span className="min-w-0 break-words whitespace-normal">{eyebrow}</span>
        </div>
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner;
