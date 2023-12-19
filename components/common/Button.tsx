import Colors from "@/constants/Colors";
import type { FontAwesomeIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  icon: FontAwesomeIconName;
};

export function Button({ onPress, disabled, icon }: ButtonProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? colors.placeholder : theme.colors.primary,
        },
      ]}
      disabled={disabled}
    >
      <FontAwesome name={icon} size={24} color={theme.colors.text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 8,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
