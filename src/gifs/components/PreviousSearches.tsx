interface PreviousSearchesProps {
  searches: string[];
  onLabelClicked: (label: string) => void;
}

export const PreviousSearches = ({
  searches,
  onLabelClicked,
}: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas anteriores</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search} onClick={() => onLabelClicked(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
