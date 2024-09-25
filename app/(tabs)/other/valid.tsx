import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { useValid } from "@/hooks/useValid";
import { getThemedComponents } from "@/themes";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ValidScreen() {
  const { query, results, loading, search, cancel } = useValid();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={styles.container}>
        <SearchBar query={query} search={search} cancel={cancel} autoFocus />
        <ResultCount
          resultCount={results.length}
          visible={results.length > 0 && !loading}
        />
        {results.map((row, index) => (
          <Themed.CardView key={`vrc_${index}`} style={styles.container}>
            <Themed.Text>{row}</Themed.Text>
          </Themed.CardView>
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
