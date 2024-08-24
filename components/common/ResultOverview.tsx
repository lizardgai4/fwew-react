import Colors from "@/constants/Colors";
import { getReefNavi } from "@/lib/dialect";
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
  return (
    <View style={styles.closedContainer}>
      <Text style={styles.navi}>
        {dialect === "reef" ? getReefNavi(word) : word.Navi}
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
