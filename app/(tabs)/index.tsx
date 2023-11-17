import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { SearchBar } from "@/components/SearchBar";
import { View } from "@/components/Themed";
import { useFwew } from "@/hooks/useFwew";
import { StyleSheet } from "react-native";

export default function TabOneScreen() {
  const [query, results, search] = useFwew();

  return (
    <View style={styles.container}>
      <SearchBar query={query} search={search} autoFocus />
      <FwewSearchResults results={results} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
