import { TextInput, View } from "@/components/Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

interface FwewSearchBarProps {
  query: string;
  search: (query: string) => void;
}

export function FwewSearchBar({ query, search }: FwewSearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"#666"}
        value={query}
        onChangeText={search}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        autoFocus
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

const styles = StyleSheet.create({
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
});
