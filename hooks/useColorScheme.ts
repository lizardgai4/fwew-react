import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  ColorSchemeName as DefaultColorSchemeName,
  useColorScheme as useDefaultColorScheme,
} from "react-native";

export type ColorSchemeName = "light" | "dark" | "auto";

export function useColorScheme() {
  const deviceColorScheme: DefaultColorSchemeName = useDefaultColorScheme();
  const [colorSchemeName, setColorSchemeName] =
    useState<ColorSchemeName>("auto");
  const [colorSchemeValue, setColorSchemeValue] =
    useState<DefaultColorSchemeName>(deviceColorScheme);
  const { getItem, setItem } = useAsyncStorage("fw_colorscheme");

  async function saveColorScheme(value: ColorSchemeName) {
    try {
      await setItem(value);
    } catch (error) {
      console.error(error);
      return;
    }
    setColorSchemeName(value);
  }

  useEffect(() => {
    (async () => {
      const value = await getItem();
      if (value) {
        setColorSchemeName(value as ColorSchemeName);
        return;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (colorSchemeName === "auto") {
      setColorSchemeValue(deviceColorScheme);
    } else {
      setColorSchemeValue(colorSchemeName);
    }
  }, [deviceColorScheme, colorSchemeName]);

  return {
    colorSchemeName,
    colorSchemeValue,
    saveColorScheme,
  };
}
