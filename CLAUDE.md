# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test suite is configured in this project.

## Architecture

**PROSHOE Pro** is a corporate website for a Mexican shoe manufacturing/maquila company. It's a static multi-page React SPA with no backend.

### Routing (`src/App.tsx`)

React Router v6 handles all navigation. Pages live in `src/pages/`. The root `App.tsx` wraps everything with `QueryClientProvider`, `TooltipProvider`, and toast providers.

Routes:
- `/` → `Home` (company history + timeline)
- `/nuestra-empresa` → `NuestraEmpresa`
- `/servicios` → `Servicios`
- `/nuestros-compromisos` → `NuestrosCompromisos`
- `/clientes` → `Clientes`
- `/contactanos` → `Contactanos`
- `/aviso-de-privacidad` → `AvisoPrivacidad`

### Page Layout Pattern

Every page (except `Home`) uses:
```tsx
<Layout>  {/* includes Header + optional Breadcrumb + Footer */}
  ...
</Layout>
```

`Home` uses `<Layout showBreadcrumb={false}>`. The `Layout` component (`src/components/Layout.tsx`) composes `Header`, `Breadcrumb`, and `Footer` automatically.

### Design System (`src/index.css`)

All brand tokens are CSS custom properties defined in `:root`. The primary brand color is `#460000` (dark red), mapped to `--primary`.

**Custom utility classes** (use these instead of raw Tailwind for consistency):
- `.container-proshoe` — max-width centered container with padding
- `.section-padding` — vertical section spacing (`py-16 lg:py-24`)
- `.hero-section` — full-width hero background using primary gradient
- `.proshoe-card` — standard card with hover lift effect
- `.service-card` — service feature card with accent hover border
- `.nav-link` / `.nav-link-active` — header navigation links
- `.btn-cta` — accent-colored primary CTA button
- `.btn-outline` — outlined primary button
- `.metric-card` — stats card for hero metrics strip
- `.timeline-item` / `.timeline-dot` — history timeline components
- `.text-gradient` — gradient text from primary to accent

**Fonts**: Montserrat (headings via `font-montserrat`) + Inter (body, default).

### shadcn/ui Components (`src/components/ui/`)

Standard shadcn/ui component library. Do not modify these files directly — add new components via the shadcn CLI or copy the pattern. Import with `@/components/ui/...`.

### Assets

Static images are in `src/assets/` (imported as ES modules). The logo is served from `public/logo.png`.

### Deployment

Deployed on Vercel. Configuration in `vercel.json`.
