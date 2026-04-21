# Vue & Nuxt Conventions

## Component Structure

Use the following order in Vue SFC files:
1. `<script setup lang="ts">` (always use setup + TypeScript)
2. `<template>`
3. `<style>` (if needed, prefer Tailwind classes instead)

## Naming Conventions

- **Components**: PascalCase (e.g., `ServiceCard.vue`, `PricingTable.vue`)
- **Pages**: kebab-case (e.g., `social-media-management.vue`)
- **Composables**: camelCase with `use` prefix (e.g., `useNavigation.ts`)

## Nuxt-Specific

- Use `<NuxtLink>` instead of `<a>` for internal navigation
- Use `<NuxtImg>` for optimized images when available
- Leverage auto-imports for components and composables
- Use `definePageMeta()` for page-level metadata

## Nuxt UI Components

Prefer Nuxt UI components over custom implementations:
- `<UButton>` for buttons
- `<UCard>` for card layouts
- `<UIcon>` for icons (Heroicons)
- `<UTabs>` for tabbed content
- `<UDropdown>` for dropdown menus

## State Management

- Use Vue's `ref()` and `reactive()` for local state
- Use `useState()` for shared state across components
- Avoid external state libraries unless necessary
