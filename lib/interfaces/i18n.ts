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

/** Supported Language codes */
export enum Language {
  DE = 'de', // Deutsch
  EN = 'en', // English
  ES = 'es', // Español
  ET = 'et', // Eesti
  FR = 'fr', // Français
  HU = 'hu', // Magyar
  NL = 'nl', // Nederlands
  PL = 'pl', // Polski
  RU = 'ru', // Русский
  SV = 'sv', // Svenska
  NX = 'nx' // Na'vi
}

/** type for languageNames, the array of language display names */
export type LanguageNames = {
  [K in Language]: string
}

/** Internationalized UI strings */

/** interface for EntryModalContent component strings */
interface EntryModalContentStrings {
  partOfSpeech: string
  definition: string
  source: string
  ipa: string
  syllables: string
  stressedSyllable: string
  infixSlots: string
  infixDots: string
  prefixes: string
  infixes: string
  suffixes: string
  lenition: string
  listen: string
}

/** interface for FwewScreen component strings */
interface FwewScreenStrings {
  search: string
}

/** interface for ListForm and RandomForm component strings */
interface ListRandomFormStrings {
  word: string
  pos: string
  syllables: string
  stress: string
  words: string
  length: string
  starts: string
  ends: string
  is: string
  has: string
  like: string
  notStarts: string
  notEnds: string
  notIs: string
  notHas: string
  notLike: string
  lessThan: string
  lessThanEqual: string
  equal: string
  greaterThanEqual: string
  greaterThan: string
  notEqual: string
  first: string
  last: string
  numRandomWords: string
  list: string
  and: string
  random: string
  where: string
  back: string
  delete: string
  search: string
}

/** interface for SavedScreen component strings */
interface SavedScreenStrings {
  title: string
  infoText: string
}

/** interface for SettingsScreen / SettingsForm component strings */
interface SettingsScreenStrings {
  title: string
  appLanguage: string
  appLanguageDesc: string
  resultsLanguage: string
  resultsLanguageDesc: string
}

/** interface for TabNavigator Bottom Tab labels */
interface DrawerNavigatorStrings {
  fwew: string
  list: string
  random: string
  saved: string
  number: string
  settings: string
}

/** interface for Settings Screen Version Card */
interface VersionCardStrings {
  title: string
  versionInfo: string
  dictionary: string
  credits: string
  development: string
  design: string
  testing: string
  translation: string
}

/** interface for ResultCount component */
export interface ResultCountStrings {
  results: string
  result: string
}

/** interface for a UI Translation */
export interface UITranslation {
  active: boolean
  resultsActive: boolean
  entryModalContent: EntryModalContentStrings
  fwewScreen: FwewScreenStrings
  listRandomForm: ListRandomFormStrings
  savedScreen: SavedScreenStrings
  settingsScreen: SettingsScreenStrings
  drawerNavigator: DrawerNavigatorStrings
  versionCard: VersionCardStrings
  resultCount: ResultCountStrings
}

/** type for Internationalized UI */
export type UI = {
  [k in Language]: UITranslation
}
