import { ResultCount } from "@/components/common/ResultCount";
import { ListOptions } from "@/components/list/ListOptions";
import { ListResults } from "@/components/list/ListResults";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import { useList } from "@/hooks/useList";
import { FilterExpressionBuilderValue } from "@/types/list";
import { useTheme } from "@react-navigation/native";
import { Word } from "fwew.js";
import { useEffect } from "react";
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
  const resultsVisible = filterExpression.length > 0 && results.length > 0;
  const { width } = useWindowDimensions();

  const getData = () => debounce(async () => await execute(filterExpression));

  useEffect(() => {
    if (incomplete || filterExpression.length === 0) {
      return;
    }
    getData();
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterExpression, incomplete]);

  if (width > 720) {
    return (
      <ListScreenLandScape
        loading={loading}
        getData={getData}
        filters={filters}
        add={add}
        remove={remove}
        update={update}
        incomplete={incomplete}
        resultsVisible={resultsVisible}
        width={width}
        results={results}
      />
    );
  }

  return (
    <ListScreenPortrait
      loading={loading}
      getData={getData}
      filters={filters}
      add={add}
      remove={remove}
      update={update}
      incomplete={incomplete}
      resultsVisible={resultsVisible}
      width={width}
      results={results}
    />
  );
}

type Props = {
  loading: boolean;
  getData: () => void;
  filters: FilterExpressionBuilderValue[];
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, filter: FilterExpressionBuilderValue) => void;
  incomplete: boolean;
  resultsVisible: boolean;
  width: number;
  results: Word[];
};

function ListScreenPortrait(props: Props) {
  const {
    loading,
    getData,
    filters,
    add,
    remove,
    update,
    incomplete,
    resultsVisible,
    results,
  } = props;
  const theme = useTheme();

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={getData}
          colors={[theme.colors.primary]}
        />
      }
    >
      <View style={styles.containerPortroit}>
        <ListOptions
          filters={filters}
          add={add}
          remove={remove}
          update={update}
          incomplete={incomplete}
        />
        <ResultCount visible={resultsVisible} resultCount={results.length} />
        <ListResults
          loading={loading}
          results={resultsVisible ? results : []}
        />
      </View>
    </ScrollView>
  );
}

function ListScreenLandScape(props: Props) {
  const {
    loading,
    getData,
    filters,
    add,
    remove,
    update,
    incomplete,
    resultsVisible,
    width,
    results,
  } = props;
  const theme = useTheme();

  const ratio =
    [
      { breakpoint: 1280, value: 3 },
      { breakpoint: 950, value: 2 },
      { breakpoint: 720, value: 1 },
    ].filter((b) => width >= b.breakpoint)[0]?.value ?? 1;

  return (
    <View style={styles.containerLandscape}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.bottomPadded}>
          <ListOptions
            filters={filters}
            add={add}
            remove={remove}
            update={update}
            incomplete={incomplete}
          />
        </View>
      </ScrollView>
      <View style={{ flex: ratio }}>
        <ResultCount
          visible={resultsVisible}
          resultCount={results.length}
          style={styles.resultCountLandscape}
        />
        <ScrollView
          keyboardShouldPersistTaps="always"
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={getData}
              colors={[theme.colors.primary]}
            />
          }
        >
          <View style={styles.bottomPadded}>
            <ListResults
              loading={loading}
              results={resultsVisible ? results : []}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPortroit: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  containerLandscape: {
    flexDirection: "row",
    flex: 1,
    padding: 16,
    paddingBottom: 0,
    gap: 16,
  },
  resultCountLandscape: {
    padding: 16,
  },
  bottomPadded: {
    paddingBottom: 16,
  },
});
