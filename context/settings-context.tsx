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
import { SettingsFwew, SettingsGlobal } from '../lib/interfaces/settings'
import { settingsFwew, settingsGlobal } from '../lib/settings'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { ISettingsContext } from '../lib/interfaces/settings-context'
import React from 'react'

/** Default state of the Settings Context */
const defaultStateSettings: ISettingsContext = {
  settingsGlobal,
  settingsFwew
}

/** Settings Context */
export const SettingsContext = React.createContext<ISettingsContext>(
  defaultStateSettings
)

/** Settings Context Store */
export class SettingsStore extends React.Component {
  state: ISettingsContext = defaultStateSettings

  componentDidMount() {
    this.getSettingsData().then((settingsData) => {
      this.setState((state) => ({ ...state, ...settingsData }))
    })
  }

  getSettingsData = async (): Promise<ISettingsContext> => {
    try {
      const settings: ISettingsContext = JSON.parse(
        await AsyncStorage.getItem('settings')
      )
      if (settings != null) {
        return settings
      } else {
        return defaultStateSettings
      }
    } catch (e) {
      // error reading value
    }
  }

  updateSettingsGlobal = (newSettingsGlobal: SettingsGlobal): void => {
    this.setState((state) => {
      const newState = {
        ...state,
        settingsGlobal: newSettingsGlobal
      }
      AsyncStorage.setItem('settings', JSON.stringify(newState))
      return newState
    })
  }

  updateSettingsFwew = (newSettingsFwew: SettingsFwew): void => {
    this.setState((state) => {
      const newState = {
        ...state,
        settingsFwew: newSettingsFwew
      }
      AsyncStorage.setItem('settings', JSON.stringify(newState))
      return newState
    })
  }

  render() {
    const { settingsGlobal, settingsFwew } = this.state
    return (
      <SettingsContext.Provider
        value={{
          settingsGlobal,
          settingsFwew,
          onUpdateSettingsGlobal: this.updateSettingsGlobal,
          onUpdateSettingsFwew: this.updateSettingsFwew
        }}
      >
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}
