export default function LoadingSpinner() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-2 text-slate-100 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950'>
      <img src='src/assets/images/pokeball.png' alt='loading spinner' className='w-1/4 md:w-1/8 animate-spin pointer-events-none' />
      <h1 className='uppercase font-orbitron tracking-widest'>Loading Pokemon...</h1>
    </div>
  );
}