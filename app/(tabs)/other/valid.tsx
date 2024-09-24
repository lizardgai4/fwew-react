import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { CardView, Text } from "@/components/common/Themed";
import { useValid } from "@/hooks/useValid";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ValidScreen() {
  const { query, results, loading, search, cancel } = useValid();

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={styles.container}>
        <SearchBar query={query} search={search} cancel={cancel} autoFocus />
        <ResultCount
          resultCount={results.length}
          visible={results.length > 0 && !loading}
        />
        {results.map((row, index) => (
          <CardView key={`vrc_${index}`} style={styles.container}>
            <Text>{row}</Text>
          </CardView>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
    fontSize: 16,
  },
});
