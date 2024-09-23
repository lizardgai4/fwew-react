import type { ColorExtension } from "@/types/theme";
import type { Theme } from "@react-navigation/native";

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

export const FwewColorExtension: ColorExtension = {
  light: {
    text: "#000",
    background: "#fff",
    tint: "#2e77d1",
    placeholder: "#555",
    tabIconDefault: "#ccc",
    tabIconSelected: "#2e77d1",
    link: "#007aff",
    innerCard: "#d9d9d9",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: "#547aab",
    placeholder: "#999",
    tabIconDefault: "#ccc",
    tabIconSelected: "#547aab",
    link: "#62a0ea",
    innerCard: "#2d3133",
  },
};

export const FwewTheme = {
  light: {
    forest: FwewLightTheme,
    reef: FwewLightReefTheme,
  },
  dark: {
    forest: FwewDarkTheme,
    reef: FwewDarkReefTheme,
  },
  ext: FwewColorExtension,
} as const;
