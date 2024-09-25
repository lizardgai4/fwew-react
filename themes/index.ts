import FwewTheme from "@/themes/fwew";
import { type Dialect } from "@/types/common";
import { type ColorExtension } from "@/types/theme";
import { type Theme } from "@react-navigation/native";
import {
  TextInputProps,
  TextProps,
  ViewProps,
  type ColorSchemeName,
} from "react-native";

export type ThemeType = {
  light: Record<Dialect, Theme>;
  dark: Record<Dialect, Theme>;
  ext: ColorExtension;
  components: {
    Text: (props: TextProps) => JSX.Element;
    MonoText: (props: TextProps) => JSX.Element;
    BoldText: (props: TextProps) => JSX.Element;
    ItalicText: (props: TextProps) => JSX.Element;
    UnderlinedText: (props: TextProps) => JSX.Element;
    CardView: (props: ViewProps) => JSX.Element;
    TextInput: (props: TextInputProps) => JSX.Element;
  };
};

const ThemeMap = {
  fwew: FwewTheme,
} as const;

export type ThemeName = keyof typeof ThemeMap;
export const ThemeNames = Object.keys(ThemeMap) as ThemeName[];

export function getTheme(
  themeName: ThemeName,
  colorScheme: ColorSchemeName,
  dialect: Dialect
): Theme {
  if (!colorScheme) {
    colorScheme = "light";
  }
  return ThemeMap[themeName][colorScheme][dialect];
}

export function getColorExtension(themeName: ThemeName): ColorExtension {
  return ThemeMap[themeName].ext;
}

export function getThemedComponents(themeName: ThemeName) {
  return ThemeMap[themeName].components;
}
