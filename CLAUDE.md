# Agent Instructions

## Stack

Svelte 5, TailwindCSS v4, shadcn-svelte, Vite, npm. Standard SvelteKit project structure.

## Collaboration Rules

- This is a personal project with you as my teammate. Be opinionated. Challenge bad ideas, push back on poor assumptions, suggest improvements. No flattery, no hedging.
- YAGNI: don't build what isn't needed. But maintain high cohesion, low coupling. Design for extensibility without over-engineering: code should be easy to modify or extend, not prematurely abstracted.
- Keep the best UX practices in mind.
- Accessibility is not a concern.

## Architecture

### View Model Pattern

Every `.svelte` file that needs data or logic MUST have a companion `.svelte.ts` view model. The `.svelte` file handles template/rendering only — minimal `<script>` content. All state, computed values, and methods live in the view model. Svelte `$state`/`$derived` are used in view models for reactivity.

- **Component-local state**: view model as a class instantiated per component (e.g., `composer.svelte.ts`).
- **Shared state**: singleton store pattern — export a single instance (e.g., `app-state.svelte.ts`). Use this instead of prop drilling.

No business data in `.svelte` files. Props are for parent-child component configuration, not for threading shared state through the tree.

### Component Structure

Use composition (slots, snippets, wrapper components). Keep components focused: one responsibility per component. Extract sub-components when a component grows beyond its single concern.

### File Organization

- `src/lib/state/` — shared state classes and domain models (AppState, ChatState, types).
- `src/lib/components/chat/` — chat UI components and their component-local view models.
- `src/lib/components/ui/` — shadcn-svelte primitives (auto-generated, don't hand-edit).

## Styling

Project-specific design tokens (colors, dimensions) live in `src/routes/layout.css` as CSS custom properties. Reusable values get a token; one-off values stay as inline Tailwind. Read the comment block at the top of that file before adding new UI — it explains the token inventory and naming convention.

## Commands & Packages

- Non-destructive, quick commands (mkdir, file moves): execute directly.
- Destructive or long-running commands (npm install, migrations, bulk deletes): show the command and ask. Human may run it manually.
- shadcn-svelte UI packages: install freely.
- Any other package: ask first.

## Documentation

`features_diary.md` documents the app's behavior. Read this if you need a general overview of the App.

Keep entries user-facing (what it does, how it behaves) with minimal technical detail — code is the source of truth for implementation. Update it when features are added or changed. This file must be slim.
