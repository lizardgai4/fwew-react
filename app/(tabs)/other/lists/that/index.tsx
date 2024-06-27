import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useTheme } from "@react-navigation/native";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/common/Themed";

export default function CameronScreen() {
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].search;

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
    >
      <Text style={styles.header}>"That"s in Na'vi:</Text>
      <table>
        <tbody>
        <tr>
          <td><Text style={styles.subheader}>Case</Text></td>
          <td><Text style={styles.subheader}>Noun</Text></td>
          <td></td>
          <td><Text style={styles.subheader}>Clause</Text></td>
          <td><Text style={styles.subheader}>wrapper</Text></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td><Text style={styles.words}>proximal</Text></td>
          <td><Text style={styles.words}>distal</Text></td>
          <td><Text style={styles.words}>answer</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.subheader}>Subjective</Text></td>
          <td><Text style={styles.italic}>Tsaw</Text></td>
          <td><Text style={styles.italic}>Fwa</Text></td>
          <td><Text style={styles.italic}>Tsawa</Text></td>
          <td><Text style={styles.italic}>Teynga</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.subheader}>Agentive</Text></td>
          <td><Text style={styles.italic}>Tsal</Text></td>
          <td><Text style={styles.italic}>Fula</Text></td>
          <td><Text style={styles.italic}>Tsala</Text></td>
          <td><Text style={styles.italic}>Teyngla</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.subheader}>Patientive</Text></td>
          <td><Text style={styles.italic}>Tsat</Text></td>
          <td><Text style={styles.italic}>Futa</Text></td>
          <td><Text style={styles.italic}>Tsata</Text></td>
          <td><Text style={styles.italic}>Teyngta</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.subheader}>Genitive</Text></td>
          <td><Text style={styles.italic}>Tseyä</Text></td>
          <td><Text style={styles.words}>N/A</Text></td>
          <td><Text style={styles.words}>N/A</Text></td>
          <td></td>
        </tr>
        <tr>
          <td><Text style={styles.subheader}>Dative</Text></td>
          <td><Text style={styles.italic}>Tsar</Text></td>
          <td><Text style={styles.italic}>Fura</Text></td>
          <td><Text style={styles.italic}>Tsara</Text></td>
          <td></td>
        </tr>
        <tr>
          <td><Text style={styles.subheader}>Topical</Text></td>
          <td><Text style={styles.italic}>Tsari</Text></td>
          <td><Text style={styles.italic}>Furia</Text></td>
          <td><Text style={styles.italic}>Tsaria</Text></td>
          <td></td>
        </tr>
        </tbody>
      </table>
      
      <table>
      <tbody>
        <tr>
          <td><Text style={styles.italic}>tsa-</Text></td>
          <td><Text style={styles.words}>prefix</Text></td>
          <td><Text style={styles.words}>that</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.italic}>tsa'u</Text></td>
          <td><Text style={styles.words}>n.</Text></td>
          <td><Text style={styles.words}>that (thing)</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.italic}>tsakem</Text></td>
          <td><Text style={styles.words}>n.</Text></td>
          <td><Text style={styles.words}>that (action)</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.italic}>fmawnta</Text></td>
          <td><Text style={styles.words}>sbd.</Text></td>
          <td><Text style={styles.words}>that news</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.italic}>fayluta</Text></td>
          <td><Text style={styles.words}>sbd.</Text></td>
          <td><Text style={styles.words}>these words</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.italic}>tsnì</Text></td>
          <td><Text style={styles.words}>sbd.</Text></td>
          <td><Text style={styles.words}>that (function word)</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.italic}>tsonta</Text></td>
          <td><Text style={styles.words}>conj.</Text></td>
          <td><Text style={styles.words}>to (with kxìm)</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.italic}>kuma/akum</Text></td>
          <td><Text style={styles.words}>conj.</Text></td>
          <td><Text style={styles.words}>that (as a result)</Text></td>
        </tr>
        <tr>
          <td><Text style={styles.italic}>a</Text></td>
          <td><Text style={styles.words}>part.</Text></td>
          <td><Text style={styles.words}>clause level attributive marker</Text></td>
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
  }
});