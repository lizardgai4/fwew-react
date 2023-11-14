import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { ResultCard } from "@/components/ResultCard";
import { TextInput, View } from "@/components/Themed";
import { ResultSet, useFwew } from "@/hooks/useFwew";

export default function TabOneScreen() {
  const [query, results, search] = useFwew();

  return (
    <View style={styles.container}>
      <FwewSearchBar query={query} search={search} />
      <FwewSearchResults results={results} />
    </View>
  );
}

interface FwewSearchBarProps {
  query: string;
  search: (query: string) => void;
}

function FwewSearchBar({ query, search }: FwewSearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"#666"}
        value={query}
        onChangeText={search}
      />
      {query.length > 0 ? (
        <TouchableOpacity style={styles.button} onPress={() => search("")}>
          <MaterialCommunityIcons name="close" size={24} color="#eee" />
        </TouchableOpacity>
      ) : (
        <View style={styles.button}>
          <MaterialCommunityIcons name="magnify" size={24} color="#eee" />
        </View>
      )}
    </View>
  );
}

interface FwewSearchResultsProps {
  results: ResultSet;
}

function FwewSearchResults({ results }: FwewSearchResultsProps) {
  return (
    <ScrollView style={styles.results}>
      {results.map((result) =>
        result.map((word) => <ResultCard key={word.ID} word={word} />)
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: "#eee",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  results: {
    width: "100%",
  },
});
