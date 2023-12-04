import Colors from "@/constants/Colors";
import stringsNames from "@/constants/ui/names";
import stringsScreens from "@/constants/ui/screens";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

export default function StackLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const ui = stringsNames[appLanguage];

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: stringsScreens[appLanguage].names,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={colors.text}
                    style={{ marginRight: -1, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="name-single"
        options={{
          title: ui.single,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={colors.text}
                    style={{ marginRight: -1, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="name-full"
        options={{
          title: ui.full,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={colors.text}
                    style={{ marginRight: -1, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="name-alu"
        options={{
          title: ui.alu,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={colors.text}
                    style={{ marginRight: -1, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
