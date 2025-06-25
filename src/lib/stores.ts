import { readable, writable } from 'svelte/store';
import { tier_1_cards, tier_2_cards, tier_3_cards } from '$lib/data/nemesis_data';

export const common_t1_nemesis_cards = readable(tier_1_cards);
export const common_t2_nemesis_cards = readable(tier_2_cards);
export const common_t3_nemesis_cards = readable(tier_3_cards);

/////////////////////////////////////////
//////////////// Signals ////////////////
/////////////////////////////////////////

// Emitted when a pair is about to be added to teams
// export const add_pairs_to_team_signal = writable<[OsuUserInfo, OsuUserInfo] | null>();
// // Emitted when a player is about to be added to teams
// export const addPlayerToTeamSignal = writable<OsuUserInfo | null>();

// // Emitted when undo is triggered
// export const undoSignal = writable<[OsuUserInfo, OsuUserInfo] | null>();