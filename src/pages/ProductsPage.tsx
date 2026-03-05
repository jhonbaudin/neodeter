import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import { products, productLines, productTypes, industries, presentations } from "@/data/products";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  const [selectedLine, setSelectedLine] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
  const [selectedPresentation, setSelectedPresentation] = useState<string[]>([]);

  const toggle = (arr: string[], val: string, setter: (v: string[]) => void) => {
    setter(arr.includes(val) ? arr.filter((a) => a !== val) : [...arr, val]);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedLine.length && !selectedLine.includes(p.line)) return false;
      if (selectedType.length && !selectedType.includes(p.type)) return false;
      if (selectedIndustry.length && !selectedIndustry.some((i) => p.industry.includes(i))) return false;
      if (selectedPresentation.length && !selectedPresentation.some((pr) => p.presentations.includes(pr))) return false;
      return true;
    });
  }, [selectedLine, selectedType, selectedIndustry, selectedPresentation]);

  const clearFilters = () => {
    setSelectedLine([]);
    setSelectedType([]);
    setSelectedIndustry([]);
    setSelectedPresentation([]);
  };

  const FilterSection = ({ title, options, selected, setter }: { title: string; options: string[]; selected: string[]; setter: (v: string[]) => void }) => (
    <div className="mb-6">
      <h4 className="font-semibold text-foreground text-sm mb-2">{title}</h4>
      <div className="space-y-1">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer hover:text-foreground">
            <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(selected, opt, setter)} className="rounded border-input" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <PageBanner title="Productos" subtitle="Explore nuestra gama de detergentes, desinfectantes y productos químicos especializados." />

      <div className="section-container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-card rounded-lg border border-border p-5 sticky top-20">
              <h3 className="font-bold text-foreground mb-4">Filtrar Productos</h3>
              <FilterSection title="Línea de Productos" options={productLines} selected={selectedLine} setter={setSelectedLine} />
              <FilterSection title="Tipo de Producto" options={productTypes} selected={selectedType} setter={setSelectedType} />
              <FilterSection title="Industria" options={industries} selected={selectedIndustry} setter={setSelectedIndustry} />
              <FilterSection title="Presentación" options={presentations} selected={selectedPresentation} setter={setSelectedPresentation} />
              <Button onClick={clearFilters} variant="outline" className="w-full" size="sm">Limpiar Filtros</Button>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Catálogo de Productos</h2>
              <span className="text-sm text-muted-foreground">{filtered.length} productos</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
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
