import { BoldText } from "@/components/common/StyledText";
import { Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FlatList, StyleSheet } from "react-native";

export default function LenitionScreen() {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].lenition;

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Kx", value: "⇾ K" },
          { key: "Px", value: "⇾ P" },
          { key: "Tx", value: "⇾ T" },
          { key: "K ", value: "⇾ H" },
          { key: "P ", value: "⇾ F" },
          { key: "T ", value: "⇾ S" },
          { key: "Ts", value: "⇾ S" },
          { key: "' ", value: `⇾ ${ui.glottalStop}` },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <BoldText style={styles.lenitionHeader}>{item.key}</BoldText>
              <Text style={styles.lenitionValue}>{item.value}</Text>
            </View>
          );
        }}
      />

      <FlatList
        data={[
          { key: ui.lenitingPrefixes, value: "me+, pxe+, ay+, pe+" },
          {
            key: ui.lenitingAdpositions,
            value: "fpi, ìlä, lisre, mì, nuä, pxisre, ro, sko, sre, wä",
          },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <BoldText style={styles.lenitingText}>{item.key}</BoldText>
              <Text style={styles.lenitingText}>{item.value}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  lenitionHeader: {
    fontFamily: "monospace",
    fontSize: 18,
    paddingVertical: 8,
  },
  lenitionValue: {
    fontFamily: "monospace",
    fontSize: 18,
    padding: 8,
  },
  lenitingText: {
    fontSize: 18,
    paddingVertical: 8,
  },
});
