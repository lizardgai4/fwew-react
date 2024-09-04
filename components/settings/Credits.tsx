import { CardView, Text } from "@/components/common/Themed";
import credits from "@/constants/Credits";
import { getUI } from "@/constants/i18n";
import { AppLanguages } from "@/constants/Language";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { ExtendedLanguageCode } from "@/types/common";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { FlagMap } from "./Flags";

export function Credits() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  return (
    <CardView style={styles.creditsContainer}>
      <Text style={styles.label}>{ui.settings.credits}</Text>
      <Text style={styles.label}>{ui.settings.development}</Text>
      <CreditsItem names={credits.development} />
      <Text style={styles.label}>{ui.settings.design}</Text>
      <CreditsItem names={credits.design} />
      <Text style={styles.label}>{ui.settings.testing}</Text>
      <CreditsItem names={credits.testing} />
      <Text style={styles.label}>{ui.settings.translation}</Text>
      {AppLanguages.map((language, i) => {
        const names = credits.translation[language.value];
        if (names.length > 0)
          return (
            <CreditsItem
              key={`sct_${i}_${language.value}`}
              language={language.value}
              names={names}
            />
          );
      })}
    </CardView>
  );
}

function CreditsItem({
  language,
  names,
}: {
  language?: ExtendedLanguageCode;
  names: string[];
}) {
  const { colors } = useTheme();

  return (
    <CardView style={styles.creditsItemContainer}>
      <CardView>{language && FlagMap[language]}</CardView>
      <CardView style={{ flex: 1 }}>
        <CardView style={styles.creditsItemContainer}>
          {names.map((name, i) => (
            <CardView
              key={`ci_${name}_${i}`}
              style={[
                styles.textContainer,
                { backgroundColor: colors.background },
              ]}
            >
              <Text style={styles.text}>{name}</Text>
            </CardView>
          ))}
        </CardView>
      </CardView>
    </CardView>
  );
}

const styles = StyleSheet.create({
  creditsContainer: {
    paddingTop: 8,
    gap: 8,
  },
  label: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  creditsItemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  textContainer: {
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
