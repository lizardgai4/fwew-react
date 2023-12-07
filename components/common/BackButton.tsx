import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type BackButtonProps = {
  onPress: () => void;
  disabled: boolean;
};

export function BackButton({ onPress, disabled }: BackButtonProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={onPress}
      disabled={disabled}
    >
      <FontAwesome
        name="arrow-left"
        size={24}
        color={disabled ? colors.placeholder : colors.text}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    padding: 10,
  },
});
