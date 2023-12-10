import { Text, View } from "@/components/common/Themed";
import type { ExtendedLanguageCode } from "@/types/common";

// TODO: add every single canon sentence
// TODO: search for canon sentences
export type Example = {
  [key in ExtendedLanguageCode]: string;
};

export default function ExampleScreen() {
  return (
    <View>
      <Text>Example Screen</Text>
    </View>
  );
}
