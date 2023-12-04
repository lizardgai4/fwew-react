import { Accordion } from "@/components/Accordion";
import { Text, View } from "@/components/Themed";
import { Credits } from "@/components/settings/Credits";
import { Version } from "@/components/settings/Version";
import strings from "@/constants/ui/settings";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet } from "react-native";

export function About() {
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];
  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <Text style={styles.value}>{ui.about}</Text>
        </View>
      }
      openedContent={
        <View style={styles.expanded}>
          <Version />
          <Credits />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expanded: {
    padding: 16,
    gap: 16,
  },
});
