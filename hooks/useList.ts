import type { Word } from "fwew.js";
import { list } from "fwew.js";
import { useCallback, useState } from "react";

export function useList() {
  const [results, setResults] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  let abortController = new AbortController();

  const execute = useCallback(async (filterExpression: string) => {
    if (filterExpression.length === 0) return;
    setLoading(true);
    try {
      const data = await list(filterExpression, {
        signal: abortController.signal,
      });
      setResults(data);
    } catch (e: any) {
      setResults([]);
    }
    setLoading(false);
  }, []);

  const cancel = () => {
    abortController.abort();
    abortController = new AbortController();
    setLoading(false);
  };

  return { loading, results, execute, cancel };
}
