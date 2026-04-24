import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const productUrl = `/productos/${product.slug}`;

  const openDetail = () => {
    navigate(productUrl);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetail();
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={openDetail}
      onKeyDown={handleKeyDown}
      className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-border/80 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover focus:outline-none focus:ring-2 focus:ring-primary/20"
    >
      <div className="aspect-[16/9] overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${product.imageFit === "contain" ? "object-contain p-4" : "object-cover"
            }`}
        />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary/6 px-3 py-1 text-xs font-semibold text-primary">
            {product.line}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {product.type}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold uppercase text-foreground">{product.name}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{product.shortDescription}</p>
        <Button asChild size="sm">
          <Link to={productUrl} onClick={(event) => event.stopPropagation()}>
            Ver Detalle
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
