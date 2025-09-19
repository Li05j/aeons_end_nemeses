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
        type: 'attack',
        title: 'Assail',
        description: 'Unleash twice. The player with the most expensive prepped spell places that spell on top of their deck.',
        tier: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Awaken',
        description: 'Unleash twice and Gravehold suffers 3 damage.\nOR Place the most recently discarded minion card in the nemesis discard pile back into play.',
        tier: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Dement',
        description: 'Unleash twice. Any player suffers 1 damage and places their most expensive card in hand on top of their deck.',
        tier: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Dispel',
        description: 'Unleash twice. The player with the most prepped spells discards their most expensive prepped spell.',
        tier: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Lay Waste',
        description: 'Unleash twice. Any player suffers 2 damage.',
        tier: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Mutilate',
        description: 'Unleash. The players collectively discard two prepped spells. Any player suffers 2 damage.',
        tier: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Smite',
        description: 'Unleash twice. Gravehold suffers 2 damage.',
        tier: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Devil\'s Pact',
        description: 'Gravehold suffers 5 damage.\nOR Any player suffers 5 damage.\nOR The players discard the three most expensive prepped spells.\nOR Unleash twice. The players collectively lose 3 charges.',
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
        type: 'power',
        title: 'Aphotic Sun',
        description: 'TO DISCARD: Spend 7.\nPOWER 2: Unleash. The player with the most charges suffers 3 damages and loses all of their charges.',
        tier: 2,
        upgraded: false,
        power: 2,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Chaos Flail',
        description: 'TO DISCARD: Spend 7.\nPOWER 2: Unleash twice. Any player places their discard pile on top of their deck and shuffles it. Then, that player reveals the top two cards of their deck and destroys the most expensive card revealed.',
        tier: 2,
        upgraded: false,
        power: 2,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Gravity Splinter',
        description: 'TO DISCARD: Spend 7.\nPOWER 2: Unleash twice. The player with the fewest opened breaches suffers 3 damage.',
        tier: 2,
        upgraded: false,
        power: 2,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Morbid Gyre',
        description: 'TO DISCARD: Spend 7.\nPOWER 1: Unleash twice. The players collectively discard three cards in hand.',
        tier: 2,
        upgraded: false,
        power: 1,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Obliterating Meteor',
        description: 'TO DISCARD: Discard four cards in hand.\nPOWER 1: Unleash twice. Gravehold suffers 3 damage.',
        tier: 2,
        upgraded: false,
        power: 1,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Pulverizing Ray',
        description: 'POWER 1: Gravehold suffers 18 damage. The players may collectively discard up to six gems. For each gem discarded this way, prevent 3 of that damage.',
        tier: 2,
        upgraded: false,
        power: 1,
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
    {
        type: 'minion',
        title: 'Volcanic Zala',
        description: 'PERSISTENT: Gravehold suffers 3 damage.\nOR Any player loses 2 charges.',
        tier: 2,
        upgraded: false,
        health: 10,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Cauterizer',
        description: 'When damage is dealt to this minion, reduce that damage to 1.\nPERSISTENT: Any player suffers damage equal to this minion\'s current life.',
        tier: 2,
        upgraded: false,
        health: 3,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Mage Ender',
        description: 'PERSISTENT: The player with the most opened breaches suffers 2 damage.',
        tier: 2,
        upgraded: false,
        health: 9,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Mangleroot',
        description: 'PERSISTENT: Gravehold suffers 3 damage. This minion suffers 2 damage.',
        tier: 2,
        upgraded: false,
        health: 12,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Needlemaw',
        description: 'PERSISTENT: Gravehold suffers 2 damage.',
        tier: 2,
        upgraded: false,
        health: 11,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Null Scion',
        description: 'PERSISTENT: Unleash.',
        tier: 2,
        upgraded: false,
        health: 11,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Portal Guardian',
        description: 'PERSISTENT: Unleash. Any player suffers 1 damage.',
        tier: 2,
        upgraded: false,
        health: 8,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Venomite',
        description: 'PERSISTENT: The player with the lowest life suffers 2 damage.\nOR Any player discards a prepped spell that costs 3 or more',
        tier: 2,
        upgraded: false,
        health: 9,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Otherling',
        description: 'PERSISTENT: Unleash. Any player suffers 1 damage.',
        tier: 2,
        upgraded: false,
        health: 10,
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
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Eliminate',
        description: 'Unleash three times.\nOR Gravehold suffers 6 damage.\nOR Any player suffers 5 damage.',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Bloodthirst',
        description: 'Unleash three times.\nOR Any player destroys three cards in hand that cost 3 or more.',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Banish',
        description: 'Unleash twice. The player with the most prepped spells suffers 1 damage for each of their prepped spells.',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Engulf',
        description: 'Resolve the most recently discarded attack card in the nemesis discard pile.',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Gather Darkness',
        description: 'Any player places their discard pile on top of their deck, shuffles it, and then destroys the top four cards of their deck. Then, unleash twice',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Gore',
        description: 'Unleash twice. The player with the most expensive card in hand discards three cards in hand. Then, for each card in that player\'s hand that costs 2 or more, that player suffers 2 damage.',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Obliterate',
        description: 'Unleash twice. The player with the most opened breaches destroys four cards in hand or suffers 4 damage.',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Quell',
        description: 'Gravehold suffers 7 damage.\nOR Unleash three times.',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Sunder',
        description: 'Gravehold suffers 4 damage and the player with the lowest life suffers 4 damage.\nOR Shuffle all of the nemesis turn order cards into the turn order deck.',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Throttle',
        description: 'Unleash twice. Any player destroys their three most expensive cards in hand.',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'attack',
        title: 'Topple',
        description: 'Unleash twice. Gravehold suffers 4 damage.',
        tier: 3,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Gnashing Maw',
        description: 'POWER 2: Unleash.\nThe player with the most expensive prepped spell destroys it. If that spell costs 4 or less, Unleash and any player suffers 3 damage.',
        tier: 3,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Anguish',
        description: 'TO DISCARD: Destroy three prepped spells.\nPOWER 1: Unleash twice. Gravehold suffers 5 damage.',
        tier: 3,
        power: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Hex of Destruction',
        description: 'TO DISCARD: Spend 8.\nPOWER 2: Unleash twice. Gravehold suffers 4 damage. Any player destroys the top four cards of their deck.',
        tier: 3,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Apocalypse Ritual',
        description: 'TO DISCARD: Spend 8.\nPOWER 2: Gravehold suffers 5 damage for each nemesis turn order card in the turn order discard pile.',
        tier: 3,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Cataclysmic Fate',
        description: 'TO DISCARD: Destroy a prepped spell that costs 5 or more and a breach in which it was prepped.\nPOWER 1: The player with the lowest life suffers 4 damage.',
        tier: 3,
        power: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Crushing Storm',
        description: 'TO DISCARD: Destroy two opened breaches.\nPOWER 1: Unleash three times.',
        tier: 3,
        power: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Dire Abbatoir',
        description: 'TO DISCARD: Spend 8.\nPOWER 2: The player with the most life suffers damage equal to their current life.',
        tier: 3,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Doom Aegis',
        description: 'TO DISCARD: Spend 7.\nPOWER 1: The player with the most charges suffers 4 damage and loses all of their charges.',
        tier: 3,
        power: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Reality Rupture',
        description: 'TO DISCARD: Destroy two prepped spells that each cost 3 or more.\nPOWER 1: Unleash three times.',
        tier: 3,
        power: 1,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'power',
        title: 'Withering Beam',
        description: 'POWER 2: Unleash twice. The players collectively destroy the two most expensive prepped spells.',
        tier: 3,
        power: 2,
        upgraded: false,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Infernal Scion',
        description: 'PERSISTENT: Unleash. Any player places a card that costs 0 in their discard pile on top of their deck. That player destroys a card in hand.',
        tier: 3,
        upgraded: false,
        health: 15,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Eternal Watcher',
        description: 'PERSISTENT: Any player suffers 3 damage. If this minion has 6 or less life, it gains 3 life.',
        tier: 3,
        upgraded: false,
        health: 10,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Jagged One',
        description: 'PERSISTENT: Unleash twice.',
        tier: 3,
        upgraded: false,
        health: 14,
        is_sticky: false
    },
    {
        type: 'minion',
        title: 'Monstrosity of Omens',
        description: 'When damage is dealt to this minion, reduce that damage to 1.\nPERSISTENT: Gravehold suffers damage equal to this minion\'s current life.',
        tier: 3,
        upgraded: false,
        health: 5,
        is_sticky: false
    },
]
