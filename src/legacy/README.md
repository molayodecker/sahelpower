# Legacy home page bundle

The marketing home page UI lives in **`page.CqhHbMfO.js`**. It is a compiled Ploy/Astro React bundle (minified names, inlined Lucide-style icons, and helpers). You cannot recover the original `.astro` / source tree from it automatically; this file **is** the maintainable source unless you migrate to `src/components/site-home.tsx`.

## Entry point

- **`export { Ht as HomePage }`** — `Ht()` composes all sections.
- Loaded from `src/components/home-page-client.tsx` with `dynamic(..., { ssr: false })`.

## Section map (function → DOM)

| Function | Section | Typical `#id` |
|----------|---------|---------------|
| `vt` | Header / nav | — |
| `St` | Hero | `#home` |
| `zt` | How it works | `#how-it-works` |
| `Et` | Who we serve / drivers | `#drivers` |
| `Rt` | Fleet | `#fleet` |
| `It` | Why mobile charging | `#why-mobile` |
| `Tt` | About / network vision | `#about` |
| `Vt` | Ghana launch | `#ghana` |
| `Ot` | Technology | — |
| `Ft` | Partners | `#partners` |
| `Wt` | Long view / map | `#vision` |
| `$t` | Contact | — |
| `kt` | Footer | — |
| `Ht` | Full page wrapper | — |

Line numbers drift when you edit the file; search for `function St()` etc.

## Supporting files

- **`jsx-runtime-shim.js`** — Must stay as the jsx import target (single React instance).
- **`app/ploy-facelift.css`** — Typography and section styling overrides (preferred for visual changes).
- **`public/_ploy_static/_astro/index.BhEVVOhj.css`** — Original Ploy base styles.

## Editing safely

1. Run **`npm run build`** after JSX changes (syntax errors are easy in large nested trees).
2. Do **not** replace this file from production download without re-applying the React shim import and local revamps.
3. Prefer CSS in `ploy-facelift.css` for layout/visual tweaks; edit functions above for markup/copy.

## Optional migration

`src/components/site-home.tsx` and `src/components/sections/*` are a Tailwind reimplementation—not wired as the live home page. To switch, change `home-page-client.tsx` to import `SiteHome` instead of the legacy bundle.
