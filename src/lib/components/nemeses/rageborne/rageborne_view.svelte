<script lang="ts">
    import { onMount } from 'svelte';
    import { common_t1_nemesis_cards, common_t2_nemesis_cards, common_t3_nemesis_cards } from '$lib/stores';
    import { shuffle_array } from '$lib/utils';
    import NemesisCardComponent from '$lib/components/nemesis_card_component.svelte';
    import type { NemesisCard } from '$lib/interface';

    const TOTAL_T1_CARDS = 2;
    const TOTAL_T2_CARDS = 2;
    const TOTAL_T3_CARDS = 2;

    let t1_deck: NemesisCard[] = [];
    let t2_deck: NemesisCard[] = [];
    let t3_deck: NemesisCard[] = [];

    let resolved_deck: NemesisCard[] = [];
  
    onMount(() => {
        const shuffled_t1_cards = shuffle_array($common_t1_nemesis_cards);
        t1_deck = shuffled_t1_cards.slice(0, TOTAL_T1_CARDS);
        const shuffled_t2_cards = shuffle_array($common_t2_nemesis_cards);
        t2_deck = shuffled_t2_cards.slice(0, TOTAL_T2_CARDS);
        const shuffled_t3_cards = shuffle_array($common_t3_nemesis_cards);
        t3_deck = shuffled_t3_cards.slice(0, TOTAL_T3_CARDS);
    });
</script>

<div class="flex flex-col items-center justify-center h-full">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each t1_deck as card}
            <NemesisCardComponent card_data={card}/>
        {/each}
        {#each t2_deck as card}
            <NemesisCardComponent card_data={card}/>
        {/each}
        {#each t3_deck as card}
            <NemesisCardComponent card_data={card}/>
        {/each}
    </div>
</div>