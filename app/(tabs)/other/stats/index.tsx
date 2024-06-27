import { ItalicText } from "@/components/common/StyledText";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { useStats } from "@/hooks/useStats";
import { Text, View } from "@/components/common/Themed";
import { ScrollView, StyleSheet } from "react-native"
import { useTheme } from "@react-navigation/native";
import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"

const { colors } = useTheme();
const columnHelper = createColumnHelper<string>();

export default function StatsScreen() {
  const {
    wordCount,
    phonemeGrid,
    clusterMap,
    loading,
  } = useStats();
  const { appLanguage } = useAppLanguageContext();
  const { names } = i18n[appLanguage];

  return (
    <ScrollView>
      <View style={styles.container} >
        <Text style={styles.header}>{wordCount}</Text>
        <table className="phonemes">
          <tbody>{phonemeGrid.map((row) => (
            <tr>
              {row.map((cell) => (
                <td className="users-table-cell">
                  <Text style={styles.words}>{cell}</Text>
                </td>
              ))}
            </tr>
          ))}</tbody>
        </table>
        <Text style={styles.subheader}>Clusters:</Text>
        <table className="phonemes">
          <tbody>{clusterMap.map((row) => (
            <tr>
              {row.map((cell) => (
                <td className="users-table-cell">
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