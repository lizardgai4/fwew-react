import { list } from "fwew.js";
import type { Word } from "fwew.js/dist/types";
import { useEffect, useState } from "react";

export function useList() {
  const [query, search] = useState("");
  const [results, setResults] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);

  const args = query.trim().split(" ");

  const execute = () => {
    setLoading(true);
    if (args.length === 0) {
      setResults([]);
      setLoading(false);
      return;
    }
    list(query).then((data) => {
      setResults(data);
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
