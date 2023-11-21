import { FwewResultCard } from "@/components/search/FwewResultCard";
import type { Results } from "@/types/fwew";
import { StyleSheet } from "react-native";
import { Text } from "../Themed";

interface ListResultsProps {
  results: Results;
}

export function ListResults({ results }: ListResultsProps) {
  if (results === undefined || results.map === undefined) {
    return <Text style={styles.text}>no results</Text>;
  }
  return (
    <>
      {results.map((word) => (
        <FwewResultCard key={word.ID} word={word} />
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
