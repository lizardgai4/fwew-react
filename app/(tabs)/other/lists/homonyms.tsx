import { ResultCount } from "@/components/common/ResultCount";
import { NonSearchResults } from "@/components/multi_ipa/MultiIPA";
import { useHomonyms } from "@/hooks/useHomonyms";
import { useTheme } from "@react-navigation/native";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function HomonymsScreen() {
  const { results, resultCount, loading, execute } = useHomonyms();
  const { colors } = useTheme();

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[colors.primary]}
        />
      }
    >
      <ResultCount visible={resultCount > 0} resultCount={resultCount} />
      <NonSearchResults loading={loading} results={results} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
