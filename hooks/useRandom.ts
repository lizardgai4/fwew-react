import { NumericString } from "@/types/common";
import { random, type Word } from "fwew.js";
import { useCallback, useState } from "react";

export function useRandom() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[]>([]);

  const execute = useCallback(
    async (numWords: NumericString, filterExpression: string) => {
      if (numWords.length === 0) {
        setResults([]);
        return;
      }
      setLoading(true);
      if (filterExpression.length > 0) {
        const data = await random(+numWords, filterExpression);
        setResults(data);
        setLoading(false);
        return;
      }
      const data = await random(+numWords);
      setResults(data);
      setLoading(false);
    },
    []
  );

  return { loading, results, execute };
}
