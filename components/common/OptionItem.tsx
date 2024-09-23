import { CardView, Text } from "@/components/common/Themed";
import { getColorExtension } from "@/themes";
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
  const theme = useTheme();
  const colorExtension = getColorExtension("fwew");

  const getTextColor = () => {
    if (selected) return colorExtension.dark.text;
    if (theme.dark) return colorExtension.dark.placeholder;
    return colorExtension.light.text;
  };

  return (
    <TouchableOpacity onPress={onSelect}>
      <CardView
        style={[
          styles.iconContainer,
          {
            backgroundColor: selected
              ? theme.colors.primary
              : theme.colors.card,
          },
        ]}
      >
        {icon}
        <Text style={[styles.value, { color: getTextColor() }]}>{value}</Text>
        {selected && (
          <FontAwesome
            name="check"
            size={24}
            color={colorExtension.dark.text}
            style={styles.check}
          />
        )}
      </CardView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
