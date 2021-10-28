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

/** UI - Deutsch */
const de: UITranslation = {
  active: true,
  resultsActive: true,
  entryModalContent: {
    partOfSpeech: 'Wortart',
    definition: 'Definition',
    source: 'Quelle',
    ipa: 'IPA',
    syllables: 'Silben',
    stressedSyllable: 'Position der betonten Silbe',
    infixSlots: 'Infix-Slots',
    infixDots: 'Infix-Punkte',
    prefixes: 'Präfixe',
    infixes: 'Infixe',
    suffixes: 'Suffixe',
    lenition: 'Lenition'
  },
  fwewScreen: {
    search: 'Suche auf'
  },
  listRandomForm: {
    word: 'das Wort',
    pos: 'die Wortart',
    syllables: 'die Anzahl der Silben',
    stress: 'die Position der betonten Silbe',
    words: 'in der Reihenfolge des Erscheinungsdatums',
    starts: 'beginnt mit',
    ends: 'endet mit',
    is: 'ist genau',
    has: 'hat',
    like: 'ist wie',
    notStarts: 'beginnt nicht mit',
    notEnds: 'endet nicht mit',
    notIs: 'ist genau nicht',
    notHas: 'hat nicht',
    notLike: 'ist nicht wie',
    lessThan: 'ist kleiner als (<)',
    lessThanEqual: 'kleiner oder gleich (≤)',
    equal: 'ist gleich (=)',
    greaterThanEqual: 'größer oder gleich (≥)',
    greaterThan: 'ist größer als (>)',
    notEqual: 'ist ungleich (≠)',
    first: '# älteste Wörter',
    last: '# neueste Wörter',
    numRandomWords: '# Zufällige Wörter',
    list: 'liste',
    and: 'und',
    random: 'zufällig',
    where: 'bei denen',
    back: 'zurück',
    delete: 'entfernen',
    search: 'suche'
  },
  savedScreen: {
    title: 'gespeicherten Wörter',
    infoText:
      'Um ein Wort zu speichern oder zu entfernen, tippen Sie auf die Nummer eines Eintrags'
  },
  settingsScreen: {
    title: 'Einstellungen',
    appLanguage: 'Sprache der App',
    appLanguageDesc: 'Standardsprache der App-Oberfläche',
    resultsLanguage: 'Ergebnissprache',
    resultsLanguageDesc: 'Standardsprache der Ergebnisse'
  },
  drawerNavigator: {
    fwew: 'Suche',
    list: 'Liste',
    random: 'Zufällig',
    saved: 'Gespeichert',
    number: 'Nummer',
    settings: 'Einstellungen'
  },
  versionCard: {
    title: 'über fwew',
    versionInfo: 'Versionsinformation',
    dictionary: 'Wörterbuch',
    credits: 'Credits',
    development: 'Entwicklung',
    design: 'das Design',
    testing: 'das Testen',
    translation: 'Übersetzung'
  },
  resultCount: {
    results: 'Ergebnisse'
  }
}

export default de
