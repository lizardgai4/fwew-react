import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { valid } from "fwew.js";
import { useCallback, useEffect, useRef, useState } from "react";

export function useValid() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [query, search] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const debounce = useDebounce();
  let abortController = useRef(new AbortController());

  const execute = useCallback(async () => {
    if (query === "") {
      setResults([]);
      return;
    }

    setLoading(true);

    let data: string;

    try {
      data = await valid(query.trim(), {
        signal: abortController.current.signal,
      });
    } catch {
      setResults([]);
      setLoading(false);
      return;
    }

    let tempResults: string[];
    tempResults = [];
    const thing = data.split("\n");

    for (const k in thing) {
      tempResults.push(thing[k].replaceAll("**", "`").replaceAll("`", ""));
    }

    setResults(tempResults);
    setLoading(false);
  }, [query]);

  const cancel = useCallback(() => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(false);
  }, []);

  useEffect(() => {
    debounce(execute);
    return cancel;
  }, [query, resultsLanguage, cancel, debounce, execute]);

  return {
    query,
    results,
    loading,
    search,
    execute,
    cancel,
  } as const;
}
