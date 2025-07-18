import type { NemesisCard } from '$lib/types';

export const upgraded_tier_1_cards: NemesisCard[] = [
    {
        type: 'attack',
        title: 'Surge',
        description: 'Unleash twice.\nAny player loses 1 charge',
        tier: 1,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Wreck',
        description: 'Unleash twice.\nGravehold suffers 1 damage.',
        tier: 1,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Crumbling Earth',
        description: 'TO DISCARD: Spend 6.\nPOWER 3: Unleash twice. Any player discards a card in hand that costs 1 or more and suffers 1 damage.',
        tier: 1,
        power: 3,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Hissing Acid',
        description: 'TO DISCARD: Spend 6.\nPOWER 3: Reveal the top card of the turn order deck. If it\'s a player turn order card, Unleash three times. Otherwise any player suffers 5 damage.',
        tier: 1,
        power: 3,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Portalsworn',
        description: 'PERISITENT: Gravehold suffers 3 damage.',
        tier: 1,
        upgraded: true,
        health: 5,
        is_sticky: false
    }, 
    {
        type: 'minion',
        title: 'Bane Commander',
        description: 'PERISITENT: Unleash. Any player suffers 1 damage.',
        tier: 1,
        upgraded: true,
        health: 6,
        is_sticky: false
    },
]

export const upgraded_tier_2_cards: NemesisCard[] = [
    {
        type: 'attack',
        title: 'Winter\'s Bite',
        description: 'Unleash. Discard the top card of the nemesis deck.\nOR The player with the lowest life suffers 5 damage.',
        tier: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Bleed',
        description: 'Unleash twice.\nThe players collectively discard three prepped spells.',
        tier: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Marked',
        description: 'Unleash twice.\nThe player with the lowest life suffers 3 damage',
        tier: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Separate',
        description: 'Unleash twice.\nGravehold suffers 2 damage. The player with the most expensive prepped spell discards that spell',
        tier: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Stifle',
        description: 'Unleash twice.\nThe player with the lowest life suffers 3 damage',
        tier: 2,
        upgraded: true,
        is_sticky: false
    },
        {
        type: 'power',
        title: 'Descending Skies',
        description: 'TO DISCARD: Spend 8.\nPOWER 2: Unleash twice. Any player suffers 2 damage. A different player discards their two most expensive cards in hand.',
        tier: 2,
        power: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Acid Breath',
        description: 'TO DISCARD: Spend 7.\nPOWER 2: If any player has a prepped spell that costs 5 or more, Unleash three times. Otherwise, Gravehold suffers 7 damage.',
        tier: 2,
        power: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Engulfing Madness',
        description: 'TO DISCARD: Spend 8.\nPOWER 2: Unleash twice. Any player suffers 4 damage.',
        tier: 2,
        power: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Sky Tremor',
        description: 'TO DISCARD: Spend 7.\nPOWER 1: Unleash twice. Gravehold suffers 4 damage.',
        tier: 2,
        power: 1,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Breach Shatter',
        description: 'TO DISCARD: Spend 8.\nPOWER 2: Unleash twice. The player with the lowest life suffers 4 damage.',
        tier: 2,
        power: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Moondrunk Mongrel',
        description: 'PERISITENT: Unleash twice.',
        tier: 2,
        upgraded: true,
        health: 6,
	    shield: 2,
        is_sticky: false
    }, 
    {
        type: 'minion',
        title: 'Needle Doom',
        description: 'PERISITENT: Unleash. Gravehold suffers 2 damage.',
        tier: 2,
        upgraded: true,
        health: 12,
        is_sticky: false
    }, 
    {
        type: 'minion',
        title: 'Chitin Killer',
        description: 'PERISITENT: The player with the most prepped spells suffers 3 damage.',
        tier: 2,
        upgraded: true,
        health: 13,
        is_sticky: false
    },
]

export const upgraded_tier_3_cards: NemesisCard[] = [
    {
        type: 'attack',
        title: 'Whirlwind',
        description: 'Unleash four times.\nOR Any player destroys three cards in hand and suffers 4 damage.',
        tier: 3,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Assassinate',
        description: 'The player with the most charges loses all of their charges and suffers 5 damage.\nOR Unleash. Shuffle a nemesis turn order card in the turn order discard pile into the turn order deck.',
        tier: 3,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Rust Away',
        description: 'Gravehold suffer 7 damage.\nOR The player with the most cards that cost 2 or more in hand destroys all of their cards in hand.',
        tier: 3,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Eradicate',
        description: 'Unleash twice.\nAny player discards their three most expensive cards in hand.',
        tier: 3,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Sacrifice',
        description: 'Unleash four times.\nOR Gravehold suffers 4 damage and any player suffers 4 damage.',
        tier: 3,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Terrify',
        description: 'Unleash three times.\nGravehold suffers 2 damage. Any player destroys two cards in hand.',
        tier: 3,
        upgraded: true,
        is_sticky: false
    },
    // {
    //     type: 'attack',
    //     title: 'Revive',
    //     description: 'Unleash twice.\nPlace the most recently discarded minion in the nemesis discard pile into play.',
    //     tier: 3,
    //     upgraded: true,
    //     is_sticky: false
    // },
    {
        type: 'power',
        title: 'Entropy\'s Kiss',
        description: 'POWER 2: Unleash. The player with the most expensive gen in hand destroys all gems in hand. A different player suffers 3 damage.',
        tier: 3,
        power: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Magic Siphon',
        description: 'POWER 1: Unleash. The player with the most expensive prepped spell destroys it. Then, any player destroys an opened breach.',
        tier: 3,
        power: 1,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Lightning Surge',
        description: 'POWER 1: Unleash twice. The player with the most charges suffers 2 damage for each charge they have.',
        tier: 3,
        power: 1,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Flash of Decay',
        description: 'POWER 2: Unleash twice. The player with the most expensive prepped spell destroys it. If that spell costs 4 or less, or no spell was destroyed, Unleash.',
        tier: 3,
        power: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Ray of Desolation',
        description: 'POWER 1: Unleash twice. The players collectively destroy the two most expensive prepped spells.',
        tier: 3,
        power: 1,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Thunderous Tempest',
        description: 'TO DISCARD: Spend 9.\nPOWER 2: Unleash. If there are two nemesis turn order cards in the turn order discard pile, any player suffers 8 damage. Otherwise, any player suffers 5 damage.',
        tier: 3,
        power: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Inescapable Torment',
        description: 'POWER 2: The player with the highest life suffers damage equal to their life.',
        tier: 3,
        power: 2,
        upgraded: true,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Broodqueen Drillbeak',
        description: 'When a player removes a shield token from this minion, that player suffers 2 damage\nPERISITENT: Unleash. Gravehold suffers 3 damage.',
        tier: 3,
        upgraded: true,
        health: 7,
	    shield: 2,
        is_sticky: false
    }, 
    {
        type: 'minion',
        title: 'Burialskulk',
        description: 'PERISITENT: Unleash twice.',
        tier: 3,
        upgraded: true,
        health: 18,
        is_sticky: false
    },
]