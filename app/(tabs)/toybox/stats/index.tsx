import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function ListsScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { names } = i18n[appLanguage];

  return (
    <View style={styles.container}>
      <Link href="/(tabs)/toybox/stats">
        <CardView style={styles.card}>
          <Text style={styles.text}>{names.single}</Text>
          <ItalicText>Neytiri</ItalicText>
        </CardView>
      </Link>
      <Link href="/(tabs)/toybox/stats">
        <CardView style={styles.card}>
          <Text style={styles.text}>{names.full}</Text>
          <ItalicText>Neytiri te Tskaha Mo'at'ite</ItalicText>
        </CardView>
      </Link>
      <Link href="/(tabs)/toybox/stats">
        <CardView style={styles.card}>
          <Text style={styles.text}>{names.alu}</Text>
          <ItalicText>Neytiri alu Taronyu Teyluä</ItalicText>
        </CardView>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  card: {
    padding: 32,
    width: 256,
    height: 128,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  text: {
    fontSize: 24,
  },
});
