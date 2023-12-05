import type { ExtendedLanguageCode } from "@/types/common";

type NumberStrings = {
  [key in ExtendedLanguageCode]: {
    placeholderNumeric: string;
    placeholderAlpha: string;
    octal: string;
    decimal: string;
  };
};

const strings: NumberStrings = {
  de: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "oktal:",
    decimal: "dezimal:",
  },
  en: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  eo: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "oktala:",
    decimal: "dekuma:",
  },
  es: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  et: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  fr: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  hu: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  nl: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  nx: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  pl: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  pt: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  ru: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  sv: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  tr: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "oktal:",
    decimal: "onaltılı:",
  },
};

export default strings;
