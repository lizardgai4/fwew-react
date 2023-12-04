import { useAppLanguage } from "@/hooks/useAppLanguage";
import { createContext, useContext } from "react";

export type AppLanguageType = ReturnType<typeof useAppLanguage>;

export const AppLanguageContext = createContext<AppLanguageType>(
  null as unknown as AppLanguageType
);

export const useAppLanguageContext = () => useContext(AppLanguageContext);

export function AppLanguageProvider({
  value,
  children,
}: {
  value: AppLanguageType;
  children: React.ReactNode;
}) {
  return (
    <AppLanguageContext.Provider value={value}>
      {children}
    </AppLanguageContext.Provider>
  );
}
