import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { useStats } from "@/hooks/useStats";
import { StyleSheet } from "react-native";

function makeTableHTML(myArray: String[][]) {
  var result = "<table border=1>";
  result += "<tr><td></td><td>Onset</td><td>Nucleus</td><td>Coda</td></tr>";
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

function makeTableHTMLClusters(myArray: number[][]) {
  var cluster2 = ["p", "t", "k", "px", "tx", "kx", "m", "n", "ng", "r", "l", "w", "y"];
  var result = "<table border=1>";
  result += "<tr><td></td><td>f</td><td>s</td><td>ts</td></tr>";
  for(var i=0; i<myArray.length; i++) {
      result += "<tr><td>"+cluster2[i]+"</td>";
      for(var j=0; j<myArray[i].length; j++){
          result += "<td>"+String(myArray[i][j])+"</td>";
      }
      result += "</tr>";
  }
  result += "</table>";

  return result;
}

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
    <View style={styles.container}>
      <Text style={styles.label}>{wordCount}</Text>
      {makeTableHTML(phonemeGrid)}
      <br/>
      {makeTableHTMLClusters(clusterMap)}
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
