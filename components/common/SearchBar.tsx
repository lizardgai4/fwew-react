import { CardView, TextInput } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
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

export function SearchBar(props: SearchBarProps) {
  const { query, search, placeholder, autoFocus = false, execute } = props;
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];

  return (
    <CardView style={styles.searchContainer}>
      <TextInput
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
      <SearchBarRight showClear={query.length > 0} clear={() => search("")} />
    </CardView>
  );
}

type SearchBarRightProps = {
  showClear: boolean;
  clear: () => void;
};

function SearchBarRight({ showClear, clear }: SearchBarRightProps) {
  const { colors } = useTheme();

  if (showClear) {
    return (
      <TouchableOpacity style={styles.button} onPress={clear}>
        <FontAwesome name="close" size={24} color={colors.text} />
      </TouchableOpacity>
    );
  }

  return (
    <CardView style={styles.button}>
      <FontAwesome name="search" size={24} color={colors.primary} />
    </CardView>
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
    marginRight: 8,
    height: Platform.OS === "web" ? null : 50,
  },
});
