<script lang="ts">
    import { onMount } from 'svelte';
    import type { NemesisCard } from '$lib/interface';

    export let card_data: NemesisCard | undefined;

    let power_left: number = -1;
    let minion_hp: number = -1;

    $: card_bg_color = set_bg_color(card_data);

    function set_bg_color(card_data: NemesisCard | undefined) {
        if (!card_data) {
            return 'bg-white';
        }

        const type = card_data.type;
        switch (type) {
            case 'attack':
                return 'bg-purple-100';
            case 'power':
                power_left = card_data.power;
                return 'bg-yellow-100';
            case 'minion':
                minion_hp = card_data.health;
                return 'bg-blue-100';
            default:
                return 'bg-white';
        }
    }

</script>

<div class="{card_bg_color} p-4 space-y-4 card-hover overflow-hidden max-w-xs">
    {#if card_data === undefined}
        <p class="text-center text-gray-500">No more cards</p>
        <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
    {:else}
        <header class="pb-0">
            <h6 class="text-lg font-bold text-black text-center my-0">{card_data.title}</h6>
        </header>

        <hr class="h-1 bg-black border-0 opacity-75 mt-0" />

        <div>
            <p class="whitespace-pre-line pb-4">{card_data.description}</p>

            <div class="space-y-2">
                {#if card_data.type === 'attack'}
                    <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
                    <p class="text-sm text-right">Tier: {card_data.tier}</p>
                {:else if card_data.type === 'power'}
                    <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
                    <div class="flex justify-between items-center">
                        <p class="text-sm">Power: {power_left}</p>
                        <p class="text-sm text-right">Tier: {card_data.tier}</p>
                    </div>
                {:else if card_data.type === 'minion'}
                    <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
                    <div class="flex justify-between items-center">
                        <p class="text-sm">Health: {minion_hp}</p>
                        <p class="text-sm text-right">Tier: {card_data.tier}</p>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</div>