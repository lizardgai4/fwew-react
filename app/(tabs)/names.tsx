import { View } from "@/components/Themed";
import { NameAlu } from "@/components/names/NameAlu";
import { StyleSheet } from "react-native";

export default function NamesScreen() {
  return (
    <View style={styles.container}>
      <NameAlu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
