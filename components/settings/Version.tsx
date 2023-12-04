import { ExternalLink } from "@/components/common/ExternalLink";
import { MonoText } from "@/components/common/StyledText";
import { Text, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import strings from "@/constants/ui/settings";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useVersion } from "@/hooks/useVersion";
import { StyleSheet, useColorScheme } from "react-native";

export function Version() {
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
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

  return (
    <>
      <Text style={styles.label}>{ui.version}</Text>
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
