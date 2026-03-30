<script lang="ts">
    import { onMount } from 'svelte';
    import GamePlayfield from '$lib/components/game_playfield.svelte';
    import WaywardOneBreachAlign from './wayward_one_breach_align.svelte';
    import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';
    import { WaywardOneViewModel } from './wayward_one_view.svelte.ts';
    import { Button } from '$lib/components/ui/button/index.js';

    const vm = new WaywardOneViewModel();
    onMount(() => vm.init());
</script>

<GamePlayfield>
    {#snippet nemesis_content()}
        <div class="flex items-start pt-2">
            <WaywardOneBreachAlign breach_align={vm.breach_align} />
        </div>
    {/snippet}

    {#snippet action_buttons()}
        <Button
            variant="destructive"
            class="w-44"
            onclick={() => vm.nextAlignBreach()}
            disabled={GameDeckM.is_on_cooldown}
        >
            Shift Position
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
