import api from "@/constants/Api";
import type { Results } from "@/types/fwew";
import { useEffect, useState } from "react";

export function useList() {
  const [query, search] = useState("");
  const [results, setResults] = useState<Results>([]);
  const [loading, setLoading] = useState(false);

  const args = query.trim().split(" ");

  const execute = () => {
    setLoading(true);
    if (args.length === 0) {
      setResults([]);
      setLoading(false);
      return;
    }
    fetch(api.list.listFilter(query))
      .then((res) => res.json())
      .then((data: Results) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setResults([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (query === "" && results.length > 0) {
      setResults([]);
      return;
    }
  }, [query]);

  return { query, results, loading, search, execute } as const;
}
