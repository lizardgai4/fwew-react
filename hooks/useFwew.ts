import { useDebounce } from "@/hooks/useDebounce";
import type { ResultSet } from "@/types/fwew";
import { fwew } from "fwew.js";
import { useEffect, useState } from "react";

export function useFwew(): [
  string,
  ResultSet,
  number,
  (query: string) => void
] {
  const [query, search] = useState("");
  const [results, setResults] = useState<ResultSet>([]);
  const [resultCount, setResultCount] = useState(0);
  const debounce = useDebounce();

  const doSearch = () => {
    if (query.length > 0) {
      const nav2loc = fwew.translateFromNavi(query);
      const loc2nav = fwew.translateToNavi(query, "en");
      setResults([nav2loc, loc2nav]);
      setResultCount(nav2loc.length + loc2nav.length);
    } else {
      setResults([]);
      setResultCount(0);
    }
  };

  useEffect(() => {
    debounce(doSearch, 300);
  }, [query]);

  return [query, results, resultCount, search];
}
