import { TextInput, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FontAwesome } from "@expo/vector-icons";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

type NumberSearchBarProps = {
  mode: string;
  toggleMode: () => void;
  query: string;
  search: (query: string) => void;
  clear: () => void;
};

export function NumberSearchBar(props: NumberSearchBarProps) {
  const { mode, toggleMode, query, search, clear } = props;
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const appLanguageValue = useAppLanguageContext();
  const appLanguage = appLanguageValue?.appLanguage ?? "en";
  let ui = i18n[appLanguage];

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={query}
        onChangeText={search}
        placeholder={
          mode === "number"
            ? ui.numbers.placeholderNumeric
            : ui.numbers.placeholderAlpha
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
    height: Platform.OS === "web" ? null : 50,
  },
});
