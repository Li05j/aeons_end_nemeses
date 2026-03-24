import type { NemesisCard } from "$lib/types";
import { shuffle_array } from "$lib/utils";
import { basic_tier_1_cards, basic_tier_2_cards, basic_tier_3_cards } from '$lib/data/basic_nemesis_card_data';
import { upgraded_tier_1_cards, upgraded_tier_2_cards, upgraded_tier_3_cards } from '$lib/data/upgraded_basics_nemesis_card_data';

const COMMON_T1_COUNT = 8;
const COMMON_T2_COUNT = 7;
const COMMON_T3_COUNT = 7;

function createGameDeckManager() {
    let game_mode: "no_upgrade" | "yes_upgrade" | "none" = $state("none");

    let combined_deck: NemesisCard[] = $state([]);
    let resolved_deck: NemesisCard[] = $state([]);
    let current_card: NemesisCard | undefined = $state(undefined);
    let cards_on_field: NemesisCard[] = $state([]);

    let is_on_cooldown = $state(false);

    function pickCommonCards(upgraded: NemesisCard[], basic: NemesisCard[], count: number): NemesisCard[] {
        if (game_mode === "no_upgrade") {
            return shuffle_array(basic).slice(0, count);
        }

        const shuffled = shuffle_array(upgraded);
        const picked = shuffled.slice(0, count);
        if (picked.length >= count) return picked;

        const remaining = count - picked.length;
        return [...picked, ...shuffle_array(basic).slice(0, remaining)];
    }

    function buildDeck(
        nemesis_t1: NemesisCard[],
        nemesis_t2: NemesisCard[],
        nemesis_t3: NemesisCard[],
    ) {
        const common_t1 = pickCommonCards(upgraded_tier_1_cards, basic_tier_1_cards, COMMON_T1_COUNT);
        const common_t2 = pickCommonCards(upgraded_tier_2_cards, basic_tier_2_cards, COMMON_T2_COUNT);
        const common_t3 = pickCommonCards(upgraded_tier_3_cards, basic_tier_3_cards, COMMON_T3_COUNT);

        const t1 = shuffle_array([...nemesis_t1, ...common_t1]);
        const t2 = shuffle_array([...nemesis_t2, ...common_t2]);
        const t3 = shuffle_array([...nemesis_t3, ...common_t3]);

        combined_deck = structuredClone([...t1, ...t2, ...t3]);
        resolved_deck = [];
        current_card = undefined;
        cards_on_field = [];
    }

    function applyCooldown(ms: number = 750) {
        if (is_on_cooldown) return;
        is_on_cooldown = true;
        setTimeout(() => { is_on_cooldown = false; }, ms);
    }

    function nextTurn() {
        applyCooldown();

        if (current_card) {
            resolved_deck.push(current_card);
        }

        // Remove dead powers and minions from field
        cards_on_field = cards_on_field.filter(card => {
            if (card.type === 'power' && card.power <= 0) return false;
            if (card.type === 'minion' && card.health <= 0) return false;
            return true;
        });

        // Tick down power counters
        for (const card of cards_on_field) {
            if (card.type === 'power') {
                card.power--;
            }
        }

        // Draw next card
        if (combined_deck.length > 0) {
            current_card = combined_deck.shift();
        } else {
            current_card = undefined;
        }

        // Place persistent cards on field
        if (current_card && (current_card.type === 'power' || current_card.type === 'minion')) {
            cards_on_field = [current_card, ...cards_on_field];
        } else {
            cards_on_field = [...cards_on_field];
        }
    }

    function reset() {
        game_mode = "none";
        combined_deck = [];
        resolved_deck = [];
        current_card = undefined;
        cards_on_field = [];
        is_on_cooldown = false;
    }

    return {
        get game_mode() { return game_mode; },
        set game_mode(mode) { game_mode = mode; },
        get deck() { return combined_deck; },
        get current_card() { return current_card; },
        get cards_on_field() { return cards_on_field; },
        get is_on_cooldown() { return is_on_cooldown; },
        get cards_left() { return combined_deck.length; },
        buildDeck,
        nextTurn,
        applyCooldown,
        reset,
    };
}

export const GameDeckM = createGameDeckManager();
