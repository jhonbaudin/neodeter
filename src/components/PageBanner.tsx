import heroBg from "@/assets/hero-bg.jpg";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <div className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-primary opacity-85" />
      </div>
      <div className="relative section-container">
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner;
