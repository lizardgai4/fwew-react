import { Text, TextInput, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import strings from "@/constants/ui/random";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type RandomOptionsNumProps = {
  numWords: string;
  onSelect: (text: string) => void;
  execute: () => void;
  next: () => void;
};

export function RandomOptionsNum({
  numWords,
  onSelect,
  execute,
  next,
}: RandomOptionsNumProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const appLanguageValue = useAppLanguageContext();
  const appLanguage = appLanguageValue?.appLanguage ?? "en";
  let ui = strings[appLanguage] ?? strings["en"];

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{ui.numWords}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="number-pad"
          placeholder="42"
          placeholderTextColor={colors.placeholder}
          value={numWords ?? ""}
          onChangeText={onSelect}
          style={[styles.input, { borderColor: colors.text }]}
          onSubmitEditing={execute}
        />
        {numWords.length > 0 && (
          <TouchableOpacity
            onPress={next}
            style={[styles.button, { borderColor: colors.text }]}
          >
            <Text style={{ color: colors.text }}>{ui.where}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
    fontWeight: "bold",
    borderWidth: 1,
  },
  button: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
