import { Text } from "@/components/common/Themed";
import type { TextProps } from "react-native";

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}

export function BoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontWeight: "bold" }]} />;
}

export function UnderlinedText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { textDecorationLine: "underline" }]}
    />
  );
}
