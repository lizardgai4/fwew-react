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

import { UITranslation } from '../interfaces/i18n'

/** UI - Русский */
const ru: UITranslation = {
  active: false,
  entryModalContent: {
    partOfSpeech: 'part of speech',
    definition: 'definition',
    source: 'source',
    ipa: 'IPA',
    syllables: 'syllables',
    stressedSyllable: 'stressed syllable position',
    infixSlots: 'infix slots',
    infixDots: 'infix dots',
    prefixes: 'prefixes',
    infixes: 'infixes',
    suffixes: 'suffixes',
    lenition: 'lenition'
  },
  fwewScreen: {
    search: 'search',
    results: 'results'
  },
  listRandomForm: {
    word: 'word',
    pos: 'part of speech',
    syllables: 'number of syllables',
    stress: 'stressed syllable position',
    words: 'in order of release date',
    starts: 'starts with',
    ends: 'ends with',
    is: 'is exactly',
    has: 'has',
    like: 'is like',
    notStarts: 'does not start with',
    notEnds: 'does not end with',
    notIs: 'is exactly not',
    notHas: 'does not have',
    notLike: 'is not like',
    lessThan: 'is less than (<)',
    lessThanEqual: 'is at most (≤)',
    equal: 'is exactly (=)',
    greaterThanEqual: 'is at least (≥)',
    greaterThan: 'is more than (>)',
    notEqual: 'is exactly not (≠)',
    first: '# oldest words',
    last: '# newest words',
    numRandomWords: '# random words',
    list: 'list',
    and: 'and',
    random: 'random',
    where: 'where',
    back: 'back',
    delete: 'delete',
    search: 'search',
    results: 'results'
  },
  savedScreen: {
    title: 'saved words',
    infoText: 'to save or un-save a word, tap the number on an entry',
    results: 'results'
  },
  settingsScreen: {
    title: 'settings',
    appLanguage: 'app language',
    appLanguageDesc: 'default language of app interface',
    resultsLanguage: 'results laguage',
    resultsLanguageDesc: 'default language of results'
  },
  tabNavigator: {
    fwew: 'Fwew',
    list: 'List',
    random: 'Random',
    saved: 'Saved',
    settings: 'Settings'
  },
  versionCard: {
    title: 'about fwew',
    versionInfo: 'version information',
    dictionary: 'dictionary',
    credits: 'credits',
    development: 'development',
    design: 'design',
    testing: 'testing'
  }
}

export default ru
