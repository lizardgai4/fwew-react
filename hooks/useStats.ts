import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { dictLen, phonemeFrequency } from "fwew.js";
import { useEffect, useState } from "react";

export function useStats() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState<String>();
  const [phonemeGrid, setPhonemes] = useState<string[][]>([]);
  const [clusterMap, setClusters] = useState<string[][]>([]);
  const debounce = useDebounce();
  let abortController = new AbortController();

  const execute = async () => {
    setLoading(true);

    let data1: String;
    let data2: string[][][]

    try {
        data1 = await dictLen({
          signal: abortController.signal,
        });
        data2 = await phonemeFrequency({
          signal: abortController.signal,
        });
    } catch (e: any) {
      setLoading(false);
      return;
    }
    
    setWordCount(data1)
    setPhonemes(data2[0]);
    setClusters(data2[1]);
    setLoading(false);
  };

  const cancel = () => {
    abortController.abort();
    abortController = new AbortController();
    setLoading(false);
  };

  useEffect(() => {
    debounce(execute);
    return cancel;
  }, [resultsLanguage]);

  return {
    wordCount,
    phonemeGrid,
    clusterMap,
    loading,
    execute,
    cancel,
  } as const;
}
