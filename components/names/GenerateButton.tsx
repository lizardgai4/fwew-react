import { Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import strings from "@/constants/ui/names";

type GenerateButtonProps = {
  execute: () => void;
  disabled: boolean;
};

export function GenerateButton({ execute, disabled }: GenerateButtonProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  return (
    <TouchableOpacity
      onPress={execute}
      disabled={disabled}
      style={[
        styles.generateButton,
        { borderColor: disabled ? colors.placeholder : colors.text },
      ]}
    >
      <FontAwesome name="refresh" size={24} color={colors.text} />
      <Text>{strings.en.generate}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  generateButton: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
});
