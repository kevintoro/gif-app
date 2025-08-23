import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState(["dragon ball z"]);

  const onLabelClicked = (label: string) => {
    console.log(label);
  };

  const handleSearch = (query: string) => {
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
      <GifList gifs={mockGifs} />
    </>
  );
};
