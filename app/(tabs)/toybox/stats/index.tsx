import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { useStats } from "@/hooks/useStats";
import { StyleSheet } from "react-native";

function makeTableHTML(myArray: string[][]) {
  var result = "<table border=1>";
  for(var i=0; i<myArray.length; i++) {
      result += "<tr>";
      for(var j=0; j<myArray[i].length; j++){
          result += "<td>"+myArray[i][j]+"</td>";
      }
      result += "</tr>";
  }
  result += "</table>";

  return result;
}

export default function StatsScreen() {
  const {
    phonemeGrid,
    clusterMap,
    loading,
  } = useStats();
  const { appLanguage } = useAppLanguageContext();
  const { names } = i18n[appLanguage];

  const phonemes = makeTableHTML(phonemeGrid)

  return (
    <View style={styles.container}>
      phonemes
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
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
