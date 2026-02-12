export const URL = 'https://pokeapi.co/api/v2';

export const POKEMON_ROSTER = [
  3,    // Venusaur
  6,    // Charizard
  9,    // Blastoise
  25,   // Pikachu
  34,		// Nidoking
  59,   // Arcanine
  68,   // Machamp
  94,   // Gengar
  131,  // Lapras
  143,  // Snorlax
  149,  // Dragonite
  150,  // Mewtwo
  151,  // Mew
  212,  // Scizor
  282,  // Gardevoir
  398,  // Staraptor
  445,  // Garchomp
  448,  // Lucario
  491,  // Darkrai
  658,  // Greninja
  663,  // Talonflame
  700,  // Sylveon
  724,  // Decidueye
  887,  // Dragapult
  937,  // Ceruledge
  134,  // Vaporeon   -> Water Absorb
  135,  // Jolteon    -> Volt Absorb
  136,  // Flareon    -> Flash Fire 
  454,  // Toxicroak  -> Dry Skin
  26,   // Raichu     -> Lightning Rod
  466,  // Electivire -> Motor Drive
  423,  // Gastrodon  -> Storm Drain
  706,  // Goodra     -> Sap Sipper
  927,  // Dachsbun   -> Well-Baked Body
  635,  // Hydreigon  -> Levitate
];

export const RESIZED_CHOSEN_POKEMON: Record<string, string> = {
  random:     '-translate-y-15',
  venusaur:   '-translate-y-40',
  charizard:  '-translate-y-15',
  pikachu:    '-translate-y-10',
  raichu:     '-translate-y-20',
  nidoking:   '-translate-y-20',
  arcanine:   '-translate-y-15',
  machamp:    '-translate-y-20',
  gengar:     '-translate-y-15',
  lapras:     '-translate-y-10',
  vaporeon:   '-translate-y-10',
  jolteon:    '-translate-y-10',
  flareon:    '-translate-y-25',
  snorlax:    '-translate-y-20',
  dragonite:  'translate-y-10',
  mew:        '-translate-y-5',
  scizor:     '-translate-y-5',
  gastrodon:  '-translate-y-10',
  lucario:    '-translate-y-5',
  toxicroak:  '-translate-y-20',
  electivire: '-translate-y-25',
  darkrai:    '-translate-y-10',
  hydreigon:  '-translate-y-10',
  greninja:   '-translate-y-40',
  talonflame: '-translate-y-20',
  sylveon:    '-translate-y-20',
  goodra:     '-translate-y-10',
  decidueye:  '-translate-y-25',
  silvally:   '-translate-y-25',
  dachsbun:   '-translate-y-5'
};

export const RESIZED_GRID_POKEMON: Record<string, string> = {
  random:     'translate-y-1.5',
  venusaur:   '-translate-y-5',
  charizard:  '-translate-y-1',
  blastoise:  'translate-y-3 -translate-x-2',
  pikachu:    'translate-y-2 translate-x-5',
  raichu:     '-translate-y-2 translate-x-8',
  nidoking:   'translate-x-3',
  arcanine:   'translate-x-6',
  gengar:     'translate-x-2',
  lapras:     'translate-y-2',
  vaporeon:   'translate-x-1',
  jolteon:    'translate-x-6',
  flareon:    '-translate-y-3 translate-x-8',
  snorlax:    '-translate-y-3',
  dragonite:  'translate-y-6 translate-x-4',
  mewtwo:     'translate-y-3',
  mew:        'translate-y-1',
  gardevoir:  'translate-y-3 -translate-x-7',
  staraptor:  'translate-y-3 translate-x-7',
  gastrodon:  'translate-y-1',
  garchomp:   'translate-y-3 translate-x-1',
  lucario:    'translate-3',
  toxicroak:  'translate-x-2',
  electivire: '-translate-y-4 translate-x-3',
  darkrai:    'translate-x-2',
  hydreigon:  'translate-y-1 translate-x-7',
  greninja:   '-translate-y-7 translate-x-1',
  talonflame: '-translate-y-1 translate-x-7',
  sylveon:    'translate-x-3',
  goodra:     'translate-y-3 -translate-x-1',
  decidueye:  '-translate-y-2 -translate-x-3',
  silvally:   '-translate-y-1 translate-x-5',
  dragapult:  'translate-y-7',
  dachsbun:   'translate-y-2 translate-x-10',
  ceruledge:  'translate-y-5'
};

