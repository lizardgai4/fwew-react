import { ResultCard } from "@/components/ResultCard";
import type { Word } from "fwew.js";

type FwewSearchResultsProps = {
  results: Word[][];
};

export function FwewSearchResults({ results }: FwewSearchResultsProps) {
  return (
    <>
      {results.map((result) =>
        result.map((word) => <ResultCard key={word.ID} word={word} />)
      )}
    </>
  );
}
