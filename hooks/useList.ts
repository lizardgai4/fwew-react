import type { Results } from "@/types/fwew";
import { list } from "fwew.js";
import { useEffect, useState } from "react";

export function useList() {
  const [query, search] = useState("");
  const [results, setResults] = useState<Results>([]);

  const args = query.trim().split(" ");

  const execute = () => {
    if (args.length === 0) {
      setResults([]);
      return;
    }
    setResults(list(args));
  };

  useEffect(() => {
    if (results.length > 0 && query === "") {
      setResults([]);
      return;
    }
  }, [query]);

  return [query, results, search, execute] as const;
}
