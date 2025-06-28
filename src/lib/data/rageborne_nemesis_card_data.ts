import type { NemesisCard, RageborneStrikeCard } from '$lib/interface';

export const rageborne_tier_1_cards: NemesisCard[] = [
    {
        type: 'attack',
        title: 'Cleave',
        description: 'Rageborne Strikes.',
        tier: 1,
        upgraded: false,
        is_sticky: false,
        is_nemesis_card: true
    },
    {
        type: 'attack',
        title: 'Unrelenting Ire',
        description: 'Unleash. \nIf there are two nemesis turn order cards in the turn order discard pile, Unleash two additional times.',
        tier: 1,
        upgraded: false,
        is_sticky: false,
        is_nemesis_card: true
    },
    {
        type: 'minion',
        title: 'Provoker',
        description: 'PERISITENT: Gravehold suffers damage equal to the number of Fury tokens Rageborne has.',
        tier: 1,
        upgraded: false,
        health: 5,
        is_sticky: false,
        is_nemesis_card: true
    },
]

export const rageborne_tier_2_cards: NemesisCard[] = [
    {
        type: 'power',
        title: 'Blood Cry',
        description: 'TO DISCARD: Lose 4 charges.\nPOWER 2: Unleash four times.',
        tier: 2,
        power: 2,
        upgraded: false,
        is_sticky: false,
        is_nemesis_card: true
    },
    {
        type: 'power',
        title: 'Invoke Carnage',
        description: 'TO DISCARD: Spend 7.\nPOWER 2: Unleash. Any player suffers 1 damage. That player suffers 1 additional damage for each Fury token Rageborne has.',
        tier: 2,
        power: 2,
        upgraded: false,
        is_sticky: false,
        is_nemesis_card: true
    },
    {
        type: 'minion',
        title: 'Scorn',
        description: 'PERISITENT: Gravehold suffers 3 damage.\nOR Unleash twice.',
        tier: 2,
        upgraded: false,
        health: 9,
        is_sticky: false,
        is_nemesis_card: true
    },
]

export const rageborne_tier_3_cards: NemesisCard[] = [
    {
        type: 'minion',
        title: 'Avatar of Wrath',
        description: 'PERISITENT: Rageborne Strikes.',
        tier: 3,
        upgraded: false,
        health: 16,
        is_sticky: false,
        is_nemesis_card: true
    }, 
    {
        type: 'attack',
        title: 'Onslaught',
        description: 'Unleash three times.\nThe players collectively discard cards in hand equal to the number of Fury tokens Rageborne has.',
        tier: 3,
        upgraded: false,
        is_sticky: false,
        is_nemesis_card: true
    },
    {
        type: 'power',
        title: 'Rolling Death',
        description: 'TO DISCARD: Spend 8.\nPOWER 2: Rageborne Strikes twice.',
        tier: 3,
        power: 2,
        upgraded: false,
        is_sticky: false,
        is_nemesis_card: true
    },
]

export const rageborne_strike_cards: RageborneStrikeCard[] = [
    {
        title: 'Convoke',
        description: 'Any player suffers 4 damage.',
    },
    {
        title: 'Devastate',
        description: 'Gravehold suffers 5 damage.',
    },
    {
        title: 'Eviscerate',
        description: 'The player with the lowest life suffers 2 damage.',
    },
    {
        title: 'Frenzy',
        description: 'The player with the most opened breaches suffers 3 damage.',
    },
    {
        title: 'Raze',
        description: 'Gravehold suffers 3 damage.\nAny player suffers 1 damage.',
    },
    {
        title: 'Seize',
        description: 'The players collectively discard the two most expensive prepped spells.',
    },
]
