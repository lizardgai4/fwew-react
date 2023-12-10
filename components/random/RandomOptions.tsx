import { Accordion } from "@/components/common/Accordion";
import { FilterExpressionBuilderList } from "@/components/common/FilterExpressionBuilderList";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { Text } from "@/components/common/Themed";
import strings from "@/constants/ui/random";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { NumericString } from "@/types/common";
import type { FilterExpressionBuilderValue } from "@/types/list";
import { StyleSheet } from "react-native";

type RandomOptionsProps = {
  numWords: NumericString;
  updateNumWords: (num: NumericString) => void;
  filters: FilterExpressionBuilderValue[];
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, filter: FilterExpressionBuilderValue) => void;
  incomplete: boolean;
};

export function RandomOptions({
  numWords,
  updateNumWords,
  filters,
  add,
  remove,
  update,
  incomplete,
}: RandomOptionsProps) {
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];
  return (
    <Accordion
      closedContent={<Text>{ui.randomOptions}</Text>}
      openedContent={
        <>
          <Text style={styles.label}>{ui.numWords}</Text>
          <NumericTextInput
            placeholder={"1-100"}
            onChangeText={updateNumWords}
            value={numWords}
            autoFocus
          />
          <Text style={styles.label}>{ui.where}</Text>
          <FilterExpressionBuilderList
            filters={filters}
            add={add}
            remove={remove}
            update={update}
            disabled={incomplete}
          />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  label: {
    padding: 16,
    fontWeight: "bold",
  },
});
