import Colors from "@/constants/Colors";
import type { FontAwesomeIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  icon: FontAwesomeIconName;
};

export function Button({ onPress, disabled, icon }: ButtonProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { borderColor: disabled ? colors.placeholder : colors.text },
      ]}
      disabled={disabled}
    >
      <FontAwesome
        name={icon}
        size={24}
        color={disabled ? colors.placeholder : colors.text}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 8,
    padding: 16,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
