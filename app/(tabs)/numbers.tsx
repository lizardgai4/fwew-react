import { NumberResultCard } from "@/components/number/NumberResultCard";
import { NumberSearchBar } from "@/components/number/NumberSearchBar";
import { useNumber } from "@/hooks/useNumber";
import { StyleSheet, View } from "react-native";

export default function NumbersScreen() {
  const [mode, toggleMode, query, result, search, clear] = useNumber();

  return (
    <View style={styles.container}>
      <NumberSearchBar
        mode={mode}
        toggleMode={toggleMode}
        query={query}
        search={search}
        clear={clear}
      />
      <NumberResultCard result={result} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
