import { ResultCount } from "@/components/common/ResultCount";
import { ListOptions } from "@/components/list/ListOptions";
import { ListResults } from "@/components/list/ListResults";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import { useList } from "@/hooks/useList";
import { useEffect } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function ListScreen() {
  const { filters, filterExpression, incomplete, add, remove, update } =
    useFilterExpression();
  const { loading, results, execute } = useList();
  const debounce = useDebounce();
  const resultsVisible = filterExpression.length > 0 && results.length > 0;

  const getData = async () => {
    if (filterExpression.length === 0) {
      return;
    }
    if (incomplete) {
      return;
    }
    debounce(() => execute(filterExpression));
  };

  useEffect(() => {
    getData();
  }, [filterExpression]);

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getData} />
      }
    >
      <ListOptions
        filters={filters}
        add={add}
        remove={remove}
        update={update}
        incomplete={incomplete}
      />
      <ResultCount
        visible={resultsVisible}
        resultCount={results.length}
        style={styles.resultCount}
      />
      <ListResults loading={loading} results={resultsVisible ? results : []} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  resultCount: {
    padding: 16,
  },
});
