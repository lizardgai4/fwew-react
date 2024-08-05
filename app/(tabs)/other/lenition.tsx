import { BoldText, MonoText } from "@/components/common/StyledText";
import { Text, View } from "@/components/common/Themed";
import { ListResults } from "@/components/list/ListResults";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useList } from "@/hooks/useList";
import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function LenitionScreen() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <LenitionTable />
      <LenPreList />
      <LenAdpList />
    </ScrollView>
  );
}

function LenitionTable() {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].lenition;

  const lenitionData = [
    { key: "Kx", value: "⇾ K" },
    { key: "Px", value: "⇾ P" },
    { key: "Tx", value: "⇾ T" },
    { key: "K ", value: "⇾ H" },
    { key: "P ", value: "⇾ F" },
    { key: "T ", value: "⇾ S" },
    { key: "Ts", value: "⇾ S" },
    { key: "' ", value: `⇾ ${ui.glottalStop}` },
  ];

  return (
    <View>
      {lenitionData.map(({ key, value }, i) => (
        <View key={`lt_r_${i}`} style={styles.lenitionRow}>
          <MonoText style={styles.lenitionKey}>{key}</MonoText>
          <MonoText style={styles.lenitionValue}>{value}</MonoText>
        </View>
      ))}
    </View>
  );
}

function LenPreList() {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].lenition;

  const lenPrefixes = [
    "me+",
    "pxe+",
    "ay+",
    "fìme+",
    "fìpxe+",
    "fay+",
    "tsame+",
    "tsapxe+",
    "tsay+",
    "fray+",
    "pe+",
    "pay+",
  ];

  return (
    <View style={styles.container}>
      <BoldText style={styles.header}>{ui.lenitingPrefixes}</BoldText>
      <Text style={styles.prefixText}>{lenPrefixes.join(", ")}</Text>
    </View>
  );
}

function LenAdpList() {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].lenition;
  const { loading, execute, results } = useList();

  useEffect(() => {
    void execute("pos has adp. and word ends +");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <BoldText style={styles.header}>{ui.lenitingAdpositions}</BoldText>
      <ListResults results={results} loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  lenitionRow: {
    flexDirection: "row"
  },
  lenitionKey: {
    fontSize: 18,
    paddingVertical: 8
  },
  lenitionValue: {
    fontSize: 18,
    padding: 8
  },
  container: {
    paddingVertical: 8
  },
  header: {
    fontSize: 20,
    paddingVertical: 8,
  },
  prefixText: {
    fontSize: 18
  },
});
