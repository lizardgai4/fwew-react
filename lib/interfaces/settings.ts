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

export interface SettingsGlobal {
  languageCode: string
}

export interface SettingsFwew {
  isReverseEnabled: boolean
  posFilterText: string
}

interface WordWhat {
  has: string
  starts: string
  ends: string
  like: string
}

interface PosWhat extends WordWhat {
  is: string
}

interface NumWhat {
  lessThan: string
  lessThanEqual: string
  equal: string
  greaterThanEqual: string
  greaterThan: string
}

interface WordsWhat {
  first: string
  last: string
}

export interface SettingsList {
  word: WordWhat
  pos: PosWhat
  syllables: NumWhat
  stress: NumWhat
  words: WordsWhat
}

export interface SettingsRandom extends SettingsList {
  numRandomWords: string
}
