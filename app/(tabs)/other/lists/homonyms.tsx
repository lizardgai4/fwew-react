import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useHomonyms } from "@/hooks/useHomonyms";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomonymsScreen() {
  const { results, resultCount, loading } = useHomonyms();

  return (
    <ScrollView>
      <View style={styles.container}>
        <ResultCount visible={resultCount > 0} resultCount={resultCount} />
        <FwewSearchResults loading={loading} results={results} />
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
