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
import { FwewError } from './fwew-error'
import { FwewNumber } from './fwew-number'
import { Language } from './i18n'
import { Word } from './word'

/**
 * props interface for ActionBar component
 */
export interface ActionBarProps {
  children?: JSX.Element | JSX.Element[]
}

/**
 * props interface for EntryBreakdown component
 */
export interface EntryBreakdownProps {
  stressed: string
  syllables: string
  infixDots: string
}

/**
 * props interface for EntryIndex component
 */
export interface EntryIndexProps {
  number: number
}

/**
 * props interface for EntryModalContent component
 */
export interface EntryModalContentProps {
  entry: Word
}

/**
 * props for Entry component
 */
export interface EntryProps {
  number: number
  word: Word
}

/**
 * props for Screen component
 */
export interface ScreenProps {
  navigation: any
  apiUrl: string
  screenType: 'list' | 'random'
}

/**
 * props for Sressed component
 */
export interface StressedProps {
  stressed: string
  children: string
}

/**
 * props for Underline component
 */
export interface UnderlineProps {
  children: string | JSX.Element | JSX.Element[]
}

/**
 * props for WordList component
 */
export interface WordListProps {
  data: Word[]
  err: FwewError
  isLoading: boolean
  onRefresh: () => void
  text: string
  toggleModal: (item: Word) => void
  posFilterEnabled: boolean
}

/**
 * props for If component
 */
export interface IfProps {
  condition: (() => boolean) | boolean
  children: any
}

/**
 * props for the Bold component
 */
export interface BoldProps {
  children: string | JSX.Element | JSX.Element[]
}

/**
 * props for the ListForm component
 */
export interface ListFormProps {
  onSearch: (searchText: string) => void
}

/**
 * props for the FlagIcon component
 */
export interface FlagIconProps {
  language: Language
}

/**
 * props for ResultCount component
 */
export interface ResultCountProps {
  data: Word[]
}

/**
 * props interface for NumberCard Component
 */
export interface NumberCardProps {
  data: FwewNumber
}

/**
 * props interface for InfoMessage Component
 */
export interface InfoMessageProps {
  error?: FwewError
  text?: string
  info?: string
}
