<script lang="ts">
    import { onMount } from 'svelte';
    import type { NemesisCard, RageborneStrikeCard } from '$lib/interface';

    export let card_data: RageborneStrikeCard | undefined;

</script>

<div class="bg-pink-200 border-4 border-red-500 p-4 space-y-4 card-hover overflow-hidden w-84 h-96">
    {#if card_data === undefined}
        <p class="text-center text-gray-500">Error: There should be cards but nothing is found.</p>
        <hr class="h-1 bg-black border-0 opacity-75 mt-0" />
    {:else}
        <header class="pb-0">
            <h6 class="text-black text-lg font-bold text-center my-0">Strike: {card_data.title}</h6>
        </header>

        <hr class="h-1 bg-black border-0 opacity-75 mt-0" />

        <div>
            <p class="whitespace-pre-line pb-4">{card_data.description}</p>
        </div>
    {/if}
</div>