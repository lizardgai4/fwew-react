import Colors from "@/constants/Colors";
import { ReefMe } from "@/lib/dialect";
import type { Dialect, Word } from "fwew.js";
import { StyleSheet, View } from "react-native";
import { MonoText } from "./StyledText";
import { Text } from "./Themed";

type ResultOverviewProps = {
  dialect: Dialect;
  word: Word;
  colors: (typeof Colors)["light"];
  local: string;
};

export function ResultOverview({
  dialect,
  word,
  colors,
  local,
}: ResultOverviewProps) {
  const forestNavi = word.Navi;
  const reefNavi = ReefMe(word.IPA)[0];

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
