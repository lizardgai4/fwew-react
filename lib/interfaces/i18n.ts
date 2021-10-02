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
import { Language } from './settings'

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
}

/** interface for FwewScreen component strings */
interface FwewScreenStrings {
  search: string
}

/** type for Internationalized UI */
export type UI = {
  [k in Language]: {
    entryModalContent: EntryModalContentStrings
    fwewScreen: FwewScreenStrings
  }
}
