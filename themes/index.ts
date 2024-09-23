import { FwewTheme } from "@/themes/fwew";
import { type Dialect } from "@/types/common";
import { type ColorExtension } from "@/types/theme";
import { type Theme } from "@react-navigation/native";
import { type ColorSchemeName } from "react-native";

const ThemeMap = {
  fwew: FwewTheme,
} as const;

type FwewThemeName = keyof typeof ThemeMap;

export function getTheme({
  themeName,
  colorScheme,
  dialect,
}: {
  themeName: FwewThemeName;
  colorScheme: ColorSchemeName;
  dialect: Dialect;
}): Theme {
  if (!colorScheme) {
    colorScheme = "light";
  }
  return ThemeMap[themeName][colorScheme][dialect];
}

export function getColorExtension(themeName: FwewThemeName): ColorExtension {
  return ThemeMap[themeName].ext;
}
