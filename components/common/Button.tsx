import { Text } from "@/components/common/Themed";
import { getColorExtension } from "@/themes";
import type { FontAwesomeIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  type TextStyle,
  type ViewStyle,
} from "react-native";

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  icon: FontAwesomeIconName;
  text?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export function Button(props: ButtonProps) {
  const { onPress, disabled, icon, text, style, textStyle } = props;
  const colorScheme = useColorScheme();
  const colorExtension = getColorExtension("fwew");
  const colors = colorExtension[colorScheme ?? "light"];
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? colors.placeholder : theme.colors.primary,
          ...style,
        },
      ]}
      disabled={disabled}
    >
      <FontAwesome name={icon} size={24} color={colorExtension.dark.text} />
      {text && (
        <Text style={{ color: colorExtension.dark.text, ...textStyle }}>
          {text}
        </Text>
      )}
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
