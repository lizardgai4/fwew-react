import { ResultCard } from "@/components/common/ResultCard";
import type { Word } from "fwew.js";
import { StyleSheet } from "react-native";
import { Text, View } from "../common/Themed";

type FwewSearchResultsProps = {
  results: Word[][];
};

export function FwewSearchResults({ results }: FwewSearchResultsProps) {
  return (
    <>
      {results.map((result, i) => (
        <View key={`fsr_${i}`}>
          {result.map((word) => {
            if (!word.ID) {
              return (
                <Text key={`srl_${i}`} style={styles.label}>
                  {word.Navi}
                </Text>
              );
            }
            return <ResultCard key={word.ID} word={word} />;
          })}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    padding: 16,
    paddingTop: 0,
    fontSize: 18,
    fontWeight: "bold",
  },
});
