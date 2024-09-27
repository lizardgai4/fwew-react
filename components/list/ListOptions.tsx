import { Accordion } from "@/components/common/Accordion";
import { FilterExpressionBuilderList } from "@/components/common/FilterExpressionBuilderList";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import type { FilterExpressionBuilderValue } from "@/types/list";

type ListOptionsProps = {
  filters: FilterExpressionBuilderValue[];
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, filter: FilterExpressionBuilderValue) => void;
  incomplete: boolean;
};

export function ListOptions(props: ListOptionsProps) {
  const { filters, add, remove, update, incomplete } = props;
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { list } = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <Accordion
      initiallyOpen
      closedContent={<Themed.Text>{list.listOptions}</Themed.Text>}
      openedContent={
        <FilterExpressionBuilderList
          filters={filters}
          add={add}
          remove={remove}
          update={update}
          disabled={incomplete}
          mode="list"
        />
      }
    />
  );
}
