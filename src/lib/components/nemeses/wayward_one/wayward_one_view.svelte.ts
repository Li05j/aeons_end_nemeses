import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';
import {
    wayward_one_tier_1_cards,
    wayward_one_tier_2_cards,
    wayward_one_tier_3_cards,
} from '$lib/data/wayward_one_nemesis_card_data';

export class WaywardOneViewModel {
    breach_align: 1 | 2 | 3 | 4 = $state(1);

    init() {
        GameDeckM.buildDeck(
            wayward_one_tier_1_cards,
            wayward_one_tier_2_cards,
            wayward_one_tier_3_cards,
        );
        GameDeckM.nextTurn();
    }

    nextAlignBreach() {
        this.breach_align = (this.breach_align % 4 + 1) as 1 | 2 | 3 | 4;
    }
}
