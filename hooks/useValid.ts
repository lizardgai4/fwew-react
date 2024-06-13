import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import type { Word } from "fwew.js";
import { valid } from "fwew.js";
import { useEffect, useState } from "react";

export function useValid() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [query, search] = useState("");
  const [naviOnly, setNaviOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<String[]>([]);
  const debounce = useDebounce();
  let abortController = new AbortController();

  const execute = async () => {
    if (query === "") {
      setResults([]);
      return;
    }

    setLoading(true);

    let data: String;

    try {
        data = await valid(query.trim(), {
          signal: abortController.signal,
        });
    } catch (e: any) {
      setResults([]);
      setLoading(false);
      return;
    }

    setResults(data.split("\n"));
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
  }, [query, naviOnly, resultsLanguage]);

  return {
    query,
    results,
    loading,
    search,
    execute,
    cancel,
  } as const;
}
