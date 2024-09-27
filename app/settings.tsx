import { About } from "@/components/settings/About";
import { AppLanguageSelect } from "@/components/settings/AppLanguageSelect";
import { DialectSelect } from "@/components/settings/DialectSelect";
import { ResultsLanguageSelect } from "@/components/settings/ResultsLanguageSelect";
import { ThemeSelect } from "@/components/settings/ThemeSelect";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";

export default function SettingsScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <ScrollView>
      <StatusBar style="light" />
      <View style={styles.container}>
        <AppLanguageSelect />
        <ResultsLanguageSelect />
        <DialectSelect />
        <ThemeSelect />
        <Themed.Text style={styles.value}>{ui.settings.about}</Themed.Text>
        <About />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
