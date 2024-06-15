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
      <h1 style={styles.container}>Lenition map:</h1>
      <ul>
        <li><b>Px:</b> P</li>
        <li><b>P:</b> F</li>
        <li><b>Tx:</b> T</li>
        <li><b>T:</b> S</li>
        <li><b>Kx:</b> K</li>
        <li><b>K:</b> H</li>
        <li><b>Ts:</b> S</li>
        <li><b>':</b> Disappears (except before psuedovowel)</li>
        <li><b>Leniting prefixes:</b> me+, pxe+, ay+, pe+</li>
        <li><b>Leniting adpositions:</b> fpi, ìlä, lisre, mì, nuä, pxisre, ro, sko, sre, wä</li>
      </ul>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
