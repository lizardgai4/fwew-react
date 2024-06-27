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

const columns = [
  columnHelper.accessor("id", {
    header: () => 'ID',
    cell: (info) => info.getValue(),
  }),
];

export default function StatsScreen() {
  const {
    wordCount,
    phonemeGrid,
    clusterMap,
    loading,
  } = useStats();
  const { appLanguage } = useAppLanguageContext();
  const { names } = i18n[appLanguage];
  
  const table = useReactTable({
    data: phonemeGrid,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <ScrollView>
      <View style={styles.container} >
        <Text>{wordCount}</Text>
        <table className="phonemes">
          <tbody>{phonemeGrid.map((row) => (
            <tr>
              {row.map((cell) => (
                <td className="users-table-cell">
                  <Text>{cell}</Text>
                </td>
              ))}
            </tr>
          ))}</tbody>
        </table>
        <table className="phonemes">
          <tbody>{clusterMap.map((row) => (
            <tr>
              {row.map((cell) => (
                <td className="users-table-cell">
                  <Text>{cell}</Text>
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
});