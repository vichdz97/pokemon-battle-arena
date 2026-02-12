import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import Button from "../common/Button";
import Pokebox from "../battle/Pokebox";
import PokemonSprite from "../battle/PokemonSprite";
import { URL } from "../../utils/constants";
import { Move } from "../../interfaces/pokemon";
import MoveButton from "../battle/MoveButton";

export default function BattleScreen() {
	const navigate = useNavigate();
	const { player, cpu } = useContext(GameContext);

	const [menu, setMenu] = useState<string>('main');
	const [battleMoves, setBattleMoves] = useState<Move[]>([]);

	useEffect(() => {
		if (!player || !cpu) navigate('/select');
		else {
			const getPokemonMoves = async () => {
				try {
					const moveData = await Promise.all(
						player.moves
							.sort(() => Math.random() - 0.5)
							.slice(0, 4)
							.map(async (moveName) => {
								const response = await fetch(`${URL}/move/${moveName}`);
								const data = await response.json();
								return {
									...data,
									damage_class: data.damage_class.name,
									effect_entry: data.effect_entries[1],
									maxPP: data.pp,
									meta: {
										...data.meta,
										ailment: data.meta.ailment.name
									},
									type: data.type.name
								}
							})
					);
					setBattleMoves(moveData);
				} catch (err) {
					console.error(err);
				}
			};
			getPokemonMoves();
		}
	}, []);

	const decreasePP = (moveIndex: number): void => {
		battleMoves.map((move, index) => index === moveIndex && move.pp > 0 ? { ...move, pp: move.pp-- } : move);
	}

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

				<div className='w-full h-full relative'>
					{/* MAIN MENU */}
					{menu === 'main' && 
						<div className='absolute bottom-0 right-0 min-w-xs w-1/2 font-orbitron font-bold tracking-widest space-y-2'>
							<Button text='Fight' color='blue' size='lg' onClick={() => setMenu('moves')} />
							<Button text='Pokemon' color='red' size='lg' />
							<Button text='Bag' color='yellow' size='lg' />
							<Button text='Run' color='default' size='lg' />
						</div>
					}
					
					{/* MOVE LIST */}
					{menu === 'moves' && 
						<div className='absolute bottom-0 right-0 min-w-md w-2/3 font-orbitron font-bold tracking-widest space-y-2'>
							{battleMoves.map((move, index) => (
								<MoveButton key={`${move}-${index}`} move={move} onClick={() => decreasePP(index)} />
							))}
							<Button text='← Back' onClick={() => setMenu('main')} />
						</div>
					}
				</div>
			</div>
		</div>
	);
}