import { useDebounce } from "@/hooks/useDebounce";
import type { ResultSet } from "@/types/fwew";
import { fwew } from "fwew.js";
import { useEffect, useState } from "react";

export function useFwew(): [string, ResultSet, (query: string) => void] {
  const [query, search] = useState("");
  const [results, setResults] = useState<ResultSet>([]);
  const debounce = useDebounce();

  const doSearch = () => {
    if (query.length > 0) {
      setResults([
        fwew.translateFromNavi(query),
        fwew.translateToNavi(query, "en"),
      ]);
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    debounce(doSearch, 300);
  }, [query]);

  return [query, results, search];
}
