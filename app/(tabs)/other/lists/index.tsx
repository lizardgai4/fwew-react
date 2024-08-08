import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function ListsScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { lists } = i18n[appLanguage];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Link href="/(tabs)/other/lists/cameron">
          <CardView style={styles.card}>
            <Text style={styles.text}>{lists.cameron}</Text>
            <ItalicText>{lists.cameron}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists/homonyms">
          <CardView style={styles.card}>
            <Text style={styles.text}>{lists.homonyms}</Text>
            <ItalicText>{lists.homonyms}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists/multi-ipa">
          <CardView style={styles.card}>
            <Text style={styles.text}>{lists.multi_ipa}</Text>
            <ItalicText>{lists.multi_ipa}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists/oddballs">
          <CardView style={styles.card}>
            <Text style={styles.text}>{lists.oddballs}</Text>
            <ItalicText>{lists.oddballs}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists/profanity">
          <CardView style={styles.card}>
            <Text style={styles.text}>{lists.profanity}</Text>
            <ItalicText>{lists.profanity}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists/that">
          <CardView style={styles.card}>
            <Text style={styles.text}>{lists.that}</Text>
            <ItalicText>{lists.that}</ItalicText>
          </CardView>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    padding: 16,
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
