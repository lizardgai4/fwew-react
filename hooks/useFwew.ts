import { useDebounce } from "@/hooks/useDebounce";
import { useResultsLanguage } from "@/hooks/useResultsLanguage";
import type { Word } from "fwew.js";
import { fwew, search as fwewSearch } from "fwew.js";
import { useEffect, useState } from "react";

export function useFwew() {
  const { resultsLanguage } = useResultsLanguage();
  const [query, search] = useState("");
  const [naviOnly, setNaviOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[][]>([]);
  const [resultCount, setResultCount] = useState(0);
  const debounce = useDebounce();

  const execute = async () => {
    if (query === "") {
      setResults([]);
      setResultCount(0);
      return;
    }

    setLoading(true);

    let data: Word[][];

    if (naviOnly) {
      data = await fwew(query);
    } else {
      data = await fwewSearch(resultsLanguage, query);
    }

    const dataNoDuplicates = data.map((words) =>
      words.filter(
        (word, index) => words.findIndex((w) => w.ID === word.ID) === index
      )
    );

    setResults(dataNoDuplicates);
    setResultCount(
      dataNoDuplicates.reduce((acc, cur) => acc + cur.length, 0) - data.length
    );
    setLoading(false);
  };

  useEffect(() => {
    debounce(execute);
  }, [query, naviOnly, resultsLanguage]);

  return {
    query,
    naviOnly,
    results,
    resultCount,
    loading,
    search,
    setNaviOnly,
    execute,
  } as const;
}
