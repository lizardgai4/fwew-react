import { ResultSet } from "@/hooks/useFwew";
import { ScrollView, StyleSheet } from "react-native";
import { ResultCard } from "@/components/ResultCard";

interface FwewSearchResultsProps {
  results: ResultSet;
}

export function FwewSearchResults({ results }: FwewSearchResultsProps) {
  return (
    <ScrollView style={styles.results}>
      {results.map((result) =>
        result.map((word) => <ResultCard key={word.ID} word={word} />)
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  results: {
    width: "100%",
  },
});
