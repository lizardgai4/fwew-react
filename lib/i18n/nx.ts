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

/** UI - Na'vi */
const nx: UITranslation = {
  active: true,
  resultsActive: false,
  entryModalContent: {
    partOfSpeech: "fnelì'u",
    definition: 'tìralpeng',
    source: 'tsim',
    ipa: 'IPA',
    syllables: "aylì'kong",
    stressedSyllable: "tseng txina lì'kongä",
    infixSlots: "pxeseng hemlì'uviyä",
    infixDots: "meseng hemlì'uviyä",
    prefixes: "ayeolì'uvi",
    infixes: "ayhemlì'uvi",
    suffixes: "ayuolì'uvi",
    lenition: 'pamä sälatem',
    listen: 'tìng mikyun'
  },
  fwewScreen: {
    search: 'fwew'
  },
  listRandomForm: {
    word: "lì'u",
    pos: "fnelì'u",
    syllables: "holpxay lì'kongä",
    stress: "tseng txina lì'kongä",
    words: "ta sngä'ikrrr lì'fyayä",
    length: 'ngimpup',
    starts: "sngä'i fa",
    ends: "'i'a fa",
    is: 'lu nìpxi',
    has: "nga'",
    like: 'lu pxel',
    notStarts: "ke sngä'i fa",
    notEnds: "ke 'i'a fa",
    notIs: 'nìpxi ke lu',
    notHas: "ke nga'",
    notLike: 'ke lu na',
    lessThan: 'lu hol to (<)',
    lessThanEqual: 'lu hol to fu lu nìpxi (≤)',
    equal: 'lu nìpxi (=)',
    greaterThanEqual: 'lu pxay to fu lu nìpxi (≥)',
    greaterThan: 'lu pxay to (>)',
    notEqual: 'nìpxi ke lu (≠)',
    first: "holpxay lì'uä alal lu",
    last: "holpxay lì'uä amip lu",
    numRandomWords: "holpxay lì'uä arenulke",
    list: "sna'o",
    and: 'ulte',
    random: 'renulke',
    where: 'hu syon alu',
    back: "ne'ìm",
    delete: "'aku",
    search: 'fwew'
  },
  savedScreen: {
    title: "aylì'u aswawneyn",
    infoText: "'ampi mì humo a holpxayt fte lì'ut swiveyn fu 'ivaku"
  },
  settingsScreen: {
    title: 'aysìftxey',
    appLanguage: "'urä lì'fya",
    appLanguageDesc: "ftxey lì'fyat 'urä atxin",
    resultsLanguage: "kumä lì'fya",
    resultsLanguageDesc: "ftxey lì'fyat kumä"
  },
  drawerNavigator: {
    fwew: 'fwew',
    list: "sna'o",
    random: 'renulke',
    saved: 'swawneyn',
    number: 'holpxay',
    settings: 'aysìftxey'
  },
  versionCard: {
    title: 'teri fwew',
    versionInfo: 'sreyteri',
    dictionary: "lì'upuk",
    credits: 'irayo',
    development: 'rengopyu',
    design: "'ongopyu",
    testing: 'fmetokyu',
    translation: 'ralpengyu'
  },
  resultCount: {
    results: 'kum',
    result: 'kum'
  }
}

export default nx
