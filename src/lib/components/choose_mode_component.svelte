<script lang="ts">
    import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';
    import RageborneView from '$lib/components/nemeses/rageborne/rageborne_view.svelte';
    import CarapaceQueenView from '$lib/components/nemeses/carapace_queen/carapace_queen_view.svelte';
    import WaywardOneView from '$lib/components/nemeses/wayward_one/wayward_one_view.svelte';

    let { current_view } = $props()

</script>

{#if GameDeckM.game_mode === "none"}
    <div class="flex flex-col items-center justify-center h-screen gap-20">
        <button 
            class="w-full p-4 text-center bg-blue-200 hover:bg-blue-300"
            onclick={() => {GameDeckM.game_mode = "no_upgrade"}}
        >
            No Upgraded Basics
        </button>
        <button 
            class="w-full p-4 text-center bg-pink-200 hover:bg-pink-300"
            onclick={() => {GameDeckM.game_mode = "yes_upgrade"}}
        >
            Yes Upgraded Basics
        </button>
    </div>
{:else}
    {#if current_view === 'rageborne'}
        <div class="flex-1 h-full p-4">
            <RageborneView />
        </div>
    {:else if current_view === 'carapace_queen'}
        <div class="flex-1 h-full p-4">
            <CarapaceQueenView />
        </div>
    {:else if current_view === 'wayward_one'}
        <div class="flex-1 h-full p-4">
            <WaywardOneView />
        </div>
    {/if}
{/if}