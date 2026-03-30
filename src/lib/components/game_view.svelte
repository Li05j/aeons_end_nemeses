<script lang="ts">
    import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';
    import { appState } from '$lib/state/app-state.svelte';
    import { Button } from '$lib/components/ui/button/index.js';
    import RageborneView from '$lib/components/nemeses/rageborne/rageborne_view.svelte';
    import CarapaceQueenView from '$lib/components/nemeses/carapace_queen/carapace_queen_view.svelte';
    import WaywardOneView from '$lib/components/nemeses/wayward_one/wayward_one_view.svelte';
</script>

{#if GameDeckM.game_mode === "none"}
    <div class="flex flex-col items-center justify-center h-full gap-4">
        <p class="text-muted-foreground text-sm mb-2">Choose deck mode</p>
        <Button
            variant="outline"
            class="w-72 h-14 text-base"
            onclick={() => {GameDeckM.game_mode = "no_upgrade"}}
        >
            Basics Only
        </Button>
        <Button
            variant="outline"
            class="w-72 h-14 text-base border-primary/40 text-primary hover:bg-primary/10"
            onclick={() => {GameDeckM.game_mode = "yes_upgrade"}}
        >
            Upgraded Basics
        </Button>
        <Button
            variant="outline"
            class="w-72 h-14 text-base"
            onclick={() => {GameDeckM.game_mode = "mixed"}}
        >
            Mixed
        </Button>
    </div>
{:else}
    {#if appState.current_view === 'rageborne'}
        <RageborneView />
    {:else if appState.current_view === 'carapace_queen'}
        <CarapaceQueenView />
    {:else if appState.current_view === 'wayward_one'}
        <WaywardOneView />
    {/if}
{/if}
