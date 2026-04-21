# Tailwind CSS Styling Guidelines

## General Principles

- Always use Tailwind utility classes over custom CSS
- Follow mobile-first responsive design
- Use the project's custom color tokens: `cobalt`, `copper`, `obsidian`
- Use `font-display` (Poppins) for headings and `font-body` (Plus Jakarta Sans) for body text

## Typography Classes

```
font-display   →  Poppins (headings, labels, numbers, brand elements)
font-body      →  Plus Jakarta Sans (body text, descriptions, paragraphs)
```

**Do NOT use** `font-[Poppins]` inline style — use `font-display` instead.

### Text Hierarchy
```
Hero headline:      font-display text-7xl font-bold text-obsidian-950
Section heading:    font-display text-5xl font-bold text-obsidian-950
Sub-heading:        font-display text-2xl font-semibold text-obsidian-950
Body paragraph:     font-body text-lg text-obsidian-700 font-light
Small label (caps): font-display text-sm font-semibold tracking-widest text-cobalt-500
Decorative label:   font-display text-copper-500 font-medium
```

## Color Usage

```
Primary (cobalt):    text-cobalt-500, bg-cobalt-50, border-cobalt-200
Secondary (copper):  text-copper-500, bg-copper-50, border-copper-200
Neutral (obsidian):  text-obsidian-700, bg-obsidian-100, border-obsidian-300
Dark sections:       bg-obsidian-950, text-obsidian-50, border-obsidian-700
```

In Nuxt UI components:
- `color="primary"` → cobalt
- `color="secondary"` → copper
- `color="neutral"` → obsidian
- `color="success"` → green (used for WhatsApp button)

## Spacing Standards

- **Section vertical padding**: `py-24` (consistent across all sections)
- **Container**: Use `<UContainer>` — configured as `max-w-7xl mx-auto px-6`
- **Section gaps**: `flex flex-col gap-12` for major content blocks
- **Sub-gaps**: `gap-8` for heading groups, `gap-4` or `gap-6` for smaller items
- **Grid columns**: `grid-cols-2`, `md:grid-cols-2`, `lg:grid-cols-3`, `lg:grid-cols-4`

## Section Structure Pattern

Every section follows this structure:

```vue
<UContainer id="section-name" class="flex flex-col gap-12 py-24">
  <div class="flex flex-col gap-8">
    <p class="font-display text-copper-500 font-medium">──────── Section label</p>
    <h2 class="font-display text-obsidian-950 font-bold text-5xl">Section heading</h2>
    <p class="font-body text-lg text-obsidian-700 font-light">
      Supporting description text.
    </p>
  </div>
  <!-- Section content -->
</UContainer>
```

For dark sections (obsidian-950 background):
```vue
<UContainer id="section-name" class="flex flex-col gap-12 py-24 bg-obsidian-950">
  <div class="flex flex-col gap-8">
    <p class="font-display text-copper-500 font-medium">──────── Section label</p>
    <h2 class="font-display text-obsidian-50 font-bold text-5xl">Section heading</h2>
    <p class="font-body text-lg text-obsidian-300 font-light">Description.</p>
  </div>
</UContainer>
```

## Card Patterns

### Standard card (light)
```vue
<div class="flex flex-col gap-8 rounded-3xl border border-obsidian-200 p-8">
  <!-- content -->
</div>
```

### Dark card (inside dark sections)
```vue
<div class="flex flex-col gap-8 rounded-3xl border border-obsidian-700 bg-obsidian-900 p-8">
  <!-- content -->
</div>
```

### Copper accent card (testimonials, hero quote)
```vue
<div class="flex flex-col p-8 gap-8 rounded-3xl border border-copper-200 bg-copper-50">
  <!-- content -->
</div>
```

### VIP / Premium card
```vue
<div class="bg-copper-50 rounded-2xl p-8 border-2 border-copper-400">
  <!-- content -->
</div>
```

## Button Patterns

```vue
<!-- Primary: WhatsApp / main CTA -->
<UButton href="https://wa.me/6285706034321" color="success" class="px-4 rounded-full" size="xl">
  <Icon name="i-mdi-whatsapp" />Hubungi via WhatsApp
</UButton>

<!-- Secondary: email / outline -->
<UButton href="mailto:core@eskala.id" color="neutral" variant="outline" class="px-4 rounded-full" size="xl">
  <Icon name="i-heroicons-envelope" />Kirim brief melalui email
</UButton>

<!-- Tertiary: link style -->
<UButton color="neutral" variant="link" class="px-4 rounded-full" size="xl">
  atau pelajari detail
  <Icon name="i-heroicons-arrow-top-right-on-square" />
</UButton>

<!-- Copper accent -->
<UButton color="secondary" class="px-4 rounded-full" size="xl">
  Label
</UButton>
```

## Custom Animations

```css
/* Defined in main.css — use via class on the element */
.animate-bounce-bottom {
  animation: bounce-from-bottom 1s infinite;
}
```

## Responsive Breakpoints

```
sm:  640px   (small tablets)
md:  768px   (tablets)
lg:  1024px  (laptops)
xl:  1280px  (desktops)
2xl: 1536px  (large screens)
```

## Avoid

- Inline styles
- `font-[Poppins]` (use `font-display` instead)
- Custom CSS unless absolutely necessary
- Hardcoded color hex values (use theme tokens)
- Fixed pixel spacing (use Tailwind scale)
- `py-16 md:py-24` — use just `py-24` to keep sections consistent
