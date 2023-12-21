import Colors from "@/constants/Colors";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import { Link, Tabs } from "expo-router";
import { Pressable, StyleSheet, useColorScheme } from "react-native";

type TabBarIconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
};

function TabBarIcon(props: TabBarIconProps) {
  // https://icons.expo.fyi/
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const theme = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { screens } = i18n[appLanguage];

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        tabBarActiveTintColor: theme.dark ? undefined : theme.colors.primary,
        tabBarInactiveTintColor: colors.placeholder,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: screens.search,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={theme.colors.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: screens.list,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-ol" color={color} />
          ),
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={theme.colors.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: screens.random,
          tabBarIcon: ({ color }) => <TabBarIcon name="random" color={color} />,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={theme.colors.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="numbers"
        options={{
          title: screens.numbers,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calculator" color={color} />
          ),
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={theme.colors.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="names"
        options={{
          title: screens.names,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-circle-o" color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
