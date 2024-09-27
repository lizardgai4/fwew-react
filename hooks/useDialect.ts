import { Dialect } from "@/types/common";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useDialect() {
  const [dialect, setDialect] = useState<Dialect>("forest");
  const { getItem, setItem } = useAsyncStorage("fw_dialect");

  async function saveDialect(value: Dialect) {
    try {
      await setItem(value);
    } catch (error) {
      console.error(error);
      return;
    }
    setDialect(value);
  }

  useEffect(() => {
    (async () => {
      const value = await getItem();
      if (value) {
        setDialect(value as Dialect);
        return;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    dialect,
    saveDialect,
  };
}
