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
  SettingsList
} from '../lib/interfaces/settings'
import { settingsFwew, settingsGlobal, settingsList } from '../lib/settings'

import { ISettingsContext } from '../lib/interfaces/settings-context'
import React from 'react'

/** Default state of the Settings Context */
const defaultStateSettings: ISettingsContext = {
  settingsGlobal,
  settingsFwew,
  settingsList
}

/** Settings Context */
export const SettingsContext = React.createContext<ISettingsContext>(
  defaultStateSettings
)

/** Settings Context Store */
export class SettingsStore extends React.Component {
  state: ISettingsContext = defaultStateSettings

  updateSettingsGlobal = (newSettingsGlobal: SettingsGlobal): void => {
    this.setState((state) => ({
      ...state,
      settingsGlobal: newSettingsGlobal
    }))
  }

  updateSettingsFwew = (newSettingsFwew: SettingsFwew): void => {
    this.setState((state) => ({
      ...state,
      settingsFwew: newSettingsFwew
    }))
  }

  updateSettingsList = (newSettingsList: SettingsList): void => {
    this.setState((state) => ({
      ...state,
      settingsFwew: newSettingsList
    }))
  }

  render() {
    const { settingsGlobal, settingsFwew, settingsList } = this.state
    return (
      <SettingsContext.Provider
        value={{
          settingsGlobal,
          settingsFwew,
          settingsList,
          onUpdateSettingsGlobal: this.updateSettingsGlobal,
          onUpdateSettingsFwew: this.updateSettingsFwew,
          onUpdateSettingsList: this.updateSettingsList
        }}
      >
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}
