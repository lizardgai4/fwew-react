import { View } from "@/components/Themed";
import { NameSingle } from "@/components/names/NameSingle";
import { StyleSheet } from "react-native";

export default function NamesScreen() {
  return (
    <View style={styles.container}>
      <NameSingle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
