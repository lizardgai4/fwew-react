import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { SearchBar } from "@/components/SearchBar";
import { View } from "@/components/Themed";
import { useFwew } from "@/hooks/useFwew";
import { ScrollView, StyleSheet } from "react-native";

export default function TabOneScreen() {
  const [query, results, search] = useFwew();

  return (
    <View style={styles.container}>
      <SearchBar query={query} search={search} autoFocus />
      <ScrollView style={styles.results}>
        <FwewSearchResults results={results} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  results: {
    width: "100%",
  },
});
