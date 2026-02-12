export interface Pokemon {
  id: number;
  level: number;
  name: string;
  sprites: {
    default: string;
    animated_back: string;
    animated_front: string;
  };
  stats: {
    hp: number;
    maxHP: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  }
  types: string[];
}