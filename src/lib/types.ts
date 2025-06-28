export type Nemesis = 'none' | 'rageborne' | 'carapace_queen'

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

export type NemesisCard = AttackNemesisCard | PowerNemesisCard | MinionNemesisCard;

interface BaseNemesisCard {
    title: string;
    description: string;
    tier: number;
    upgraded: boolean;
    is_sticky: boolean;
    is_nemesis_specific_card?: boolean;
}

interface AttackNemesisCard extends BaseNemesisCard {
    type: 'attack';
}

interface PowerNemesisCard extends BaseNemesisCard {
    type: 'power';
    power: number;
}

interface MinionNemesisCard extends BaseNemesisCard {
    type: 'minion';
    health: number;
    shield?: number;
    is_sticky: false; // always false
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

export interface RageborneStrikeCard {
    title: string;
    description: string;
}