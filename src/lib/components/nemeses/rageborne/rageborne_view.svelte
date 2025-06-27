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

    let combined_deck: NemesisCard[] = [...t1_deck, ...t2_deck, ...t3_deck];
    let current_card: NemesisCard | undefined = undefined;
  
    onMount(() => {
        const shuffled_t1_cards = shuffle_array($common_t1_nemesis_cards);
        t1_deck = shuffled_t1_cards.slice(0, TOTAL_T1_CARDS);
        const shuffled_t2_cards = shuffle_array($common_t2_nemesis_cards);
        t2_deck = shuffled_t2_cards.slice(0, TOTAL_T2_CARDS);
        const shuffled_t3_cards = shuffle_array($common_t3_nemesis_cards);
        t3_deck = shuffled_t3_cards.slice(0, TOTAL_T3_CARDS);

        combined_deck = [...t1_deck, ...t2_deck, ...t3_deck];
        current_card = combined_deck.shift() || undefined;
    });
    
    function next_turn() {
        if (current_card) {
            resolved_deck.push(current_card);
            current_card = combined_deck.shift();
        }
    }

</script>

<div class="flex flex-col items-center justify-center h-full">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NemesisCardComponent card_data={current_card}/>
    </div>

    <button 
        class="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
        on:click={() => next_turn()}
        disabled={!current_card}
    >
        Next Turn
    </button>
</div>