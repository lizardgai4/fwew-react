/**
 * This file is part of fwew-react.
 * fwew-react: Fwew Na'vi Dictionary app written using React Native
 * Copyright (C) 2022 Corey Scheideman <corscheid@gmail.com>
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

/** UI - Nederlands (Translation by Charlotte & Wllìm) */
const nl: UITranslation = {
  active: true,
  resultsActive: true,
  entryModalContent: {
    partOfSpeech: 'woordsoort',
    definition: 'definitie',
    source: 'bron',
    ipa: 'IPA',
    syllables: 'lettergrepen',
    stressedSyllable: 'positie van beklemtoonde lettergreep',
    infixSlots: 'infixposities',
    infixDots: 'infixpunten',
    prefixes: 'voorvoegsels',
    infixes: 'tussenvoegsels',
    suffixes: 'achtervoegsels',
    lenition: 'lenitie',
    listen: 'luister'
  },
  fwewScreen: {
    search: 'zoeken in het'
  },
  listRandomForm: {
    word: 'woord',
    pos: 'woordsoort',
    syllables: 'aantal lettergrepen',
    stress: 'positie van beklemtoonde lettergreep',
    words: 'op chronologische volgorde',
    length: 'lengte',
    starts: 'begint met',
    ends: 'eindigt met',
    is: 'is gelijk aan',
    has: 'bevat',
    like: 'lijkt op',
    notStarts: 'begint niet met',
    notEnds: 'eindigt niet met',
    notIs: 'is niet gelijk aan',
    notHas: 'bevat niet',
    notLike: 'lijkt niet',
    lessThan: 'is kleiner dan (<)',
    lessThanEqual: 'is kleiner of gelijk aan (≤)',
    equal: 'is gelijk aan (=)',
    greaterThanEqual: 'is groter of gelijk aan (≥)',
    greaterThan: 'is groter dan (>)',
    notEqual: 'is niet (≠)',
    first: '# oudste woorden',
    last: '# nieuwste woorden',
    numRandomWords: '# willekeurige woorden',
    list: 'lijst',
    and: 'en',
    random: 'willekeurig',
    where: 'waar',
    back: 'terug',
    delete: 'verwijderen',
    search: 'zoeken'
  },
  savedScreen: {
    title: 'opgeslagen woorden',
    infoText:
      'klik op het cijfer van een zoekresultaat om dat woord op te slaan of weer te verwijderen'
  },
  settingsScreen: {
    title: 'instellingen',
    appLanguage: 'taal van app',
    appLanguageDesc: 'standaardtaal van de app-interface',
    resultsLanguage: 'taal van resultaten',
    resultsLanguageDesc: 'standaardtaal van de zoekresultaten'
  },
  drawerNavigator: {
    fwew: 'zoeken',
    list: 'lijst',
    random: 'willekeurig',
    saved: 'opgeslagen',
    number: 'getal',
    settings: 'instellingen'
  },
  versionCard: {
    title: 'over fwew',
    versionInfo: 'versie-informatie',
    dictionary: 'woordenboek',
    credits: 'credits',
    development: 'ontwikkeling',
    design: 'ontwerp',
    testing: 'testen',
    translation: 'vertaling'
  },
  resultCount: {
    results: 'resultaten',
    result: 'resultaat'
  }
}

export default nl
