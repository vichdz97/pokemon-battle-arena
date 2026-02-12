export interface Pokemon {
  id: number;
  level: number;
  moves: string[];
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

export interface Move {
  accuracy: number;
  damage_class: string;
  effect_chance: number;
  effect_entry: string;
  maxPP: string;
  meta: MoveMeta;
  name: string;
  power: number;
  pp: number;
  priority: number;
  stat_changes: [];
  type: string;
}

interface MoveMeta {
  ailment: string; // paralysis
  ailment_chance: number;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: null;
  max_turns: null;
  min_hits: null;
  min_turns: null;
  stat_chance: number;
}