import { useDebounce } from "@/hooks/useDebounce";
import { naviToNumber, numberToNavi } from "fwew.js";
import type { FwewError, FwewNumber } from "fwew.js";
import { useEffect, useState } from "react";

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

  const doSearch = async () => {
    if (query === "") {
      setResult(null);
      return;
    }
    if (/^([0-9]+)$/.test(query)) {
      const data = await numberToNavi(+query);
      setResult(data);
      return;
    }
    if (/^([a-zA-ZäÄìÌ]+)$/.test(query)) {
      const data = await naviToNumber(query);
      setResult(data);
      return;
    }
  };

  useEffect(() => {
    debounce(doSearch);
  }, [query, mode]);

  return [mode, toggleMode, query, result, search, clear] as const;
}
