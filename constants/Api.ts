const API_URL = "https://tirea.learnnavi.org/api";

type Lang =
  | "de"
  | "en"
  | "es"
  | "et"
  | "fr"
  | "hu"
  | "nl"
  | "pl"
  | "ru"
  | "sv"
  | "tr"
  | "nx";

type Dialect = "forest" | "reef";
type NameEnding = "'ite" | "'itan";

type NameAluNounMode = "something" | "normal noun" | "verb-er";
type NameAluAdjectiveMode =
  | "any"
  | "something"
  | "none"
  | "normal adjective"
  | "genitive noun"
  | "origin noun"
  | "participle verb"
  | "active participle verb"
  | "passive participle verb";

const api = {
  search: {
    /**
     * multiple Na'vi word lookup
     * (route returns Word[][] ResultSet type)
     *
     * @param {string} nav Na'vi words separated by space
     */
    search: (nav: string) => `${API_URL}/fwew/${nav}`,

    /**
     * multiple Na'vi word lookup, skips words that have any affix
     * much faster for words without affixes than search()
     * (route returns Word[][] ResultSet type)
     *
     * @param {string} nav Na'vi words separated by space
     */
    simpleSearch: (nav: string) => `${API_URL}/fwew-simple/${nav}`,

    /**
     * multiple Local word lookup
     * (route returns Word[][] ResultSet type)
     *
     * @param {Lang} lang language code (e.g., "en")
     * @param {string} local local words separated by space (e.g., "hello world")
     */
    searchReverse: (lang: Lang, local: string) =>
      `${API_URL}/fwew/r/${lang}/${local}`,

    /**
     * multiple Na'vi word lookup
     * (route returns Word[] Results type)
     *
     * @param {string} nav Na'vi words separated by space
     */
    search1DArray: (nav: string) => `${API_URL}/fwew-1d/${nav}`,

    /**
     * multiple Local word lookup
     * (route returns Word[] Results type)
     *
     * @param {Lang} lang language code (e.g., "en")
     * @param {string} local local words separated by space (e.g., "hello world")
     */
    searchReverse1DArray: (lang: Lang, local: string) =>
      `${API_URL}/fwew-1d/r/${lang}/${local}`,

    /**
     * multiple Both word lookup (Na'vi and Local)
     * (route returns Word[][] ResultSet type)
     *
     * @param {Lang} lang language code (e.g., "en")
     * @param {string} words words separated by space (e.g., "hello kaltxì")
     */
    searchComplete: (lang: Lang, words: string) =>
      `${API_URL}/search/${lang}/${words}}`,
  },

  list: {
    /**
     * list all words
     * (route returns Word[] Results type)
     */
    list: () => `${API_URL}/list`,

    /**
     * list all words with filter specified by args
     * (route returns Word[] Results type)
     *
     * @param {string} args filter arguments (e.g., "word has tx")
     * @returns {Results}
     */
    listFilter: (args: string) => `${API_URL}/list/${args}`,
  },

  random: {
    /**
     * get the given number of random words
     * (route returns Word[] Results type)
     *
     * @param {string} n number of random words to get
     */
    random: (n: string) => `${API_URL}/random/${n}`,

    /**
     * get the given number of random words with filter specified by args
     * (route returns Word[] Results type)
     *
     * @param {string} n number of random words to get
     * @param {string} args filter arguments (e.g., "word has tx")
     */
    randomFilter: (n: string, args: string) => `${API_URL}/random/${n}/${args}`,
  },

  number: {
    /**
     * look up a number by numerals
     *
     * @param {string} num
     */
    numberToNavi: (num: string) => `${API_URL}/number/r/${num}`,

    /**
     * look up a number by name
     *
     * @param {string} word Na'vi name of a number
     */
    naviToNumber: (word: string) => `${API_URL}/number/${word}`,
  },

  names: {
    /**
     * generate single-word names
     *
     * @param {string} n number of names to get
     * @param {string} s number of syllables in the name
     * @param {Dialect} dialect (reef or forest)
     */
    nameSingle: (n: string, s: string, dialect: Dialect) =>
      `${API_URL}/name/single/${n}/${s}/${dialect}`,

    /**
     * Generate full Na'vi-style names
     *
     * @param {NameEnding} ending the ending of the name
     * @param {string} n number of names to get
     * @param {string} s1 number of syllables in the given name
     * @param {string} s2 number of syllables in the family name
     * @param {string} s3 number of syllables in the parent's first name
     * @param {Dialect} dialect (reef or forest)
     */
    nameFull: (
      ending: NameEnding,
      n: string,
      s1: string,
      s2: string,
      s3: string,
      dialect: Dialect
    ) => `${API_URL}/name/full/${ending}/${n}/${s1}/${s2}/${s3}/${dialect}`,

    /**
     * Generate X alu Y names
     *
     * @param {string} n number of names to get
     * @param {"1" | "2" | "3" | "4"} s number of syllables in the name
     * @param {NameAluNounMode} nm the noun mode
     * @param {NameAluAdjectiveMode} am the adjective mode
     * @param {Dialect} dialect (reef or forest)
     */
    nameAlu: (
      n: string,
      s: "1" | "2" | "3" | "4",
      nm: NameAluNounMode,
      am: NameAluAdjectiveMode,
      dialect: Dialect
    ) => `${API_URL}/name/alu/${n}/${s}/${nm}/${am}/${dialect}`,
  },

  /**
   * get the lenition table
   */
  lenition: () => `${API_URL}/lenition`,

  /**
   * get the Fwew API Version
   */
  version: () => `${API_URL}/version`,
};

export default api;
