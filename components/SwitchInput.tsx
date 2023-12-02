import { Text, View } from "@/components/Themed";
import { StyleSheet, Switch } from "react-native";

type SwitchInputProps = {
  leftLabel: string;
  rightLabel: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function SwitchInput({
  leftLabel,
  rightLabel,
  value,
  onValueChange,
}: SwitchInputProps) {
  return (
    <View style={styles.switch}>
      <Text>{leftLabel}</Text>
      <Switch value={value} onValueChange={onValueChange} />
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
  },
});
