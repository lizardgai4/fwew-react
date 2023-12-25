import { BoldText } from "@/components/common/StyledText";
import { CardView, Text } from "@/components/common/Themed";
import credits from "@/constants/Credits";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export function Credits() {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];
  return (
    <CardView style={styles.creditsContainer}>
      <Text style={styles.label}>{ui.settings.credits}</Text>
      <CreditsItem
        title={ui.settings.development}
        names={credits.development}
      />
      <CreditsItem title={ui.settings.design} names={credits.design} />
      <CreditsItem title={ui.settings.testing} names={credits.testing} />
      <CreditsItem
        title={ui.settings.translation}
        names={credits.translation}
      />
    </CardView>
  );
}

function CreditsItem({ title, names }: { title: string; names: string[] }) {
  const { colors } = useTheme();

  return (
    <CardView>
      <Text style={styles.label}>{title}</Text>
      <CardView style={styles.creditsItemContainer}>
        {names.map((name) => (
          <Text style={[styles.text, { backgroundColor: colors.background }]}>
            {name}
          </Text>
        ))}
      </CardView>
    </CardView>
  );
}

const styles = StyleSheet.create({
  creditsContainer: {
    paddingTop: 8,
    gap: 8,
  },
  creditsItemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  label: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    padding: 8,
    borderRadius: 8,
  },
});
