import { ResultCount } from "@/components/common/ResultCount";
import { ListResults } from "@/components/list/ListResults";
import { RandomOptions } from "@/components/random/RandomOptions";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import { useRandom } from "@/hooks/useRandom";
import { NumericString } from "@/types/common";
import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function RandomScreen() {
  const [numWords, setNumWords] = useState<NumericString>("8");
  const { filters, filterExpression, incomplete, add, remove, update } =
    useFilterExpression();
  const { loading, results, execute } = useRandom();
  const debounce = useDebounce();
  const { colors } = useTheme();
  const resultsVisible = numWords.length > 0 && results.length > 0;

  const updateNumWords = (num: NumericString) => {
    if (num === "") {
      setNumWords("");
      return;
    }
    const n = +num;
    if (isNaN(n) || n < 1 || n > 100) {
      return;
    }
    setNumWords(num);
  };

  const getData = async () => {
    if (numWords.length === 0) {
      return;
    }
    if (filterExpression.length > 0 && incomplete) {
      return;
    }
    debounce(() => execute(numWords, filterExpression));
  };

  useEffect(() => {
    if (!incomplete) {
      getData();
    }
  }, [numWords, filterExpression]);

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={getData}
          colors={[colors.primary]}
        />
      }
    >
      <RandomOptions
        numWords={numWords}
        updateNumWords={updateNumWords}
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
