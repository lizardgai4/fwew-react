import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { dictLen, phonemeFrequency } from "fwew.js";
import { useCallback, useEffect, useRef, useState } from "react";

export function useStats() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState<string>();
  const [phonemeGrid, setPhonemes] = useState<string[][]>([]);
  const [clusterMap, setClusters] = useState<string[][]>([]);
  const debounce = useDebounce();
  let abortController = useRef(new AbortController());

  const execute = useCallback(async () => {
    setLoading(true);

    let data1: string;
    let data2: string[][][];

    try {
      data1 = await dictLen({
        signal: abortController.current.signal,
      });
      data2 = await phonemeFrequency({
        signal: abortController.current.signal,
      });
    } catch {
      setLoading(false);
      return;
    }

    setWordCount(data1);
    setPhonemes(data2[0]);
    setClusters(data2[1]);
    setLoading(false);
  }, []);

  const cancel = useCallback(() => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(false);
  }, []);

  useEffect(() => {
    debounce(execute);
    return cancel;
  }, [resultsLanguage, cancel, debounce, execute]);

  return {
    wordCount,
    phonemeGrid,
    clusterMap,
    loading,
    execute,
    cancel,
  } as const;
}
