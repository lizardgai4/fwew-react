import { DialectDisplay, Dialects } from "@/constants/Dialects";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Accordion } from "../common/Accordion";
import { OptionItem } from "../common/OptionItem";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";

export function DialectSelect() {
  const { dialect, saveDialect } = useDialectContext();
  const { appLanguage } = useAppLanguageContext();
  const ui = getUI(appLanguage, dialect);
  const theme = useTheme();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <View
            style={[styles.icon, { backgroundColor: theme.colors.primary }]}
          >
            <Themed.Text style={styles.value}>
              {DialectDisplay[dialect].abbr}
            </Themed.Text>
          </View>
          <Themed.Text style={styles.value}>{ui.names.dialect}</Themed.Text>
        </View>
      }
      openedContent={
        <View style={styles.contentContainer}>
          {Dialects.map((d, i) => (
            <View key={`sd_${i}`}>
              <OptionItem
                icon={
                  <View style={styles.icon}>
                    <Themed.Text style={styles.value}>{d.abbr}</Themed.Text>
                  </View>
                }
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
    height: 32,
    width: 32,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginHorizontal: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
