import { useDebounce } from "@/hooks/useDebounce";
import { search as fwewSearch } from "fwew.js";
import type { Word } from "fwew.js/dist/types";
import { useEffect, useState } from "react";

export function useFwew() {
  const [query, search] = useState("");
  const [results, setResults] = useState<Word[][]>([]);
  const [resultCount, setResultCount] = useState(0);
  const debounce = useDebounce();

  const doSearch = () => {
    if (query === "") {
      setResults([]);
      setResultCount(0);
      return;
    }
    fwewSearch("en", query).then((data) => {
      setResults(data);
      setResultCount(data.reduce((acc, cur) => acc + cur.length, 0));
    });
  };

  useEffect(() => {
    debounce(doSearch, 300);
  }, [query]);

  return [query, results, resultCount, search] as const;
}
