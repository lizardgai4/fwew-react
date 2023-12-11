import { Accordion } from "@/components/common/Accordion";
import { FilterExpressionBuilderList } from "@/components/common/FilterExpressionBuilderList";
import { Text } from "@/components/common/Themed";
import strings from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { FilterExpressionBuilderValue } from "@/types/list";

type ListOptionsProps = {
  filters: FilterExpressionBuilderValue[];
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, filter: FilterExpressionBuilderValue) => void;
  incomplete: boolean;
};

export function ListOptions({
  filters,
  add,
  remove,
  update,
  incomplete,
}: ListOptionsProps) {
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];
  return (
    <Accordion
      closedContent={<Text>{ui.listOptions}</Text>}
      openedContent={
        <>
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
