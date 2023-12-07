import { Text, View } from "@/components/common/Themed";
import { ExtendedLanguageCode } from "@/types/common";

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
