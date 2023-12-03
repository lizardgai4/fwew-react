import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type OptionItemProps = {
  icon?: React.ReactNode;
  value: string;
  selected?: boolean;
  onSelect?: () => void;
};

export function OptionItem({
  icon,
  value,
  selected,
  onSelect,
}: OptionItemProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.container, { borderColor: colors.text }]}
    >
      <View style={styles.iconContainer}>
        {icon}
        <Text style={styles.value}>{value}</Text>
      </View>
      {selected && (
        <FontAwesome
          name="check"
          size={24}
          color={colors.text}
          style={styles.check}
        />
      )}
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
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  value: {
    fontSize: 16,
  },
  check: {
    paddingHorizontal: 8,
  },
});
