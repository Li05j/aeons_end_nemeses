import type { NemesisCard } from '$lib/types';

export const wayward_one_tier_1_cards: NemesisCard[] = [
    {
        type: 'attack',
        title: 'Irradiate',
        description: 'Any player suffers 2 damage.\nAny player discards a misaligned prepped spell.',
        tier: 1,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true,
    },
    {
        type: 'minion',
        title: 'Blinking error',
        description: 'This minion is aligned to III \nPERISITENT: Any player loses 1 charge or suffers 2 damage.',
        tier: 1,
        upgraded: false,
        health: 6,
        is_sticky: false,
        is_nemesis_specific_card: true,
    }, 
    {
        type: 'power',
        title: 'Quantum Maze',
        description: 'POWER 2: If any player has an aligned spell, a player with an aligned spell suffers 5 damage.',
        tier: 1,
        power: 2,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true,
    },
]

export const wayward_one_tier_2_cards: NemesisCard[] = [
    {
        type: 'power',
        title: 'Feedback Coil',
        description: 'TO DISCARD: Spend 7\n POWER 2: The player with the most misaligned prepped spells suffers 3 damage and discards two cards.',
        tier: 2,
        power: 2,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true,
    },
    {
        type: 'power',
        title: 'Fractured Nebula',
        description: 'POWER 2: Shift Wayward One to IV. Gravehold suffers 8 damage. The players may collectively discard up to 2 aligned spells. For each spell discarded this way, prevent 4 of that damage.',
        tier: 2,
        power: 2,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true,
    },
    {
        type: 'minion',
        title: 'Warper',
        description: 'This minion is aligned to IV. When a player deals damage, that player must deal damage to this minion.',
        tier: 2,
        upgraded: false,
        health: 9,
        is_sticky: false,
        is_nemesis_specific_card: true,
    },
]

export const wayward_one_tier_3_cards: NemesisCard[] = [
    {
        type: 'attack',
        title: 'Shunt',
        description: 'Any player suffers 5 damage.\nOR The player with the most prepped spells destroys all of their prepped spells.',
        tier: 3,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true,
    },
    {
        type: 'minion',
        title: 'Netherspawn',
        description: 'This minion is aligned to II. Prevent all damage dealt to Wayward One \nPERISITENT: Any player destroys a breach. Gravehold suffers 4 damage.',
        tier: 3,
        upgraded: false,
        health: 15,
        is_sticky: false,
        is_nemesis_specific_card: true,
    }, 
    {
        type: 'power',
        title: 'Aether Flux',
        description: 'POWER 2: If any player has two or more misaligned spells, a player with two or more misaligned prepped spells suffers 7 damage.',
        tier: 3,
        power: 2,
        upgraded: false,
        is_sticky: false,
        is_nemesis_specific_card: true,
    },
]