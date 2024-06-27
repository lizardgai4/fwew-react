import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useStats } from "@/hooks/useStats";
import { Text, View } from "@/components/common/Themed";
import { ScrollView, StyleSheet } from "react-native"

export default function StatsScreen() {
  const {
    wordCount,
    phonemeGrid,
    clusterMap,
    loading,
  } = useStats();
  const { appLanguage } = useAppLanguageContext();
  //const { names } = i18n[appLanguage];

  return (
    <ScrollView>
      <View style={styles.container} >
        <Text style={styles.header}>{wordCount}</Text>
        <table>
          <tbody>{phonemeGrid.map((row, index) => (
            <tr key={index + "aa"}>
              {row.map((cell, index2) => (
                <td key={index2 + "ab"}>
                  <Text style={styles.words}>{cell}</Text>
                </td>
              ))}
            </tr>
          ))}</tbody>
        </table>
        <Text style={styles.subheader}>Clusters:</Text>
        <table>
          <tbody>{clusterMap.map((row, index) => (
            <tr key={index + "ba"}>
              {row.map((cell, index2) => (
                <td key={index2 + "bb"}>
                  <Text style={styles.words}>{cell}</Text>
                </td>
              ))}
            </tr>
          ))}</tbody>
        </table>
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