import { Text } from "@/components/common/Themed";
import { ListOptionsCond } from "@/components/list/ListOptionsCond";
import { ListOptionsSpec } from "@/components/list/ListOptionsSpec";
import { ListOptionsWhat } from "@/components/list/ListOptionsWhat";
import strings, { WhatValues } from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useListOptions } from "@/hooks/useListOptions";
import type { ListMenuCond, ListMenuItem, WhatValue } from "@/types/list";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

type ListOptionsProps = {
  query: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
  execute: () => void;
};

export function ListOptions({ query, onSelect, execute }: ListOptionsProps) {
  const { whatRef, mode, setMode, nextMode } = useListOptions();
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

  const andButtonDisabled =
    query.length === 0 ||
    query.trim().split(" ").length < 3 ||
    (query.trim().split(" ").length + 1) % 4 !== 0 ||
    query.trim().endsWith("and");

  const handleSelect = (
    item?: ListMenuItem<WhatValue> | ListMenuCond[WhatValue][number]
  ) => {
    if (item?.value) {
      onSelect((prev) => (prev ? `${prev} ${item.value} ` : item.value));
      if (WhatValues.includes(item.value as WhatValue)) {
        whatRef.current = item as ListMenuItem<WhatValue>;
      }
      nextMode();
      return;
    }
    onSelect((prev) => (prev ? `${prev} and ` : ""));
    nextMode();
  };

  useEffect(() => {
    if (/\s\s+/g.test(query)) {
      onSelect((prev) => prev.replace(/\s\s+/g, " "));
    }
    if (query === "") {
      setMode("what");
    }
  }, [query]);

  return (
    <>
      <Text style={styles.title}>{ui.listOptions}</Text>
      {mode === "what" && <ListOptionsWhat onSelect={handleSelect} />}
      {mode === "cond" && (
        <ListOptionsCond what={whatRef.current} onSelect={handleSelect} />
      )}
      {mode === "spec" && (
        <ListOptionsSpec
          execute={execute}
          handleSelectionSpec={handleSelect}
          andButtonDisabled={andButtonDisabled}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
    marginTop: 10,
  },
});
