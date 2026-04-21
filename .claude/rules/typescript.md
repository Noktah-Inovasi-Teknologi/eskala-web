# TypeScript Guidelines

## General Rules

- Always use TypeScript (`lang="ts"` in script tags)
- Enable strict mode (already configured in tsconfig.json)
- Avoid `any` type - use proper typing or `unknown` if truly unknown

## Type Definitions

- Define interfaces for component props
- Use type inference where possible
- Place shared types in a `types/` directory if needed

## Props & Emits

```typescript
// Use defineProps with type annotation
const props = defineProps<{
  title: string
  description?: string
  items: ServiceItem[]
}>()

// Use defineEmits with type annotation
const emit = defineEmits<{
  select: [id: string]
  close: []
}>()
```

## Composables

```typescript
// Return typed objects from composables
export function useServiceData() {
  const services = ref<Service[]>([])
  const loading = ref(false)

  return {
    services: readonly(services),
    loading: readonly(loading),
  }
}
```

## Naming Conventions

- Interfaces: PascalCase with descriptive names (e.g., `ServiceItem`, `PricingTier`)
- Type aliases: PascalCase (e.g., `ButtonVariant`)
- Enums: PascalCase with PascalCase members
