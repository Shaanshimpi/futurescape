# Futurescape Client MVP Build Plan

## Phase 0 – Foundation & Environment
**Goals**
- Point `AppNew.tsx` to the app entry and remove outdated demo code.
- Confirm Vite + Tailwind/CSS pipeline, icons, and animation libraries.
- Stage placeholder imagery (Unsplash/Freepik) inside `public/mocks/` for artworks and avatars.
- Establish project structure under `src/` for components, context, hooks, data, and styles.

**Deliverables**
- Updated entry in `src/main.tsx` rendering `AppNew`.
- Installed packages: `react-router-dom`, `framer-motion`, `lucide-react` (or preferred icon set), `clsx`.
- Directory structure: `components`, `context`, `hooks`, `data`, `styles`, etc.
- Placeholder assets ready for later phases.

**Tests / QA Checklist**
- `npm run dev` builds without TypeScript errors.
- App renders “Coming Soon” placeholder from `AppNew.tsx`.
- Verifies Tailwind classes apply (simple sample style).

---

## Phase 1 – Data Modeling & Mock Content
**Goals**
- Define TypeScript interfaces for artists, artworks, collections, testimonials, and site metadata.
- Author comprehensive mock JSON/TS datasets for:
  - Taxonomies (styles, mediums, AI tools, locations, price tiers, experience levels).
  - Artists (12–15 entries) with relational links, stats, testimonials, badges.
  - Artworks (40+ entries) referencing artist IDs, collections, related artworks, stats, collaboration blurbs.
  - Collections/curations tying artwork groups together.
  - Brand testimonials / campaigns.
  - Global settings (navigation, hero copy, CTAs, footer links).
- Export data via a context/provider for easy access.

**Deliverables**
- Files in `src/data/` such as `types.ts`, `taxonomies.ts`, `artists.json`, `artworks.json`, `collections.json`, `brands.json`, `site.ts`.
- `DataContext` (or similar) exposing typed data and lookup maps.
- Basic utility selectors (find artwork by slug, filter by style, etc.).

**Tests / QA Checklist**
- TypeScript compiles all data files without lint issues.
- Random integrity checks (e.g., every artwork’s `artistId` resolves to a valid artist).
- Console demo: log sample queries to verify selectors.

---

## Phase 2 – Core Architecture & Routing
**Goals**
- Configure `BrowserRouter` in `AppNew.tsx` with shared layout and the following routes:
  - `/` (Home)
  - `/gallery`
  - `/artwork/:slug`
  - `/artists`
  - `/artist/:slug`
  - `/collections`
  - `/insights`
  - `/about`
- Build global layout: header, footer, mobile nav, global search modal shell, toast placeholder.
- Wire data context into layout and ensure responsive behavior.

**Deliverables**
- `Layout` and navigation components under `src/components/layout/`.
- Route skeleton components (empty page shells) confirming navigation.
- Global providers wrapping the router (data context, theme toggle placeholder).

**Tests / QA Checklist**
- Navigation links switch routes without full page reload.
- Mobile navigation toggles open/close and overlaps content correctly.
- Accessibility sanity pass (tabbing through header, focus states).

---

## Phase 3 – Page Modules & Content Rendering
**Goals**
- Implement full layouts/content for each route using mock data:
  - Home: hero, featured artworks, featured artists, collaborations highlights, CTA blocks.
  - Gallery: filter/sort bar, responsive grid/masonry, pagination simulation.
  - Artwork Detail: hero media, metadata panel, stats, story, related carousel, artist teaser.
  - Artists Directory: filters, cards, sorting, badges.
  - Artist Profile: cover, avatar, stats, tabs (Portfolio, Collections, Testimonials), contact CTA.
  - Collections: curated sets referencing artworks.
  - Insights/About: static but data-driven sections from global settings.
- Introduce placeholders for future forms (e.g., “Request Collaboration” modal).

**Deliverables**
- Components under `components/cards`, `components/sections`, `components/shared` supporting the pages.
- Page-specific compositions in `src/pages/` using shared components.

**Tests / QA Checklist**
- Manually browse every page and confirm content renders using mock data.
- Filters update gallery results instantly without console errors.
- Clicking artwork/artist cards navigates to the correct detail view.

---

## Phase 4 – Shared Components, Hooks & UX Polish
**Goals**
- Create reusable building blocks:
  - UI atoms: `Tag`, `Badge`, `PillFilter`, `CTAButton`, `StatsGroup`, etc.
  - Composite components: `Carousel`, `MasonryGrid`, `TestimonialsRail`.
- Custom hooks: `useFilters`, `usePagination`, `useResponsiveGrid`, `useModalState`.
- Apply Framer Motion animations, micro-interactions, and ensure accessible modals/tooltips.
- Add skeleton states that simulate loading (e.g., `setTimeout` before data render).

**Deliverables**
- Shared component library fully typed and documented.
- Hooks exported from `src/hooks/` with unit snippets.
- Animation presets stored centrally (e.g., `styles/animations.ts`).

**Tests / QA Checklist**
- Toggle filters rapidly without layout jumpiness.
- Animate page transitions and ensure motion is performant (60fps on dev tools).
- Keyboard navigation through modals/carousels works (Escape closes modal, arrows move slides).

---

## Phase 5 – Demo Content & Final Polish
**Goals**
- Map mock data to actual placeholder images and verify paths.
- Enhance responsiveness across 320px, 768px, 1024px, 1440px breakpoints.
- Add demo analytics (console logs) for key interactions.
- Document future integration points via comments and README updates.

**Deliverables**
- Final responsive styling tweaks in `src/styles/`.
- README section describing demo behavior, data sources, and future backend hooks.
- Optional dark/light theme toggle persisted in local storage.

**Tests / QA Checklist**
- Responsive audit using browser dev tools (manual) + Lighthouse snapshot for performance/accessibility heuristics.
- Validate console analytics logs trigger on navigation, filter change, CTA clicks.
- Verify skeleton placeholders appear before mock data resolves.
- Run `npm run build` to ensure production build succeeds.

---

## Phase 6 – Optional Enhancements (Post-MVP)
**Goals**
- Global search modal with fuzzy search over artworks/artists.
- Guided demo flows (scripted navigation or banners showing user journeys).
- SEO meta + JSON-LD snippets for artworks/artists ready for future backend integration.

**Deliverables**
- Search overlay component + fuzzy search hook (e.g., `fuse.js`).
- Demo mode toggles as part of site settings.
- Meta tags helper hooking into React Helmet (or Vite plugin) for future use.

**Tests / QA Checklist**
- Search modal returns relevant mock results and handles empty states.
- Demo flow toggles highlight UI correctly without interfering with navigation.
- SEO metadata verified via React dev tools / page source.

---

### Overall QA Reminders
- Maintain TypeScript strictness across all phases.
- Use ESLint/Prettier (if configured) before marking a phase complete.
- Keep mock data consistent: no dangling IDs or missing assets.

