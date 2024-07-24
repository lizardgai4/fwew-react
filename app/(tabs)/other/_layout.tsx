import { ActionButtons } from "@/components/common/ActionButtons";
import Colors from "@/constants/Colors";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Link, Stack } from "expo-router";
import { Platform, Pressable, StyleSheet } from "react-native";

export default function StackLayout() {
  const theme = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { screens, names } = i18n[appLanguage];

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: Colors.dark.text,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: screens.other,
          headerRight: ActionButtons,
        }}
      />
      <Stack.Screen
        name="lenition"
        options={{
          title: "Lenition",
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="stats"
        options={{
          title: "Stats",
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="valid"
        options={{
          title: "Valid",
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/index"
        options={{
          title: "Lists",
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/cameron"
        options={{
          title: "Cameron Words",
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/homonyms"
        options={{
          title: "Homonyms",
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/multi-ipa"
        options={{
          title: "Multi IPA",
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/oddballs"
        options={{
          title: "Oddballs",
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/profanity"
        options={{
          title: "Profanity",
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/that"
        options={{
          title: "That",
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="names/index"
        options={{
          title: screens.names,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="names/name-single"
        options={{
          title: names.single,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="names/name-full"
        options={{
          title: names.full,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="names/name-alu"
        options={{
          title: names.alu,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
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
