import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const gifsCache = useRef<Record<string, Gif[]>>({});

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
    if (gifsCache.current[query]) {
      setGifs(gifsCache.current[query]);
      return;
    }
    const response = await getGifsByQuery(query);
    setGifs(response);
    gifsCache.current[query] = response;
  };

  return {
    gifs,
    previousSearches,
    handleSearch,
    onLabelClicked,
  };
};
