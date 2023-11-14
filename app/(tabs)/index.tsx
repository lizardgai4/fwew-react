import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { ResultCard } from "../../components/ResultCard";
import { TextInput, View } from "../../components/Themed";
import { useFwew } from "../../hooks/useFwew";

export default function TabOneScreen() {
  const [query, results, search] = useFwew();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={"#666"}
          value={query}
          onChangeText={search}
        />
        {query.length > 0 ? (
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              padding: 8,
              borderWidth: 1,
              borderColor: "#eee",
            }}
            onPress={() => search("")}
          >
            <MaterialCommunityIcons name="close" size={24} color="#eee" />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              padding: 8,
              borderWidth: 1,
              borderColor: "#eee",
            }}
          >
            <MaterialCommunityIcons name="magnify" size={24} color="#eee" />
          </View>
        )}
      </View>
      <ScrollView style={styles.results}>
        {results.map((result) =>
          result.map((word) => <ResultCard key={word.ID} word={word} />)
        )}
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
  results: {
    width: "100%",
  },
});
