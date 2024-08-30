import { ActionButtons } from "@/components/common/ActionButtons";
import Colors from "@/constants/Colors";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

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
        headerTintColor: Colors.dark.text,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: colors.placeholder,
        headerBackground: () => (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            //colors={["#88FFFF", "#55DDDD", "#0044FF"]}
            colors={[theme.colors.primary, theme.colors.primary]}
            style={{ height: "100%" }}
          />
        ),
        tabBarBackground: () => (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            //colors={["#00FFFF", "#0044FF", "#006699"]}
            colors={[theme.colors.primary, theme.colors.primary]}
            style={{ height: "100%" }}
          />
        ),
      }}
      
    >
      <Tabs.Screen
        name="index"
        options={{
          title: screens.search,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerRight: () => <ActionButtons />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: screens.list,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-ol" color={color} />
          ),
          headerRight: () => <ActionButtons />,
        }}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: screens.random,
          tabBarIcon: ({ color }) => <TabBarIcon name="random" color={color} />,
          headerRight: () => <ActionButtons />,
        }}
      />
      <Tabs.Screen
        name="numbers"
        options={{
          title: screens.numbers,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calculator" color={color} />
          ),
          headerRight: () => <ActionButtons />,
        }}
      />
      <Tabs.Screen
        name="other"
        options={{
          title: screens.other,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ellipsis-h" color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
