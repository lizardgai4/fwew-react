import stringsList from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FilterExpressionBuilderValue } from "@/types/list";
import { StyleSheet } from "react-native";
import { Button } from "./Button";
import { FilterExpressionBuilder } from "./FilterExpressionBuilder";
import { SmallButton } from "./SmallButton";
import { Text, View } from "./Themed";

type FilterExpressionBuilderListProps = {
  filters: FilterExpressionBuilderValue[];
  addFilterExpression: () => void;
  removeFilterExpression: (index: number) => void;
  updateFilterExpression: (
    index: number,
    expression: FilterExpressionBuilderValue
  ) => void;
  disabled: boolean;
};

export function FilterExpressionBuilderList({
  filters,
  addFilterExpression,
  removeFilterExpression,
  updateFilterExpression,
  disabled,
}: FilterExpressionBuilderListProps) {
  const { appLanguage } = useAppLanguageContext();
  const uiList = stringsList[appLanguage];
  return (
    <>
      {filters.map((_, i) => (
        <View key={`feb_${i}`}>
          {i > 0 && <Text style={styles.label}>{uiList.and}</Text>}
          <SmallButton onPress={() => removeFilterExpression(i)} icon="trash" />
          <FilterExpressionBuilder
            value={filters[i]}
            onChange={(value) => updateFilterExpression(i, value)}
          />
        </View>
      ))}
      <Button onPress={addFilterExpression} icon="plus" disabled={disabled} />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    padding: 16,
    fontWeight: "bold",
  },
});
