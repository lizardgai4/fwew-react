import { SearchBar } from "@/components/common/SearchBar";
import { Text } from "@/components/common/Themed";
import { useValid } from "@/hooks/useValid";
import { useTheme } from "@react-navigation/native";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function ValidScreen() {
  const { query, results, loading, search, execute, cancel } = useValid();
  const { colors } = useTheme();

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[colors.primary]}
        />
      }
    >
      <SearchBar query={query} search={search} cancel={cancel} autoFocus />
      {results.map((row, index) => (
        <Text key={index} style={styles.container}>
          {row}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    fontSize: 16,
  },
});
