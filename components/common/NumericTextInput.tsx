import { CardView, TextInput } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import type { NumericString } from "@/types/common";
import { StyleSheet, useColorScheme } from "react-native";
import { SmallButton } from "./SmallButton";

type NumericTextInputProps = {
  value?: string | NumericString;
  onChangeText: (text: NumericString) => void;
  placeholder: string;
  autoFocus?: boolean;
};

export function NumericTextInput(props: NumericTextInputProps) {
  const { value, onChangeText, placeholder, autoFocus } = props;
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CardView style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        value={value}
        onChangeText={(text) => onChangeText(text as NumericString)}
        keyboardType="number-pad"
        style={[styles.input, { borderColor: colors.text }]}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        autoFocus={autoFocus}
      />
      {value ? (
        <SmallButton icon="close" onPress={() => onChangeText("")} />
      ) : (
        <CardView style={[styles.clearButton, { borderColor: colors.text }]} />
      )}
    </CardView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
  },
  clearButton: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});
