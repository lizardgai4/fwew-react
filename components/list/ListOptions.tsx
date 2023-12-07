import { Text, View } from "@/components/common/Themed";
import { BackButton } from "@/components/list/BackButton";
import strings from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useListOptions } from "@/hooks/useListOptions";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { ListOptionsForm } from "./ListOptionsForm";

type ListOptionsProps = {
  query: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
  execute: () => void;
};

export function ListOptions({ query, onSelect, execute }: ListOptionsProps) {
  const { whatRef, mode, reset, prevMode, selectOption } =
    useListOptions(onSelect);
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

  const backButtonDisabled = mode === "what";

  const andButtonDisabled =
    query.length === 0 ||
    query.trim().split(" ").length < 3 ||
    (query.trim().split(" ").length + 1) % 4 !== 0 ||
    query.trim().endsWith("and");

  useEffect(() => {
    if (query === "") {
      reset();
      return;
    }
    if (/\s\s+/g.test(query)) {
      onSelect((prev) => prev.replace(/\s\s+/g, " "));
    }
  }, [query]);

  return (
    <>
      <View style={styles.titleContainer}>
        <BackButton onPress={prevMode} disabled={backButtonDisabled} />
        <Text style={styles.title}>{ui.listOptions}</Text>
      </View>
      <ListOptionsForm
        mode={mode}
        what={whatRef.current}
        selectOption={selectOption}
        execute={execute}
        andButtonDisabled={andButtonDisabled}
      />
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingTop: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
