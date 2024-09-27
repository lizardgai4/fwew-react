import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import {
  Platform,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";

type SearchBarProps = {
  query: string;
  search: (query: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  execute?: () => void;
  cancel?: () => void;
};

export function SearchBar(props: SearchBarProps) {
  const {
    query,
    search,
    placeholder,
    autoFocus = false,
    execute,
    cancel,
  } = props;
  const colorScheme = useColorScheme();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const Themed = getThemedComponents(themeName);

  const clear = () => {
    search("");
    if (cancel !== undefined) cancel();
  };

  return (
    <Themed.CardView style={styles.searchContainer}>
      <Themed.TextInput
        style={styles.input}
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
      <SearchBarRight showClear={query.length > 0} clear={clear} />
    </Themed.CardView>
  );
}

type SearchBarRightProps = {
  showClear: boolean;
  clear: () => void;
};

function SearchBarRight({ showClear, clear }: SearchBarRightProps) {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorScheme ?? "light"];

  if (showClear) {
    return (
      <Pressable
        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1 }]}
        onPress={clear}
      >
        <FontAwesome name="close" size={24} color={theme.colors.text} />
      </Pressable>
    );
  }

  return (
    <View style={styles.button}>
      <FontAwesome name="search" size={24} color={colors.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    borderRadius: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    paddingTop: 4,
    marginRight: 8,
    height: Platform.OS === "web" ? null : 50,
  },
});
