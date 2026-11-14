# Hackathon Task Checklist — SkillSpark Hub (Next.js + "Pi Network" frontend)
Status: 2026-11-08. Codes: [X]=done, [~]=in-progress, [ ]=todo, [S]=source, [D]=deploy, [G]=git, [P]=polish.

## PHASE 0 — Environment & Prep (verified by audit)
- [ ] Confirm /opt/data is the live workspace root (this repo = Hermes Agent + embedded SkillSpark Hub app).
- [ ] Confirm node + npm available; node version matches Dockerfile (node:20).
- [ ] Create branch off main for the hackathon; isolate merge-resolution work.
- [X] Audit done: source/config/Git/Docker verified (see audit-report.md).
- [X] Cleanup done: regenerable artifacts removed; source + credentials preserved.

## PHASE 1 — Git & Merge Resolution
- [G] Inspect merge state: `git status` must show MERGE_HEAD (merge in progress).
- [G] List conflicting files (if any): `.gitignore`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `components/ui/use-mobile.tsx`, `hooks/use-mobile.ts`, `lib/api.ts`, `next.config.mjs`, `package.json`, `tsconfig.json`.
- [G] Resolve conflicts (edit files, then `git add <file>`), OR choose `git merge --abort` to start clean.
- [G] Commit the merge with a clear message (e.g. `Merge branch 'main' ...`).
- [G] Push main to origin after merge is committed.

## PHASE 2 — Docker & Deployment Config
- [D] Dockerfile: install step now `RUN npm install --legacy-peer-deps --no-audit --no-fund` (geist@1.7.2 shipped no mono `.woff2`; react@19 vs next@14 peer conflict fixed). Reproducible build.
- [D] CMD `npm run dev` for dev image (kept for dev; `npm run start` for prod).
- [D] .dockerignore excludes node_modules/.next/.env* (already correct).

## PHASE 3 — Dependencies & Build
- [D] `npm install` completed: 530 packages (geist pinned to 1.3.1 + react@19, next@14.2.25).
- [D] Geist pinned `^1.3.1` -> `"1.3.1"` (1.7.2 ships no mono `.woff2`, broke the build path).
- [D] Build reaches the production compiler (`Creating an optimized production build`); all modules type-check (zero TS errors).
- [~] `npm run build` FULL PROD BUILD — BLOCKED by environment: the Next.js worker exits with **SIGBUS** (out-of-memory) on this 3.8GB WSL host even with a single thread. No code/TypeScript errors remain. See audit-report.md for details.
- [D] Run the gate: `npx tsc --noEmit`, `npm run lint`, `npm run build`. (Full production build is blocked by the SIGBUS environment limit; see above.)

## PHASE 4 — Code Structure Optimization
- [S] Extracted centralized data model + types into `app/lib/app-data.ts`.
- [S] `app/components/dashboard/Dashboard.tsx` — Dashboard tab (balance + search props).
- [S] `app/components/sections/SectionView.tsx` — SectionView tab (sectionId prop).
- [S] `app/components/branches/BranchView.tsx` — BranchView tab (sectionId/branchId/showAI/etc.).
- [S] `app/components/profile/ProfileSection.tsx` — ProfileSection tab (onNavigate prop).
- [S] `app/components/community/CommunitySection.tsx` — CommunitySection tab.
- [S] Rewrote `app/page.tsx` as a thin tab router (state + bottom nav) importing the feature components (was a 788-line monolith).
- [S] Dynamic Tailwind color classes (`bg-$color-...`) noted as a tree-shaking/known limitation; recommend palette map in a future pass.

## PHASE 3 — Dependencies & Build
- [D] Run `npm install` (node_modules absent) — verify lockfile matches.
- [D] Run `npx tsc --noEmit` to surface type errors; fix reported errors (note: missing next-env.d.ts, react18/19 type drift expected).
- [D] Run `npm run build` (Next build) to confirm the app compiles.
- [D] Run `npm run lint` for style/prettier issues; clean warnings.
- [D] Regenerate dev TypeScript file: `npx next type-check` or `next dev` once to produce `next-env.d.ts` if missing.

## PHASE 4 — Code Structure Optimization
- [S] Split monolithic `app/page.tsx` (31KB) into feature components:
  - new `app/lib/app-data.ts` — appData constant + types (extracted out).
  - new `app/components/dashboard/Dashboard.tsx` — Dashboard tab.
  - new `app/components/sections/SectionView.tsx` — SectionView tab.
  - new `app/components/branches/BranchView.tsx` — BranchView tab.
  - new `app/components/profile/ProfileSection.tsx` — ProfileSection tab.
  - new `app/components/community/CommunitySection.tsx` — CommunitySection tab.
  - rewrite `app/page.tsx` as a thin tab-router (state + bottom nav) importing the feature components.
- [S] Remove hardcoded duplicate data: centralize `appData` (sections/branches/elements) in `app/lib/app-data.ts`.
- [S] Keep imports wiring correct (aliases `@/`); verify no TS errors after refactor.
- [S] Delete unused placeholder files if they are dead scaffolding: `public/placeholders/*.svg` (only consumed by old HomeProductCard scaffolding; confirm after split).

## PHASE 5 — Pi Network Integration Verification
- [P] `contexts/pi-auth-context.tsx` loads Pi SDK from `sdk.minepi.com` and calls `window.Pi.authenticate` + backend login. Verify `sdk.minepi.com` reachability from target environment.
- [P] Backend `https://backend.appstudio-...piappengine.com` must be reachable; else AuthLoadingScreen error loop.
- [P] Verify `PI_NETWORK_CONFIG.SANDBOX=false` (production) matches deployment target.
- [P] Ensure `.env` does not contain real Pi secrets; Pi auth uses Pi's SDK, not local keys.
- [P] Add graceful offline/Failed handling (hide error loop) on AuthLoadingScreen retry.

## PHASE 6 — Polish & Reliability
- [P] RTL UI (`dir="rtl"` on html) is intentional (Arabic content); keep consistent.
- [P] Verify `app/globals.css` Tailwind v4 tokens + dark mode variant parse.
- [P] Verify `app/layout.tsx` metadata (title/description/generator) and Geist font injection.
- [P] Add `next/image` usage alternative for `<img>` placeholders (unoptimized images already set).
- [P] Check accessibility: labels on interactive elements, focus states.

## PHASE 7 — Lint & Release
- [D] Final `npm run build`, `npm run lint`, `npx tsc --noEmit` = green.
- [D] Confirm `git log` + `git status` clean (no unintended tracked changes) before deploy.
- [D] Tag a release commit (e.g. `v1.0.0-hackathon`) once all phases green.
- [D] Push to GitHub: `origin` = `https://github.com/mobarakashry-cloud/skillspark-hub-vb_TOTfM19pQYT.git`.

## PHASE 8 — Deploy & Verify
- [D] Deploy to Vercel from main (auto on push) OR run `docker compose up -d`.
- [D] Verify app loads: home dashboard, section/branch navigation, Pi balance UI.
- [D] Smoke-test: search, content grid, AI assistant, content publisher, leaderboard, privacy/terms.
- [D] Verify Pi auth flow success + balance display only after backend + Pi SDK live.
- [D] Post-deploy: check `npm run build` clean in CI, logs healthy, no API proxy failures (Api-secret boundary ok).

## PHASE 9 — Hackathon Deliverables
- [D] README updated with hackathon context + run instructions (npm install/run/dev/Docker).
- [D] License header present (project is MIT for the scaffold).
- [D] Demo recording / screenshots of the hub + Pi dashboard.
- [D] One-pager: problem, solution, tech stack, features, live link.
