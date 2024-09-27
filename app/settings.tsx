import { About } from "@/components/settings/About";
import { AppLanguageSelect } from "@/components/settings/AppLanguageSelect";
import { DialectSelect } from "@/components/settings/DialectSelect";
import { ResultsLanguageSelect } from "@/components/settings/ResultsLanguageSelect";
import { ThemeSelect } from "@/components/settings/ThemeSelect";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function SettingsScreen() {
  const { width } = useWindowDimensions();
  const wide = width > 720;

  const ratio =
    [
      { breakpoint: 1280, value: 3 },
      { breakpoint: 950, value: 2 },
      { breakpoint: 720, value: 1 },
    ].filter((b) => width >= b.breakpoint)[0]?.value ?? 1;

  return (
    <ScrollView>
      <StatusBar style="light" />
      <View
        style={[
          styles.container,
          {
            flexDirection: wide ? "row" : "column",
            justifyContent: wide ? "center" : undefined,
          },
        ]}
      >
        <View style={{ flex: 1, gap: 16 }}>
          <AppLanguageSelect />
          <ResultsLanguageSelect />
          <DialectSelect />
          <ThemeSelect />
        </View>
        <View style={{ flex: ratio, gap: 16 }}>
          <About />
        </View>
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
