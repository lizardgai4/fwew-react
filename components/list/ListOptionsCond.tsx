import { Text, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import strings from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { ListMenuCondItem, ListMenuWhatItem } from "@/types/list";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type ListOptionsCondProps = {
  what: ListMenuWhatItem | undefined;
  onSelect: (cond: ListMenuCondItem) => void;
};

export function ListOptionsCond({ what, onSelect }: ListOptionsCondProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

  if (!what) {
    return null;
  }

  return (
    <View>
      {ui.listMenu.condValues[what.value].map((cond, index) => (
        <TouchableOpacity key={`c_${index}`} onPress={() => onSelect(cond)}>
          <Text style={styles.option}>
            {cond.value}{" "}
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
