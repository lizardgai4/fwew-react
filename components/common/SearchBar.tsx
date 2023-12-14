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

type SearchBarProps = {
  query: string;
  search: (query: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  execute?: () => void;
};

export function SearchBar({
  query,
  search,
  placeholder,
  autoFocus = false,
  execute,
}: SearchBarProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={[styles.input, { borderColor: colors.text }]}
        placeholder={placeholder ?? ui.search.search}
        placeholderTextColor={colors.placeholder}
        value={query}
        onChangeText={search}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        autoFocus={autoFocus}
        inputMode="search"
        enterKeyHint="search"
        returnKeyType="search"
        onSubmitEditing={execute}
      />
      <SearchBarRight showClear={query.length > 0} clear={() => search("")} />
    </View>
  );
}

type SearchBarRightProps = {
  showClear: boolean;
  clear: () => void;
};

function SearchBarRight({ showClear, clear }: SearchBarRightProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  if (showClear) {
    return (
      <TouchableOpacity
        style={[styles.button, { borderColor: colors.text }]}
        onPress={clear}
      >
        <FontAwesome name="close" size={24} color={colors.text} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.button, { borderColor: colors.text }]}>
      <FontAwesome name="search" size={24} color={colors.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
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
