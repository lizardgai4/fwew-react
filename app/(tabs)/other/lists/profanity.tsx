import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useProfanity } from "@/hooks/useProfanity";
import { useTheme } from "@react-navigation/native";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";

export default function ProfanityScreen() {
  const { results, resultCount, loading, execute } = useProfanity();
  const { colors } = useTheme();

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[colors.primary]}
        />
      }
    >
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
