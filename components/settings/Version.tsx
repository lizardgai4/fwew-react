import { MonoText } from "@/components/common/StyledText";
import { CardView, Text } from "@/components/common/Themed";
import { GitDetails } from "@/components/settings/GitDetails";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useVersion } from "@/hooks/useVersion";
import { StyleSheet } from "react-native";

export function Version() {
  const version = useVersion();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];

  return (
    <>
      <Text style={styles.label}>{ui.settings.version}</Text>
      <CardView style={styles.versionContainer}>
        <CardView>
          <MonoText style={styles.text}>fwew-react</MonoText>
          <MonoText style={styles.text}>fwew-api </MonoText>
          <MonoText style={styles.text}>fwew-lib</MonoText>
          <MonoText style={styles.text}>dictionary</MonoText>
        </CardView>
        <CardView>
          <MonoText style={styles.text}>
            {version.AppVersion}{" "}
            <GitDetails
              branch={version.Branch}
              commitHash={version.CommitHash}
            />
          </MonoText>
          <MonoText style={styles.text}>{version.APIVersion}</MonoText>
          <MonoText style={styles.text}>{version.FwewVersion}</MonoText>
          <MonoText style={styles.text}>{version.DictVersion}</MonoText>
        </CardView>
      </CardView>
    </>
  );
}

const styles = StyleSheet.create({
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
