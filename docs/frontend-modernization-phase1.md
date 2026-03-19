# Frontend Modernization Phase 1

## Objetivo

Dejar una base frontend mas cercana a la marca real de Neo Deter del Peru, sin conectar backend ni rehacer la arquitectura existente.

## Cambios ejecutados

### 1. Fuente unica de contenido

- Se creo `src/content/content.ts` como fuente central para:
  - datos de empresa
  - hero
  - soluciones
  - categorias
  - industrias
  - ventajas
  - contacto
  - SEO base
  - colores de marca
- Se retiro `src/config/site.ts` para evitar dos fuentes de verdad en paralelo.

### 2. Branding real

- Se incorporo el logo oficial en `src/assets/brand/logo.webp`.
- Se agregaron favicons reales en `public/favicon-32.png` y `public/favicon-57.png`.
- Se creo `src/components/BrandLogo.tsx` para reutilizar el logo en navbar y footer.
- Se actualizaron tokens visuales en `src/index.css` usando la paleta derivada del material oficial entregado:
  - azul principal asociado a `PANTONE 287 C`
  - verde asociado a `PANTONE 376 C`
  - lima asociado a `PANTONE 382 C`
- Se reemplazo la tipografia base por `Manrope` y `Sora` para una presencia mas contemporanea.

### 3. SEO base reusable

- Se creo `src/components/Seo.tsx`.
- Cada ruta principal ahora define:
  - `title`
  - `description`
  - `canonical`
  - Open Graph
  - Twitter Card
  - `robots`
  - JSON-LD cuando aplica
- Se actualizaron los metadatos base en `index.html`.
- Se agrego `public/sitemap.xml`.
- Se actualizo `public/robots.txt` con referencia al sitemap.

### 4. Layout y componentes globales

- `Navbar` ahora usa el logo real y los datos reales de contacto.
- `Footer` fue reescrito para mostrar resumen corporativo, oficina, fabrica y canales comerciales.
- `StickyCTA` y `WhatsAppButton` consumen ahora el contenido centralizado.
- `PageBanner` dejo de depender del fondo stock del mockup y paso a una cabecera generada con gradientes de marca.
- `ProductCard` se ajusto a la nueva direccion visual sin cambiar su funcion.

### 5. Paginas actualizadas

- `Index.tsx`
  - se elimino el hero generico basado en claims de ahorro y testimonios ficticios
  - se reemplazo por una home orientada a propuesta de valor, lineas de solucion y conversion B2B
  - se mantuvo el catalogo mock destacado mientras llega el portafolio real
- `AboutPage.tsx`
  - se reescribio con narrativa corporativa segura
  - se incorporaron imagenes reales del equipo y presencia comercial
- `IndustriesPage.tsx`
  - se corrigio la logica para dejar de mezclar sectores con filtros mock incorrectos
  - se reorganizo la pagina alrededor de las soluciones publicadas por la empresa
- `ProductsPage.tsx`
  - se mantuvo el catalogo funcionando
  - se agrego contexto comercial y SEO
- `ProductDetailPage.tsx`
  - se agrego SEO dinamico por producto
  - se incorporo JSON-LD de `Product` y `BreadcrumbList`
- `ContactPage.tsx`
  - se actualizo con oficina, fabrica, telefono, correo y WhatsApp reales
  - se mantuvo el formulario desacoplado de backend
- `CertificationsPage.tsx`
  - se eliminaron referencias no verificadas a certificaciones especificas
  - se convirtio en una base honesta para publicar respaldos reales despues
- `NotFound.tsx`
  - se integro al layout general y ahora declara `noindex`

## Archivos principales tocados

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `src/index.css`
- `tailwind.config.ts`
- `src/components/BrandLogo.tsx`
- `src/components/Footer.tsx`
- `src/components/Navbar.tsx`
- `src/components/PageBanner.tsx`
- `src/components/ProductCard.tsx`
- `src/components/Seo.tsx`
- `src/components/StickyCTA.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/content/content.ts`
- `src/pages/AboutPage.tsx`
- `src/pages/CertificationsPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/Index.tsx`
- `src/pages/IndustriesPage.tsx`
- `src/pages/NotFound.tsx`
- `src/pages/ProductDetailPage.tsx`
- `src/pages/ProductsPage.tsx`
- `src/test/app.test.tsx`

## Verificacion

- `npm run lint`: ok
- `npm run build`: ok
- `npm run test -- --run`: ok

## Pendientes deliberados

- El catalogo sigue siendo mock hasta recibir los productos reales.
- Los formularios aun no se conectan a backend, correo ni CRM.
- La capa de SEO ya es dinamica por ruta, pero para SEO fuerte en produccion conviene sumar prerender o SSR en una fase posterior.
- Queda pendiente validar con la empresa:
  - certificaciones reales
  - fichas tecnicas
  - hojas de seguridad
  - contenido por industria
  - correo comercial final si se desea una variante distinta del proporcionado
