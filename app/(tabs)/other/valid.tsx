import { SearchBar } from "@/components/common/SearchBar";
import { CardView, Text, View } from "@/components/common/Themed";
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
      <View style={styles.main}>
        <SearchBar query={query} search={search} cancel={cancel} autoFocus />
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
  main: {
    gap: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    fontSize: 16,
  },
});
