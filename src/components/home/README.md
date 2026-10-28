# Home page (Ploy markup)

`home-page.jsx` is the full marketing home UI (header through footer), migrated from the compiled Ploy bundle. It uses Ploy CSS classes from `public/_ploy_static/_astro/index.BhEVVOhj.css` and overrides in `app/ploy-facelift.css`.

## Section functions

Search for `function St()` etc. in `home-page.jsx`:

| Function | Section |
|----------|---------|
| `vt` | Header |
| `St` | Hero `#home` |
| `zt` | How it works |
| `Et` | Drivers |
| `Rt` | Fleet |
| `It` | Why mobile |
| `Tt` | About / network |
| `Vt` | Ghana |
| `Ot` | Technology |
| `Ft` | Partners |
| `Wt` | Vision / map |
| `$t` | Contact |
| `kt` | Footer |
| `Ht` | **`HomePage`** export |

Long term, split these into typed `sections/*.tsx` and compose from a thin `home-page.tsx`.

## Alternate stack

`src/components/site-home.tsx` is a Tailwind reimplementation (not wired). Use it only if you intentionally move off Ploy styles.
