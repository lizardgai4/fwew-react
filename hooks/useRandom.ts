import { random } from "fwew.js";
import type { Word } from "fwew.js/dist/types";
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

  const execute = () => {
    setLoading(true);
    const n = +numWords || +n0;

    if (numWords === "0" || n === 0 || isNaN(n) || n < 0) {
      setResults([]);
      setLoading(false);
      return;
    }

    if (argList.length === 0) {
      random(n)
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setResults([]);
          setLoading(false);
        });
      return;
    }

    random(n, args)
      .then((data) => {
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
