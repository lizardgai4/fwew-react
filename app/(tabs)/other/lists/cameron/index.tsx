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
      <View>
      <Text style={styles.header}>Cameron words:</Text>
      <ul>
        <li><Text style={styles.subheader}>A1 Names:</Text> <Text style={styles.words}>Akwey, Ateyo, Eytukan, Eywa, Mo'at, Na'vi, Newey, Neytiri, Ninat, Omatikaya, Otranyu, Rongloa, Silwanin, Tskaha, Tsu'tey, Tsumongwi</Text></li>
        <li><Text style={styles.subheader}>A2 Names:</Text> <Text style={styles.words}>Aonung, Kiri, Lo'ak, Neteyam, Ronal, Rotxo, Tonowari, Tuktirey, Tsireya</Text></li>
        <li><Text style={styles.subheader}>Nouns:</Text> <Text style={styles.words}>'itan, 'ite, atan, au *(drum)*, eyktan, i'en, Iknimaya, mikyun, ontu, seyri, tsaheylu, tsahìk, unil</Text></li>
        <li><Text style={styles.subheader}>Life:</Text> <Text style={styles.words}>Atokirina', Ikran, Palulukan, Riti, talioang, teylu, Toruk</Text></li>
        <li><Text style={styles.subheader}>Other:</Text> <Text style={styles.words}>eyk, irayo, makto, taron, te</Text></li>
      </ul>
      </View>
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
  }
});
