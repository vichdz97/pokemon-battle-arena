import { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import Button from "../common/Button";

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
			<div className='h-screen grid grid-cols-2 grid-rows-2 flex items-center justify-evenly'>
				{/* CPU */}
				<div className='bg-blue-500/50 col-start-2 w-full h-full'>
					<img src={cpu.sprites.animated_front} alt={`${cpu.name} front`} className='bg-slate-200' />
					<p className=''>CPU: {cpu.name}</p>
				</div>

				{/* PLAYER */}
				<div className='bg-green-500/50 w-full h-full'>
					<img src={player.sprites.animated_back} alt={`${player.name} back`} className='' />
					<p className=''>PLAYER: {player.name}</p>
				</div>

				{/* MENU */}
				<div className=' w-full h-full relative'>
					<div className='absolute bottom-0 right-0 w-1/2 font-orbitron font-bold tracking-widest space-y-2 p-6'>
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