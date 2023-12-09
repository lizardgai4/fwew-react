import { WhatValues } from "@/constants/ui/list";
import { SelectHandler } from "@/types/common";
import {
  FilterExpressionAttribute,
  ListMenuWhatItem,
  ListMenuWhatOrCondItem,
  WhatValue,
} from "@/types/list";
import { useRef, useState } from "react";

export function useListOptions(onSelect: SelectHandler) {
  const [mode, setMode] = useState<FilterExpressionAttribute>("what");
  const whatRef = useRef<ListMenuWhatItem>();

  const nextMode = () => {
    const transitionMap = {
      what: "cond",
      cond: "spec",
      spec: "what",
    } as const;
    setMode((prev) => transitionMap[prev]);
  };

  const prevMode = () => {
    if (mode === "what") {
      onSelect("");
      return;
    }
    onSelect((prev) => prev.trim().split(" ").slice(0, -1).join(" "));
    const transitionMap = {
      what: "what",
      cond: "what",
      spec: "cond",
    } as const;
    setMode((prev) => transitionMap[prev]);
  };

  const reset = () => {
    setMode("what");
  };

  const selectOption = (item?: ListMenuWhatOrCondItem) => {
    if (item?.value) {
      onSelect((prev) => (prev ? `${prev} ${item.value} ` : item.value));
      if (WhatValues.includes(item.value as WhatValue)) {
        whatRef.current = item as ListMenuWhatItem;
      }
      nextMode();
      return;
    }
    onSelect((prev) => (prev ? `${prev} and ` : ""));
    nextMode();
  };

  return { whatRef, mode, prevMode, reset, selectOption };
}
