import { ListOptionsCond } from "@/components/list/ListOptionsCond";
import { ListOptionsSpec } from "@/components/list/ListOptionsSpec";
import { ListOptionsWhat } from "@/components/list/ListOptionsWhat";
import type {
  FilterExpressionAttribute,
  ListMenuWhatItem,
  ListMenuWhatOrCondItem,
} from "@/types/list";

type ListOptionsFormProps = {
  mode: FilterExpressionAttribute;
  what?: ListMenuWhatItem;
  selectOption: (item?: ListMenuWhatOrCondItem) => void;
  execute: () => void;
  andButtonDisabled: boolean;
};

export function ListOptionsForm({
  mode,
  what,
  selectOption,
  execute,
  andButtonDisabled,
}: ListOptionsFormProps) {
  if (mode === "what") {
    return <ListOptionsWhat onSelect={selectOption} />;
  }

  if (mode === "cond") {
    return <ListOptionsCond what={what} onSelect={selectOption} />;
  }

  if (mode === "spec") {
    return (
      <ListOptionsSpec
        execute={execute}
        onSelect={selectOption}
        andButtonDisabled={andButtonDisabled}
      />
    );
  }

  return null;
}
