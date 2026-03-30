<script lang="ts">
    import { onMount } from 'svelte';
    import GamePlayfield from '$lib/components/game_playfield.svelte';
    import CarapaceQueenHuskTrackComponent from './carapace_queen_husk_track_component.svelte';
    import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';
    import { CarapaceQueenViewModel } from './carapace_queen_view.svelte.ts';
    import { Button } from '$lib/components/ui/button/index.js';

    const vm = new CarapaceQueenViewModel();
    onMount(() => vm.init());
</script>

<GamePlayfield>
    {#snippet nemesis_content()}
        <div class="flex-1 flex justify-center">
            <CarapaceQueenHuskTrackComponent husks_count={vm.husks_count} />
        </div>
    {/snippet}

    {#snippet action_buttons()}
        <Button
            variant="destructive"
            class="w-36"
            onclick={() => vm.addHusks()}
            disabled={GameDeckM.is_on_cooldown}
        >
            + Husks
        </Button>
        <Button
            variant="secondary"
            class="w-36"
            onclick={() => vm.removeHusks()}
            disabled={GameDeckM.is_on_cooldown}
        >
            − Husks
        </Button>
        <Button
            class="w-52"
            onclick={() => GameDeckM.nextTurn()}
            disabled={GameDeckM.is_on_cooldown}
        >
            Next Turn ({GameDeckM.cards_left} left)
        </Button>
    {/snippet}
</GamePlayfield>
