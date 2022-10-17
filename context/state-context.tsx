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
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IStateContext } from '../lib/interfaces/state-context'
import React from 'react'
import { Word } from '../lib/interfaces/word'

/** Default state of the State Context */
const defaultStateData: IStateContext = {
  savedWords: new Set<Word>()
}

/** State Context */
export const StateContext = React.createContext<IStateContext>(defaultStateData)

/** State Context Store */
export class StateStore extends React.Component {
  state: IStateContext = defaultStateData

  componentDidMount() {
    this.getStateData().then((stateData) => {
      this.setState((state) => ({ ...state, ...stateData }))
    })
  }

  getStateData = async (): Promise<IStateContext> => {
    try {
      const savedWordsArr: Word[] = JSON.parse(
        await AsyncStorage.getItem('savedWords')
      )
      if (savedWordsArr != null) {
        return { savedWords: new Set(savedWordsArr) }
      } else {
        return defaultStateData
      }
    } catch (e) {
      // error reading value
    }
  }

  updateSavedWords = (newSavedWords: Set<Word>): void => {
    const newState: IStateContext = { savedWords: newSavedWords }
    this.setState((state) => ({ ...state, ...newState }))
    AsyncStorage.setItem('savedWords', JSON.stringify([...newState.savedWords]))
  }

  render() {
    const { savedWords } = this.state
    return (
      <StateContext.Provider
        value={{
          savedWords,
          onUpdateSavedWords: this.updateSavedWords
        }}
      >
        {this.props.children}
      </StateContext.Provider>
    )
  }
}
