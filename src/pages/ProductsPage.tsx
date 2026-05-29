import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, Download, Search } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { content } from "@/content/content";
import { resolvePublicUrl } from "@/lib/public-url";
import { cn } from "@/lib/utils";
import torkLogo from "@/assets/brand/tork-think-ahead-logo.png";
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
  "Línea de Higiene Institucional": (product) =>
    product.line === "Higiene Institucional (Tork)" ||
    product.industry.includes("Higiene Institucional"),
};

const productNameCollator = new Intl.Collator("es", { sensitivity: "base" });
const distributedProductLines = new Set(["Higiene Institucional (Tork)"]);
const productsPageDescription =
  "Catálogo de detergentes industriales, desinfectantes, desengrasantes y productos químicos de limpieza para empresas en Perú.";
const productsPageKeywords = [
  "catálogo de productos químicos",
  "detergentes industriales Perú",
  "desinfectantes industriales",
  "desengrasantes industriales",
  "productos químicos de limpieza para empresas",
];

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const catalogCards = [
    {
      key: "hotels-restaurants",
      label: content.catalogs.hotelsRestaurants.categoryLabel,
      title: content.catalogs.hotelsRestaurants.label,
      href: resolvePublicUrl(content.catalogs.hotelsRestaurants.href),
      logo: <BrandLogo imageClassName="h-9" />,
      logoContainerClassName: "bg-white",
    },
    {
      key: "industrial-maintenance",
      label: content.catalogs.industrialMaintenance.categoryLabel,
      title: content.catalogs.industrialMaintenance.label,
      href: resolvePublicUrl(content.catalogs.industrialMaintenance.href),
      logo: <BrandLogo imageClassName="h-9" />,
      logoContainerClassName: "bg-white",
    },
    {
      key: "tork",
      label: content.catalogs.tork.distributorLabel,
      title: content.catalogs.tork.label,
      href: resolvePublicUrl(content.catalogs.tork.href),
      logo: (
        <img
          src={torkLogo}
          alt="Tork Think Ahead"
          className="max-h-12 w-auto max-w-full object-contain"
        />
      ),
      logoContainerClassName: "bg-primary",
    },
  ];
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
      const firstProductIsDistributed = distributedProductLines.has(firstProduct.line);
      const secondProductIsDistributed = distributedProductLines.has(secondProduct.line);

      if (firstProductIsDistributed !== secondProductIsDistributed) {
        return firstProductIsDistributed ? 1 : -1;
      }

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

  const productsPageJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Catálogo de productos químicos de limpieza industrial",
      description: productsPageDescription,
      url: `${content.seo.siteUrl}/productos`,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
          url: `${content.seo.siteUrl}/productos/${product.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: content.seo.siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Productos",
          item: `${content.seo.siteUrl}/productos`,
        },
      ],
    },
  ];

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
        title="Catálogo de productos químicos de limpieza industrial"
        description={productsPageDescription}
        path="/productos"
        keywords={productsPageKeywords}
        jsonLd={productsPageJsonLd}
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
          <div className="mt-5 flex flex-wrap gap-3">
            {catalogCards.map((catalog) => (
              <div
                key={catalog.key}
                className="flex w-full max-w-[17rem] flex-col gap-3 rounded-2xl border border-primary/12 bg-primary/5 p-4 sm:w-[17rem]"
              >
                <div className={cn("flex h-16 items-center justify-center rounded-xl px-4", catalog.logoContainerClassName)}>
                  {catalog.logo}
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-primary">
                    {catalog.label}
                  </p>
                  <h3 className="mt-1 text-sm font-bold leading-5 text-foreground">{catalog.title}</h3>
                  <Button asChild variant="outline" size="sm" className="mt-3 w-full">
                    <a href={catalog.href} download>
                      <Download className="mr-2 h-4 w-4" />
                      Descargar catálogo
                    </a>
                  </Button>
                </div>
              </div>
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
