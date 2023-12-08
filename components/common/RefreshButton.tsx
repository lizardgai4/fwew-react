import { Text } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type RefreshButtonProps = {
  execute: () => void;
  disabled: boolean;
  title?: string;
};

export function RefreshButton({
  execute,
  disabled,
  title,
}: RefreshButtonProps) {
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
      <Text>{title}</Text>
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
