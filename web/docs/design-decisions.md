# Campus Gig: Design Decisions and User Flow

## UI Inspiration (benchmarks)
- Wellfound (AngelList Talent): clear filters and strong company/job cards – https://wellfound.com/jobs
- Himalayas: remote-first board with excellent filtering and time-zone facets – https://himalayas.app/jobs
- Arc.dev: focused remote listings and concise card layouts – https://arc.dev/remote-jobs
- YC – Work at a Startup: simple, trustworthy UX with prominent search – https://www.ycombinator.com/jobs
- RemoteOK: quick scanning, simple category chips and filters

Key takeaways we adopted:
- Prominent search + compact filters at top
- Card-based results, clear job meta (type, hours, pay)
- Breadcrumbs for hierarchy clarity
- Save/Bookmark and Share actions
- Consistent header/footer with minimal visual noise

## Information Architecture
- Home: Hero, Regions (clumps), Services, Community
- Jobs: Search + Filters (Region → Campus, Type)
  - Grouped by Region, then by Campus
  - Detail page per job with Apply, Save, Share
  - Favorites: Saved jobs via localStorage (no auth yet)
- About, Services, Contact (with simple validated contact form)

## Design System
- Tailwind for tokens (spacing, color, typography)
- Lightweight internal primitives: Button, Input, Select, Badge, Card
- Layout: Header, Footer, Breadcrumbs
- Loading and error states on Jobs route

Note: We can add shadcn/ui components later after approval to speed up quality and consistency.

## User Journey (students)
1) Land on Home → quickly understand value proposition (find campus jobs)
2) Click Jobs or select a Region → use search + filters (Region, Campus, Type)
3) Scan cards; click into detail to confirm fit
4) Bookmark interesting roles (Saved) and Share with peers
5) Apply externally; Contact us for help with resume/mock interviews

## Migration Plan to Supabase
- Tables: regions, campuses, jobs, tags (join table job_tags)
- Fields: mirror current JSON (title, organization, campus_id, region_id, type, hours, pay_range, apply_url, description, posted_at)
- RLS: read-all public for jobs initially; write restricted to admin role
- Steps:
  1) Define schema and seed from current JSON
  2) Switch data access layer in Next to Supabase client (SSR fetch with caching)
  3) Add filters via SQL (region/campus/type/q) and pagination
  4) Later: user accounts for persistent favorites, saved search alerts

## Accessibility & Internationalization (next steps)
- Ensure color contrast on buttons/links
- Keyboard accessible navigation and filter controls
- Prepare for i18n: copy extraction and language switch later

## Performance
- Keep cards light; paginate if needed
- Prefer server rendering w/ caching when on Supabase


