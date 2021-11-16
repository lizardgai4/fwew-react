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

/** UI - Nederlands (Translation by Charlotte) */
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
    infixSlots: 'infix-sleuven',
    infixDots: 'infix-punten',
    prefixes: 'voorvoegsels',
    infixes: 'tussenvoegsels',
    suffixes: 'achtervoegsels',
    lenition: 'lenitie'
  },
  fwewScreen: {
    search: 'zoeken in'
  },
  listRandomForm: {
    word: 'woord',
    pos: 'woordsoort',
    syllables: 'aantal lettergrepen',
    stress: 'positie van beklemtoonde lettergreep',
    words: 'in orden',
    starts: 'start met',
    ends: 'eindigt met',
    is: 'is precies',
    has: 'was',
    like: 'is als',
    notStarts: 'begint niet met',
    notEnds: 'eindigt niet met',
    notIs: 'is precies niet',
    notHas: 'heeft niet',
    notLike: 'is niet als',
    lessThan: 'is minder dan (<)',
    lessThanEqual: 'is bijna (≤)',
    equal: 'is gelijk aan (=)',
    greaterThanEqual: 'is iets meer dan (≥)',
    greaterThan: 'is meer dan (>)',
    notEqual: 'is niet (≠)',
    first: '# oudste woorden',
    last: '# nieuwste woorden',
    numRandomWords: '# willekeurige woorden',
    list: 'lijst',
    and: 'en',
    random: 'willekeurig',
    where: 'waar',
    back: 'terug',
    delete: 'verwijder',
    search: 'zoeken'
  },
  savedScreen: {
    title: 'opgeslagen woorden',
    infoText:
      'om een woord op te slaan, of te verwijderen, druk op de nummer in de lijst.'
  },
  settingsScreen: {
    title: 'instellingen',
    appLanguage: 'app taal',
    appLanguageDesc: 'standaard taal van app interface',
    resultsLanguage: 'taal resultaten',
    resultsLanguageDesc: 'resultaten van de standaard gekozen taal'
  },
  drawerNavigator: {
    fwew: 'zoeken',
    list: 'lijst',
    random: 'willekeurig',
    saved: 'opgeslagen',
    number: 'nummer',
    settings: 'instellingen'
  },
  versionCard: {
    title: 'over fwew',
    versionInfo: 'versie informatie',
    dictionary: 'woordenboek',
    credits: 'krediet',
    development: 'ontwikkeling',
    design: 'design',
    testing: 'testen',
    translation: 'translatie'
  },
  resultCount: {
    results: 'resultaten',
    result: 'resultaat'
  }
}

export default nl
