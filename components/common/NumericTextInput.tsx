import { SmallButton } from "@/components/common/SmallButton";
import { CardView, TextInput } from "@/components/common/Themed";
import { getColorExtension } from "@/themes";
import type { NumericString } from "@/types/common";
import { StyleSheet, useColorScheme } from "react-native";

type NumericTextInputProps = {
  value?: string | NumericString;
  onChangeText: (text: NumericString) => void;
  placeholder: string;
  autoFocus?: boolean;
};

export function NumericTextInput(props: NumericTextInputProps) {
  const { value, onChangeText, placeholder, autoFocus } = props;
  const colorScheme = useColorScheme();
  const colorExtension = getColorExtension("fwew");
  const colors = colorExtension[colorScheme ?? "light"];

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
      <CardView style={styles.clearButton}>
        {value && value.length > 0 && (
          <SmallButton icon="close" onPress={() => onChangeText("")} />
        )}
      </CardView>
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
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
