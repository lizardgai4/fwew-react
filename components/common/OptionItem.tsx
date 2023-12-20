import { CardView, Text } from "@/components/common/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";

type OptionItemProps = {
  icon?: React.ReactNode;
  value: string;
  selected?: boolean;
  onSelect?: () => void;
};

export function OptionItem(props: OptionItemProps) {
  const { icon, value, selected, onSelect } = props;
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <CardView
        style={[
          styles.iconContainer,
          { backgroundColor: selected ? colors.primary : colors.card },
        ]}
      >
        {icon}
        <Text style={styles.value}>{value}</Text>
        {selected && (
          <FontAwesome
            name="check"
            size={24}
            color={colors.text}
            style={styles.check}
          />
        )}
      </CardView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  value: {
    fontSize: 16,
    padding: 8,
  },
  check: {
    paddingRight: 8,
  },
});
