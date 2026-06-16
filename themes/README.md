# Themes

DaisyUI theme files — single source of truth for all site colors.

## Files

| File | Theme name | `data-theme` | Use |
|---|---|---|---|
| `dark.css` | `"dark"` | `data-theme="dark"` | Dark mode (default) |
| `light.css` | `"light"` | `data-theme="light"` | Light mode |

## How it works

1. **Main site** (`global.css`) imports both themes. DaisyUI reads `data-theme` on `<html>` to apply colors.
2. **Starlight** (`starlight.css`) imports both themes and maps `--color-*` to `--sl-*` variables.
3. **Blog** (`blog.css`) uses `html.dark` / `html.light` classes (toggled by `theme.js`) for its own color tokens, plus DaisyUI variable overrides.
4. **Theme toggle** (`public/theme.js`) cycles through `system` → `dark` → `light`, setting `data-theme` and `html.dark`/`html.light` classes.

## Color variables

### DaisyUI tokens (available everywhere via Tailwind classes)

| Variable | Purpose | Dark | Light |
|---|---|---|---|
| `--color-base-100` | Page/card background | `#282828` | `#ffffff` |
| `--color-base-200` | Elevated surfaces | `#222222` | `oklch(97%)` |
| `--color-base-300` | Borders/dividers | `#161616` | `oklch(92%)` |
| `--color-base-content` | Body text | `#d1d1d1` | `oklch(20%)` |
| `--color-primary` | Brand accent | `#ff8800` | `#ff8800` |
| `--color-primary-content` | Text on primary | `#222222` | `oklch(98%)` |
| `--color-error` | Error/danger | `#ff5500` | `#ff5500` |

### Tailwind classes

Use DaisyUI semantic classes instead of raw colors:

```html
<!-- Backgrounds -->
<div class="bg-base-100">  <!-- page bg -->
<div class="bg-base-200">  <!-- card/elevated bg -->
<div class="bg-base-300">  <!-- divider bg -->

<!-- Text -->
<p class="text-base-content">  <!-- body text -->
<p class="text-primary">       <!-- accent text -->

<!-- Borders -->
<div class="border-base-300">  <!-- standard border -->
```

## Adding a new color

1. Add `--color-{name}` to both `dark.css` and `light.css`
2. Use it as `bg-{name}`, `text-{name}`, `border-{name}` via DaisyUI
3. For Starlight, map it in `starlight.css`: `--sl-color-{name}: var(--color-{name});`
