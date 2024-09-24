import { DialectDisplay, Dialects } from "@/constants/Dialects";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Accordion } from "../common/Accordion";
import { OptionItem } from "../common/OptionItem";
import { Text } from "../common/Themed";

export function DialectSelect() {
  const { dialect, saveDialect } = useDialectContext();
  const { appLanguage } = useAppLanguageContext();
  const ui = getUI(appLanguage, dialect);
  const theme = useTheme();

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <View
            style={[styles.icon, { backgroundColor: theme.colors.primary }]}
          >
            <Text style={styles.value}>{DialectDisplay[dialect].abbr}</Text>
          </View>
          <Text style={styles.value}>{ui.names.dialect}</Text>
        </View>
      }
      openedContent={
        <View style={styles.contentContainer}>
          {Dialects.map((d, i) => (
            <View key={`sd_${i}`}>
              <OptionItem
                icon={<Text style={[styles.icon, styles.value]}>{d.abbr}</Text>}
                value={d.name}
                selected={dialect === d.value}
                onSelect={() => saveDialect(d.value)}
              />
            </View>
          ))}
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
  contentContainer: {
    padding: 16,
    paddingTop: 0,
  },
  icon: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
    borderRadius: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
