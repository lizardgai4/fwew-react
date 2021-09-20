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
  settingsFwew,
  settingsGlobal,
  settingsList,
  settingsRandom
} from './settings'

import React from 'react'

export const SettingsContext = React.createContext()

export class SettingsStore extends React.Component {
  state = {
    settingsGlobal,
    settingsFwew,
    settingsList,
    settingsRandom
  }

  updateSettingsGlobal = (newSettingsGlobal) => {
    this.setState((state) => ({
      ...this.state,
      settingsGlobal: newSettingsGlobal
    }))
  }

  updateSettingsFwew = (newSettingsFwew) => {
    this.setState((state) => ({
      ...this.state,
      settingsFwew: newSettingsFwew
    }))
  }

  updateSettingsList = (newSettingsList) => {
    this.setState((state) => ({
      ...this.state,
      settingsFwew: newSettingsList
    }))
  }

  updateSettingsRandom = (newSettingsRandom) => {
    this.setState((state) => ({
      ...this.state,
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

export const StateContext = React.createContext()

export class StateStore extends React.Component {
  state = { dataCache: [] }

  updateDataCache = (newDataCache) => {
    this.setState((state) => ({ dataCache: newDataCache }))
  }

  render() {
    const { dataCache } = this.state
    return (
      <StateContext.Provider value={{ dataCache }}>
        {this.props.children}
      </StateContext.Provider>
    )
  }
}
