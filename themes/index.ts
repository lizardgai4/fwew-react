import { type Theme } from "@react-navigation/native";
import { type ColorSchemeName } from "react-native";
import { type Dialect } from "@/types/common";
import { FwewTheme } from "@/themes/fwew";

const ThemeMap = {
  fwew: FwewTheme
} as const;

type FwewThemeName = keyof typeof ThemeMap;

type ThemeParams = {
  fwewTheme: FwewThemeName,
  colorScheme: ColorSchemeName,
  dialect: Dialect
};

export function getTheme({ fwewTheme, colorScheme, dialect }: ThemeParams): Theme {
  if (!colorScheme) {
    colorScheme = "light";
  }
  return ThemeMap[fwewTheme][colorScheme][dialect];
}
