# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cyamunara Rwanda Ltd — a full-stack marketing/brochure site for an auctioning and asset valuation company based in Kigali, Rwanda. The app has five public pages (Home, About, Services, Clients, Contact) and a contact form submission API.

## Commands

```bash
npm run dev        # Start dev server (Express + Vite, port 5000)
npm run build      # Build client (Vite) + server (esbuild) → dist/
npm run start      # Run production build
npm run check      # TypeScript type checking
npm run db:push    # Push Drizzle schema to PostgreSQL (requires DATABASE_URL)
```

There are no tests. TypeScript checking (`npm run check`) is the primary code validation.

## Architecture

**Monorepo with three source directories:**
- `client/src/` — React SPA (Vite serves from `client/` root)
- `server/` — Express.js API and session middleware
- `shared/` — Drizzle schema and Zod types shared by client and server

**Path aliases** (configured in `tsconfig.json` and `vite.config.ts`):
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

### Client

- **Router:** Wouter (`client/src/App.tsx`) — scroll-to-top on navigation, hash-based anchor scrolling
- **Server state:** React Query with `staleTime: Infinity` and no auto-refetch — treat fetched data as static
- **Forms:** React Hook Form + Zod (`@hookform/resolvers/zod`). Zod schemas are defined in `shared/schema.ts` and reused on both client and server.
- **UI components:** shadcn/ui (New York style) in `client/src/components/ui/`. Add new components with `npx shadcn-ui@latest add <component>`.
- **Animations:** Framer Motion
- **Carousel:** Swiper (on Clients/Testimonials page)

All static page content (nav links, services, clients, testimonials, company info) lives in `client/src/lib/constants.ts`. Update this file to change displayed text, not the components directly.

### Server

- `server/index.ts` — Express setup, session middleware (memorystore), Vite dev integration
- `server/routes.ts` — `POST /api/contact` endpoint; validates with Zod, saves to storage
- `server/storage.ts` — `MemStorage` class used in development/production (data is not persisted across restarts). The `IStorage` interface is ready to be implemented against the Drizzle database when `DATABASE_URL` is available.

### Database

Drizzle ORM with PostgreSQL. Schema in `shared/schema.ts` defines two tables: `users` and `contact_submissions`. Run `npm run db:push` to sync schema. Currently the app uses in-memory storage; wire `server/storage.ts` to `db` when database persistence is needed.

## Styling

- **Theme colors:** Navy `#0B2A4A` (CSS var + `.text-navy`, `.bg-navy`) and Gold `#FFC107` (`.text-gold`, `.bg-gold`) — defined in `client/src/index.css`
- **Fonts:** Montserrat (headings), Open Sans (body) via Google Fonts import in `index.css`
- Dark mode is configured (class-based) but not actively used in the UI
- Tailwind config extends shadcn/ui CSS variables; all color tokens use `hsl(var(--...))` format
- Mobile breakpoint: 768px (see `hooks/use-mobile.tsx`)
