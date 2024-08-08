import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function OtherScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { screens } = i18n[appLanguage];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Link href="/(tabs)/other/names">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.names}</Text>
            <ItalicText>{screens.names}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.lists}</Text>
            <ItalicText>{screens.lists}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/stats">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.stats}</Text>
            <ItalicText>{screens.stats}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/valid">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.valid}</Text>
            <ItalicText>{screens.valid}</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lenition">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.lenition}</Text>
            <ItalicText>{screens.lenition}</ItalicText>
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
