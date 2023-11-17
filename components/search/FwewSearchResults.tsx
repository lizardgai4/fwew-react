import { FwewResultCard } from "@/components/search/FwewResultCard";
import type { ResultSet } from "@/types/fwew";

interface FwewSearchResultsProps {
  results: ResultSet;
}

export function FwewSearchResults({ results }: FwewSearchResultsProps) {
  return (
    <>
      {results.map((result) =>
        result.map((word) => <FwewResultCard key={word.data.ID} word={word} />)
      )}
    </>
  );
}
