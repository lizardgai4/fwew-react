import { ThemeName } from "@/themes";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { signalChangeTheme } from "@/context/ThemeNameContext";

export function useThemeName() {
  const [themeName, setThemeName] = useState<ThemeName>("fwew");
  const { getItem, setItem } = useAsyncStorage("fw_theme");

  async function saveThemeName(value: ThemeName) {
    try {
      await setItem(value);
    } catch (error) {
      console.error(error);
      return;
    }
    setThemeName(value);
    signalChangeTheme();
  }

  useEffect(() => {
    (async () => {
      const value = await getItem();
      if (value) {
        setThemeName(value as ThemeName);
        return;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    themeName,
    saveThemeName,
  };
}
