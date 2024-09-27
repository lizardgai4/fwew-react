import { useThemeNameContext } from "@/context/ThemeNameContext";
import { ReefMe } from "@/lib/dialect";
import { getColorExtension, getThemedComponents } from "@/themes";
import type { Dialect } from "@/types/common";
import type { Word } from "fwew.js";
import { StyleSheet, useColorScheme, View } from "react-native";

type ResultOverviewProps = {
  dialect: Dialect;
  word: Word;
  local: string;
};

export function ResultOverview({ dialect, word, local }: ResultOverviewProps) {
  const forestNavi = word.Navi;
  const { reefNavi } = ReefMe(word.IPA, word.Navi);
  const colorScheme = useColorScheme();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorScheme ?? "light"];
  const Themed = getThemedComponents(themeName);

  return (
    <View style={styles.closedContainer}>
      <Themed.Text style={styles.navi}>
        {dialect === "reef" ? reefNavi : forestNavi}
      </Themed.Text>
      <View
        style={[styles.posContainer, { backgroundColor: colors.innerCard }]}
      >
        <Themed.MonoText style={styles.pos}>
          {word.PartOfSpeech}
        </Themed.MonoText>
      </View>
      <Themed.Text style={styles.local} numberOfLines={1}>
        {local}
      </Themed.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  closedContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "88%",
    gap: 16,
  },
  navi: {
    fontSize: 24,
  },
  posContainer: {
    padding: 4,
    borderRadius: 4,
  },
  pos: {
    fontSize: 16,
  },
  local: {
    flex: 1,
    fontSize: 18,
  },
});
