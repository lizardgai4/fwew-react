import type { Results } from "@/types/fwew";
import { random } from "fwew.js";
import { useEffect, useState } from "react";

export function useRandom() {
  const [numWords, setNumWords] = useState<string>("");
  const [query, search] = useState("");
  const [results, setResults] = useState<Results>([]);

  const parts = query.trim().split(" where ");
  const n0 = parts[0] ?? "";
  const args = parts[1]?.split(" ") ?? [];

  const execute = () => {
    const n = +numWords || +n0;
    if (args.length === 0 || numWords === "0" || n === 0 || isNaN(n)) {
      setResults([]);
      return;
    }
    setResults(random(n, args));
  };

  useEffect(() => {
    if (query === "" && results.length > 0) {
      setResults([]);
    }
    if (query === "" && numWords !== "") {
      setNumWords("");
    }
  }, [query]);

  return [numWords, query, results, setNumWords, search, execute] as const;
}
