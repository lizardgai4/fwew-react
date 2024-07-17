import { Row, Table, Text, View } from "@/components/common/Themed";
import { useStats } from "@/hooks/useStats";
import { ScrollView, StyleSheet } from "react-native";

export default function StatsScreen() {
  const { wordCount, phonemeGrid, clusterMap } = useStats();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>{wordCount}</Text>
        <View style={styles.phonemeTable}>
          <Table>
            {phonemeGrid.map((row, index) => (
              <Row data={row} key={"a" + index.toString()} />
            ))}
          </Table>
        </View>
        <Text style={styles.subheader}>Clusters:</Text>
        <View style={styles.clusterTable}>
          <Table>
            {clusterMap.map((row, index) => (
              <Row data={row} key={"b" + index.toString()} />
            ))}
          </Table>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "stretch",
    width: "80%",
    maxWidth: 500,
    gap: 32,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  words: {
    fontSize: 16,
  },
  phonemeTable: {
    width: 200,
    alignSelf: "center",
  },
  clusterTable: {
    width: 100,
    alignSelf: "center",
  },
});
