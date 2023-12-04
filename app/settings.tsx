import { View } from "@/components/Themed";
import { About } from "@/components/settings/About";
import { AppLanguageSelect } from "@/components/settings/AppLanguageSelect";
import { ResultsLanguageSelect } from "@/components/settings/ResultsLanguageSelect";
import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View style={styles.container}>
        <About />
        <AppLanguageSelect />
        <ResultsLanguageSelect />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
