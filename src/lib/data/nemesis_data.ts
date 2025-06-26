import type { NemesisCard } from '$lib/interface';

export type Nemesis = 'none' | 'rageborne' | 'carapace_queen'

export const tier_1_cards: NemesisCard[] = [
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
        type: 'power',
        title: 'Miasma of Rot',
        description: 'TO DISCARD: Spend 6.\nPOWER 2: Unleash. Any player gains a Scorched Pearl from the Curse deck.',
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
]

export const tier_2_cards: NemesisCard[] = [
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

export const tier_3_cards: NemesisCard[] = [
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
