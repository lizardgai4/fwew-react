import { View } from "@/components/Themed";
import { NameFull } from "@/components/names/NameFull";
import { StyleSheet } from "react-native";

export default function NamesScreen() {
  return (
    <View style={styles.container}>
      <NameFull />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
