<script lang="ts">
    import { onMount } from 'svelte';
    import { 
        basic_common_t1_nemesis_cards, 
        basic_common_t2_nemesis_cards, 
        basic_common_t3_nemesis_cards,
        upgraded_common_t1_nemesis_cards,
        upgraded_common_t2_nemesis_cards,
        upgraded_common_t3_nemesis_cards,
    } from '$lib/stores/common_nemesis_cards_store';

    import { shuffle_array } from '$lib/utils';
    import NemesisCardComponent from '$lib/components/nemeses/nemesis_card_component.svelte';
    import type { NemesisCard } from '$lib/types';
    
    ///////////////////////////////////////////////////

    import {
        rageborne_t1_nemesis_cards,
        rageborne_t2_nemesis_cards,
        rageborne_t3_nemesis_cards,
        rageborne_strike_deck,
    } from '$lib/stores/specific_nemesis_cards_store';

    import RageborneStrikeCardComponent from '$lib/components/nemeses/rageborne/rageborne_strike_card_component.svelte';

    const TOTAL_T1_NEMESIS_CARDS = 3;
    const TOTAL_T2_NEMESIS_CARDS = 3;
    const TOTAL_T3_NEMESIS_CARDS = 3;

    let strike_deck = shuffle_array($rageborne_strike_deck);
    let striking: boolean = false;

    function strike() {
        reset_strike()
        nextTurnClickCooldown();
        striking = true;
    }

    function reset_strike() {
        striking = false;
        strike_deck = shuffle_array(strike_deck);
    }

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

    const TOTAL_COMMON_T1_CARDS = 8;
    const TOTAL_COMMON_T2_CARDS = 7;
    const TOTAL_COMMON_T3_CARDS = 7;

    let current_card: NemesisCard | undefined = undefined;
    let combined_deck: NemesisCard[] = [];
    let cards_on_field: NemesisCard[] = [];
    let resolved_deck: NemesisCard[] = [];

    function buildTierDeck(upgradedCards: NemesisCard[], basicCards: NemesisCard[], totalNeeded: number) {
        const shuffledUpgraded = shuffle_array(upgradedCards);
        const upgradedToUse = shuffledUpgraded.slice(0, totalNeeded);
        
        if (upgradedToUse.length >= totalNeeded) {
            return upgradedToUse;
        }

        const basicNeeded = totalNeeded - upgradedToUse.length;
        const shuffledBasic = shuffle_array(basicCards);
        const basicToUse = shuffledBasic.slice(0, basicNeeded);

        return [...upgradedToUse, ...basicToUse];
    }

    onMount(() => {
        const common_t1_deck = buildTierDeck($upgraded_common_t1_nemesis_cards, $basic_common_t1_nemesis_cards, TOTAL_COMMON_T1_CARDS);
        const common_t2_deck = buildTierDeck($upgraded_common_t2_nemesis_cards, $basic_common_t2_nemesis_cards, TOTAL_COMMON_T2_CARDS);
        const common_t3_deck = buildTierDeck($upgraded_common_t3_nemesis_cards, $basic_common_t3_nemesis_cards, TOTAL_COMMON_T3_CARDS);

        const t1_deck = shuffle_array([...$rageborne_t1_nemesis_cards, ...common_t1_deck]);
        const t2_deck = shuffle_array([...$rageborne_t2_nemesis_cards, ...common_t2_deck]);
        const t3_deck = shuffle_array([...$rageborne_t3_nemesis_cards, ...common_t3_deck]);

        combined_deck = structuredClone([...t1_deck, ...t2_deck, ...t3_deck]);
        // const shullfed_upgraded_t1_cards = shuffle_array($upgraded_common_t1_nemesis_cards);
        // const shullfed_upgraded_t2_cards = shuffle_array($upgraded_common_t2_nemesis_cards);
        // const shullfed_upgraded_t3_cards = shuffle_array($upgraded_common_t3_nemesis_cards);

        // let common_upgraded_t1_deck = [];
        // let common_upgraded_t2_deck = [];
        // let common_upgraded_t3_deck = [];

        // if (shullfed_upgraded_t1_cards.length < TOTAL_COMMON_T1_CARDS) {
        //     common_upgraded_t1_deck = shullfed_upgraded_t1_cards;
        // }
        // else {
        //     common_upgraded_t1_deck = shullfed_upgraded_t1_cards.slice(0, TOTAL_COMMON_T1_CARDS);
        // }

        // if (shullfed_upgraded_t2_cards.length < TOTAL_COMMON_T2_CARDS) {
        //     common_upgraded_t2_deck = shullfed_upgraded_t2_cards;
        // }
        // else {
        //     common_upgraded_t2_deck = shullfed_upgraded_t2_cards.slice(0, TOTAL_COMMON_T2_CARDS);
        // }

        // if (shullfed_upgraded_t3_cards.length < TOTAL_COMMON_T3_CARDS) {
        //     common_upgraded_t3_deck = shullfed_upgraded_t3_cards;
        // }
        // else {
        //     common_upgraded_t3_deck = shullfed_upgraded_t3_cards.slice(0, TOTAL_COMMON_T3_CARDS);
        // }

        // let common_t1_deck = [];
        // let common_t2_deck = [];
        // let common_t3_deck = [];

        // if (common_upgraded_t1_deck.length < TOTAL_COMMON_T1_CARDS) {
        //     const shuffled_common_basic_t1_cards = shuffle_array($basic_common_t1_nemesis_cards);
        //     const common_basic_t1_deck = shuffled_common_basic_t1_cards.slice(0, TOTAL_COMMON_T1_CARDS - common_upgraded_t1_deck.length);
        //     common_t1_deck = [...common_basic_t1_deck, ...common_upgraded_t1_deck];
        // }
        // else {
        //     common_t1_deck = common_upgraded_t1_deck;
        // }

        // if (common_upgraded_t2_deck.length < TOTAL_COMMON_T2_CARDS) {
        //     const shuffled_common_basic_t2_cards = shuffle_array($basic_common_t2_nemesis_cards);
        //     const common_basic_t2_deck = shuffled_common_basic_t2_cards.slice(0, TOTAL_COMMON_T2_CARDS - common_upgraded_t2_deck.length);
        //     common_t2_deck = [...common_basic_t2_deck, ...common_upgraded_t2_deck];
        // }
        // else {
        //     common_t2_deck = common_upgraded_t2_deck;
        // }

        // if (common_upgraded_t3_deck.length < TOTAL_COMMON_T3_CARDS) {
        //     const shuffled_common_basic_t3_cards = shuffle_array($basic_common_t3_nemesis_cards);
        //     const common_basic_t3_deck = shuffled_common_basic_t3_cards.slice(0, TOTAL_COMMON_T3_CARDS - common_upgraded_t3_deck.length);
        //     common_t3_deck = [...common_basic_t3_deck, ...common_upgraded_t3_deck];
        // }
        // else {
        //     common_t3_deck = common_upgraded_t3_deck;
        // }

        // const t1_deck = shuffle_array([...$rageborne_t1_nemesis_cards, ...common_t1_deck]);
        // const t2_deck = shuffle_array([...$rageborne_t2_nemesis_cards, ...common_t2_deck]);
        // const t3_deck = shuffle_array([...$rageborne_t3_nemesis_cards, ...common_t3_deck]);

        // combined_deck = structuredClone([...t1_deck, ...t2_deck, ...t3_deck]);
        next_turn()
    });
    
    function next_turn() {
        /////////////////////////
        reset_strike();
        /////////////////////////

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
    <div class="col-span-2 flex items-center">
        {#if striking === true}
            <RageborneStrikeCardComponent card_data={strike_deck[0]}/>
        {:else}
            <div class="bg-pink-200 p-4 space-y-4 card-hover overflow-hidden w-84 h-96 text-center flex items-center justify-center">
                <p class="text-center text-black">Not Striking Yet owo</p>
            </div>
        {/if}
    </div>
    
    <!-- Bottom half -->
    <div class="col-span-3 flex">
        {#each cards_on_field as card}
            <div class="p-2">
                <NemesisCardComponent card_data={card} is_current_card={card === current_card} />
            </div>
        {/each}
    </div>

    <div class="absolute bottom-4 right-4 space-x-2">
        <button 
            class="bg-red-500 text-white px-4 py-2 rounded w-56 {isOnCooldown ? 'opacity-50 cursor-not-allowed' : ''}"
            on:click={() => strike()}
            disabled={isOnCooldown}
        >
            Nemesis Strikes
        </button>
        <button
            class="bg-blue-500 text-white px-4 py-2 rounded w-56 {isOnCooldown ? 'opacity-50 cursor-not-allowed' : ''}"
            on:click={() => next_turn()}
            disabled={isOnCooldown}
        >
            Next Turn ({combined_deck.length} cards left)
        </button>
    </div>
</div>