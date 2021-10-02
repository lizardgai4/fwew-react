/**
 * This file is part of fwew-react.
 * fwew-react: Fwew Na'vi Dictionary app written using React Native
 * Copyright (C) 2021  Corey Scheideman <corscheid@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import {
  Language,
  LanguageNames,
  SettingsFwewDisplayNames,
  SettingsListOperatorDisplayNames,
  SettingsRandomOperatorDisplayNames,
  UI
} from '../interfaces/i18n'

import { SettingsList } from '../interfaces/settings'

/** Array of all supported language codes */
export const Languages: Language[] = [
  Language.DE,
  Language.EN,
  Language.ET,
  Language.FR,
  Language.HU,
  Language.NL,
  Language.PL,
  Language.RU,
  Language.SV
]

export const languageNames: LanguageNames = {
  de: `Deutsch`,
  en: `English`,
  et: `Eesti`,
  fr: `Français`,
  hu: `Magyar`,
  nl: `Nederlands`,
  pl: `Polski`,
  ru: `Русский`,
  sv: `Svenska`
}

/** Internationalized UI strings */
export const ui: UI = {
  de: {
    entryModalContent: {
      partOfSpeech: 'Teil der Rede',
      definition: 'Definition',
      source: 'Quelle',
      ipa: 'IPA',
      syllables: 'Silben',
      stressedSyllable: 'betonte Silbe',
      infixSlots: 'Infix-Slots',
      infixDots: 'Infix-Punkte',
      prefixes: 'Präfixe',
      infixes: 'Infixe',
      suffixes: 'Suffixe',
      lenition: 'Lenition'
    },
    fwewScreen: {
      search: 'suche auf'
    }
  },
  en: {
    entryModalContent: {
      partOfSpeech: 'part of speech',
      definition: 'definition',
      source: 'source',
      ipa: 'IPA',
      syllables: 'syllables',
      stressedSyllable: 'stressed syllable',
      infixSlots: 'infix slots',
      infixDots: 'infix dots',
      prefixes: 'prefixes',
      infixes: 'infixes',
      suffixes: 'suffixes',
      lenition: 'lenition'
    },
    fwewScreen: {
      search: 'search'
    }
  },
  et: {
    entryModalContent: {
      partOfSpeech: 'part of speech',
      definition: 'definition',
      source: 'source',
      ipa: 'IPA',
      syllables: 'syllables',
      stressedSyllable: 'stressed syllable',
      infixSlots: 'infix slots',
      infixDots: 'infix dots',
      prefixes: 'prefixes',
      infixes: 'infixes',
      suffixes: 'suffixes',
      lenition: 'lenition'
    },
    fwewScreen: {
      search: 'search'
    }
  },
  fr: {
    entryModalContent: {
      partOfSpeech: 'part of speech',
      definition: 'definition',
      source: 'source',
      ipa: 'IPA',
      syllables: 'syllables',
      stressedSyllable: 'stressed syllable',
      infixSlots: 'infix slots',
      infixDots: 'infix dots',
      prefixes: 'prefixes',
      infixes: 'infixes',
      suffixes: 'suffixes',
      lenition: 'lenition'
    },
    fwewScreen: {
      search: 'search'
    }
  },
  hu: {
    entryModalContent: {
      partOfSpeech: 'part of speech',
      definition: 'definition',
      source: 'source',
      ipa: 'IPA',
      syllables: 'syllables',
      stressedSyllable: 'stressed syllable',
      infixSlots: 'infix slots',
      infixDots: 'infix dots',
      prefixes: 'prefixes',
      infixes: 'infixes',
      suffixes: 'suffixes',
      lenition: 'lenition'
    },
    fwewScreen: {
      search: 'search'
    }
  },
  nl: {
    entryModalContent: {
      partOfSpeech: 'part of speech',
      definition: 'definition',
      source: 'source',
      ipa: 'IPA',
      syllables: 'syllables',
      stressedSyllable: 'stressed syllable',
      infixSlots: 'infix slots',
      infixDots: 'infix dots',
      prefixes: 'prefixes',
      infixes: 'infixes',
      suffixes: 'suffixes',
      lenition: 'lenition'
    },
    fwewScreen: {
      search: 'search'
    }
  },
  pl: {
    entryModalContent: {
      partOfSpeech: 'part of speech',
      definition: 'definition',
      source: 'source',
      ipa: 'IPA',
      syllables: 'syllables',
      stressedSyllable: 'stressed syllable',
      infixSlots: 'infix slots',
      infixDots: 'infix dots',
      prefixes: 'prefixes',
      infixes: 'infixes',
      suffixes: 'suffixes',
      lenition: 'lenition'
    },
    fwewScreen: {
      search: 'search'
    }
  },
  ru: {
    entryModalContent: {
      partOfSpeech: 'part of speech',
      definition: 'definition',
      source: 'source',
      ipa: 'IPA',
      syllables: 'syllables',
      stressedSyllable: 'stressed syllable',
      infixSlots: 'infix slots',
      infixDots: 'infix dots',
      prefixes: 'prefixes',
      infixes: 'infixes',
      suffixes: 'suffixes',
      lenition: 'lenition'
    },
    fwewScreen: {
      search: 'search'
    }
  },
  sv: {
    entryModalContent: {
      partOfSpeech: 'part of speech',
      definition: 'definition',
      source: 'source',
      ipa: 'IPA',
      syllables: 'syllables',
      stressedSyllable: 'stressed syllable',
      infixSlots: 'infix slots',
      infixDots: 'infix dots',
      prefixes: 'prefixes',
      infixes: 'infixes',
      suffixes: 'suffixes',
      lenition: 'lenition'
    },
    fwewScreen: {
      search: 'search'
    }
  }
}

