import { Text, CardView } from "@/components/common/Themed";
import { reefReplacements } from "@/constants/Cameron";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { FlatList, StyleSheet, View } from "react-native";

export default function CameronScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect).cameronWords;

  return (
    <View style={styles.container}>
      <FlatList
        data={ui.data}
        contentContainerStyle={{ gap: 16, padding: 16 }}
        renderItem={({ item }) => {
          let newValue = item.value;
          if (dialect === "reef") {
            newValue = "";
            let start = true;
            for (let a of item.value.split(", ", 100)) {
              if (!start) {
                newValue = newValue.concat(", ");
              }
              start = false;
              if (reefReplacements.has(a)) {
                newValue = newValue.concat(reefReplacements.get(a)!); // non-null assertion
              } else {
                newValue = newValue.concat(a);
              }
            }
          }
          return (
            <CardView style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.subheader}>{item.key}</Text>
                <Text style={styles.words}>{newValue}</Text>
              </View>
            </CardView>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    padding: 16,
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
