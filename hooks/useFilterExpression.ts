import strings from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FilterExpressionBuilderValue } from "@/types/list";
import { useEffect, useState } from "react";

export function useFilterExpression() {
  const [filters, setFilters] = useState<FilterExpressionBuilderValue[]>([
    { spec: "" },
  ]);

  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

  const filterExpression = filters
    .map((f) =>
      `${f.what?.value ?? ""} ${f.cond?.value ?? ""} ${f.spec}`
        .trim()
        .replace(/ +/g, " ")
    )
    .join(" and ")
    .trim();

  const incomplete =
    filterExpression.endsWith("and") ||
    filters.filter((fe) => (fe.what || fe.cond) && !fe.spec.trim()).length > 0;

  const add = () => {
    setFilters([...filters, { spec: "" }]);
  };

  const remove = (index: number) => {
    const newExpressions = [...filters];
    newExpressions.splice(index, 1);
    setFilters(newExpressions);
  };

  const update = (index: number, expression: FilterExpressionBuilderValue) => {
    const newExpressions = [...filters];
    newExpressions[index] = expression;
    setFilters(newExpressions);
  };

  useEffect(() => {
    setFilters((prev) => {
      return prev.map((e) => {
        return {
          what: e.what && {
            value: e.what.value,
            description: ui.listMenu.whatValues.filter(
              (w) => w.value === e.what?.value
            )[0]?.description,
          },
          cond: e.cond && {
            value: e.cond.value,
            description:
              e.what &&
              ui.listMenu.condValues[e.what.value].filter(
                (c) => c.value === e.cond?.value
              )[0]?.description,
          },
          spec: e.spec,
        } as FilterExpressionBuilderValue;
      });
    });
  }, [appLanguage]);

  return {
    filters,
    filterExpression,
    incomplete,
    add,
    remove,
    update,
  } as const;
}
