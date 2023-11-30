import { random } from "fwew.js";
import type { Word } from "fwew.js";
import { useEffect, useState } from "react";

export function useRandom() {
  const [numWords, setNumWords] = useState<string>("");
  const [query, search] = useState("");
  const [results, setResults] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);

  const parts = query.trim().split(" where ");
  const n0 = parts[0] ?? "";
  const args = parts[1];
  const argList = args?.split(" ") ?? [];

  const execute = async () => {
    setLoading(true);
    const n = +numWords || +n0;
    if (numWords === "0" || n === 0 || isNaN(n) || n < 0) {
      setResults([]);
      setLoading(false);
      return;
    }
    if (argList.length === 0) {
      const data = await random(n);
      setResults(data);
      setLoading(false);
      return;
    }
    const data = await random(n, args);
    setResults(data);
    setLoading(false);
  };

  useEffect(() => {
    if (query === "" && results.length > 0) {
      setResults([]);
    }
    if (query === "" && numWords !== "") {
      setNumWords("");
    }
  }, [query]);

  return {
    numWords,
    query,
    results,
    loading,
    setNumWords,
    search,
    execute,
  } as const;
}
