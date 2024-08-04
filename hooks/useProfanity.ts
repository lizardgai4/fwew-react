import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import type { Word } from "fwew.js";
import { fwew } from "fwew.js";
import { useCallback, useEffect, useRef, useState } from "react";

export function useProfanity() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [query, search] = useState("");
  const [naviOnly, setNaviOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[][]>([]);
  const [resultCount, setResultCount] = useState(0);
  const debounce = useDebounce();
  const abortController = useRef(new AbortController());

  const execute = useCallback(async () => {
    setLoading(true);

    let data: Word[][];

    try {
      data = await fwew(
        "skxawng kalweyaveng kurkung pela'ang pxasìk teylupil tsahey txanfwìngtu vonvä' wiya yayl",
        {
          signal: abortController.current.signal,
        }
      );
    } catch {
      setResults([]);
      setResultCount(0);
      setLoading(false);
      return;
    }

    setResults(data);
    setResultCount(
      // number of actual results = total number of words - number of "blank header words"
      data.reduce((acc, cur) => acc + cur.length, 0) - data.length
    );
    setLoading(false);
  }, []);

  const cancel = () => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(false);
  };

  useEffect(() => {
    debounce(execute);
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, naviOnly, resultsLanguage]);

  return {
    query,
    naviOnly,
    results,
    resultCount,
    loading,
    search,
    setNaviOnly,
    execute,
    cancel,
  } as const;
}
