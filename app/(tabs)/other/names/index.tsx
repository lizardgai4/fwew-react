import { ItalicText } from "@/components/common/StyledText";
import { GradientCardView, Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function NamesScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { names } = getUI(appLanguage, dialect);

  return (
    <View style={styles.container}>
      <Link href="/(tabs)/other/names/name-single">
        <GradientCardView style={styles.card}>
          <Text style={styles.text}>{names.single}</Text>
          <ItalicText>Neytiri</ItalicText>
        </GradientCardView>
      </Link>
      <Link href="/(tabs)/other/names/name-full">
        <GradientCardView style={styles.card}>
          <Text style={styles.text}>{names.full}</Text>
          <ItalicText>Neytiri te Tskaha Mo'at'ite</ItalicText>
        </GradientCardView>
      </Link>
      <Link href="/(tabs)/other/names/name-alu">
        <GradientCardView style={styles.card}>
          <Text style={styles.text}>{names.alu}</Text>
          <ItalicText>Neytiri alu Taronyu Teyluä</ItalicText>
        </GradientCardView>
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
