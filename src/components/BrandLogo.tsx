import { cn } from "@/lib/utils";
import { content } from "@/content/content";
import logo from "@/assets/brand/logo.webp";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  framed?: boolean;
}

const BrandLogo = ({ className, imageClassName, framed = false }: BrandLogoProps) => {
  const image = (
    <img
      src={logo}
      alt={content.company.name}
      className={cn("h-10 w-auto object-contain", imageClassName)}
    />
  );

  if (!framed) {
    return <div className={className}>{image}</div>;
  }

  return (
    <div
      className={cn(
        "inline-flex rounded-[1.75rem] border border-slate-200/80 bg-white px-4 py-3 shadow-[0_20px_45px_-28px_rgba(2,74,147,0.35)]",
        className,
      )}
    >
      {image}
    </div>
  );
};

export default BrandLogo;
