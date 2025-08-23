import type { Gif } from "../../mock-data/gifs.mock";

interface GifCardProps {
  gif: Gif;
}

export const GifCard = ({ gif }: GifCardProps) => {
  return (
    <div className="gif-card" key={gif.id}>
      <img src={gif.url} alt={gif.title} />
      <h3>{gif.title}</h3>
      <p>
        {gif.width} x {gif.height}
      </p>
    </div>
  );
};
