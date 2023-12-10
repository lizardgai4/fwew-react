import Colors from "@/constants/Colors";
import type { FontAwesomeIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type SmallButtonProps = {
  onPress: () => void;
  icon: FontAwesomeIconName;
  disabled?: boolean;
};

export function SmallButton({ onPress, icon, disabled }: SmallButtonProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { borderColor: colors.text }]}
      disabled={disabled}
    >
      <FontAwesome name={icon} size={24} color={colors.text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
});
