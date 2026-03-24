<script lang="ts">
    import { onMount } from 'svelte';
    import NemesisCardComponent from '$lib/components/nemeses/nemesis_card_component.svelte';
    import CarapaceQueenHuskTrackComponent from './carapace_queen_husk_track_component.svelte';
    import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';
    import { CarapaceQueenViewModel } from './carapace_queen_view.svelte.ts';
    import { Button } from '$lib/components/ui/button/index.js';

    const vm = new CarapaceQueenViewModel();
    onMount(() => vm.init());
</script>

<div class="relative h-full flex flex-col">
    <div class="flex-1 flex gap-6 p-6">
        <div class="shrink-0">
            <NemesisCardComponent card_data={GameDeckM.current_card} is_current_card={true}/>
        </div>

        <div class="flex items-start pt-2">
            <CarapaceQueenHuskTrackComponent husks_count={vm.husks_count} />
        </div>
    </div>

    <div class="border-t border-border px-6 py-4">
        <div class="flex items-center justify-between">
            <div class="flex gap-2 flex-wrap flex-1 overflow-x-auto">
                {#each GameDeckM.cards_on_field as card}
                    <NemesisCardComponent card_data={card} is_current_card={card === GameDeckM.current_card} />
                {/each}
            </div>

            <div class="flex gap-2 shrink-0 ml-4">
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
            </div>
        </div>
    </div>
</div>
