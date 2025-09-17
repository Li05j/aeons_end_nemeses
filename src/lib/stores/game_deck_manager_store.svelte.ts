import { get } from 'svelte/store';
import type { NemesisCard } from "$lib/types";
import { shuffle_array } from "$lib/utils";
import { 
    basic_common_t1_nemesis_cards, 
    basic_common_t2_nemesis_cards, 
    basic_common_t3_nemesis_cards,
    upgraded_common_t1_nemesis_cards,
    upgraded_common_t2_nemesis_cards,
    upgraded_common_t3_nemesis_cards,
} from '$lib/stores/common_nemesis_cards_store';

function createGameDeckManager() {
    const TOTAL_COMMON_T1_CARDS = 8;
    const TOTAL_COMMON_T2_CARDS = 7;
    const TOTAL_COMMON_T3_CARDS = 7;

    let game_mode: "no_upgrade" | "yes_upgrade" | "none" = $state("none")

    let combined_deck: NemesisCard[] = $state([]);
    let resolved_deck: NemesisCard[] = $state([]);

    function buildDummy(upgradedCards: NemesisCard[], basicCards: NemesisCard[], totalNeeded: number): NemesisCard[] {
        return [];
    }

    function buildNormalTierDeck(upgradedCards: NemesisCard[], basicCards: NemesisCard[], totalNeeded: number): NemesisCard[] {
        const shuffledBasic = shuffle_array(basicCards);
        const basicToUse = shuffledBasic.slice(0, totalNeeded);

        return basicToUse;
    }

    function buildUpgradedTierDeck(upgradedCards: NemesisCard[], basicCards: NemesisCard[], totalNeeded: number): NemesisCard[] {
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

    function buildDeck(
        nemesis_t1: NemesisCard[],
        nemesis_t2: NemesisCard[],
        nemesis_t3: NemesisCard[],
    ) {
        let build = buildDummy;
        if (game_mode === "no_upgrade") {
            build = buildNormalTierDeck;
        } else if (game_mode === "yes_upgrade") {
            build = buildUpgradedTierDeck;
        }

        const common_t1_deck = build(
            get(upgraded_common_t1_nemesis_cards),
            get(basic_common_t1_nemesis_cards), 
            TOTAL_COMMON_T1_CARDS,
        );
        const common_t2_deck = build(
            get(upgraded_common_t2_nemesis_cards),
            get(basic_common_t2_nemesis_cards),
            TOTAL_COMMON_T2_CARDS,
        );
        const common_t3_deck = build(
            get(upgraded_common_t3_nemesis_cards),
            get(basic_common_t3_nemesis_cards),
            TOTAL_COMMON_T3_CARDS,
        );

        const t1_deck = shuffle_array([...nemesis_t1, ...common_t1_deck]);
        const t2_deck = shuffle_array([...nemesis_t2, ...common_t2_deck]);
        const t3_deck = shuffle_array([...nemesis_t3, ...common_t3_deck]);

        combined_deck = structuredClone([...t1_deck, ...t2_deck, ...t3_deck]);
    }

    function getCardsLeft(): number {
        return combined_deck.length;
    }

    function shift(): NemesisCard | undefined {
        let card = combined_deck.shift()
        if (card) {
            return card;
        }
        return undefined;
    }

    function resolveCard(card: NemesisCard) {
        resolved_deck.push(card);
    }

    function reset() {
        game_mode = "none";
        combined_deck = [];
        resolved_deck = [];
    }

    return {
        get game_mode() { return game_mode },
        set game_mode(mode) { game_mode = mode },
        get deck() { return combined_deck },
        buildDeck,
        getCardsLeft,
        shift,
        resolveCard,
        reset,
    }
}

export const GameDeckM = createGameDeckManager()