import { Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FlatList, StyleSheet } from "react-native";

export default function CameronScreen() {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].cameronWords;

  return (
    <View style={styles.container}>
      <FlatList
        data={ui.data}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.subheader}>{item.key}</Text>
                <Text style={styles.words}>{item.value}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    paddingVertical: 8,
  },
  col: {
    gap: 8,
  },
  subheader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  words: {
    fontSize: 16,
    lineHeight: 32,
  },
});
