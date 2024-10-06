import { AppLanguageProvider } from "@/context/AppLanguageContext";
import { DialectProvider } from "@/context/DialectContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { ResultsLanguageProvider } from "@/context/ResultsLanguageContext";
import { ThemeNameProvider } from "@/context/ThemeNameContext";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useDialect } from "@/hooks/useDialect";
import { useFavorites } from "@/hooks/useFavorites";
import { useResultsLanguage } from "@/hooks/useResultsLanguage";
import { useThemeName } from "@/hooks/useThemeName";
import { getTheme } from "@/themes";
import { ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";

export function ContextProviders({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const appLanguageValue = useAppLanguage();
  const resultsLanguage = useResultsLanguage();
  const dialectValue = useDialect();
  const { dialect } = dialectValue;
  const favorites = useFavorites();
  const themeNameValue = useThemeName();
  const { themeName } = themeNameValue;
  const theme = getTheme(themeName, colorScheme, dialect);

  return (
    <ThemeNameProvider value={themeNameValue}>
      <ThemeProvider value={theme}>
        <AppLanguageProvider value={appLanguageValue}>
          <ResultsLanguageProvider value={resultsLanguage}>
            <DialectProvider value={dialectValue}>
              <FavoritesProvider value={favorites}>
                {children}
              </FavoritesProvider>
            </DialectProvider>
          </ResultsLanguageProvider>
        </AppLanguageProvider>
      </ThemeProvider>
    </ThemeNameProvider>
  );
}
