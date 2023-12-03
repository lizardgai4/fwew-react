import { Accordion } from "@/components/Accordion";
import { ExternalLink } from "@/components/ExternalLink";
import { OptionItem } from "@/components/OptionItem";
import { MonoText } from "@/components/StyledText";
import { Text, View } from "@/components/Themed";
import { FlagMap } from "@/components/settings/Flags";
import Colors from "@/constants/Colors";
import strings, {
  AppLanguages,
  ExtendedLanguageCode,
  ResultsLanguages,
} from "@/constants/ui/settings";
import { useVersion } from "@/hooks/useVersion";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, ScrollView, StyleSheet, useColorScheme } from "react-native";

export default function ModalScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        <About />
        <AppLanguageSelect />
        <ResultsLanguageSelect />
      </View>
    </ScrollView>
  );
}

function About() {
  const {
    AppVersion,
    Branch,
    CommitHash,
    APIVersion,
    FwewVersion,
    DictVersion,
  } = useVersion();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <Text style={styles.value}>{strings.en.about}</Text>
        </View>
      }
      openedContent={
        <View style={styles.expanded}>
          <Text style={styles.label}>{strings.en.version}</Text>
          <View style={styles.versionContainer}>
            <View>
              <MonoText style={styles.text}>fwew-react</MonoText>
              <MonoText style={styles.text}>fwew-api </MonoText>
              <MonoText style={styles.text}>fwew-lib</MonoText>
              <MonoText style={styles.text}>dictionary</MonoText>
            </View>
            <View>
              <MonoText style={styles.text}>
                {AppVersion} (
                <ExternalLink
                  href={`https://github.com/corscheid/fwew-react/tree/next`}
                >
                  <MonoText style={{ color: colors.link }}>
                    {Branch} {CommitHash?.substring(0, 7)}
                  </MonoText>
                </ExternalLink>
                )
              </MonoText>
              <MonoText style={styles.text}>{APIVersion}</MonoText>
              <MonoText style={styles.text}>{FwewVersion}</MonoText>
              <MonoText style={styles.text}>{DictVersion}</MonoText>
            </View>
          </View>
        </View>
      }
    />
  );
}

function AppLanguageSelect() {
  const [appLanguage, setAppLanguage] = useState<ExtendedLanguageCode>("en");

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          {FlagMap[appLanguage]}
          <Text style={styles.value}>{strings.en.appLanguage}</Text>
        </View>
      }
      openedContent={
        <>
          {AppLanguages.map((language, i) => (
            <OptionItem
              key={i}
              icon={FlagMap[language.value]}
              value={language.label}
              selected={appLanguage === language.value}
              onSelect={() => setAppLanguage(language.value)}
            />
          ))}
        </>
      }
    />
  );
}

function ResultsLanguageSelect() {
  const [resultsLanguage, setResultsLanguage] =
    useState<ExtendedLanguageCode>("en");

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          {FlagMap[resultsLanguage]}
          <Text style={styles.value}>{strings.en.resultsLanguage}</Text>
        </View>
      }
      openedContent={
        <>
          {ResultsLanguages.map((language, i) => (
            <OptionItem
              key={i}
              icon={FlagMap[language.value]}
              value={language.label}
              selected={resultsLanguage === language.value}
              onSelect={() => setResultsLanguage(language.value)}
            />
          ))}
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
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
  },
  versionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  label: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
});
