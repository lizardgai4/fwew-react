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
import { SettingsFwew, SettingsGlobal, SettingsNumber } from './interfaces/settings'

import { Language } from './interfaces/i18n'

/**
 * the root endpoint of the Fwew API
 * see https://github.com/fwew/fwew-api for more info about the API
 */
export const apiRoot: string = 'http://localhost:10000/api'

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

export const settingsNumber: SettingsNumber = {
  isReverseEnabled: false
}