<script lang="ts">
    import { onMount } from 'svelte';
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
    import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';

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
    
    function nextTurnClickCooldown(cooldown: number = 750) {
        if (isOnCooldown) return;
        
        // Start cooldown
        isOnCooldown = true;
        setTimeout(() => {
            isOnCooldown = false;
        }, cooldown);
    }

    let current_card: NemesisCard | undefined = undefined;
    let cards_on_field: NemesisCard[] = [];

    onMount(() => {
        GameDeckM.buildDeck(
            $rageborne_t1_nemesis_cards,
            $rageborne_t2_nemesis_cards,
            $rageborne_t3_nemesis_cards,
        )
        next_turn()
    });
    
    function next_turn() {
        /////////////////////////
        reset_strike();
        /////////////////////////

        nextTurnClickCooldown();
        if (GameDeckM.getCardsLeft() > 0) {
            if (current_card) { GameDeckM.resolveCard(current_card) }
            current_card = GameDeckM.shift();
            // combined_deck = [...combined_deck] // To trigger reactivity
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
    
    <!-- Top Right -->
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
            class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded w-56 {isOnCooldown ? 'opacity-50 cursor-not-allowed' : ''}"
            on:click={() => strike()}
            disabled={isOnCooldown}
        >
            Nemesis Strikes
        </button>
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-56 {isOnCooldown ? 'opacity-50 cursor-not-allowed' : ''}"
            on:click={() => next_turn()}
            disabled={isOnCooldown}
        >
            Next Turn ({GameDeckM.getCardsLeft()} cards left)
        </button>
    </div>
</div>