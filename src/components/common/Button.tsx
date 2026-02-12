import clsx from "clsx";

interface ButtonProps {
  text: string;
  color?: Colors;
  size?: Sizes;
  onClick?: () => void;
}

type Colors = 'default' | 'blue' | 'red' | 'yellow' | 'black';
type Sizes = 'md' | 'lg';

const colorStyles: Record<Colors, string> = {
  default: 'to-slate-500 border-slate-600',
  blue: 'to-blue-600 border-blue-700',
  red: 'to-red-600 border-red-700',
  yellow: 'to-yellow-500 border-yellow-600',
  black: 'to-slate-900 border-slate-950'
};

const sizeStyles: Record<Sizes, string> = {
  md: 'py-2 px-4 hover:scale-[1.05]',
  lg: 'py-4 px-6 hover:scale-[1.1]'
};

export default function Button({ text, color = 'default', size = 'md', onClick }: ButtonProps) {
  return (
    <button
      className={clsx(
        'relative overflow-hidden w-full text-xl border-2 shadow rounded-2xl transition-all duration-400',
        'backdrop-blur-lg bg-gradient-to-br from-transparent to-70%',
        colorStyles[color],
        sizeStyles[size]
      )}
      onClick={onClick}
    >
      <span className='absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-slate-100/50'></span>
      <p className='uppercase'>{text}</p>
    </button>
  );
}