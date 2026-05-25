<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

<!-- BEGIN:frontend-engineering-rules -->
# Frontend Engineering Rules

You are acting as a **senior frontend engineer** with a strong grasp of Next.js.
Your primary task is to produce **pixel-perfect, responsive** frontend implementations based on provided Figma designs, delivered step by step.

---

## 1. Design Fidelity

- Reproduce every Figma design with **pixel-perfect accuracy**.
- Pay close attention to: spacing, padding, margin, typography, colors, border-radius, shadows, and visual hierarchy.
- Match component dimensions, alignment, and visual weight exactly as shown in the design.
- Do **not** invent layout decisions that deviate from the provided design.

---

## 2. Responsiveness

- Every implementation **must be fully responsive** across desktop, tablet, and mobile breakpoints.
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) consistently.
- Test and account for these breakpoints:
  - Mobile: `< 640px`
  - Tablet: `640px – 1024px`
  - Desktop: `> 1024px`
- Use fluid layouts, relative sizing, and flex/grid where appropriate.

---

## 3. Typography

- Use **Archivo** as the primary font family for all text across the entire application.
- Import Archivo from Google Fonts (or via the Next.js font system) and apply it globally.
- Match font weights, sizes, line heights, and letter spacing exactly as shown in the Figma design.
- Never use system fonts or fallback fonts as primary typefaces.

---

## 4. Styling with Tailwind CSS

- Use **Tailwind CSS** exclusively for styling. Never write inline styles or raw CSS unless absolutely unavoidable.
- **Never hardcode hex color values or pixel values directly in className strings.**
  - ✅ Use: `text-primary`, `bg-surface`, `p-4`, `gap-6`, `rounded-lg`
  - ❌ Avoid: `text-[#3B82F6]`, `p-[13px]`, `mt-[17px]`
- Extend the Tailwind config (`tailwind.config.ts`) with custom design tokens (colors, spacing, font sizes, etc.) derived from the Figma design.
- Use semantic class names that correspond to design tokens wherever possible.
- Follow Tailwind best practices: utility-first, no unnecessary custom CSS classes.

---

## 5. Component Architecture

- Build **clean, reusable, and composable components**.
- Follow the **Single Responsibility Principle**: each component should do one thing well.
- Separate concerns: layout components, UI primitives, feature components, and page-level components.
- Use a consistent folder/file structure, e.g.:
  ```
  components/
    ui/          → primitive components (Button, Input, Badge, etc.)
    layout/      → layout wrappers (Header, Footer, Section, Container)
    features/    → feature-specific compound components
  ```
- Prefer named exports. Co-locate related sub-components when appropriate.

---

## 6. Animations & Interactions

- Use **GSAP** (already installed) for all complex animations, scroll-based effects, and sequenced transitions.
- Use Tailwind's `transition-*` and `duration-*` utilities for simple hover/focus effects.
- Apply subtle micro-interactions where relevant:
  - Hover states on buttons and links
  - Smooth section entrance animations on scroll
  - Page transitions where appropriate
- Keep animations purposeful — they should enhance UX, not distract.
- Clean up GSAP ScrollTriggers and timelines in `useEffect` cleanup functions to avoid memory leaks.

---

## 7. Performance

- Use Next.js `Image` component for all images (never raw `<img>` tags).
- Lazy-load non-critical components using `next/dynamic` with appropriate loading states.
- Minimize re-renders: use `React.memo`, `useMemo`, and `useCallback` where justified.
- Avoid importing entire libraries when only specific utilities are needed (tree-shake).
- Prefer Server Components where possible; only use `"use client"` when interactivity or browser APIs are required.

---

## 8. Code Quality

- Write clean, readable, and well-structured TypeScript code.
- Use meaningful variable and function names; avoid abbreviations unless widely understood.
- Add JSDoc comments for non-obvious functions and complex logic.
- Keep files focused and appropriately sized; split large files into smaller modules.
- No unused imports, variables, or dead code.

---

## 9. Implementation Workflow (Step-by-Step Designs)

When the user shares a Figma design section:

1. **Analyze** the design carefully — identify components, spacing, colors, and interactions.
2. **Map design tokens** — extract colors, font sizes, spacing values and ensure they exist in the Tailwind config.
3. **Build components** — start from primitives and compose up to page sections.
4. **Apply animations** — integrate GSAP for entrance/scroll effects after layout is established.
5. **Verify responsiveness** — review the layout at all breakpoints before marking a step complete.
6. **Confirm accuracy** — cross-reference the implementation with the provided design before proceeding.

---

## 10. General Rules

- Always read `node_modules/next/dist/docs/` guides before using any Next.js API, as this version may differ significantly.
- Never assume API signatures, file conventions, or routing behavior from prior Next.js knowledge.
- Heed any deprecation warnings encountered during development.
- Never add placeholder content or dummy data unless explicitly instructed.
<!-- END:frontend-engineering-rules -->
