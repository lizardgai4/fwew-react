import { NumberResultCard } from "@/components/number/NumberResultCard";
import { NumberSearchBar } from "@/components/number/NumberSearchBar";
import { useNumber } from "@/hooks/useNumber";
import { StyleSheet, useWindowDimensions, View } from "react-native";

export default function NumbersScreen() {
  const [mode, toggleMode, query, result, search, clear] = useNumber();
  const { width } = useWindowDimensions();
  const wide = width > 720;

  const ratio =
    [
      { breakpoint: 1280, value: 3 },
      { breakpoint: 950, value: 2 },
      { breakpoint: 720, value: 1 },
    ].filter((b) => width >= b.breakpoint)[0]?.value ?? 1;

  return (
    <View
      style={[styles.container, { flexDirection: wide ? "row" : "column" }]}
    >
      <View style={{ flex: wide ? 1 : undefined }}>
        <NumberSearchBar
          mode={mode}
          toggleMode={toggleMode}
          query={query}
          search={search}
          clear={clear}
        />
      </View>
      <View style={{ flex: ratio }}>
        <NumberResultCard result={result} />
      </View>
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
