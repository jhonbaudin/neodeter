import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AutoImageSliderProps {
  images: { src: string; alt: string }[];
  className?: string;
  imageClassName?: string;
  intervalMs?: number;
}

const AutoImageSlider = ({
  images,
  className,
  imageClassName,
  intervalMs = 3200,
}: AutoImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [images.length, intervalMs]);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            index === activeIndex ? "opacity-100" : "opacity-0",
            imageClassName,
          )}
        />
      ))}

      {images.length > 1 ? (
        <div className="absolute bottom-4 left-4 z-10 flex gap-2">
          {images.map((image, index) => (
            <span
              key={image.src}
              className={cn(
                "h-2.5 rounded-full transition-all",
                index === activeIndex ? "w-6 bg-white" : "w-2.5 bg-white/55",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AutoImageSlider;
