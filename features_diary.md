# Features Diary

## What this is

A nemesis deck simulator. The user picks a nemesis from the sidebar, chooses a deck mode (basic or upgraded commons), and the app builds a shuffled nemesis deck. Pressing "Next Turn" draws cards, manages the field (powers tick down, dead cards are removed), and places persistent cards automatically. Card stats (health, power, shield) are editable inline since this is a simulator, not a game.

## Deck structure

Every nemesis deck is built from two sources:
- **Common cards** — shared pool of basic and upgraded cards across tiers 1/2/3. A fixed count is drawn per tier (8/7/7).
- **Nemesis-specific cards** — unique tier 1/2/3 cards defined per nemesis.

These are shuffled together per-tier and stacked T1 → T2 → T3. The deck mode determines whether common cards come from the basic pool, upgraded pool, or upgraded-with-basic-fallback.

## Card types

Three types: **attack** (one-shot, not placed on field), **power** (placed on field, has a countdown that ticks each turn), **minion** (placed on field, has health, optional shield). All cards have a tier, title, description, and `is_nemesis_specific_card` flag for visual distinction.

Some nemeses define additional card types for their unique mechanic (e.g. a separate side-deck with its own card type).

## Shared state

- `GameDeckM` (singleton) — owns the deck, field, current card, turn logic, and cooldown. All nemesis views share this.
- `appState` (singleton) — owns which nemesis is currently selected.

## Nemesis-specific state

Each nemesis has a view model class (`.svelte.ts`) that owns its unique mechanic state and calls `GameDeckM` for shared operations. Examples of unique mechanics: a separate shuffled side-deck, a counter/tracker, a positional indicator.

---

## Wiring up a new nemesis

1. **`src/lib/types.ts`** — Add the nemesis ID to the `Nemesis` union type.

2. **`src/lib/data/<name>_nemesis_card_data.ts`** — Create a data file exporting `<name>_tier_1_cards`, `<name>_tier_2_cards`, `<name>_tier_3_cards` arrays (all `NemesisCard[]`). Add any nemesis-specific card types to `types.ts` if needed.

3. **`src/lib/components/nemeses/<name>/`** — Create a folder with:
   - `<name>_view.svelte.ts` — View model class with `init()` that calls `GameDeckM.buildDeck(t1, t2, t3)` and `GameDeckM.nextTurn()`. Add nemesis-specific state and methods here.
   - `<name>_view.svelte` — Template that instantiates the VM, calls `vm.init()` from `onMount`, renders the shared layout (current card top-left, cards on field bottom, action buttons bottom-right) plus any unique UI.
   - Any nemesis-specific sub-components (display-only, props in).

4. **Register in 3 places:**
   - `src/lib/state/app-state.svelte.ts` — Add a `case` in `changeView()`.
   - `src/lib/components/game_view.svelte` — Import the view and add an `{:else if}` branch.
   - `src/lib/components/left_sidebar_component.svelte.ts` — Add the display name to `sidebar_items`.

Steps 1-3 are the real work. Step 4 is boilerplate across 3 files — a future registry pattern could eliminate it, but it's not worth the abstraction at this scale.
