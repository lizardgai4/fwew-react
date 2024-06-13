import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useTheme } from "@react-navigation/native";
import { ScrollView, StyleSheet } from "react-native";

export default function CameronScreen() {
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].search;

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
    >
      <h1 style={styles.container}>"That"s in Na'vi:</h1>
      <table>
        <tbody>
        <tr>
          <td><b>Case</b></td>
          <td><b>Noun</b></td>
          <td></td>
          <td><b>Clause</b></td>
          <td><b>wrapper</b></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>proximal</td>
          <td>distal</td>
          <td>answer</td>
        </tr>
        <tr>
          <td><b>Subjective</b></td>
          <td><i>Tsaw</i></td>
          <td><i>Fwa</i></td>
          <td><i>Tsawa</i></td>
          <td><i>Teynga</i></td>
        </tr>
        <tr>
          <td><b>Agentive</b></td>
          <td><i>Tsal</i></td>
          <td><i>Fula</i></td>
          <td><i>Tsala</i></td>
          <td><i>Teyngla</i></td>
        </tr>
        <tr>
          <td><b>Patientive</b></td>
          <td><i>Tsat</i></td>
          <td><i>Futa</i></td>
          <td><i>Tsata</i></td>
          <td><i>Teyngta</i></td>
        </tr>
        <tr>
          <td><b>Genitive</b></td>
          <td><i>Tseyä</i></td>
          <td>N/A</td>
          <td>N/A</td>
          <td></td>
        </tr>
        <tr>
          <td><b>Dative</b></td>
          <td><i>Tsar</i></td>
          <td><i>Fura</i></td>
          <td><i>Tsara</i></td>
          <td></td>
        </tr>
        <tr>
          <td><b>Topical</b></td>
          <td><i>Tsari</i></td>
          <td><i>Furia</i></td>
          <td><i>Tsaria</i></td>
          <td></td>
        </tr>
        </tbody>
      </table>
      
      <table>
      <tbody>
        <tr>
          <td><i>tsa-</i></td>
          <td>prefix</td>
          <td>that</td>
        </tr>
        <tr>
          <td><i>tsa'u</i></td>
          <td>n.</td>
          <td>that (thing)</td>
        </tr>
        <tr>
          <td><i>tsakem</i></td>
          <td>n.</td>
          <td>that (action)</td>
        </tr>
        <tr>
          <td><i>fmawnta</i></td>
          <td>sbd.</td>
          <td>that news</td>
        </tr>
        <tr>
          <td><i>fayluta</i></td>
          <td>sbd.</td>
          <td>these words</td>
        </tr>
        <tr>
          <td><i>tsnì</i></td>
          <td>sbd.</td>
          <td>that (function word)</td>
        </tr>
        <tr>
          <td><i>tsonta</i></td>
          <td>conj.</td>
          <td>to (with kxìm)</td>
        </tr>
        <tr>
          <td><i>kuma/akum</i></td>
          <td>conj.</td>
          <td>that (as a result)</td>
        </tr>
        <tr>
          <td><i>a</i></td>
          <td>part.</td>
          <td>clause level attributive marker</td>
        </tr>
      </tbody>
      </table>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
