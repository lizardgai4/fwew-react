import { FwewSearchBar } from "@/components/FwewSearchBar";
import { FwewSearchResults } from "@/components/FwewSearchResults";
import { View } from "@/components/Themed";
import { useFwew } from "@/hooks/useFwew";
import { StyleSheet } from "react-native";

export default function TabOneScreen() {
  const [query, results, search] = useFwew();

  return (
    <View style={styles.container}>
      <FwewSearchBar query={query} search={search} />
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
