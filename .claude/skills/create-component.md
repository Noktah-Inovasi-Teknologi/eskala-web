# Skill: Create New Component

## When to Use
When the user asks to create a reusable Vue component.

## Steps

1. **Create the component file**
   - Place in `app/components/`
   - Use PascalCase naming (e.g., `ServiceCard.vue`, `TestimonialCard.vue`)
   - Components are auto-imported by Nuxt — no explicit import needed

2. **Component template**

   ```vue
   <script setup lang="ts">
   interface Props {
     title: string
     description?: string
   }

   const props = defineProps<Props>()
   </script>

   <template>
     <div class="flex flex-col gap-8 rounded-3xl border border-obsidian-200 p-8">
       <!-- Component content -->
       <h3 class="font-display text-2xl font-semibold text-obsidian-950">
         {{ props.title }}
       </h3>
       <p class="font-body text-obsidian-700">{{ props.description }}</p>
     </div>
   </template>
   ```

3. **Follow conventions**
   - Always `<script setup lang="ts">` — no Options API
   - Use Nuxt UI components (`UButton`, `UBadge`, `UIcon`, `UCard`) where applicable
   - Use `font-display` (Poppins) for headings, `font-body` (Plus Jakarta Sans) for body text
   - Apply Tailwind classes; never inline styles or `font-[Poppins]`
   - Type all props with `defineProps<Props>()`
   - Use `defineEmits<{ ... }>()` for typed events

4. **Usage**
   - Directly in templates without importing: `<ServiceCard title="..." />`

## Component Categories

- **Card Components**: Content cards, pricing cards, testimonial cards
  - Naming: `[Name]Card.vue`
  - Pattern: `rounded-3xl border p-8 flex flex-col gap-8`

- **Section Components**: Reusable page sections (e.g., a CTA block used on multiple pages)
  - Naming: `[Name]Section.vue`
  - Pattern: wraps in `<UContainer id="..." class="flex flex-col gap-12 py-24">`

- **Layout Components**: `Navbar.vue`, `WebFooter.vue` — already exist, modify don't duplicate

## Common Component Patterns

### Testimonial card
```vue
<div class="flex flex-col p-8 gap-8 rounded-3xl border border-copper-200 bg-copper-50">
  <Icon name="i-heroicons-chat-bubble-left" class="text-copper-500 text-4xl" />
  <p class="font-body font-medium text-2xl text-obsidian-950">"{{ quote }}"</p>
  <div class="flex gap-3 items-center">
    <div class="w-9 h-9 rounded-full bg-copper-500 flex items-center justify-center text-white font-semibold text-sm shrink-0">
      {{ initials }}
    </div>
    <div class="flex flex-col">
      <p class="font-semibold text-obsidian-900">{{ name }}</p>
      <p class="text-sm text-obsidian-600">{{ position }}</p>
    </div>
  </div>
</div>
```

### Feature/stat card (dark background)
```vue
<div class="flex flex-col gap-8 rounded-3xl border border-obsidian-700 bg-obsidian-900 p-8">
  <p class="font-display text-copper-500 tracking-widest font-semibold text-sm">LABEL</p>
  <h3 class="font-display text-2xl font-bold text-obsidian-50">{{ title }}</h3>
  <p class="font-body text-obsidian-300">{{ description }}</p>
</div>
```
