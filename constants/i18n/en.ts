import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "Adjective",
  "adp.": "Adposition",
  "adv.": "Adverb",
  "conj.": "Conjunction",
  "inter.": "Interrogative",
  "intj.": "Interjection",
  "n.": "Noun",
  "num.": "Number",
  "part.": "Particle",
  "ph.": "Phrase",
  "pn.": "Pronoun",
  "prop.n.": "Proper Noun",
  "sbd.": "Subordinator",
  "vim.": "Intransitive Modal Verb",
  "vin.": "Intransitive Verb",
  "vtr.": "Transitive Verb",
  "vtrm.": "Transitive Modal Verb",
  // "adj., adv.": "Adjective, Adverb",
  // "adj., conj.": "Adjective, Conjunction",
  // "adj., intj.": "Adjective, Interjection",
  // "adj., n.": "Adjective, Noun",
  // "adv., conj.": "Adverb, Conjunction",
  // "adv., intj.": "Adverb, Interjection",
  // "adv., n.": "Adverb, Noun",
  // "inter., intj.": "Interrogative, Interjection",
  // "n., intj.": "Noun, Interjection",
  // "part., intj.": "Particle, Interjection",
  // "vin., intj.": "Intransitive Verb, Interjection",
  // "vin., vtr.": "Intransitive Or Transitive Verb",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  name,
  value,
}));

const strings: UITranslation = {
  common: {
    results: (count) => (count === 1 ? "result" : "results"),
    noResults: "no results",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Search",
    list: "List",
    random: "Random",
    numbers: "Numbers",
    names: "Names",
    settings: "Settings",
  },
  search: {
    search: "Search",
    naviOnly: "Search Na'vi words only",
    audio: "Audio",
    partOfSpeech: "Part of speech",
    definition: "Definition",
    breakdown: "Breakdown",
    infixDots: "Infixes (dots)",
    infixSlots: "Infixes (slots)",
    prefixes: "Prefixes",
    infixes: "Infixes",
    suffixes: "Suffixes",
    lenition: "Lenition",
    comment: "Comment",
    source: "Source",
    ipa: "IPA",
  },
  list: {
    list: "List",
    listOptions: "List Options",
    listMenu: {
      whatValues: [
        { value: "pos", description: "part of speech" },
        { value: "word", description: "word" },
        { value: "words", description: "words in order of release" },
        { value: "syllables", description: "number of syllables" },
        { value: "stress", description: "stressed syllable position" },
        { value: "length", description: "length of the word in phonemes" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "starts with" },
          { value: "ends", description: "ends with" },
          { value: "is", description: "is" },
          { value: "has", description: "has" },
          { value: "like", description: "is like" },
          { value: "not-starts", description: "does not start with" },
          { value: "not-ends", description: "does not end with" },
          { value: "not-is", description: "is not" },
          { value: "not-has", description: "does not have" },
          { value: "not-like", description: "is not like" },
        ],
        word: [
          { value: "starts", description: "starts with" },
          { value: "ends", description: "ends with" },
          { value: "has", description: "has" },
          { value: "like", description: "is like" },
          { value: "not-starts", description: "does not start with" },
          { value: "not-ends", description: "does not end with" },
          { value: "not-has", description: "does not have" },
          { value: "not-like", description: "is not like" },
        ],
        words: [
          { value: "first", description: "oldest" },
          { value: "last", description: "newest" },
        ],
        syllables: [
          { value: "<", description: "is less than" },
          { value: "<=", description: "is less than or equal to" },
          { value: "=", description: "is equal to" },
          { value: ">=", description: "is greater than or equal to" },
          { value: ">", description: "is greater than" },
          { value: "!=", description: "is not equal to" },
        ],
        stress: [
          { value: "<", description: "is less than" },
          { value: "<=", description: "is less than or equal to" },
          { value: "=", description: "is equal to" },
          { value: ">=", description: "is greater than or equal to" },
          { value: ">", description: "is greater than" },
          { value: "!=", description: "is not equal to" },
        ],
        length: [
          { value: "<", description: "is less than" },
          { value: "<=", description: "is less than or equal to" },
          { value: "=", description: "is equal to" },
          { value: ">=", description: "is greater than or equal to" },
          { value: ">", description: "is greater than" },
          { value: "!=", description: "is not equal to" },
        ],
      },
    },
    and: "and...",
  },
  random: {
    random: "Random",
    randomOptions: "Random Options",
    numWords: "Number of random words",
    where: "where...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Single",
    full: "Full",
    alu: "Alu",
    options: "Options",
    numNames: "Number of names to generate",
    copyAll: "Copy All",
    dialect: "Dialect",
    dialects: [
      { name: "interdialect", value: "interdialect" },
      { name: "forest", value: "forest" },
      { name: "reef", value: "reef" },
    ],
    syllablesOptions: [
      { name: "random", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Number of syllables",
  },
  nameFull: {
    numSyllables1: "Number of syllables in first name",
    numSyllables2: "Number of syllables in family name",
    numSyllables3: "Number of syllables in parent's name",
    nameEnding: "Name ending",
    nameEndingHint:
      "-'itan for male, -'ite for female, -'itu for non-binary (non-canon)",
    nameEndingOptions: [
      { value: "random", name: "random" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Number of Syllables in First Name",
    nounMode: "Noun Mode",
    adjMode: "Adjective Mode",
    nounModes: [
      { name: "something", value: "something" },
      { name: "normal noun", value: "normal noun" },
      { name: "verb-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "any", value: "any" },
      { name: "something", value: "something" },
      { name: "none", value: "none" },
      { name: "normal adjective", value: "normal adjective" },
      { name: "genitive noun", value: "genitive noun" },
      { name: "origin noun", value: "origin noun" },
      { name: "participle verb", value: "participle verb" },
      { name: "active participle verb", value: "active participle verb" },
      { name: "passive participle verb", value: "passive participle verb" },
    ],
  },
  settings: {
    about: "About",
    version: "Version",
    credits: "Credits",
    development: "Development",
    design: "Design",
    testing: "Testing",
    translation: "Translation",
    appLanguage: "App Language",
    resultsLanguage: "Results Language",
  },
};

export default strings;
