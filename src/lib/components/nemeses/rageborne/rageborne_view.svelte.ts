import { shuffle_array } from '$lib/utils';
import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';
import {
    rageborne_tier_1_cards,
    rageborne_tier_2_cards,
    rageborne_tier_3_cards,
    rageborne_strike_cards,
} from '$lib/data/rageborne_nemesis_card_data';

export class RageborneViewModel {
    strike_deck = $state(shuffle_array(rageborne_strike_cards));
    striking = $state(false);

    init() {
        GameDeckM.buildDeck(
            rageborne_tier_1_cards,
            rageborne_tier_2_cards,
            rageborne_tier_3_cards,
        );
        this.nextTurn();
    }

    strike() {
        this.resetStrike();
        GameDeckM.applyCooldown();
        this.striking = true;
    }

    resetStrike() {
        this.striking = false;
        this.strike_deck = shuffle_array(this.strike_deck);
    }

    nextTurn() {
        this.resetStrike();
        GameDeckM.nextTurn();
    }
}
