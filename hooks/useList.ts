import { list } from "fwew.js";
import type { Word } from "fwew.js";
import { useEffect, useState } from "react";

export function useList() {
  const [query, updateQuery] = useState("");
  const [results, setResults] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);

  const args = query.trim().split(" ");

  const execute = async () => {
    setLoading(true);
    if (args.length === 0) {
      setResults([]);
      setLoading(false);
      return;
    }
    const data = await list(query);
    setResults(data);
    setLoading(false);
  };

  useEffect(() => {
    if (query === "" && results.length > 0) {
      setResults([]);
      return;
    }
  }, [query]);

  return { query, results, loading, updateQuery, execute } as const;
}
