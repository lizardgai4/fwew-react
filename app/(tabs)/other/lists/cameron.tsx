import { Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FlatList, StyleSheet } from "react-native";
import { reefReplacements } from "@/constants/Cameron"
import { useDialectContext } from "@/context/DialectContext";

export default function CameronScreen() {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].cameronWords;
  const { dialect } = useDialectContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={ui.data}
        renderItem={({ item }) => {
          let newValue = item.value
          if (dialect === "reef") {
            newValue = ""
            let start = true
            for (let a of item.value.split(", ", 100)) {
              if (!start) {
                newValue = newValue.concat(", ")
              }
              start = false
              if (reefReplacements.has(a)) {
                newValue = newValue.concat(reefReplacements.get(a)!); // non-null assertion
              } else {
                newValue = newValue.concat(a);
              }
            }
            
          }
          return (
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.subheader}>{item.key}</Text>
                <Text style={styles.words}>{newValue}</Text>
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
