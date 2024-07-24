import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { valid } from "fwew.js";
import { useEffect, useState } from "react";

export function useValid() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [query, search] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);
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

    let tempResults: string[];
    tempResults = [];
    const thing = data.split("\n");

    for (const k in thing) {
      tempResults.push(thing[k].replaceAll("**", "`").replaceAll("`", ""));
    }

    setResults(tempResults);
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
  }, [query, resultsLanguage]);

  return {
    query,
    results,
    loading,
    search,
    execute,
    cancel,
  } as const;
}
