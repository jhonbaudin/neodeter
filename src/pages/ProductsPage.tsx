import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { content } from "@/content/content";
import { cn } from "@/lib/utils";
import {
  industries,
  presentations,
  type Product,
  productLines,
  products,
  productTypes,
} from "@/data/products";

const marketingCategoryMatchers: Record<string, (product: Product) => boolean> = {
  "Detergentes industriales": (product) =>
    product.type === "Detergentes" ||
    /detergente/i.test(`${product.name} ${product.shortDescription} ${product.description}`),
  Desinfectantes: (product) =>
    product.type === "Desinfectantes" ||
    /desinfect|sanitiz|oxicl/i.test(
      `${product.name} ${product.shortDescription} ${product.description}`,
    ),
  Desengrasantes: (product) =>
    product.type === "Desengrasantes" ||
    /desengras|grasas|hornos|cocinas/i.test(
      `${product.name} ${product.shortDescription} ${product.description}`,
    ),
  "Lavandería industrial": (product) =>
    product.line === "Lavandería Industrial" ||
    product.industry.includes("Lavandería Industrial"),
  "Limpieza de superficies": (product) =>
    /superficies|pisos|paredes|equipos|utensilios/i.test(
      `${product.shortDescription} ${product.description} ${product.applications.join(" ")}`,
    ),
};

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedLine, setSelectedLine] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
  const [selectedPresentation, setSelectedPresentation] = useState<string[]>([]);

  const toggle = (values: string[], value: string, setter: (next: string[]) => void) => {
    setter(values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);
  };

  useEffect(() => {
    const quickCategories = searchParams
      .getAll("category")
      .filter((value) =>
        content.productCategories.includes(
          value as (typeof content.productCategories)[number],
        ),
      );
    const quickIndustries = searchParams
      .getAll("industry")
      .filter((value) => industries.includes(value));

    setSelectedCategory(quickCategories);
    setSelectedIndustry(quickIndustries);
  }, [searchParams]);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (
        selectedCategory.length &&
        !selectedCategory.some((category) => marketingCategoryMatchers[category]?.(product))
      ) {
        return false;
      }
      if (selectedLine.length && !selectedLine.includes(product.line)) return false;
      if (selectedType.length && !selectedType.includes(product.type)) return false;
      if (selectedIndustry.length && !selectedIndustry.some((item) => product.industry.includes(item))) return false;
      if (selectedPresentation.length && !selectedPresentation.some((item) => product.presentations.includes(item))) return false;
      return true;
    });
  }, [selectedCategory, selectedIndustry, selectedLine, selectedPresentation, selectedType]);

  const clearFilters = () => {
    setSelectedCategory([]);
    setSelectedLine([]);
    setSelectedType([]);
    setSelectedIndustry([]);
    setSelectedPresentation([]);
  };

  const FilterSection = ({
    title,
    options,
    selected,
    setter,
  }: {
    title: string;
    options: string[];
    selected: string[];
    setter: (value: string[]) => void;
  }) => (
    <div className="mb-6">
      <h4 className="mb-3 text-sm font-semibold text-foreground">{title}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggle(selected, option, setter)}
              className="rounded border-input"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <Seo
        title="Catálogo de productos"
        description="Explora líneas de detergentes, desinfectantes y soluciones de limpieza industrial para distintas operaciones y sectores."
        path="/productos"
      />

      <PageBanner
        title="Productos"
        subtitle="Explora líneas de productos para limpieza, desinfección y mantenimiento según el tipo de operación que necesites atender."
      />

      <div className="section-container py-12">
        <div className="mb-8">
          <span className="section-label">Categorías comerciales</span>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
            Usa estas categorías como filtros rápidos para explorar el catálogo según el tipo de
            solución que necesitas.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {content.productCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => toggle(selectedCategory, category, setSelectedCategory)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                  selectedCategory.includes(category)
                    ? "border-primary bg-primary text-primary-foreground shadow-card"
                    : "border-border bg-card text-muted-foreground shadow-sm hover:border-primary/30 hover:bg-primary/5 hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="shrink-0 lg:w-72">
            <div className="surface-panel sticky top-24 p-6">
              <h3 className="mb-4 text-lg font-bold text-foreground">Filtrar productos</h3>
              <FilterSection title="Línea" options={productLines} selected={selectedLine} setter={setSelectedLine} />
              <FilterSection title="Tipo" options={productTypes} selected={selectedType} setter={setSelectedType} />
              <FilterSection title="Industria" options={industries} selected={selectedIndustry} setter={setSelectedIndustry} />
              <FilterSection
                title="Presentación"
                options={presentations}
                selected={selectedPresentation}
                setter={setSelectedPresentation}
              />
              <Button onClick={clearFilters} variant="outline" className="w-full" size="sm">
                Limpiar filtros
              </Button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-foreground">Catálogo de productos</h2>
              <span className="text-sm text-muted-foreground">{filtered.length} productos</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="surface-panel py-16 text-center text-muted-foreground">
                No se encontraron productos con los filtros seleccionados.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
