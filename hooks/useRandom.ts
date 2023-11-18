import type { Results } from "@/types/fwew";
import { random } from "fwew.js";
import { useEffect, useState } from "react";

export function useRandom() {
  const [numWords, setNumWords] = useState<string>("");
  const [query, search] = useState("");
  const [results, setResults] = useState<Results>([]);

  const args = query.trim().split(" where ")[1]?.split(" ");

  const execute = () => {
    const n = +numWords;
    if (args.length === 0 || numWords === "" || numWords === "0" || isNaN(n)) {
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
