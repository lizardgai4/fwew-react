import { Accordion } from "@/components/common/Accordion";
import { Text, View } from "@/components/common/Themed";
import { Credits } from "@/components/settings/Credits";
import { Version } from "@/components/settings/Version";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet } from "react-native";

export function About() {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];
  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <Text style={styles.value}>{ui.settings.about}</Text>
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
