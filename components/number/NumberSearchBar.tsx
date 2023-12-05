import { TextInput, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import strings from "@/constants/ui/numbers";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
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
  const appLanguageValue = useAppLanguageContext();
  const appLanguage = appLanguageValue?.appLanguage ?? "en";
  let ui = strings[appLanguage] ?? strings["en"];

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={query}
        onChangeText={search}
        placeholder={
          mode === "number" ? ui.placeholderNumeric : ui.placeholderAlpha
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
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderWidth: 1,
  },
});
