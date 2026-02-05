export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    default: string;
    animated_back: string;
    animated_front: string;
  };
}