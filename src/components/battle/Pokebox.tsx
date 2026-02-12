import clsx from "clsx";
import { Pokemon } from "../../interfaces/pokemon";
import { TYPE_COLORS } from "../../utils/constants";

interface PokeboxProps {
  pokemon: Pokemon;
  isPlayer: boolean;
  className?: string;
}

export default function Pokebox({ pokemon, isPlayer, className }: PokeboxProps) {
  return (
    <div className={clsx(
      'z-10 w-2/3 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-950/50 via-indigo-950/50 to-slate-950/50 backdrop-blur-lg shadow-lg rounded-2xl px-4 py-3',
      className
    )}>
      <div className='w-full h-full flex items-baseline justify-between'>
        <div className='flex items-center gap-2'>
          <h3 className='font-orbitron capitalize text-xl tracking-wide'>{pokemon.name}</h3>
          {pokemon.types.map(type => (
            <span 
              key={`${pokemon.name}-${type}-${Date.now()}`}
              className='font-rajdhani uppercase font-bold tracking-wide h-3/4 w-[6em] text-[0.75em] text-center rounded '
              style={{ backgroundColor: TYPE_COLORS[type] }}
            >
              {type}
            </span>
          ))}
        </div>
        <p className='font-orbitron text-xs text-slate-400'>Lv. {pokemon.level}</p>
      </div>

      {/* Health Bar */}
      <div className='relative h-[0.75em] w-full bg-slate-950/50 rounded-full overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-slate-100/50'></div>
        <div 
          className='h-full w-1/2 bg-green-500 rounded-full transition-all'
          style={{
            width: `${Math.max(0, (pokemon.stats.hp / pokemon.stats.maxHP) * 100)}%`
          }}
        ></div>
      </div>
      
      {/* HP VALUES */}
      { isPlayer &&
        <h4 className='font-orbitron self-start'>{pokemon.stats.hp} / {pokemon.stats.maxHP}</h4> 
      }
    </div>
  );
}