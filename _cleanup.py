import os, shutil, time

ROOT = "/opt/data"

# Explicit allowlist of top-level entries that must NEVER be touched.
KEEP_PREFIXES = {
    ".git", ".env", "auth.json", "backups/config", "channel_directory.json",
    "components", "config.yaml", "contexts", "cron", "Dockerfile",
    "docker-compose.yml", "home", "hooks", "images", "installs", "kanban.db",
    "kanban", "lib", "logs", "memories", "next.config.mjs", "node",  # node prefix unlikely
    "package-lock.json", "package.json", "pairing", "pending_messages", "plugins",
    "plans", "platforms", "plugin-update-checks", "pnpm-lock.yaml", "public",
    "projects.db", "provider_models_cache.json", "response_store.db",
    "runs_idempotency.db", "sessions", "shared", "skills", "state.db", "state",
    "styles", "styles/globals.css", "telemetry", "terminal-sessions",
    "types", "vercel.json", "SOUL.md", "audit-report.md", "README.md",
}

# Explicit files/dirs to remove (regenerable artifacts only).
REMOVABLES = [
    # caches
    "cache", "cache/browser", "cache/browser-use", "cache/browser-use/workspace",
    "cache/documents", "cache/reasoning_caps.json", "cache/tool_discovery_cache.json",
    "cache/schema_columns.json", "cache/endpoint_model_metadata.json",
    "cache/model_catalog.json", "cache/nous_recommended_cache.json",
    "cache/openrouter_curated_catalog.json", "cache/plugin_toolset_keys.json",
    "image_cache", "audio_cache",
    # logs / runtime
    "logs", "sessions", "runtime", "backups", "terminal-sessions",
    "telemetry", "telemetry/shared_metrics", "telemetry/shared_metrics/outbox",
    "telemetry/shared_metrics/metrics.sqlite3", "cron/output", "cron/ticker_last_success",
    "cron/ticker_heartbeat",
    # ephemeral lock/state files
    ".install_id.lock", "install_id", "auth.lock", "context_length_cache.yaml",
    "context_length_cache.yaml.lock", "spawn-ledger.json", "spawn-ledger.json.lock",
    "gateway.lock", "gateway.pid", "gateway_state.json", "gateway-starts.log",
    "state/.gateway_n2vk0vdf.tmp", "state/dashboard_clients.heartbeat",
    "state/gateway.heartbeat", "state/gateway.lifecycle.json",
    "state/gateway.loop-tick.169.sock", "kanban/.dispatcher.lock",
    "kanban.db.dispatch.lock", "kanban.db.init.lock",
    "kanban.db.fts_rebuild.lock", "kanban.db.quarantine.lock",
    "home/.local", "home/.config", "home/.cache", "home/.pki",
]

removed, skipped = [], []
for rel in REMOVABLES:
    p = os.path.join(ROOT, rel)
    if os.path.isdir(p) and not os.path.islink(p):
        if os.path.exists(p):
            shutil.rmtree(p, ignore_errors=False)
            removed.append(rel)
    elif os.path.exists(p) or os.path.islink(p):
        os.remove(p)
        removed.append(rel)

# Also sweep any leftover *.lock / *.db-journal left inside the above dirs.
import glob
for pat in ["**/*.lock", "**/*.db-journal", "**/*.lock.tmp", "**/*.tmp"]:
    for p in glob.glob(os.path.join(ROOT, pat), recursive=True):
        # skip everything under .git, home/, skills/, plugins/, memories/
        parts = os.path.relpath(p, ROOT).split(os.sep)
        if any(x in (".git", "home", "skills", "plugins", "memories") for x in parts[:5]):
            continue
        if os.path.exists(p):
            os.remove(p); removed.append(os.path.relpath(p, ROOT))

# Report
print("=== REMOVED (%d) ===" % len(removed))
for r in sorted(set(removed)):
    print("  -", r)

# Verify source + credentials still present
KEEP_CHECK = [
    "app/page.tsx", "app/layout.tsx", "package.json", "package-lock.json",
    "Dockerfile", "docker-compose.yml", "config.yaml", ".env", "auth.json",
    "shared/nous_auth.json", "skills/autonomous-ai-agents/hermes-agent/SKILL.md",
    "lib/api.ts", "lib/system-config.ts", "components/home/Hero.tsx",
    "types/product.ts", "lib/utils.ts", "next.config.mjs", "vercel.json",
]
print("\n=== KEEP VERIFY ===")
allok = True
for k in KEEP_CHECK:
    ok = os.path.exists(os.path.join(ROOT, k))
    allok &= ok
    print(("  OK " if ok else "  MISSING "), k)
print("\nALL KEEP CHECKS PASSED:", allok)
print("Total top-level entries remaining:", len([e for e in os.listdir(ROOT) if not e.startswith('.')]))
