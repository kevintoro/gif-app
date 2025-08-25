import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const { gifs, previousSearches, onLabelClicked, handleSearch } = useGifs();

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
