import { FwewResultCard } from "@/components/search/FwewResultCard";
import type { Word } from "fwew.js";
interface FwewSearchResultsProps {
  results: Word[][];
}

export function FwewSearchResults({ results }: FwewSearchResultsProps) {
  return (
    <>
      {results.map((result) =>
        result.map((word) => <FwewResultCard key={word.ID} word={word} />)
      )}
    </>
  );
}
