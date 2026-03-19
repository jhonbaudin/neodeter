import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group overflow-hidden rounded-[1.5rem] border border-border/80 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
      <div className="aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
        <h3 className="mb-2 text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{product.shortDescription}</p>
        <Button asChild size="sm">
          <Link to={`/productos/${product.slug}`}>Ver Detalles</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