/**
 * Fwew Settings items display names
 */
export const settingsFwewDisplayNames: SettingsFwewDisplayNames = {
  isReverseEnabled: 'reverse',
  posFilterText: 'part of speech filter'
}

/**
 * List Settings item display names
 */
export const settingsListDisplayNames: SettingsList = {
  word: {
    starts: 'starts with',
    ends: 'ends with',
    has: 'has',
    like: 'is like',
    notStarts: 'does not start with',
    notEnds: 'does not end with',
    notHas: 'does not have',
    notLike: 'is not like'
  },
  pos: {
    starts: 'starts with',
    ends: 'ends with',
    is: 'is exactly',
    has: 'has',
    like: 'is like',
    notStarts: 'does not start with',
    notEnds: 'does not end with',
    notIs: 'is exactly not',
    notHas: 'does not have',
    notLike: 'is not like'
  },
  syllables: {
    lessThan: 'less than (<)',
    lessThanEqual: 'at most (≤)',
    equal: 'exactly (=)',
    greaterThanEqual: 'at least (≥)',
    greaterThan: 'more than (>)',
    notEqual: 'exactly not (≠)'
  },
  stress: {
    lessThan: 'less than (<)',
    lessThanEqual: 'at most (≤)',
    equal: 'exactly (=)',
    greaterThanEqual: 'at least (≥)',
    greaterThan: 'more than (>)',
    notEqual: 'exactly not (≠)'
  },
  words: {
    first: 'first #',
    last: 'last #'
  }
}

/** List Settings items display names */
export const settingsListOperatorDisplayNames: SettingsListOperatorDisplayNames = {
  word: 'word shape',
  pos: 'part of speech',
  syllables: 'number of syllables',
  stress: 'stressed syllable',
  words: 'words released'
}

/**
 * Random Settings item display names
 */
export const settingsRandomDisplayNames = {
  numRandomWords: '# random words',
  word: {
    starts: 'starts with',
    ends: 'ends with',
    has: 'has',
    like: 'is like',
    notStarts: 'does not start with',
    notEnds: 'does not end with',
    notHas: 'does not have',
    notLike: 'is not like'
  },
  pos: {
    starts: 'starts with',
    ends: 'ends with',
    is: 'is exactly',
    has: 'has',
    like: 'is like',
    notStarts: 'does not start with',
    notEnds: 'does not end with',
    notIs: 'is exactly not',
    notHas: 'does not have',
    notLike: 'is not like'
  },
  syllables: {
    lessThan: 'less than (<)',
    lessThanEqual: 'at most (≤)',
    equal: 'exactly (=)',
    greaterThanEqual: 'at least (≥)',
    greaterThan: 'more than (>)',
    notEqual: 'exactly not (≠)'
  },
  stress: {
    lessThan: 'less than (<)',
    lessThanEqual: 'at most (≤)',
    equal: 'exactly (=)',
    greaterThanEqual: 'at least (≥)',
    greaterThan: 'more than (>)',
    notEqual: 'exactly not (≠)'
  },
  words: {
    first: 'first #',
    last: 'last #'
  }
}

/** List Settings items display names */
export const settingsRandomOperatorDisplayNames: SettingsRandomOperatorDisplayNames = {
  numRandomWords: 'number of random words',
  word: 'word shape',
  pos: 'part of speech',
  syllables: 'number of syllables',
  stress: 'stressed syllable',
  words: 'words released'
}
