import { Text, View } from "@/components/common/Themed";
import { ThatTable1Data, ThatTable2Data } from "@/constants/That";
import { useTheme } from "@react-navigation/native";
import { ScrollView, StyleSheet, useWindowDimensions } from "react-native";

export default function ThatScreen() {
  const { width, height } = useWindowDimensions();
  const landscape = width > height;

  if (landscape) {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThatTable1 />
          <Divider vertical />
          <ThatTable2 />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ThatTable1 />
      <Divider />
      <ThatTable2 />
    </ScrollView>
  );
}

function ThatTable1() {
  return (
    <View style={styles.thatTable1}>
      {ThatTable1Data.map((row, index) => {
        if (index === 0) {
          return <ThatTable1HeaderRow1 key={`tt1hr1_r${index}`} row={row} />;
        }
        if (index === 1) {
          return <ThatTable1HeaderRow2 key={`tt1hr2_r${index}`} row={row} />;
        }
        return <ThatTable1Row key={`tt1r_r${index}`} row={row} />;
      })}
    </View>
  );
}

function ThatTable1HeaderRow1({ row }: { row: string[] }) {
  const widths = [50, 50, 120, 0];

  return (
    <View style={styles.tableRow}>
      {row.map((col, i) => {
        return (
          <Text
            key={`tt1hr1_c${i}`}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              width: widths[i],
            }}
          >
            {col}
          </Text>
        );
      })}
    </View>
  );
}

function ThatTable1HeaderRow2({ row }: { row: string[] }) {
  const widths = [0, 110, 70, 44, 55];

  return (
    <View style={styles.tableRow}>
      {row.map((col, i) => {
        return (
          <Text
            key={`tt1hr2_c${i}`}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              width: widths[i],
            }}
          >
            {col}
          </Text>
        );
      })}
    </View>
  );
}

function ThatTable1Row({ row }: { row: string[] }) {
  return (
    <View style={styles.tableRowWithGap}>
      {row.map((col, i) => {
        if (i === 0) {
          return (
            <Text key={`tt1r_c${i}`} style={styles.table1Col1}>
              {col}
            </Text>
          );
        }
        return (
          <Text key={`tt1r_c${i}`} style={styles.table1Col}>
            {col}
          </Text>
        );
      })}
    </View>
  );
}

function Divider({ vertical }: { vertical?: boolean }) {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.text,
        height: vertical ? 360 : 1,
        width: vertical ? 1 : 360,
        alignSelf: "center",
        margin: vertical ? 32 : 0,
      }}
    />
  );
}

function ThatTable2() {
  return (
    <View style={styles.thatTable2}>
      {ThatTable2Data.map((row, index) => (
        <ThatTable2Row key={`tt2r_r${index}`} row={row} />
      ))}
    </View>
  );
}

function ThatTable2Row({ row }: { row: string[] }) {
  return (
    <View style={styles.tableRow}>
      {row.map((col, i) => {
        const widths = [100, 60, 100];
        const fontWeight = i === 0 ? "bold" : "normal";
        const fontStyle = i === 1 ? "italic" : "normal";
        return (
          <Text
            key={`tt2r_c${i}`}
            style={{
              width: widths[i],
              fontWeight,
              fontStyle,
            }}
          >
            {col}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 32,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  words: {
    fontSize: 16,
  },
  italic: {
    fontSize: 16,
    fontStyle: "italic",
  },
  thatTable1: {
    alignSelf: "center",
    padding: 16,
    paddingTop: 0,
    gap: 16,
  },
  thatTable2: {
    alignSelf: "center",
    padding: 16,
    gap: 16,
    paddingBottom: 32,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tableRowWithGap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  table1Col1: {
    fontSize: 16,
    fontWeight: "bold",
    width: 80,
  },
  table1Col: {
    width: 50,
  },
});
