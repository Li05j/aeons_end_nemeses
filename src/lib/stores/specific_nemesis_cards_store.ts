import { readable, writable } from 'svelte/store';
import { 
    rageborne_tier_1_cards, 
    rageborne_tier_2_cards, 
    rageborne_tier_3_cards, 
    rageborne_strike_cards 
} from '$lib/data/rageborne_nemesis_card_data';

export const rageborne_t1_nemesis_cards = readable(rageborne_tier_1_cards);
export const rageborne_t2_nemesis_cards = readable(rageborne_tier_2_cards);
export const rageborne_t3_nemesis_cards = readable(rageborne_tier_3_cards);
export const rageborne_strike_deck = readable(rageborne_strike_cards);
