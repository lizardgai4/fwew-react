import { TextInput, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

interface FwewSearchBarProps {
  query: string;
  search: (query: string) => void;
}

export function FwewSearchBar({ query, search }: FwewSearchBarProps) {
  const colorScheme = useColorScheme();
  const { text, placeholder } = Colors[colorScheme ?? "light"];

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={[styles.input, { borderColor: text }]}
        placeholder="Search"
        placeholderTextColor={placeholder}
        value={query}
        onChangeText={search}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        autoFocus
      />
      {query.length > 0 ? (
        <TouchableOpacity
          style={[styles.button, { borderColor: text }]}
          onPress={() => search("")}
        >
          <FontAwesome name="close" size={24} color={text} />
        </TouchableOpacity>
      ) : (
        <View style={[styles.button, { borderColor: text }]}>
          <FontAwesome name="search" size={24} color={text} />
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
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    padding: 8,
    borderWidth: 1,
  },
});
