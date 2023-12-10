import { Text, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import strings from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { ListMenuWhatItem } from "@/types/list";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type ListOptionsWhatProps = {
  onSelect: (what: ListMenuWhatItem) => void;
};

export function ListOptionsWhat({ onSelect }: ListOptionsWhatProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

  return (
    <View>
      {ui.listMenu.whatValues.map((what, index) => (
        <TouchableOpacity key={`w_${index}`} onPress={() => onSelect(what)}>
          <Text style={styles.option}>
            {what.value}{" "}
            <Text style={[styles.description, { color: colors.placeholder }]}>
              {what.description}
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
    padding: 16,
  },
});
