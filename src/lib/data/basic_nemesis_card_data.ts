import type { NemesisCard } from '$lib/types';

export const basic_tier_1_cards: NemesisCard[] = [
    {
        type: 'attack',
        title: 'Contaminate',
        description: 'Any player suffers 2 damage.\nAny player gains a Scorched Pearl from the Curse deck.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Disorient',
        description: 'Unleash.\nAny player suffers 1 damage and discards a card in hand.\nIf that card is a gem, Gravehold suffers 2 damage.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Rend',
        description: 'Unleash.\nGravehold suffers 1 damage.\nAny player suffers 2 damage.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Aether Shock',
        description: 'Unleash. The player with the most prepped spells suffers 1 damage and discards a prepped spell.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Afflict',
        description: 'Unleash. Any player suffers 3 damage and may place a card in their discard pile into their hand.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Decimate',
        description: 'Unleash twice and any player gainst 2 charges.\nOR Gravehold suffers 4 damage.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Encroach',
        description: 'Unleash. Reveal the top card of the turn order deck. If a player turn order card was revealed. that player suffers 2 damage. Otherwise Gravehold suffers 3 damage.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Nix',
        description: 'Unleash. Any player suffers 1 damage and discards their most expensive card in hand.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Skewer',
        description: 'Unleash. Any player suffers 3 damage and draws a card.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Slaughter',
        description: 'Unleash. Gravehold suffers 3 damage.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Thrash',
        description: 'Unleash. The players collectively discard two cards in hand.',
        tier: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Miasma of Rot',
        description: 'TO DISCARD: Spend 6.\nPOWER 2: Unleash. Any player gains a Scorched Pearl from the Curse deck.',
        tier: 1,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Chaos Orb',
        description: 'TO DISCARD: Spend 6.\nPOWER 3: Unleash. Gravehold suffers 4 damage.',
        tier: 1,
        power: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Ceaseless Darkness',
        description: 'TO DISCARD: Spend 5.\nPOWER 2: Unleash. Any player suffers 3 damage. Any player discards a card in hand',
        tier: 1,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Agony Field',
        description: 'TO DISCARD: Destroy a card in hand that costs 2 or more.\nPOWER 2: Unleash. Any player discards three cards in hand and then draws one card.',
        tier: 1,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Bleed Static',
        description: 'POWER 3: The player with the most prepped spells suffers 2 damage for each of their prepped spells.',
        tier: 1,
        power: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Eye of Nothing',
        description: 'TO DISCARD: Spend 6.\nPOWER 2: Unleash twice.',
        tier: 1,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Heart of Nothing',
        description: 'TO DISCARD: Discard four cards in hand.\nPOWER 2: Unleash twice. OR Any player suffers 4 damage.',
        tier: 1,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Night Unending',
        description: 'POWER 3: Gravehold suffers 2 damage for each spell prepped by the player with the most prepped spells.',
        tier: 1,
        power: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Planar Collision',
        description: 'TO DISCARD: Discard two prepped spells.\nPOWER 2: Unleash twice.',
        tier: 1,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Spirit Snare',
        description: 'TO DISCARD: Discard a card in hand that costs 5 or more.\nPOWER 3: Unleash. Any player discards a spell in hand and suffers 2 damage.',
        tier: 1,
        power: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Unnerving Howl',
        description: 'POWER 2: Unleash. Any player discards two gems in hand.',
        tier: 1,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Woven Sky',
        description: 'TO DISCARD: Discard three cards in hand.\nPOWER 2: Unleash. Any player suffers 4 damage.',
        tier: 1,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Banesire',
        description: 'PERISITENT: Unleash',
        tier: 1,
        upgraded: false,
        health: 6,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Bone Titan',
        description: 'DEFEATED: Gain a Scorched Pearl from the Curse Deck.\nPERSISTENT: Gravehold suffers 2 damage.',
        tier: 1,
        upgraded: false,
        health: 5,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Blind Enigma',
        description: 'PERSISTENT: Any player suffers 1 damage. If the nemesis tier is 2 or higher, that player suffers 2 additional damage.',
        tier: 1,
        upgraded: false,
        health: 7,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Carriode Colony',
        description: 'IMMEDIATELY: This minion suffers damage equal to the number of players in the game.\nPERSISTENT: Unleash.',
        tier: 1,
        upgraded: false,
        health: 7,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Catacomb Drone',
        description: 'IMMEDIATELY: This minion suffers damage equal to the number of players in the game.\nPERSISTENT: Unleash.',
        tier: 1,
        upgraded: false,
        health: 5,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Drillbeak Wurm',
        description: 'PERSISTENT: Any player suffers 1 damage. Gravehold suffers 1 damage.',
        tier: 1,
        upgraded: false,
        health: 6,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Haze Spewer',
        description: 'PERSISTENT: Any player suffers 1 damage. Gravehold suffers 1 damage.',
        tier: 1,
        upgraded: false,
        health: 5,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Howling Spinners',
        description: 'PERSISTENT: Any player suffers 2 damage.',
        tier: 1,
        upgraded: false,
        health: 5,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Ladyrinth Wisp',
        description: 'PERSISTENT: Any player discards a prepped spell. OR Any player loses 1 charge.',
        tier: 1,
        upgraded: false,
        health: 5,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Cosmopod Horror',
        description: 'IMMEDIATELY: This minion suffers damage equal to the number of players in the game.\nPERSISTENT: Gravehold and any player each suffer 1 damage.',
        tier: 1,
        upgraded: false,
        health: 8,
        is_sticky: false
    },
]

export const basic_tier_2_cards: NemesisCard[] = [
    {
        type: 'attack',
        title: 'Fugue',
        description: 'Any player discards three cards in hand and suffers 2 damage.',
        tier: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Decay',
        description: 'Unleash twice.\nAny player or Gravehold suffers 3 damage.',
        tier: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Taint',
        description: 'Unleash twice.\nAny player gains a Scorched Pearl from the Curse deck and places it on top of their deck.',
        tier: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Gathering Dread',
        description: 'TO DISCARD: Spend 7.\nPOWER 4: Unleash three times.',
        tier: 2,
        upgraded: false,
        power: 4,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Culling Scythe',
        description: 'TO DISCARD: Spend 7.\nPOWER 2: Unleash, The player with the lowest life suffers 4 damage.',
        tier: 2,
        upgraded: false,
        power: 2,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Shrieking Havoc',
        description: 'Wandering (Reduce to 1 all damage that is dealt to this by abilities and player cards.\nDuring any player\'s main phase, that player may spend any amount of $ to deal an equal amount of damage to this)\nPERSISTENT: The player with the lowest life suffers 2 damage.',
        tier: 2,
        upgraded: false,
        health: 9,
        is_sticky: false
    },
]

export const basic_tier_3_cards: NemesisCard[] = [
    {
        type: 'attack',
        title: 'Disperse',
        description: 'Unleash twice.\nAny player suffers 2 damage and destroys their most expensive card in hand.',
        tier: 3,
        upgraded: false,
        is_sticky: true
    },
    {
        type: 'attack',
        title: 'Eliminate',
        description: 'Unleash three times.\nOR Gravehold suffers 6 damage.\nOR Any player suffers 5 damage.',
        tier: 3,
        upgraded: false,
        is_sticky: true
    },
    {
        type: 'attack',
        title: 'Bloodthirst',
        description: 'Unleash three times.\nOR Any player destroys three cards in hand that cost 3 or more.',
        tier: 3,
        upgraded: false,
        is_sticky: true
    },
]
