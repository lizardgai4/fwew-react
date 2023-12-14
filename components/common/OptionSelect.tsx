import { OptionItem } from "@/components/common/OptionItem";
import { View } from "@/components/common/Themed";
import { OptionType } from "@/types/common";
import { StyleSheet } from "react-native";

export type OptionSelectProps<T extends string> = {
  items: OptionType<T>[];
  active: (value: T) => boolean;
  onSelect: (value: T) => void;
};

export function OptionSelect<T extends string>({
  items,
  active,
  onSelect,
}: OptionSelectProps<T>) {
  return (
    <View style={styles.container}>
      {items.map((option, i) => (
        <OptionItem
          key={`os_${option.value}_${i}`}
          value={option.name}
          selected={active(option.value)}
          onSelect={() => onSelect(option.value)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
  },
});
