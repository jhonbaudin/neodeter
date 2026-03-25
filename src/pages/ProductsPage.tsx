import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
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

const productNameCollator = new Intl.Collator("es", { sensitivity: "base" });

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLine, setSelectedLine] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
  const [selectedPresentation, setSelectedPresentation] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");

  const toggle = (values: string[], value: string, setter: (next: string[]) => void) => {
    setter(values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);
  };

  const toggleQuickCategory = (value: string) => {
    setSelectedCategory((current) => (current === value ? null : value));
  };

  const normalizeText = (value: string) =>
    value
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();

  useEffect(() => {
    const quickCategory = searchParams
      .getAll("category")
      .find((value) =>
        content.productCategories.includes(
          value as (typeof content.productCategories)[number],
        ),
      );
    const quickIndustries = searchParams
      .getAll("industry")
      .filter((value) => industries.includes(value));

    setSelectedCategory(quickCategory ?? null);
    setSelectedIndustry(quickIndustries);
  }, [searchParams]);

  const filtered = useMemo(() => {
    const nextProducts = products.filter((product) => {
      if (
        selectedCategory &&
        !marketingCategoryMatchers[selectedCategory]?.(product)
      ) {
        return false;
      }
      if (searchText) {
        const normalizedProductName = normalizeText(product.name);
        const normalizedSearch = normalizeText(searchText);
        if (!normalizedProductName.includes(normalizedSearch)) return false;
      }
      if (selectedLine.length && !selectedLine.includes(product.line)) return false;
      if (selectedType.length && !selectedType.includes(product.type)) return false;
      if (selectedIndustry.length && !selectedIndustry.some((item) => product.industry.includes(item))) return false;
      if (selectedPresentation.length && !selectedPresentation.some((item) => product.presentations.includes(item))) return false;
      return true;
    });

    nextProducts.sort((firstProduct, secondProduct) => {
      const comparison = productNameCollator.compare(firstProduct.name, secondProduct.name);
      return sortOrder === "az" ? comparison : -comparison;
    });

    return nextProducts;
  }, [searchText, selectedCategory, selectedIndustry, selectedLine, selectedPresentation, selectedType, sortOrder]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedLine([]);
    setSelectedType([]);
    setSelectedIndustry([]);
    setSelectedPresentation([]);
    setSearchText("");
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
    <details className="group mb-4 rounded-2xl border border-border/70 bg-muted/35 px-4 py-3">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
        <div>
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          {selected.length > 0 && (
            <p className="mt-1 text-xs text-muted-foreground">
              {selected.length} seleccionado{selected.length > 1 ? "s" : ""}
            </p>
          )}
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-4 space-y-2 border-t border-border/60 pt-4">
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
    </details>
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
                aria-pressed={selectedCategory === category}
                onClick={() => toggleQuickCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                  selectedCategory === category
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
              <div className="mb-6">
                <label htmlFor="product-search" className="mb-2 block text-sm font-semibold text-foreground">
                  Buscar por nombre
                </label>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="product-search"
                    type="search"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Ej. NEOCLOR DX PLUS"
                    className="w-full rounded-2xl border border-input bg-background py-3 pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>
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
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Catálogo de productos</h2>
                <span className="text-sm text-muted-foreground">{filtered.length} productos</span>
              </div>
              <div className="w-full md:w-[250px]">
                <label htmlFor="sort-products" className="mb-2 block text-sm font-semibold text-foreground">
                  Ordenar por
                </label>
                <select
                  id="sort-products"
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value as "az" | "za")}
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                >
                  <option value="az">Alfabéticamente A-Z</option>
                  <option value="za">Alfabéticamente Z-A</option>
                </select>
              </div>
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
