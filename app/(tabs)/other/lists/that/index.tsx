import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useTheme } from "@react-navigation/native";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View, Table, Row } from "@/components/common/Themed";

export default function CameronScreen() {
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].search;

  const thatTable1 = [
    ["Case", "Noun", "", "Clause", "Wrapper"],
    ["", "", "proximal", "distal", "answer"],
    ["Subjective", "Tsaw", "Fwa", "Tsawa", "Teynga"],
    ["Agentive", "Tsal", "Fula", "Tsala", "Teyngla"],
    ["Patientive", "Tsat", "Futa", "Tsata", "Teyngta"],
    ["Genitive", "Tseyä", "N/A", "N/A", ""],
    ["Dative", "Tsar", "Fura", "Tsara", ""],
    ["Topical", "Tsari", "Furia", "Tsaria", ""],
  ];

  const thatTable2 = [
    ["tsa-", "prefix", "that"],
    ["tsa'u", "n.", "that (thing)"],
    ["tsakem", "n.", "that (action)"],
    ["fmawnta", "sbd.", "that news"],
    ["fayluta", "sbd.", "these words"],
    ["tsnì", "sbd.", "that (function word)"],
    ["tsonta", "conj.", "to (with kxìm)"],
    ["kuma/akum", "conj.", "that (as a result)"],
    ["a", "part.", "clause level attributive marker"],
  ];

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
    >
      <Text style={styles.header}>"That"s in Na'vi:</Text>
      <View style={styles.thatTable1} >
        <Table>
          {thatTable1.map((row, index) => (
            <Row data={row} flexArr={[3,2,2,2,2]} key={'c'+index.toString()} />
          ))}
        </Table>
      </View>

      <View style={styles.thatTable2} >
        <Table>
          {thatTable2.map((row, index) => (
            <Row data={row} flexArr={[7,4,15]} key={'c'+index.toString()} />
          ))}
        </Table>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 32,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  words: {
    fontSize: 16,
  },
  italic: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  thatTable1: {
    width: 350,
    alignSelf: 'center',
    margin: 20,
  },
  thatTable2: {
    width: 350,
    alignSelf: 'center'
  },
});