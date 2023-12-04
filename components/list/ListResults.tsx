import { ResultCard } from "@/components/common/ResultCard";
import { Text } from "@/components/common/Themed";
import strings from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { Word } from "fwew.js";
import { StyleSheet } from "react-native";

type ListResultsProps = {
  results: Word[];
};

export function ListResults({ results }: ListResultsProps) {
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];
  if (results === undefined || results.map === undefined) {
    return <Text style={styles.text}>{ui.noResults}</Text>;
  }
  return (
    <>
      {results.map((word) => (
        <ResultCard key={word.ID} word={word} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    padding: 16,
    fontSize: 16,
  },
});
