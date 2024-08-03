import { useDebounce } from "@/hooks/useDebounce";
import type { FwewError, FwewNumber } from "fwew.js";
import { naviToNumber, numberToNavi } from "fwew.js";
import { useCallback, useEffect, useState } from "react";

export function useNumber() {
  const [mode, setMode] = useState<"text" | "number">("number");
  const [query, search] = useState("");
  const [result, setResult] = useState<FwewNumber | FwewError | null>(null);
  const debounce = useDebounce();

  const toggleMode = () => {
    if (mode === "number") {
      setMode("text");
    } else {
      setMode("number");
    }
  };

  const clear = () => {
    search("");
    setResult(null);
  };

  const doSearch = useCallback(async () => {
    if (query === "") {
      setResult(null);
      return;
    }
    let n;
    if (/^(0[xX][0-9a-fA-F]+)$/.test(query)) {
      n = parseInt(query, 16);
    } else if (/^(0[bB][01]+)$/.test(query)) {
      n = parseInt(query.slice(2), 2);
    } else if (/^(0[0-7]+)$/.test(query)) {
      n = parseInt(query, 8);
    } else if (/^([0-9]+)$/.test(query)) {
      n = parseInt(query, 10);
    }
    if (n) {
      const data = await numberToNavi(n);
      setResult(data);
      return;
    }
    if (/^([a-zA-ZäÄìÌ]+)$/.test(query)) {
      const data = await naviToNumber(query);
      setResult(data);
      return;
    }
  }, [query]);

  useEffect(() => {
    debounce(doSearch);
  }, [query, mode, debounce, doSearch]);

  return [mode, toggleMode, query, result, search, clear] as const;
}
