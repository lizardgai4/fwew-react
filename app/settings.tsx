import { Text, View } from "@/components/common/Themed";
import { About } from "@/components/settings/About";
import { AppLanguageSelect } from "@/components/settings/AppLanguageSelect";
import { DialectSelect } from "@/components/settings/DialectSelect";
import { ResultsLanguageSelect } from "@/components/settings/ResultsLanguageSelect";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];

  return (
    <ScrollView>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View style={styles.container}>
        <AppLanguageSelect />
        <ResultsLanguageSelect />
        <DialectSelect />
        <Text style={styles.value}>{ui.settings.about}</Text>
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
