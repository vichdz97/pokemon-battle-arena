import clsx from "clsx";

interface ButtonProps {
  text: string;
  color?: Colors;
  size?: Sizes;
  onClick?: () => void;
}

type Colors = 'default' | 'blue' | 'red' | 'black';
type Sizes = 'md' | 'lg';

const colorStyles: Record<Colors, string> = {
  default: 'bg-slate-500',
  blue: 'bg-blue-600',
  red: 'bg-red-600',
  black: 'bg-slate-950'
};

const sizeStyles: Record<Sizes, string> = {
  md: 'py-2 px-4 hover:scale-[1.05]',
  lg: 'py-4 px-6 hover:scale-[1.1]'
};

export default function Button({ text, color = 'default', size = 'md', onClick }: ButtonProps) {
    return (
      <button
        className={clsx(
          'relative overflow-hidden w-full text-xl border border-slate-900 shadow rounded-2xl transition-all duration-400',
          colorStyles[color],
          sizeStyles[size]
        )}
				onClick={onClick}
      >
        <span className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-100/30'></span>
				<span className='uppercase'>{text}</span>
      </button>
    );
}