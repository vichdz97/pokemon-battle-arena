import clsx from "clsx";
import { Move } from "../../interfaces/pokemon";
import { TYPE_COLORS } from "../../utils/constants";

interface MoveButtonProps {
  move: Move;
  onClick?: () => void;
}

export default function MoveButton({ move, onClick }: MoveButtonProps) {
  const transformName = (name: string): string => {
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return (
    <button
      className={clsx(
        'relative overflow-hidden w-full flex items-center justify-center gap-4',
        'text-xl border-2 shadow rounded-2xl py-2 px-4 backdrop-blur-lg transition-all duration-400',
        move.pp > 0 ? 'hover:scale-[1.05]' : 'cursor-not-allowed grayscale'
      )}
      style={{
        background: `linear-gradient(90deg, transparent, ${TYPE_COLORS[move.type]} 50%)`,
        border: `solid 2px ${TYPE_COLORS[move.type]}`
      }}
      onClick={onClick}
      disabled={move.pp <= 0}
    >
      <span className='absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-slate-100/50'></span>
      <span 
        className='font-rajdhani uppercase font-bold tracking-wide h-3/4 w-[6em] text-[0.75em] text-center rounded shadow'
        style={{ backgroundColor: TYPE_COLORS[move.type] }}  
      >
        {move.type}
      </span>
      <p className='flex-1 text-left'>{transformName(move.name)}</p>
      <p className='text-sm'>{move.pp}/{move.maxPP}</p>
    </button>
  );
}