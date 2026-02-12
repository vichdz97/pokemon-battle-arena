import { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import Button from "../common/Button";
import Pokebox from "../battle/Pokebox";
import PokemonSprite from "../battle/PokemonSprite";

export default function BattleScreen() {
	const navigate = useNavigate();
	const { player, cpu } = useContext(GameContext);

	useEffect(() => {
		if (!player || !cpu) navigate('/select');
	}, []);

	if (!player || !cpu) return <LoadingSpinner />;

	return (
		<div 
			className='min-h-screen relative overflow-hidden text-slate-100 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950'
			style={{ 
				backgroundImage: 'url(src/assets/images/bg.jpeg)',
				backgroundSize: 'cover',
			}}
		>
			<div className='h-screen grid grid-cols-2 grid-rows-2 flex items-center justify-evenly p-6'>
				{/* CPU */}
				<div className='col-start-2 w-full h-full relative'>
					<Pokebox pokemon={cpu} isPlayer={false} className='absolute top-0 right-0' />
					<PokemonSprite pokemon={cpu} isPlayer={false} className='absolute -bottom-30 left-1/4' />
				</div>

				{/* PLAYER */}
				<div className='w-full h-full relative'>
					<Pokebox pokemon={player} isPlayer={true} className='absolute bottom-0 left-0' />
					<PokemonSprite pokemon={player} isPlayer={true} className='absolute -top-15 right-1/4' />
				</div>

				{/* MENU */}
				<div className='w-full h-full relative'>
					<div className='absolute bottom-0 right-0 min-w-xs w-1/2 font-orbitron font-bold tracking-widest space-y-2'>
						<Button text='Fight' color='blue' size='lg' />
						<Button text='Pokemon' color='red' size='lg' />
						<Button text='Bag' color='yellow' size='lg' />
						<Button text='Run' color='default' size='lg' />
					</div>
				</div>
			</div>
		</div>
	);
}