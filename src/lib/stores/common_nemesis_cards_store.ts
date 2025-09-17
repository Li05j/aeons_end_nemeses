import { readable, writable } from 'svelte/store';
import { basic_tier_1_cards, basic_tier_2_cards, basic_tier_3_cards } from '$lib/data/basic_nemesis_card_data';
import { upgraded_tier_1_cards, upgraded_tier_2_cards, upgraded_tier_3_cards } from '$lib/data/upgraded_basics_nemesis_card_data';

export const basic_common_t1_nemesis_cards = readable(basic_tier_1_cards);
export const basic_common_t2_nemesis_cards = readable(basic_tier_2_cards);
export const basic_common_t3_nemesis_cards = readable(basic_tier_3_cards);

export const upgraded_common_t1_nemesis_cards = readable(upgraded_tier_1_cards);
export const upgraded_common_t2_nemesis_cards = readable(upgraded_tier_2_cards);
export const upgraded_common_t3_nemesis_cards = readable(upgraded_tier_3_cards);
