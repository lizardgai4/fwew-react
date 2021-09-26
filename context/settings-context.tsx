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
} from '../lib/interfaces/settings'
import {
  settingsFwew,
  settingsGlobal,
  settingsList,
  settingsRandom
} from './settings'

import React from 'react'

/* Settings Context */

interface ISettingsContext {
  settingsGlobal: SettingsGlobal
  settingsFwew: SettingsFwew
  settingsList: SettingsList
  settingsRandom: SettingsRandom
  onUpdateSettingsGlobal?: (s: SettingsGlobal) => void
  onUpdateSettingsFwew?: (s: SettingsFwew) => void
  onUpdateSettingsList?: (s: SettingsList) => void
  onUpdateSettingsRandom?: (s: SettingsRandom) => void
}

const defaultStateSettings: ISettingsContext = {
  settingsGlobal,
  settingsFwew,
  settingsList,
  settingsRandom
}

export const SettingsContext = React.createContext<ISettingsContext>(
  defaultStateSettings
)

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

  updateSettingsRandom = (newSettingsRandom: SettingsRandom): void => {
    this.setState((state) => ({
      ...state,
      settingsFwew: newSettingsRandom
    }))
  }

  render() {
    const {
      settingsGlobal,
      settingsFwew,
      settingsList,
      settingsRandom
    } = this.state
    return (
      <SettingsContext.Provider
        value={{
          settingsGlobal,
          settingsFwew,
          settingsList,
          settingsRandom,
          onUpdateSettingsGlobal: this.updateSettingsGlobal,
          onUpdateSettingsFwew: this.updateSettingsFwew,
          onUpdateSettingsList: this.updateSettingsList,
          onUpdateSettingsRandom: this.updateSettingsRandom
        }}
      >
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}
