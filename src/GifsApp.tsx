import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import type { Gif } from "./gifs/interfaces/gif.interface";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const onLabelClicked = async (label: string) => {
    await fetchGifs(label);
  };

  const handleSearch = async (query: string) => {
    query = query.toLowerCase().trim();
    if (query.length === 0) {
      return;
    }
    const alreadySaved = previousSearches.includes(query);
    if (alreadySaved) {
      return;
    }

    const savedSearches = previousSearches.slice(0, 8);
    setPreviousSearches([query, ...savedSearches]);

    await fetchGifs(query);
  };

  const fetchGifs = async (query: string) => {
    const response = await getGifsByQuery(query);
    setGifs(response);
  };

  return (
    <>
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />
      <SearchBar placeholder="Buscar gif" onQuery={handleSearch} />
      <PreviousSearches
        searches={previousSearches}
        onLabelClicked={onLabelClicked}
      />
      <GifList gifs={gifs} />
    </>
  );
};
