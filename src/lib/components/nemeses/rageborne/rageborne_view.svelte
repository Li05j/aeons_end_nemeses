<script lang="ts">
    import { onMount } from 'svelte';
    import { 
        basic_common_t1_nemesis_cards, 
        basic_common_t2_nemesis_cards, 
        basic_common_t3_nemesis_cards,
    } from '$lib/stores/common_nemesis_cards_store';
    import { shuffle_array } from '$lib/utils';
    import NemesisCardComponent from '$lib/components/nemesis_card_component.svelte';
    import type { NemesisCard } from '$lib/interface';
    
    ///////////////////////////////////////////////////

    import {
        rageborne_t1_nemesis_cards,
        rageborne_t2_nemesis_cards,
        rageborne_t3_nemesis_cards,
        rageborne_strike_deck,
    } from '$lib/stores/specific_nemesis_cards_store';

    const TOTAL_T1_NEMESIS_CARDS = 3;
    const TOTAL_T2_NEMESIS_CARDS = 3;
    const TOTAL_T3_NEMESIS_CARDS = 3;

    let strike_deck = shuffle_array($rageborne_strike_deck);

    ///////////////////////////////////////////////////

    // To prevent rapid clicking on Next Turn button
    let isOnCooldown = false;
    
    function nextTurnClickCooldown() {
        if (isOnCooldown) return;
        
        // Start cooldown
        isOnCooldown = true;
        setTimeout(() => {
            isOnCooldown = false;
        }, 750);
    }

    const TOTAL_T1_CARDS = 11;
    const TOTAL_T2_CARDS = 3;
    const TOTAL_T3_CARDS = 3;

    let current_card: NemesisCard | undefined = undefined;
    let combined_deck: NemesisCard[] = [];
    let cards_on_field: NemesisCard[] = [];
    let resolved_deck: NemesisCard[] = [];

    onMount(() => {
        const shuffled_common_t1_cards = shuffle_array($basic_common_t1_nemesis_cards);
        const common_t1_deck = shuffled_common_t1_cards.slice(0, TOTAL_T1_CARDS - TOTAL_T1_NEMESIS_CARDS);
        const shuffled_common_t2_cards = shuffle_array($basic_common_t2_nemesis_cards);
        const common_t2_deck = shuffled_common_t2_cards.slice(0, TOTAL_T2_CARDS - TOTAL_T2_NEMESIS_CARDS);
        const shuffled_common_t3_cards = shuffle_array($basic_common_t3_nemesis_cards);
        const common_t3_deck = shuffled_common_t3_cards.slice(0, TOTAL_T3_CARDS - TOTAL_T3_NEMESIS_CARDS);

        const t1_deck = shuffle_array([...$rageborne_t1_nemesis_cards, ...common_t1_deck]);
        const t2_deck = shuffle_array([...$rageborne_t2_nemesis_cards, ...common_t2_deck]);
        const t3_deck = shuffle_array([...$rageborne_t3_nemesis_cards, ...common_t3_deck]);

        combined_deck = structuredClone([...t1_deck, ...t2_deck, ...t3_deck]);
        next_turn()
    });
    
    function next_turn() {
        nextTurnClickCooldown();
        if (combined_deck.length > 0) {
            if (current_card) { resolved_deck.push(current_card); }
            current_card = combined_deck.shift();
            combined_deck = [...combined_deck] // To trigger reactivity
        }
        else {
            current_card = undefined;
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
            <div class="p-2">
                <NemesisCardComponent card_data={card} is_current_card={card === current_card} />
            </div>
        {/each}
    </div>

    <button 
        class="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded {isOnCooldown ? 'opacity-50 cursor-not-allowed' : ''}"
        on:click={() => next_turn()}
        disabled={isOnCooldown}
    >
        Next Turn ({combined_deck.length} cards left)
    </button>
</div>