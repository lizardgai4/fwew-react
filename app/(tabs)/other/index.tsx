import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function OtherScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { other } = i18n[appLanguage];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Link href="/(tabs)/other/names">
          <CardView style={styles.card}>
            <Text style={styles.text}>{other.names}</Text>
            <ItalicText>{other.names}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists">
          <CardView style={styles.card}>
            <Text style={styles.text}>{other.lists}</Text>
            <ItalicText>{other.lists}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/stats">
          <CardView style={styles.card}>
            <Text style={styles.text}>{other.stats}</Text>
            <ItalicText>{other.stats}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/valid">
          <CardView style={styles.card}>
            <Text style={styles.text}>{other.valid}</Text>
            <ItalicText>{other.valid}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lenition">
          <CardView style={styles.card}>
            <Text style={styles.text}>{other.lenition}</Text>
            <ItalicText>{other.lenition}</ItalicText>
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
