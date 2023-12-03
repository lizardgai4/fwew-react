import { TextInput, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import strings from "@/constants/ui/numbers";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type NumberSearchBarProps = {
  mode: string;
  toggleMode: () => void;
  query: string;
  search: (query: string) => void;
  clear: () => void;
};

export function NumberSearchBar({
  mode,
  toggleMode,
  query,
  search,
  clear,
}: NumberSearchBarProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={query}
        onChangeText={search}
        placeholder={
          mode === "number"
            ? strings.en.placeholderNumeric
            : strings.en.placeholderAlpha
        }
        placeholderTextColor={colors.placeholder}
        keyboardType={mode === "number" ? "number-pad" : "default"}
        style={[styles.input, { borderColor: colors.text }]}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        autoFocus
      />
      <TouchableOpacity
        onPress={clear}
        style={[styles.button, { borderColor: colors.text }]}
      >
        <FontAwesome name="close" size={24} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleMode}
        style={[styles.button, { borderColor: colors.text }]}
      >
        <FontAwesome name="exchange" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
    fontWeight: "bold",
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    padding: 8,
    borderWidth: 1,
  },
});
