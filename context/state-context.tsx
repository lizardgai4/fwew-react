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
import { IStateContext } from '../lib/interfaces/state-context'
import React from 'react'
import { Word } from '../lib/interfaces/word'

/** Default state of the State Context */
const defaultStateData: IStateContext = {
  dataCache: new Set<Word>()
}

/** State Context */
export const StateContext = React.createContext<IStateContext>(defaultStateData)

/** State Context Store */
export class StateStore extends React.Component {
  state: IStateContext = defaultStateData

  updateDataCache = (newDataCache: Set<Word>) => {
    this.setState((state) => ({ ...state, dataCache: newDataCache }))
  }

  render() {
    const { dataCache } = this.state
    return (
      <StateContext.Provider
        value={{
          dataCache,
          onUpdateDataCache: this.updateDataCache
        }}
      >
        {this.props.children}
      </StateContext.Provider>
    )
  }
}
