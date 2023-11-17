import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { List } from "@/constants/List";
import type { ListMenuCond, ListMenuItem, WhatValue } from "@/types/list";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

interface ListOptionsCondProps {
  what: ListMenuItem<WhatValue> | undefined;
  onSelect: (cond: ListMenuCond[WhatValue][number]) => void;
}

export function ListOptionsCond({ what, onSelect }: ListOptionsCondProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  if (!what) {
    return null;
  }

  return (
    <View>
      {List.CondValues[what.value].map((cond, index) => (
        <TouchableOpacity key={`c_${index}`} onPress={() => onSelect(cond)}>
          <Text style={styles.option}>
            {cond.value}:{" "}
            <Text style={[styles.description, { color: colors.placeholder }]}>
              {cond.description}
            </Text>
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
  },
  description: {
    fontWeight: "normal",
  },
});
