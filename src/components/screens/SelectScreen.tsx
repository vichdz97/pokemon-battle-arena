import { useContext, useEffect, useState } from "react";
import { Pokemon } from "../../interfaces/pokemon";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import clsx from "clsx";
import { 
	POKEMON_ROSTER,
	RESIZED_CHOSEN_POKEMON,
	RESIZED_GRID_POKEMON,
	URL
} from "../../utils/constants";
import LoadingSpinner from "../common/LoadingSpinner";
import { GameContext } from "../../context/GameContext";

export default function SelectScreen() {
	const navigate = useNavigate();
	const { setPlayer, setCPU } = useContext(GameContext);

	const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
	const [hoveredPlayerPokemon, setHoveredPlayerPokemon] = useState<Pokemon | null>(null);
	const [playerPokemon, setPlayerPokemon] = useState<Pokemon | null>(null);
	const [hoveredCPUPokemon, setHoveredCPUPokemon] = useState<Pokemon | null>(null);
	const [cpuPokemon, setCPUPokemon] = useState<Pokemon | null>(null);
	
	// initial mount
	useEffect(() => {
		const getAllPokemon = async () => {
			try {
				const pokemonData = await Promise.all(
					POKEMON_ROSTER.sort((a, b) => a - b).map(async (id) => {
						const response = await fetch(`${URL}/pokemon/${id}`);
						const data = await response.json();
						return {
							id: data.id,
							name: data.name,
							level: 50,
							sprites: {
								default: data.sprites.other.home.front_default,
								animated_back: data.sprites.other.showdown.back_default,
								animated_front: data.sprites.other.showdown.front_default
							},
							stats: {
								hp: calculateStat(data.stats[0].base_stat, 'hp'),
								maxHP: calculateStat(data.stats[0].base_stat, 'hp'),
								attack: calculateStat(data.stats[1].base_stat),
								defense: calculateStat(data.stats[2].base_stat),
								spAttack: calculateStat(data.stats[3].base_stat),
								spDefense: calculateStat(data.stats[4].base_stat),
								speed: calculateStat(data.stats[5].base_stat)
							},
							types: data.types.map((t: { slot: number, type: { name: string, url: string }}) => t.type.name)
						};
					})
				);

				const randomPokemon: Pokemon = {
					id: 0,
					level: 0,
					name: 'random',
					sprites: {
						default: 'src/assets/images/random.png',
						animated_back: '',
						animated_front: ''
					},
					stats: {
						hp: 0,
						maxHP: 0,
						attack: 0,
						defense: 0,
						spAttack: 0,
						spDefense: 0,
						speed: 0
					},
					types: []
				};

				setAllPokemon([randomPokemon, ...pokemonData]);
			} catch (err) {
				console.error(err);
			}
		};
		getAllPokemon();
	}, []);

	const calculateStat = (base_stat: number, stat?: string) => {
		if (stat === 'hp') return Math.floor((2 * base_stat * 50) / 100) + 50 + 10;
		return Math.floor(((2 * base_stat * 50) / 100) + 5);
	}

	const handlePlayerChoice = (pokemon: Pokemon): void => {
		if (playerPokemon?.id === pokemon.id) {
			setPlayerPokemon(null);
		}
		else {
			setHoveredPlayerPokemon(null);
			setPlayerPokemon(pokemon);
		}
	}

	const handleCPUChoice = (pokemon: Pokemon): void => {
		if (!cpuPokemon && playerPokemon?.id === pokemon.id) {
			handlePlayerChoice(pokemon);
		}
		else if (cpuPokemon && playerPokemon?.id === pokemon.id) {
			setHoveredCPUPokemon(null);
			setCPUPokemon(null);
			setPlayerPokemon(null);
		}
		else if (cpuPokemon?.id === pokemon.id) {
			setCPUPokemon(null);
		}
		else {
			setHoveredCPUPokemon(null);
			setCPUPokemon(pokemon);
		}
	}

	const startBattle = () => {
		setPlayer(playerPokemon);
		setCPU(cpuPokemon);
		navigate('/battle');
	}

	if (allPokemon.length === 0) {
		return <LoadingSpinner />;
	}

	return (
		<div className='min-h-screen relative overflow-hidden flex flex-col items-center justify-center font-orbitron text-slate-100 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950'>
			{/* POKÉMON SPRITES */}
			<div className='min-h-screen grid grid-cols-2 w-[85vw]'>
				{/* PLAYER */}
				<h1 className='z-10 absolute top-4 left-4 uppercase font-bold text-4xl bg-gradient-to-t from-transparent via-blue-600 to-transparent rounded-full'>
					{(hoveredPlayerPokemon || playerPokemon) ? (hoveredPlayerPokemon || playerPokemon)?.name : 'Choose Your Pokémon'}
				</h1>
				{(hoveredPlayerPokemon || playerPokemon) && 
					<img 
						src={(hoveredPlayerPokemon || playerPokemon)?.sprites.default} 
						alt={`${(hoveredPlayerPokemon || playerPokemon)?.name}`} 
						className={clsx(
							'w-full justify-self-center',
							playerPokemon && RESIZED_CHOSEN_POKEMON[playerPokemon.name],
							hoveredPlayerPokemon && RESIZED_CHOSEN_POKEMON[hoveredPlayerPokemon.name]
						)} 
					/>
				}
				{/* CPU */}
				<h1 className='z-10 absolute top-4 right-4 uppercase font-bold text-4xl bg-gradient-to-t from-transparent via-red-600 to-transparent rounded-full'>
					{(hoveredCPUPokemon || cpuPokemon) ? (hoveredCPUPokemon || cpuPokemon)?.name : playerPokemon && "Choose CPU's Pokémon"}
				</h1>
				{(hoveredCPUPokemon || cpuPokemon) && 
					<img 
						src={(hoveredCPUPokemon || cpuPokemon)?.sprites.default} 
						alt={`${(hoveredCPUPokemon || cpuPokemon)?.name}`} 
						className={clsx(
							'w-full justify-self-center',
							(hoveredCPUPokemon?.name !== 'random' && cpuPokemon?.name !== 'random') && 'scale-x-[-1]',
							cpuPokemon && RESIZED_CHOSEN_POKEMON[cpuPokemon.name],
							hoveredCPUPokemon && RESIZED_CHOSEN_POKEMON[hoveredCPUPokemon.name]
						)} 
					/>
				}
			</div>

			<div className='absolute bottom-5 flex flex-col items-center gap-2'>
				{/* POKÉMON GRID */}
				<div className='grid grid-cols-12 gap-1'>
					{allPokemon.map((pokemon) => (
						<button 
							key={`${pokemon.name}-${pokemon.id}`} 
							className={clsx(
								'relative w-20 h-25 overflow-hidden bg-slate-950 border border-2 rounded-lg transition-colors duration-400',
								playerPokemon?.id === pokemon.id ? 'border-blue-600 border-4' : cpuPokemon?.id === pokemon.id ? 'border-red-600 border-4' : 'border-slate-800 hover:border-slate-500'
							)}
							onMouseEnter={() => !playerPokemon ? setHoveredPlayerPokemon(pokemon) : (!cpuPokemon && playerPokemon.id !== pokemon.id) && setHoveredCPUPokemon(pokemon)}
							onMouseLeave={() => !playerPokemon ? setHoveredPlayerPokemon(null) : playerPokemon.id !== pokemon.id && setHoveredCPUPokemon(null)}
							onClick={() => !playerPokemon ? handlePlayerChoice(pokemon) : handleCPUChoice(pokemon)}
						>
							{playerPokemon?.id === pokemon.id && <span className='z-10 absolute inset-0 bg-blue-600/50'></span>}
							{cpuPokemon?.id === pokemon.id && <span className='z-10 absolute inset-0 bg-red-600/50'></span>}
							<img 
								src={pokemon.sprites.default}
								alt={`${pokemon.name} sprite`}
								className={clsx(
									'transition-all duration-400',
									RESIZED_GRID_POKEMON[pokemon.name],
									(playerPokemon?.id === pokemon.id || cpuPokemon?.id === pokemon.id) ? 'scale-[2] grayscale' : 'scale-[1.8] hover:scale-[2]'
								)} 
							/>
						</button>
					))}
				</div>
				
				{/* BUTTONS */}
				<div className='flex items-center justify-center gap-4'>
					<Button text='← Back' onClick={() => navigate('/')} />
					{playerPokemon && cpuPokemon ? 
						<Button text='Battle!' color='blue' onClick={startBattle} />
						:
						<Button text='Battle!' color='black' />
					}
				</div>
			</div>
		</div>
	);
}