// [player, cpu]
export const RESIZED_SPRITES: Record<string, string[]> = {
  venusaur:   ['w-[20em]', 'w-[17em]'],
  charizard:  ['-top-55 w-[30em]', 'w-[17em]'],
  blastoise:  ['w-[17em]', 'w-[15em]'],
  pikachu:    ['top-10 w-[10em]', 'w-[7em]'],
  raichu:     ['-top-35 w-[18em]', 'w-[10em]'],
  nidoking:   ['-top-30 right-15 w-[32em]', 'w-[18em]'],
  arcanine:   ['-top-30 w-[30em]', 'w-[15em]'],
  gengar:     ['w-[17em]', 'w-[12em]'],
  machamp:    ['-top-30 w-[15em]', 'w-[12em]'],
  lapras:     ['-top-30 w-[25em]', 'w-[20em]'],
  vaporeon:   ['top-20 w-[20em]', 'w-[13em]'],
  jolteon:    ['top-0 w-[10em]', 'w-[6em]'],
  flareon:    ['w-[15em]', 'w-[6em]'],
  snorlax:    ['-top-40 right-30 w-[25em]', 'w-[20em]'],
  dragonite:  ['-top-30 w-[25em]', 'w-[15em]'],
  mewtwo:     ['w-[30em]', 'w-[15em]'],
  mew:        ['top-0 w-[8em]', 'bottom-0 w-[5em]'],
  scizor:     ['-top-30 w-[14em]', 'w-[10em]'],
  gardevoir:  ['w-[17em]', 'w-[15em]'],
  staraptor:  ['-top-55 right-10 w-[30em]', 'w-[25em]'],
  gastrodon:  ['w-[17em]', 'w-[8em]'],
  garchomp:   ['-top-30 w-[26em]', 'w-[16em]'],
  lucario:    ['w-[12em]', 'w-[7em]'],
  toxicroak:  ['w-[17em]', 'w-[15em]'],
  electivire: ['-top-40 right-20 w-[28em]', 'w-[22em]'],
  darkrai:    ['w-[25em]', 'w-[15em]'],
  hydreigon:  ['-top-50 right-30 w-[30em]', 'w-[20em]'],
  greninja:   ['top-0 w-[25em]', 'w-[15em]'],
  talonflame: ['-top-50 w-[20em]', 'w-[20em]'],
  sylveon:    ['top-0 w-[10em]', 'w-[6em]'],
  goodra:     ['-top-40 w-[17em]', 'w-[12em]'],
  decidueye:  ['-top-30 w-[13em]', 'w-[9em]'],
  dragapult:  ['w-[20em]', 'w-[17em]'],
  dachsbun:   ['top-20 w-[10em]', 'w-[6em]'],
  ceruledge:  ['-top-40 right-50 w-[9em]', 'w-[9em]']
};

export const TYPE_COLORS: Record<string, string> = {
  normal:   '#A8A878',
  fire:     '#F08030',
  water:    '#6890F0',
  electric: '#F8D030',
  grass:    '#78C850',
  ice:      '#98D8D8',
  fighting: '#C03028',
  poison:   '#A040A0',
  ground:   '#E0C068',
  flying:   '#A890F0',
  psychic:  '#F85888',
  bug:      '#A8B820',
  rock:     '#B8A038',
  ghost:    '#705898',
  dragon:   '#7038F8',
  dark:     '#705848',
  steel:    '#B8B8D0',
  fairy:    '#EE99AC',
};