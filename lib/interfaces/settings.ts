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

/** Global Application Settings */
export interface SettingsGlobal {
  languageCode: string
}

/** Fwew Screen Settings */
export interface SettingsFwew {
  isReverseEnabled: boolean
  posFilterText: string
}

/** List Options for word operator */
interface ListWordOptions {
  starts: string
  ends: string
  has: string
  like: string
  notStarts: string
  notEnds: string
  notHas: string
  notLike: string
}

/** List Options for pos operator */
interface ListPartOfSpeechOptions extends ListWordOptions {
  is: string
  notIs: string
}

/** List Options for syllables or stress operator */
interface ListSyllablesOrStressOptions {
  lessThan: string
  lessThanEqual: string
  equal: string
  greaterThanEqual: string
  greaterThan: string
  notEqual: string
}

/** List Options for words operator */
interface ListWordsOptions {
  first: string
  last: string
}

/** List Screen Settings */
export interface SettingsList {
  word: ListWordOptions
  pos: ListPartOfSpeechOptions
  syllables: ListSyllablesOrStressOptions
  stress: ListSyllablesOrStressOptions
  words: ListWordsOptions
}

/** Random Screen Settings */
export interface SettingsRandom extends SettingsList {
  numRandomWords: string
}
