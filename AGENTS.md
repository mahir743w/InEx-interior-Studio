# AGENTS.md — Master Web Design & Frontend Engineering Skills

This document defines the core capabilities, design systems, and engineering standards for the agent. It integrates the industry-leading **UI/UX Pro Max**, **Frontend Design Skill**, **Vanilla Web Craft (Evergreen/Zero-Maintenance)**, **SEO Optimization**, and **Performance Mastery**.

---

## 1. UI/UX Pro Max — Design Intelligence & Anti-AI-Slop

### Visual & Color Craft
- **Sophisticated Neutral Canvas**: Use warm neutrals (`#090A0F`, `#12131A`, `#F8F9FA`, `#FAFAF9`) instead of pure black `#000000` or generic harsh grays.
- **Banned Visual Clichés**:
  - NO purple-to-blue neon gradients.
  - NO glow drop-shadows or ungrounded glassmorphism in dark mode.
  - NO gray text on colored backgrounds.
- **Contrast & Legibility**: Strict WCAG AA compliance ($\ge 4.5:1$ for body text, $\ge 3:1$ for large titles and interactive controls).

### Mathematical Spacing & Geometries
- **Container Padding Rule**: Outer container padding must strictly be greater than or equal to the inner gap between child elements ($\text{Padding} \ge \text{Gap}$).
- **Nested Border Radius Formula**:
  $$\text{Inner Radius} = \text{Outer Radius} - \text{Padding}$$
- **Card Limits**: Standard card corner radius capped at 12px–16px. Reserve pills ($24\text{px}+$) strictly for interactive buttons, badges, and chips.
- **Flatten Visual Depth**: Prioritize subtle borders (`1px solid rgba(...)`), high-contrast typography, and generous negative space over multiple layers of nested cards.

---

## 2. Frontend Design Skill — Typographic & Spatial Systems

### Fluid Typographic Hierarchy
- **Type Scale Ratio**: Step ratio $\ge 1.25$ (Major Third / Perfect Fourth).
- **Responsive Typography**: Use native CSS `clamp()` for fluid scaling across mobile, tablet, and desktop:
  ```css
  font-size: clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
  ```
- **Readability Rules**:
  - Body text minimum 16px.
  - Line height: 1.5 to 1.7.
  - Line width: Constrained to 65–75 characters (`max-width: 68ch`).
  - Single-line labels: Text inside pills, chips, and buttons must NEVER wrap or truncate (`white-space: nowrap`).

### Layout Architecture
- **Responsive Bounds**: Maximum container widths (`max-w-7xl` or `max-width: 1200px`) centered with fluid horizontal gutters.
- **Touch Ergonomics**: All mobile interactive elements have a minimum touch target of $44\text{px} \times 44\text{px}$.

---

## 3. Vanilla Web Craft — Evergreen & Zero-Maintenance

When building zero-maintenance, build-free, or vanilla web experiences:
- **Standards**: Pure Semantic HTML5, Modern CSS3 with Custom Properties (Variables), and Vanilla ES6+ JavaScript.
- **Zero Third-Party Runtime Dependencies**: No npm breakage, no abandoned CDNs, no framework upgrades needed in 5–10 years.
- **Native Scroll Reveal (IntersectionObserver)**:
  ```javascript
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  ```
- **Native UI Controls**:
  - Modals $\rightarrow$ HTML5 `<dialog>` API with `.showModal()` and `.close()`.
  - Accordions $\rightarrow$ Semantic `<details>` and `<summary>`.
  - Theme switching $\rightarrow$ Native `localStorage` + CSS `data-theme` attribute + `prefers-color-scheme`.
- **Inline Vector SVGs**: Use native inline SVGs with `currentColor` to eliminate external icon font HTTP requests.

---

## 4. Performance & Core Web Vitals Optimization

- **Zero Cumulative Layout Shift (CLS)**: Always specify explicit `width`, `height`, or `aspect-ratio` on images and media.
- **Fastest Contentful Paint (FCP / LCP)**:
  - System font stack or locally hosted subset fonts with `font-display: swap`.
  - Lazy load off-screen media using `loading="lazy"` and `decoding="async"`.
- **Micro-Interactions**: Hardware-accelerated CSS transitions on `transform` and `opacity` (200ms–300ms, `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Reduced Motion Respect**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

## 5. Semantic SEO & Accessibility (a11y)

- **Semantic Document Outline**: Exactly one `<h1>` per page, hierarchical `<h2>`–`<h6>` structure, semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **OpenGraph & Social Meta**: Complete metadata tags for search engine crawlers and social share previews (`og:title`, `og:description`, `og:image`, `twitter:card`).
- **Screen Reader Readiness**: Clear `aria-label` attributes on icon-only buttons, keyboard tab navigation (`:focus-visible` ring), and `alt` descriptions on all non-decorative images.
