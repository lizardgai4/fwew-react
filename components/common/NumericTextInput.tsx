import { TextInput, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type NumericTextInputProps = {
  value?: string | `${number}` | undefined;
  onChangeText: (text: string) => void;
  placeholder: string;
  autoFocus?: boolean;
};

export function NumericTextInput({
  value,
  onChangeText,
  placeholder,
  autoFocus,
}: NumericTextInputProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType="number-pad"
        style={[styles.input, { borderColor: colors.text }]}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        autoFocus={autoFocus}
      />
      <TouchableOpacity
        onPress={() => onChangeText("")}
        style={[styles.clearButton, { borderColor: colors.text }]}
      >
        <FontAwesome name="close" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
  },
  clearButton: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});
