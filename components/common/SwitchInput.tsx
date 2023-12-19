import { Text, View } from "@/components/common/Themed";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, Switch } from "react-native";

type SwitchInputProps = {
  leftLabel: string;
  rightLabel: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function SwitchInput(props: SwitchInputProps) {
  const { leftLabel, rightLabel, value, onValueChange } = props;
  const { colors } = useTheme();

  return (
    <View style={styles.switch}>
      <Text>{leftLabel}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.card, true: colors.primary }}
        thumbColor={colors.text}
        // @ts-ignore
        activeThumbColor={colors.text}
        ios_backgroundColor={colors.card}
      />
      <Text>{rightLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 8,
  },
});
