import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useStats } from "@/hooks/useStats";
import { Text, View } from "@/components/common/Themed";
import { ScrollView, StyleSheet } from "react-native"
import { Table, Row } from '@/components/common/Themed';

export default function StatsScreen() {
  const {
    wordCount,
    phonemeGrid,
    clusterMap,
    loading,
  } = useStats();
  const { appLanguage } = useAppLanguageContext();
  //const { names } = i18n[appLanguage];
  const widthPercentage = "80%";

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignSelf: "center",
      alignItems: 'stretch',
      width: "80%",
      maxWidth: 500,
      gap: 32,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subheader: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    words: {
      fontSize: 16,
    },
    phonemeTable: {
      width: 200,
      alignSelf: 'center'
    },
    clusterTable: {
      width: 100,
      alignSelf: 'center'
    }
  });

  return (
    <ScrollView>
      <View style={styles.container} >
        <Text style={styles.header}>{wordCount}</Text>
        <View style={styles.phonemeTable} >
          <Table>
            {phonemeGrid.map((row, index) => (
              <Row data={row} key={'a'+index.toString()} />
            ))}
          </Table>
        </View>
        <Text style={styles.subheader}>Clusters:</Text>
        <View style={styles.clusterTable} >
          <Table>
            {clusterMap.map((row, index) => (
              <Row data={row} key={'b'+index.toString()}/>
            ))}
          </Table>
        </View>
      </View>
    </ScrollView>
  );
}
