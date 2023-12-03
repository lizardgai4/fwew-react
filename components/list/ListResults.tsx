import { ResultCard } from "@/components/ResultCard";
import { Text } from "@/components/Themed";
import strings from "@/constants/ui/list";
import type { Word } from "fwew.js";
import { StyleSheet } from "react-native";

type ListResultsProps = {
  results: Word[];
};

export function ListResults({ results }: ListResultsProps) {
  if (results === undefined || results.map === undefined) {
    return <Text style={styles.text}>{strings.en.noResults}</Text>;
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
