import { ListExpressionAttribute, ListMenuItem, WhatValue } from "@/types/list";
import { useRef, useState } from "react";

export function useListOptions() {
  const [mode, setMode] = useState<ListExpressionAttribute>("what");
  const whatRef = useRef<ListMenuItem<WhatValue>>();

  const nextMode = () => {
    const transitionMap = {
      what: "cond",
      cond: "spec",
      spec: "what",
    } as const;
    setMode((prev) => transitionMap[prev]);
  };

  return { whatRef, mode, setMode, nextMode };
}
