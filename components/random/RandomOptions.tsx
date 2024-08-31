import { Accordion } from "@/components/common/Accordion";
import { FilterExpressionBuilderList } from "@/components/common/FilterExpressionBuilderList";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import type { NumericString } from "@/types/common";
import type { FilterExpressionBuilderValue } from "@/types/list";

type RandomOptionsProps = {
  numWords: NumericString;
  updateNumWords: (num: NumericString) => void;
  filters: FilterExpressionBuilderValue[];
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, filter: FilterExpressionBuilderValue) => void;
  incomplete: boolean;
};

export function RandomOptions(props: RandomOptionsProps) {
  const { numWords, updateNumWords, filters, add, remove, update, incomplete } =
    props;
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <Accordion
      closedContent={<Text>{ui.random.randomOptions}</Text>}
      openedContent={
        <View style={{ paddingTop: 4 }}>
          <NumericTextInput
            placeholder={`${ui.random.numWords} (1-100)`}
            onChangeText={updateNumWords}
            value={numWords}
            autoFocus
          />
          <FilterExpressionBuilderList
            filters={filters}
            add={add}
            remove={remove}
            update={update}
            disabled={incomplete}
            mode="random"
          />
        </View>
      }
    />
  );
}
