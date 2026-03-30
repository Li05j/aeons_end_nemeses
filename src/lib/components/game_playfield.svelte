<script lang="ts">
    import type { Snippet } from 'svelte';
    import NemesisCardComponent from '$lib/components/nemeses/nemesis_card_component.svelte';
    import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';

    let { nemesis_content, action_buttons }: {
        nemesis_content?: Snippet;
        action_buttons?: Snippet;
    } = $props();
</script>

<div class="relative h-full flex flex-col min-w-0">
    <div class="flex-1 min-h-0 flex items-start gap-6 p-6">
        <div class="shrink-0">
            <NemesisCardComponent card_data={GameDeckM.current_card} is_current_card={true} />
        </div>

        {#if nemesis_content}{@render nemesis_content()}{/if}
    </div>

    <div class="flex-1 min-h-0 border-t border-border overflow-x-auto px-6 pt-4 pb-14 min-w-0">
        <div class="flex gap-2">
            {#each GameDeckM.cards_on_field as card}
                <NemesisCardComponent card_data={card} is_current_card={card === GameDeckM.current_card} />
            {/each}
        </div>
    </div>

    <div class="fixed bottom-5 right-6 z-10 flex gap-2">
        {#if action_buttons}{@render action_buttons()}{/if}
    </div>
</div>
