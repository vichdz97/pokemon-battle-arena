import { createContext, ReactNode, useState } from 'react';
import { Pokemon } from '../interfaces/pokemon';

interface GameContextProps {
  player: Pokemon | null;
  cpu: Pokemon | null;
  setPlayer: (pokemon: Pokemon | null) => void;
  setCPU: (pokemon: Pokemon | null) => void;
}

export const GameContext = createContext<GameContextProps>({
  player: null,
  cpu: null,
  setPlayer: () => {},
  setCPU: () => {}
});

export default function GameProvider({ children }: { children: ReactNode }) {
  const [player, setPlayer] = useState<Pokemon | null>(null);
  const [cpu, setCPU] = useState<Pokemon | null>(null);

  return (
    <GameContext.Provider value={{
      player,
      cpu,
      setPlayer,
      setCPU
    }}>
      {children}
    </GameContext.Provider>
  );
}
