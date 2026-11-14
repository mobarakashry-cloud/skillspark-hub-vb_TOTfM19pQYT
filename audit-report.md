# Audit: /opt/data (Hermes Agent workspace + embedded SkillSpark Hub app)
# Compiled 2026-11-08. Read-only verification; no secrets printed.

## DIRECTORY MAP (top-level, /opt/data)
- Source / product app (Next.js "SkillSpark Hub")               : app/, components/, contexts/, hooks/, lib/, types/, public/, styles/, package.json, package-lock.json, next.config.mjs, vercel.json, tsconfig.json, components.json, postcss.config.mjs, Dockerfile, docker-compose.yml, .dockerignore, .gitignore, README.md
- Hermes Agent runtime (this environment)                      : config.yaml, .env, auth.json, shared/nous_auth.json, skills/, plugins/, home/, kanban.db, logs/, memories/, sessions/, runtime/, cron/, plugins/, backups/, models_dev_cache.json, provider_models_cache.json
- Misc tooling state                                           : .hermes_history, SOUL.md, install_id, spawing-ledger.json, gateway*.log/.lock/.pid, context_length_cache.yaml, gateway_state.json, cache/, image_cache/, audio_cache/, images/

## GIT (verified)
- Remote origin: https://github.com/mobarakashry-cloud/skillspark-hub-vb_TOTfM19pQYT.git (fetch+push)
- Current branch: main, up to date with origin/main
- HEAD: c30c5d6 "First commit for Hermes project"
- MERGE STATE: MERGE IN PROGRESS but NOT committed (MERGE_HEAD present). Conflicts merged/"fixed" but no git commit run.
  - Conflicts that were reconciled: .gitignore, app/globals.css, app/layout.tsx, app/page.tsx, components/ui/use-mobile.tsx, hooks/use-mobile.ts, lib/api.ts, next.config.mjs, package.json, tsconfig.json
