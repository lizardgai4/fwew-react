import { Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type OptionItemProps = {
  value: string;
  selected?: boolean;
  onSelect?: () => void;
};

export function OptionItem({ value, selected, onSelect }: OptionItemProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.container, { borderColor: colors.text }]}
    >
      <Text style={styles.value}>{value}</Text>
      {selected && <FontAwesome name="check" size={16} color={colors.text} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
  },
  value: {
    fontSize: 16,
  },
});
