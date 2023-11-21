import Api from "@/constants/Api";
import { useDebounce } from "@/hooks/useDebounce";
import type { NumericString } from "@/types/common";
import type { FwewNumber } from "@/types/number";
import { useEffect, useState } from "react";

export function useNumber() {
  const [mode, setMode] = useState<"text" | "number">("number");
  const [query, search] = useState("");
  const [result, setResult] = useState<FwewNumber | null>(null);
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

  const doSearch = () => {
    if (query === "") {
      setResult(null);
      return;
    }
    if (/^([0-9]+)$/.test(query)) {
      fetch(Api.number.numberToNavi(query as NumericString))
        .then((res) => res.json())
        .then((data) => setResult(data))
        .catch((e) => console.error(e));
      return;
    }
    if (/^([a-zA-ZäÄìÌ]+)$/.test(query)) {
      fetch(Api.number.naviToNumber(query))
        .then((res) => res.json())
        .then((data) => setResult(data))
        .catch((e) => console.error(e));
      return;
    }
  };

  useEffect(() => {
    debounce(doSearch, 300);
  }, [query, mode]);

  return [mode, toggleMode, query, result, search, clear] as const;
}
