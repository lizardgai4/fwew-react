import { type Theme } from "@react-navigation/native";
import { type ColorSchemeName } from "react-native";
import { type Dialect } from "@/types/common";

const FwewDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "#3a5575",
    background: "#282b2d",
    card: "#181a1b",
    text: "#e8e6e3",
    border: "#3b5778",
    notification: "#ff453a",
  },
};

const FwewDarkReefTheme: Theme = {
  dark: true,
  colors: {
    primary: "#3a7569",
    background: "#282b2d",
    card: "#181a1b",
    text: "#e8e6e3",
    border: "#3b786c",
    notification: "#ff453a",
  },
};

const FwewLightTheme: Theme = {
  dark: false,
  colors: {
    primary: "#7494ba",
    background: "#d9e2ed",
    card: "#ffffff",
    text: "#000000",
    border: "#537aa8",
    notification: "#ff3b30",
  },
};

const FwewLightReefTheme: Theme = {
  dark: false,
  colors: {
    primary: "#74baac",
    background: "#d9e2ed",
    card: "#ffffff",
    text: "#000000",
    border: "#53a897",
    notification: "#ff3b30",
  },
};

const ThemeMap = {
  fwew: {
    light: {
      forest: FwewLightTheme,
      reef: FwewLightReefTheme,
    },
    dark: {
      forest: FwewDarkTheme,
      reef: FwewDarkReefTheme,
    }
  }
} as const;

export const FwewThemeNames = ["fwew"] as const;
export type FwewThemeName = typeof FwewThemeNames[number];

type ThemeParams = {
  fwewTheme: FwewThemeName,
  colorScheme: ColorSchemeName,
  dialect: Dialect
};

export function getTheme({ fwewTheme, colorScheme, dialect }: ThemeParams): Theme {
  if (!colorScheme) {
    return FwewLightTheme
  }
  return ThemeMap[fwewTheme][colorScheme][dialect];
}
