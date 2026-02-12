import clsx from "clsx";
import { Pokemon } from "../../interfaces/pokemon";
import { RESIZED_SPRITES } from "../../utils/constants";

interface PokemonSpriteProps {
  pokemon: Pokemon;
  isPlayer: boolean;
  className: string;
}

export default function PokemonSprite({ pokemon, isPlayer, className }: PokemonSpriteProps) {
  return (
    <img 
      src={isPlayer ? pokemon.sprites.animated_back : pokemon.sprites.animated_front} 
      alt={`${pokemon.name} sprite`} 
      className={clsx(
        className,
        isPlayer ? RESIZED_SPRITES[pokemon.name][0] : RESIZED_SPRITES[pokemon.name][1]
      )}
    />
  );
}