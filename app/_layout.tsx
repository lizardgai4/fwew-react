import i18n from "@/constants/i18n";
import { AppLanguageProvider } from "@/context/AppLanguageContext";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { FwewDarkTheme, FwewLightTheme } from "@/themes";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import GlobalStyle from "@/components/common/GlobalStyle";
import { StatusBar } from "expo-status-bar";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const appLanguageValue = useAppLanguage();
  const { appLanguage } = appLanguageValue;

  return (
    <>
      <GlobalStyle />
      <StatusBar style="light" />
      <ThemeProvider
        value={colorScheme === "dark" ? FwewDarkTheme : FwewLightTheme}
      >
        <AppLanguageProvider value={appLanguageValue}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="settings"
              options={{
                title: i18n[appLanguage].screens.settings,
                presentation: "modal",
              }}
            />
          </Stack>
        </AppLanguageProvider>
      </ThemeProvider>
    </>
  );
}
