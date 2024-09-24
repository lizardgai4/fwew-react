import { Text } from "@/components/common/Themed";
import { getColorExtension } from "@/themes";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, Switch, useColorScheme, View } from "react-native";

type SwitchInputProps = {
  leftLabel: string;
  rightLabel: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function SwitchInput(props: SwitchInputProps) {
  const { leftLabel, rightLabel, value, onValueChange } = props;
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const colorExtension = getColorExtension("fwew");
  const colors = colorExtension[colorScheme ?? "light"];

  return (
    <View style={styles.switch}>
      <Text>{leftLabel}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: colors.placeholder,
          true: colors.tint,
        }}
        thumbColor={colorExtension.light.background}
        // @ts-ignore
        activeThumbColor={theme.colors.text}
        ios_backgroundColor={theme.colors.card}
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
