import type { NemesisCard } from '$lib/types';

export const carapace_queen_tier_1_cards: NemesisCard[] = [
    {
        type: 'attack',
        title: 'Endless Throng',
        description: 'Carapace Wueen Swarms.',
        tier: 1,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true
    },
    {
        type: 'attack',
        title: 'Hatch',
        description: 'Place a husk into play for each turn order card in the turn order discard pile.',
        tier: 1,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true
    },
    {
        type: 'minion',
        title: 'Broodwomb',
        description: 'If there is at least one husk in play, prevent all damage dealt to this minion.\nPERSISTENT: Place a husk into play.',
        tier: 1,
        upgraded: false,
        health: 5,
        is_sticky: false,
        is_nemesis_specific_card: true
    },
]

export const carapace_queen_tier_2_cards: NemesisCard[] = [
    {
        type: 'power',
        title: 'Blot The Sun',
        description: 'TO DISCARD: Lose 4 charges.\nPOWER 2: Carapace Queen Swarms. Unleash. Carapace Queen Swarms.',
        tier: 2,
        power: 2,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true
    },
    {
        type: 'power',
        title: 'Foul Multitudes',
        description: 'Husks have 2 life.\nDamaged husks heal to full life at the end of each turn.\nIMMEDIATELY: Unleash.\nPOWER 3: Carapace Queen Swarms.',
        tier: 2,
        power: 3,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true
    },
    {
        type: 'attack',
        title: 'Infest',
        description: 'Carapace Queen Swarms twice.\nOR\nAny player suffers 4 damage.',
        tier: 1,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true
    },
]

export const carapace_queen_tier_3_cards: NemesisCard[] = [
    {
        type: 'minion',
        title: 'Maggot Engine',
        description: 'IMMEDIATELY: Unleash three times. Then, set this minion\'s life equal to twice the number of husks in play.\nPERSISTENT: Swarm.',
        tier: 3,
        upgraded: false,
        health: 15,
        is_sticky: false,
        is_nemesis_specific_card: true
    }, 
    {
        type: 'attack',
        title: 'Spawn',
        description: 'Carapace Queen Swarms.\nUnleash.\nCarapace Queen Swarms.',
        tier: 3,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true
    },
    {
        type: 'power',
        title: 'Legion Beacon',
        description: 'IMMEDIATELY: Unleash twice.\nPOWER 2: Discard half of the husks in play, rounded up. Gravehold suffers 2 damage for each husk discarded this way. Carapace Queen Swarms.',
        tier: 3,
        power: 2,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true
    },
]