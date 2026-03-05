import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.shortDescription}</p>
        <Button asChild size="sm">
          <Link to={`/productos/${product.slug}`}>Ver Detalles</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
