import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FilterExpressionBuilderValue } from "@/types/list";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Button } from "./Button";
import { FilterExpressionBuilder } from "./FilterExpressionBuilder";
import { SmallButton } from "./SmallButton";
import { CardView, Text, View } from "./Themed";

type FilterExpressionBuilderListProps = {
  filters: FilterExpressionBuilderValue[];
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, expression: FilterExpressionBuilderValue) => void;
  disabled: boolean;
  mode?: "list" | "random";
};

export function FilterExpressionBuilderList(
  props: FilterExpressionBuilderListProps
) {
  const { filters, add, remove, update, disabled, mode = "list" } = props;
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { list, random } = i18n[appLanguage];

  const getHeaderText = () => {
    switch (mode) {
      case "list":
        return "";
      case "random":
        return random.where;
      default:
        return "";
    }
  };

  return (
    <CardView>
      {filters.map((_, i) => (
        <View key={`feb_${i}`}>
          <View style={styles.febHeader}>
            <Text style={styles.label}>
              {i > 0 ? list.and : getHeaderText()}
            </Text>
            <SmallButton
              onPress={() => remove(i)}
              icon="trash"
              color={colors.notification}
            />
          </View>
          <FilterExpressionBuilder
            value={filters[i]}
            onChange={(value) => update(i, value)}
          />
        </View>
      ))}
      <View style={{ paddingTop: 10 }}>
        <Button onPress={add} icon="plus" disabled={disabled} />
      </View>
    </CardView>
  );
}

const styles = StyleSheet.create({
  febHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    padding: 16,
    fontWeight: "bold",
  },
});
