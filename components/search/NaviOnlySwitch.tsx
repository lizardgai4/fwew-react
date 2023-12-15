import { Switch } from "react-native";
import { Text, View } from "../common/Themed";

type NaviOnlySwitchProps = {
  value: boolean;
  onValueChange: (naviOnly: boolean) => void;
};

export function NaviOnlySwitch({ value, onValueChange }: NaviOnlySwitchProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Search Na'vi words only</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ true: "#7494ba", false: "#767577" }}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
}
