<script lang="ts">
    import { onMount } from 'svelte';
    import { common_t1_nemesis_cards, common_t2_nemesis_cards, common_t3_nemesis_cards } from '$lib/stores';
    import { shuffle_array } from '$lib/utils';
    import NemesisCardComponent from '$lib/components/nemesis_card_component.svelte';
    import type { NemesisCard } from '$lib/interface';

    const TOTAL_T1_CARDS = 3;
    const TOTAL_T2_CARDS = 3;
    const TOTAL_T3_CARDS = 3;

    let t1_deck: NemesisCard[] = [];
    let t2_deck: NemesisCard[] = [];
    let t3_deck: NemesisCard[] = [];

    let combined_deck: NemesisCard[] = [...t1_deck, ...t2_deck, ...t3_deck];
    let current_card: NemesisCard | undefined = undefined;

    let resolved_deck: NemesisCard[] = [];

    let cards_on_field: NemesisCard[] = [];
  
    onMount(() => {
        const shuffled_t1_cards = shuffle_array($common_t1_nemesis_cards);
        t1_deck = shuffled_t1_cards.slice(0, TOTAL_T1_CARDS);
        const shuffled_t2_cards = shuffle_array($common_t2_nemesis_cards);
        t2_deck = shuffled_t2_cards.slice(0, TOTAL_T2_CARDS);
        const shuffled_t3_cards = shuffle_array($common_t3_nemesis_cards);
        t3_deck = shuffled_t3_cards.slice(0, TOTAL_T3_CARDS);

        combined_deck = [...t1_deck, ...t2_deck, ...t3_deck];
        next_turn()
    });
    
    function next_turn() {
        if (combined_deck.length > 0) {
            if (current_card) { resolved_deck.push(current_card); }
            current_card = combined_deck.shift();
            combined_deck = [...combined_deck] // To trigger reactivity
        }

        for (let i = 0; i < cards_on_field.length; i++) {
            let card = cards_on_field[i];
            if (card.type === 'power' && card.power <= 0) {
                cards_on_field.splice(i, 1);
                i--; // Adjust index after removal
            } else if (card.type === 'minion' && card.health <= 0) {
                cards_on_field.splice(i, 1);
                i--; // Adjust index after removal
            }
        }

        for (let i = 0; i < cards_on_field.length; i++) {
            let card = cards_on_field[i];
            if (card.type === 'power') {
                card.power--;
            }
        }
        
        if (current_card) {
            const type = current_card.type;
            switch (type) {
                case 'attack':
                    break;
                case 'power':
                    cards_on_field = [current_card, ...cards_on_field];
                    break;
                case 'minion':
                    cards_on_field = [current_card, ...cards_on_field];
                    break;
                default:
                    break;
            }
        }

        cards_on_field = [...cards_on_field] // To trigger reactivity
    }

</script>

<div class="relative h-full grid grid-cols-3 grid-rows-2">
    <!-- Top left -->
    <div style="background-color: #aaaaba" class="flex items-center justify-center">
        <NemesisCardComponent card_data={current_card} is_current_card={true}/>
    </div>
    
    <!-- Right -->
    <div class="col-span-2 flex items-center justify-center">
        Idk what to put here yet
    </div>
    
    <!-- Bottom half -->
    <div class="col-span-3 flex">
        {#each cards_on_field as card}
            <NemesisCardComponent card_data={card} is_current_card={card === current_card} />
        {/each}
    </div>

    <button 
        class="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
        on:click={() => next_turn()}
    >
        Next Turn ({combined_deck.length} cards left)
    </button>
</div>