# Frontend Cleanup Phase 1

## Objetivo

Reducir ruido heredado del template, dejar branding base consistente y mantener la app lista para personalizacion sin tocar rutas ni conectar backend.

## Cambios aplicados

- Se centralizo branding y contacto en `src/config/site.ts`.
- Se reemplazo branding demo visible (`QuimicaPro`, `Lovable`) por `Neodeter`.
- Se removieron primitives de `shadcn/ui` sin referencias desde la app actual.
- Se limpiaron residuos del starter (`App.css`, `NavLink`, `placeholder.svg`) y un test de ejemplo sin relacion con la app.
- Se convirtieron CTA claramente simulados a rutas reales del frontend cuando no habia backend disponible.

## Primitives shadcn/ui conservados

- `button`
- `toast`
- `toaster`

## Primitives shadcn/ui removidos por no uso actual

- `accordion`
- `alert`
- `alert-dialog`
- `aspect-ratio`
- `avatar`
- `badge`
- `breadcrumb`
- `calendar`
- `card`
- `carousel`
- `chart`
- `checkbox`
- `collapsible`
- `command`
- `context-menu`
- `dialog`
- `drawer`
- `dropdown-menu`
- `form`
- `hover-card`
- `input`
- `input-otp`
- `label`
- `menubar`
- `navigation-menu`
- `pagination`
- `popover`
- `progress`
- `radio-group`
- `resizable`
- `scroll-area`
- `select`
- `separator`
- `sheet`
- `sidebar`
- `skeleton`
- `slider`
- `sonner`
- `switch`
- `table`
- `tabs`
- `textarea`
- `toggle`
- `toggle-group`
- `tooltip`
- `use-toast`

## Dependencias a revisar en una siguiente fase

Las dependencias asociadas a primitives removidos siguen declaradas en `package.json` para no mezclar limpieza de archivos con una depuracion de lockfile. La siguiente fase puede eliminar paquetes ya no referenciados.
