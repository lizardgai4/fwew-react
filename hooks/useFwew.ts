import api from "@/constants/Api";
import { useDebounce } from "@/hooks/useDebounce";
import type { ResultSet } from "@/types/fwew";
import { useEffect, useState } from "react";

export function useFwew() {
  const [query, search] = useState("");
  const [results, setResults] = useState<ResultSet>([]);
  const [resultCount, setResultCount] = useState(0);
  const debounce = useDebounce();

  const doSearch = () => {
    if (query === "") {
      setResults([]);
      setResultCount(0);
      return;
    }
    fetch(api.search.searchComplete("en", query))
      .then((res) => res.json())
      .then((data: ResultSet) => {
        setResults(data);
        setResultCount(data.reduce((acc, cur) => acc + cur.length, 0));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    debounce(doSearch, 300);
  }, [query]);

  return [query, results, resultCount, search] as const;
}
