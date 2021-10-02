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
import {
  SettingsFwew,
  SettingsGlobal,
  SettingsList,
  SettingsRandom
} from './interfaces/settings'

import { Language } from './interfaces/i18n'

/**
 * the root endpoint of the Fwew API
 * see https://github.com/fwew/fwew-api for more info about the API
 */
export const apiRoot: string = 'https://tirea.learnnavi.org/api'

/**
 * Global settings
 *
 * languageCode: the default language code of the application
 */
export const settingsGlobal: SettingsGlobal = {
  languageCode: Language.EN,
  languageCodeUI: Language.EN
}

/**
 * Fwew Settings
 *
 * isReverseEnabled: the default search direction
 * posFilterText: the default value of the part of speech filter
 */
export const settingsFwew: SettingsFwew = {
  isReverseEnabled: false,
  posFilterText: 'all'
}

/**
 * List Settings
 *
 * values for each what/cond/spec in List
 */
export const settingsList: SettingsList = {
  word: {
    starts: '',
    ends: '',
    has: '',
    like: '',
    notStarts: '',
    notEnds: '',
    notHas: '',
    notLike: ''
  },
  pos: {
    starts: '',
    ends: '',
    is: '',
    has: '',
    like: '',
    notStarts: '',
    notEnds: '',
    notIs: '',
    notHas: '',
    notLike: ''
  },
  syllables: {
    lessThan: '0',
    lessThanEqual: '0',
    equal: '0',
    greaterThanEqual: '0',
    greaterThan: '0',
    notEqual: '0'
  },
  stress: {
    lessThan: '0',
    lessThanEqual: '0',
    equal: '0',
    greaterThanEqual: '0',
    greaterThan: '0',
    notEqual: '0'
  },
  words: {
    first: '0',
    last: '0'
  }
}

/**
 * Random Settings
 *
 * values for each what/cond/spec in Random
 */
export const settingsRandom: SettingsRandom = {
  numRandomWords: '10',
  word: {
    starts: '',
    ends: '',
    has: '',
    like: '',
    notStarts: '',
    notEnds: '',
    notHas: '',
    notLike: ''
  },
  pos: {
    starts: '',
    ends: '',
    is: '',
    has: '',
    like: '',
    notStarts: '',
    notEnds: '',
    notIs: '',
    notHas: '',
    notLike: ''
  },
  syllables: {
    lessThan: '0',
    lessThanEqual: '0',
    equal: '0',
    greaterThanEqual: '0',
    greaterThan: '0',
    notEqual: '0'
  },
  stress: {
    lessThan: '0',
    lessThanEqual: '0',
    equal: '0',
    greaterThanEqual: '0',
    greaterThan: '0',
    notEqual: '0'
  },
  words: {
    first: '0',
    last: '0'
  }
}
