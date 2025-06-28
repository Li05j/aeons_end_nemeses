<script lang="ts">
    import { onMount } from 'svelte';
    import type { NemesisCard } from '$lib/interface';

    export let card_data: NemesisCard | undefined;
    export let is_current_card = false;

    $: card_bg_color = set_bg_color(card_data);
    $: border_color = set_border_color(card_data, is_current_card);
    $: title_text_color = set_title_text_color(card_data);

    function set_bg_color(card_data: NemesisCard | undefined) {
        if (!card_data) {
            return 'bg-white';
        }

        const type = card_data.type;
        switch (type) {
            case 'attack':
                return 'bg-purple-200';
            case 'power':
                return 'bg-yellow-100';
            case 'minion':
                return 'bg-blue-200';
            default:
                return 'bg-white';
        }
    }

    function set_border_color(card_data: NemesisCard | undefined, is_current_card: boolean) {
        if (is_current_card) {
            return 'border-4 border-blue-500';
        }
        if (card_data && ((card_data.type === 'power' && card_data.power <= 0) || (card_data.type === 'minion' && card_data.health <= 0))) {
            return 'border-4 border-red-500';
        }
        return '';
    }

    function set_title_text_color(card_data: NemesisCard | undefined) {
        if (card_data?.is_nemesis_specific_card) {
            return 'text-pink-500';
        }
        return 'text-black';
    }

</script>

<div class="{card_bg_color} {border_color} p-4 space-y-4 card-hover overflow-hidden w-84 h-96">
    {#if card_data === undefined}
        <p class="text-center text-gray-500">No more cards</p>
        <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
    {:else}
        <header class="pb-0">
            <h6 class="{title_text_color} text-lg font-bold text-center my-0">{card_data.title}</h6>
        </header>

        <hr class="h-1 bg-black border-0 opacity-75 mt-0" />

        <div>
            <p class="whitespace-pre-line pb-4">{card_data.description}</p>

            <div class="space-y-2">
                {#if card_data.type === 'attack'}
                    <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
                    <p class="text-right">Tier: {card_data.tier}</p>
                {:else if card_data.type === 'power'}
                    <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
                        <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-2">
                        <span class="">Power:</span>
                        <input type="number" bind:value={card_data.power} class="w-16 text-center border rounded px-1" min="-1">
                        </div>
                        {#if card_data.upgraded === false}
                            <p class="text-right">Tier: {card_data.tier}</p>
                        {:else}
                            <p class="text-right">Upgraded Tier: {card_data.tier}</p>
                        {/if}
                    </div>
                {:else if card_data.type === 'minion'}
                    <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-2">
                            <span class="">Health:</span>
                            <input type="number" bind:value={card_data.health} class="w-16 text-center border rounded px-1" min="0">
                        </div>
                        <p class="text-right">Tier: {card_data.tier}</p>
                    </div>
                    {#if card_data.shield}
                        <span class="">Shield:</span>
                        <input type="number" bind:value={card_data.shield} class="w-16 text-center border rounded px-1" min="0">
                    {/if}
                {/if}
            </div>
        </div>
    {/if}
</div>