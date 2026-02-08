import { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";

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
				<div className='bg-yellow-500/50 w-full h-full'>
					<p>MENU</p>
				</div>

			</div>
		</div>
	);
}