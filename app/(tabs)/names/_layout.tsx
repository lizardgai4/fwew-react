import Colors from "@/constants/Colors";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Link, Stack } from "expo-router";
import { Platform, Pressable, StyleSheet, useColorScheme } from "react-native";

export default function StackLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const theme = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { screens, names } = i18n[appLanguage];

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: screens.names,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={colors.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
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
          title: names.single,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={colors.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
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
          title: names.full,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={colors.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
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
          title: names.alu,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={colors.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
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

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginRight: Platform.OS === "web" ? 0 : -16,
  },
});
