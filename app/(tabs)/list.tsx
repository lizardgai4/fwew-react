import { ResultCount } from "@/components/common/ResultCount";
import { ListOptions } from "@/components/list/ListOptions";
import { ListResults } from "@/components/list/ListResults";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import { useList } from "@/hooks/useList";
import { useTheme } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function ListScreen() {
  const { filters, filterExpression, incomplete, add, remove, update } =
    useFilterExpression();
  const { loading, results, execute, cancel } = useList();
  const debounce = useDebounce();
  const { colors } = useTheme();
  const resultsVisible = filterExpression.length > 0 && results.length > 0;
  const { width } = useWindowDimensions();
  const wide = width > 720;
  const ratio =
    [
      { breakpoint: 1280, value: 3 },
      { breakpoint: 950, value: 2 },
      { breakpoint: 720, value: 1 },
    ].filter((b) => width >= b.breakpoint)[0]?.value ?? 1;

  const getData = useCallback(async () => {
    if (incomplete || filterExpression.length === 0) {
      return;
    }
    debounce(() => execute(filterExpression));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterExpression, incomplete]);

  useEffect(() => {
    void getData();
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getData]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={getData}
          colors={[colors.primary]}
        />
      }
    >
      <View
        style={[styles.container, { flexDirection: wide ? "row" : "column" }]}
      >
        <View style={{ flex: wide ? 1 : undefined }}>
          <ListOptions
            filters={filters}
            add={add}
            remove={remove}
            update={update}
            incomplete={incomplete}
          />
        </View>
        <View style={{ flex: ratio }}>
          <ResultCount
            visible={resultsVisible}
            resultCount={results.length}
            style={styles.resultCount}
          />
          <ListResults
            loading={loading}
            results={resultsVisible ? results : []}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  resultCount: {
    padding: 16,
  },
});
