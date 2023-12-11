import type { Word } from "fwew.js";
import { list } from "fwew.js";
import { useCallback, useState } from "react";

export function useList() {
  const [results, setResults] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);

  const execute = useCallback(async (filterExpression: string) => {
    if (filterExpression.length === 0) return;
    setLoading(true);
    const data = await list(filterExpression);
    setResults(data);
    setLoading(false);
  }, []);

  return { loading, results, execute };
}
