import type { LanguageCode } from "fwew.js";

export type ExtendedLanguageCode = LanguageCode | "eo" | "nx";

export type NumericString = `${number}` | "";

export type OptionType<T> = { name: string; value: T };

const dialect = {
  FOREST: "forest",
  REEF: "reef",
} as const;

export type Dialect = (typeof dialect)[keyof typeof dialect];
