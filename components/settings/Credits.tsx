import { CardView, Text } from "@/components/common/Themed";
import credits from "@/constants/Credits";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export function Credits() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
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
        {names.map((name, i) => (
          <CardView
            key={`ci_${title}_${i}`}
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
