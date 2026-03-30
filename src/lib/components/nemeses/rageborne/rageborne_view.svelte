<script lang="ts">
    import { onMount } from 'svelte';
    import GamePlayfield from '$lib/components/game_playfield.svelte';
    import RageborneStrikeCardComponent from './rageborne_strike_card_component.svelte';
    import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';
    import { RageborneViewModel } from './rageborne_view.svelte.ts';
    import { Button } from '$lib/components/ui/button/index.js';

    const vm = new RageborneViewModel();
    onMount(() => vm.init());
</script>

<GamePlayfield>
    {#snippet nemesis_content()}
        <div class="flex items-start pt-2">
            {#if vm.striking}
                <RageborneStrikeCardComponent card_data={vm.strike_deck[0]}/>
            {:else}
                <div class="w-72 h-[18rem] rounded-lg border border-strike/20 bg-strike-bg/50 flex items-center justify-center">
                    <p class="text-muted-foreground text-sm italic">No active strike</p>
                </div>
            {/if}
        </div>
    {/snippet}

    {#snippet action_buttons()}
        <Button
            variant="destructive"
            class="w-44"
            onclick={() => vm.strike()}
            disabled={GameDeckM.is_on_cooldown}
        >
            Nemesis Strikes
        </Button>
        <Button
            class="w-52"
            onclick={() => vm.nextTurn()}
            disabled={GameDeckM.is_on_cooldown}
        >
            Next Turn ({GameDeckM.cards_left} left)
        </Button>
    {/snippet}
</GamePlayfield>
