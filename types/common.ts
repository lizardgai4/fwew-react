import type { LanguageCode } from "fwew.js";

export type ExtendedLanguageCode = LanguageCode | "eo" | "es" | "nx" | "uk";

export type NumericString = `${number}` | "";

export type OptionType<T> = { name: string; value: T };
