Extract-vs-inline decision table for restructuring a monolith into feature components.

| Signal | Action |
| --- | --- |
| Hardcoded constant / shared data table (sections, branches, lessons) | Extract to `app/lib/data.ts` as a TS module |
| Markup + state for ONE tab/route, >60 lines | Extract to `app/components/<domain>/<Name>.tsx` |
| Shared UI shell (layout, auth guard, bottom nav) | Keep in the existing shell; do not move |
| One-off inline component used only once | Leave inline; do not extract |
| Reusable component used in 2+ unrelated views | Extract to `components/<domain>/<Name>.tsx` |
| Utility used by one view only | Leave where it is |
| Dynamic Tailwind class built from a runtime value | Extract the full class map to a palette object |

Build gate: a clean `npm run build` must pass. On small hosts the worker may exit **SIGBUS** (out-of-memory); that is an environment limit, not a code defect. Reduce the thread pool, not the code, and if it still fails push the build to CI or a bigger machine.