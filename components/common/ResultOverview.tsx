import { ReefMe } from "@/lib/dialect";
import { getColorExtension } from "@/themes";
import type { Dialect } from "@/types/common";
import type { Word } from "fwew.js";
import { StyleSheet, useColorScheme, View } from "react-native";
import { MonoText } from "./StyledText";
import { Text } from "./Themed";

type ResultOverviewProps = {
  dialect: Dialect;
  word: Word;
  local: string;
};

export function ResultOverview({ dialect, word, local }: ResultOverviewProps) {
  const forestNavi = word.Navi;
  const { reefNavi } = ReefMe(word.IPA, word.Navi);
  const colorScheme = useColorScheme();
  const colorExtension = getColorExtension("fwew");
  const colors = colorExtension[colorScheme ?? "light"];

  return (
    <View style={styles.closedContainer}>
      <Text style={styles.navi}>
        {dialect === "reef" ? reefNavi : forestNavi}
      </Text>
      <View
        style={[styles.posContainer, { backgroundColor: colors.innerCard }]}
      >
        <MonoText style={styles.pos}>{word.PartOfSpeech}</MonoText>
      </View>
      <Text style={styles.local} numberOfLines={1}>
        {local}
      </Text>
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
