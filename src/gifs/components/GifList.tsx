import type { Gif } from "../../mock-data/gifs.mock";
import { GifCard } from "./GifCard";

interface GifListProps {
  gifs: Gif[];
}

export const GifList = ({ gifs }: GifListProps) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <GifCard key={gif.id} gif={gif} />
      ))}
    </div>
  );
};
