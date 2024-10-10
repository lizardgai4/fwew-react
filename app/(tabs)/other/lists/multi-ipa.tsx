import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useMultiIPA } from "@/hooks/useMultiIPA";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function MultiIPAScreen() {
  const { results, resultCount, loading } = useMultiIPA();
  const { width } = useWindowDimensions();
  const wide = width > 720;

  if (wide) {
    return (
      <View>
        <ResultCount visible={resultCount > 0} resultCount={resultCount} />
        <FwewSearchResults loading={loading} results={results} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <View style={styles.container}>
          <ResultCount visible={resultCount > 0} resultCount={resultCount} />
          <FwewSearchResults loading={loading} results={results} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
