<script lang="ts">
    import { onMount } from 'svelte';
    import type { NemesisCard } from '$lib/interface';

    export let card_data: NemesisCard;

    let power_left: number = -1;
    let minion_hp: number = -1;

    let card_bg_color: string = 'bg-white';

    onMount(() => {
        const type = card_data.type;
        switch (type) {
            case 'attack':
                card_bg_color = 'bg-purple-100';
                break;
            case 'power':
                power_left = card_data.power;
                card_bg_color = 'bg-yellow-100';
                break;
            case 'minion':
                minion_hp = card_data.health;
                card_bg_color = 'bg-blue-100';
                break;
            default:
                card_bg_color = 'bg-white';
                break;
        }
    });
</script>

<div class="{card_bg_color} p-4 space-y-4 card-hover overflow-hidden max-w-xs">
    <header class="pb-0">
        <h6 class="text-lg font-bold text-black text-center my-0">{card_data.title}</h6>
    </header>
    
    <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
    
    <div>
        <p class="whitespace-pre-line pb-4">{card_data.description}</p>
        
        <div class="space-y-2">
            {#if card_data.type === 'power'}
                <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
                <p class="text-sm">Power: {power_left}</p>
            {:else if card_data.type === 'minion'}
                <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
                <p class="text-sm">Health: {minion_hp}</p>
            {/if}
        </div>
    </div>
</div>