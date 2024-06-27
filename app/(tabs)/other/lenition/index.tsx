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
      <Text style={styles.header}>Lenition map:</Text>
      <ul>
        <li><Text style={styles.subheader}>Px:</Text> <Text style={styles.words}>P</Text></li>
        <li><Text style={styles.subheader}>P:</Text> <Text style={styles.words}>F</Text></li>
        <li><Text style={styles.subheader}>Tx:</Text> <Text style={styles.words}>T</Text></li>
        <li><Text style={styles.subheader}>T:</Text> <Text style={styles.words}>S</Text></li>
        <li><Text style={styles.subheader}>Kx:</Text> <Text style={styles.words}>K</Text></li>
        <li><Text style={styles.subheader}>K:</Text> <Text style={styles.words}>H</Text></li>
        <li><Text style={styles.subheader}>Ts:</Text> <Text style={styles.words}>S</Text></li>
        <li><Text style={styles.subheader}>':</Text> <Text style={styles.words}>Disappears (except before psuedovowel)</Text></li>
        <li><Text style={styles.subheader}>Leniting prefixes:</Text> <Text style={styles.words}>me+, pxe+, ay+, pe+</Text></li>
        <li><Text style={styles.subheader}>Leniting adpositions:</Text> <Text style={styles.words}>fpi, ìlä, lisre, mì, nuä, pxisre, ro, sko, sre, wä</Text></li>
      </ul>
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
