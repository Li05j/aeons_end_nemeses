import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';
import {
    carapace_queen_tier_1_cards,
    carapace_queen_tier_2_cards,
    carapace_queen_tier_3_cards,
} from '$lib/data/carapace_queen_nemesis_card_data';

export class CarapaceQueenViewModel {
    husks_count = $state(2);

    init() {
        GameDeckM.buildDeck(
            carapace_queen_tier_1_cards,
            carapace_queen_tier_2_cards,
            carapace_queen_tier_3_cards,
        );
        GameDeckM.nextTurn();
    }

    addHusks() {
        GameDeckM.applyCooldown(250);
        this.husks_count++;
    }

    removeHusks() {
        GameDeckM.applyCooldown(250);
        if (this.husks_count > 0) {
            this.husks_count--;
        }
    }
}
