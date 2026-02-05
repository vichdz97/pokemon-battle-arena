import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export default function HomeScreen() {
	const navigate = useNavigate();
	const [showInstructions, setShowInstructions] = useState(false);

	const instructions = [
    "Create your team of up to 6 Pokémon.",
    "Choose your opponent's team or generate it randomly.",
    "Hover over Pokémon to view their stats.",
    "Once you're satisfied, proceed to battle.",
    "In battle, the faster Pokémon attacks first.",
    "Select one of your current Pokémon's moves to attack.",
    "Hovering over a move displays its info.",
    "Keep an eye on each move's PP - once it's depleted, you can't use it anymore!",
    "Familiarize yourself with type advantages - some moves deal 2x damage while others... not so much.",
		"Use Potions to heal your injured Pokémon, Revives to heal your fainted Pokémon, and Ethers and Elixirs to replenish PP.",
    "Knock out all of your opponent's Pokémon to win the battle!"
  ];

	return (
		<div className='min-h-screen relative overflow-hidden flex flex-col items-center justify-center gap-10 font-orbitron text-slate-100 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950'>
			{/* HEADING */}
			<div className='flex flex-col items-center justify-center gap-2 z-10'>
				<h1 className='uppercase text-5xl md:text-6xl tracking-wider'>Pokémon</h1>
				<h2 className='font-rajdhani uppercase text-2xl text-slate-500 tracking-widest'>Battle arena</h2>
			</div>

			{/* BUTTONS */}
			<div className='flex flex-col gap-4 min-w-2xs z-10'>
				<Button text='Start' color='blue' size='lg' onClick={() => navigate('/select')} />
				<Button text='How to Play' size='lg' onClick={() => setShowInstructions(true)} />
			</div>

			{/* POKÉBALL DECOR */}
			<div className='w-110 h-110 md:w-150 md:h-150 absolute -top-1/4 -left-1/2 md:-top-1/2 md:left-20 bg-radial from-red-600 to-transparent to-60% opacity-10 animate-pulse-slow pointer-events-none'></div>
			<img 
				src='src/assets/images/pokeball.png'
				alt='Pokéball'
				className='w-3/4 md:w-1/3 absolute top-0 -right-20 opacity-10 animate-spin-slow pointer-events-none'
				style={{ animationDirection: 'reverse' }}
			/>
			<img 
				src='src/assets/images/pokeball.png'
				alt='Pokéball'
				className='w-3/4 md:w-1/3 absolute bottom-0 -left-20 opacity-10 animate-spin-slow pointer-events-none'
			/>
			<div className='w-110 h-110 md:w-150 md:h-150 absolute -bottom-1/4 -right-1/2 md:-bottom-1/2 md:right-20 bg-radial from-blue-600 to-transparent to-60% opacity-10 animate-pulse-slow pointer-events-none'></div>

			{/* INSTRUCTIONS MODAL */}
			{showInstructions && 
				<div className='absolute inset-0 z-20 backdrop-blur-md bg-slate-950/10 flex flex-col items-center justify-center' onClick={() => setShowInstructions(false)}>
					<div className='min-w-2xs max-w-xs md:max-w-xl w-full max-h-[85vh] overflow-y-auto bg-slate-950 border border-2 border-slate-900 rounded-2xl shadow-xl p-4 space-y-4' onClick={(e) => e.stopPropagation()}>
						<h3 className='text-xl text-center'>How to Play</h3>

						<ul className='space-y-2'>
							{instructions.map((instruction, index) => (
								<li key={index} className='font-rajdhani text-lg grid grid-cols-10 md:grid-cols-16 border-b border-slate-900 last:border-0 py-2'>
									<img src="src/assets/images/pokeball.png" alt="Pokéball img" className='w-4 mt-1.5' />
									<span className='col-span-9 md:col-span-15'>{instruction}</span>
								</li>
							))}
						</ul>

						<Button text='Got It!' color='blue' onClick={() => setShowInstructions(false)} />
					</div>
				</div>
			}
		</div>
	);
}