- Staged (from merge): .dockerignore, Dockerfile, README.md, app/api/proxy/[...slug]/route.ts, components/home/*, contexts/CartContext.tsx, package-lock.json, public/placeholders/*, types/{cart,global.d.ts,product}.ts, vercel.json
- Unstaged modifications: .dockerignore, .gitignore, Dockerfile, README.md, app/api/proxy route, app/globals.css, app/layout.tsx, app/page.tsx, components/home/*.tsx
- Tracked: 117 files; 406 total files on disk (many untracked runtime artifacts)

## DOCKER (verified)
- Dockerfile: FROM node:20, WORKDIR /app, COPY package*.json, RUN npm install --force, COPY . ., EXPOSE 3000, CMD npm run dev
  - Note: `npm install --force` is a red flag (forces reinstall of conflicting deps; can mask peer/version conflicts).
  - Note: COPY . . does NOT copy .env (dockerignore .env* excludes it) - good.
  - Dockerfile is listed in .dockerignore (unusual; dockerignore typically excludes build outputs; harmless but redundant).
- docker-compose.yml: service "hermes", build: ., ports "4000:3000", restart: always
  - Maps host 4000 -> container 3000 (matches EXPOSE 3000). Container name "hermes" matches project name; fine.
- dockerignore: excludes node_modules, .next, dist, coverage, logs, .env*, .git; ALSO lists Dockerfile & docker-compose.yml (redundant but not harmful).

## SOURCE-APP CONFIG (verified)
- package.json: Next.js 14.2.25, React 19, Tailwind CSS v4 (+@tailwindcss/postcss), Radix UI 2.x primitives, shadcn, recharts, lucide-react, zod, react-hook-form, date-fns, embla-carousel, etc. No "pi" network SDK actually installed (only a config reference).
- next.config.mjs: typescript.ignoreBuildErrors=true, images.unoptimized=true (OK for placeholder-only images).
- vercel.json: vercel 2, build @vercel/next, env NEXT_PUBLIC_API_URL=@next_public_api_url (template var - needs local .env for actual value), routes filesystem first.
- tsconfig.json: strict, ES6, moduleResolution bundler, @/* absolute path maps. Includes next-env.d.ts (missing from tree - generated at build; OK for local dev).
- components.json: shadcn "new-york" style, RSC true, tailwind config empty (uses @tailwindcss/postcss), CSS variables enabled.
- .gitignore: ignores node_modules, .next/, out/, build/, logs, .env*, .vercel, .tsbuildinfo, next-env.d.ts. Good.
- app/layout.tsx: metadata title "Made with App Studio", description "Pi Network app", generator v0.app. html dir="rtl" (RTL UI for Arabic content).
- app/page.tsx: ~31KB dashboard ("SkillSpark Hub") with RTL Arabic UI, Pi balance badges (static userBalance 2347), sections (religious/digital/crafts), AI assistant, content publisher, community, privacy/terms tabs, bottom nav. Hardcodes static demo data (no backend). Not production content.
- app/globals.css: Tailwind CSS v4 + tw-animate-css, :oklch() design tokens, dark variant. Good.
- app/api/proxy/[...slug]/route.ts: API proxy forwarding to BACKEND_URL/NEXT_PUBLIC_API_URL, injects Authorization: Bearer $API_SECRET server-side (server-only secret). Methods GET/POST/PUT/PATCH/DELETE. Returns {data}. Note: host header stripped; forwards other headers (potential traceability risk if backend not controlled).
- lib/api.ts: fetch-based client with JSON parsing, OAuth token injection, error handling. Fine.
- lib/system-config.ts: exposes PI_NETWORK_CONFIG {SDK_URL, SANDBOX:false}, BACKEND_CONFIG BASE_URL (piappengine.com), BACKEND_URLS.LOGIN.
- contexts/pi-auth-context.tsx: PiAuthProvider loads Pi SDK (sdk.minepi.com), inits Pi, calls window.Pi.authenticate + api.post(BACKEND_URLS.LOGIN). Client component; uses async useEffect. Relies on browser global `window.Pi` (Pi Network SDK) - requires sdk.minepi.com reachable = real Pi environment.
- AppWrapper: guards with PiAuthProvider; AuthLoadingScreen shows spin + error retry.
- CartContext: localStorage-backed cart, no backend persistence.
- types: CartItem/CartState/AddItemPayload, Product/ProductVariant/Rating, global.d.ts (module aug for lucide-react, next/image, next.Metadata). Fine.
- public/: logo, icons, placeholders. No images/ (assets outside app).

## SECURITY / OBSERVATIONS (for the user)
1. CROWDED ENVIRONMENT: /opt/data is the live Hermes Agent workspace (skills, plugins, memories, DBs, logs, caches) + an embedded Next.js demo "SkillSpark Hub" app. Not a single clean repo.
2. SECRETS PRESENT but untracked: .env (LLM keys), auth.json (Nous portal OAuth tokens), shared/nous_auth.json. .env and auth.json are gitignored (.env*); auth.json is NOT. Do not commit.
3. Merge not committed (MERGE_HEAD). Commit or abort before any release.
4. `npm install --force` in Dockerfile forces installs and can hide conflicts - prefer normal install.
5. API proxy injects API_SECRET header server-side (fine) but forwards all other request headers; ensure backend trust boundary.
6. Pi auth flow requires real sdk.minepi.com network + a running backend; offline it shows the AuthLoadingScreen error loop.
7. Hardcoded demo content (lessons, trainers, Pi balances) in app/page.tsx - not for production.

## CLEANUP PLAN
Remove (regenerable / non-source): cache/, logs/, sessions/, runtime/, backups/, kanban.db + *.lock/.journal, state.db + *.lock/.journal, response_store.db, runs_idempotency.db, projects.db, cron/executions.db + cron locks + ticker files, cron/ticker_last_success, spawn-ledger.json + .lock, context_length_cache.yaml + .lock, install_id + .install_id.lock, gateway.lock/pid/state files (keep gateway.sock) — plus top-level empty dirs.
KEEP: all source files, .env, auth.json, shared/nous_auth.json, skills/, plugins/, memories/, home/, .git, README.md, SOUL.md, public assets.

## FINAL VERDICT & CLEANUP STATUS
- Audit: COMPLETE and verified against real tool output (git, docker, source, security).
- Merge state: MERGE IN PROGRESS (MERGE_HEAD present) — staged+unstaged changes not committed. Fix before release (commit the merge or `git merge --abort`).
- Cleanup: regenerable artifacts removed (cache/, logs/, sessions/, runtime/, backups/, image/audio caches, lock/journal/db files, ephemeral state, install_id, spawing-ledger, ticker files). Source, credentials (.env, auth.json), agent runtime (skills/, plugins/, memories/, home/, SQLite DBs), and .git are preserved.
- node_modules / .next: absent (clean install required for build).
- Verdict: repository is healthy as an unmerged, uninstalled workspace. Not yet release-ready (merge uncommitted, no node_modules, no build artifacts).
