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
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useLayoutEffect, useContext, useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

import { FwewError } from '../lib/interfaces/fwew-error'
import { FwewNumber } from '../lib/interfaces/fwew-number'
import InfoMessage from './info-message'
import NumberCard from './number-card'
import NumberHeader from './number-header'
import { Orientation } from '../lib/interfaces/orientation'
import { apiRoot } from '../lib/settings'
import colors from '../lib/colors'
import { useOrientation } from '../lib/hooks/useOrientation'
import { SettingsContext } from '../context'

/**
 * NumberScreen component
 *
 * Convert and translate numbers
 */
function NumberScreen({ navigation }): JSX.Element {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { settingsNumber, onUpdateSettingsNumber } = useContext(SettingsContext)
  const { isReverseEnabled } = settingsNumber
  const [data, setData] = useState(null as FwewNumber)
  const [err, setErr] = useState(null as FwewError)
  const orientation = useOrientation()

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <NumberHeader
          searchDataFn={searchData}
          inputPlaceholderTextFn={getInputPlaceholderText}
          text={text}
          toggleReverseFn={toggleReverse}
          isReverseEnabled={isReverseEnabled}
        />
      )
    })
  }, [navigation, isReverseEnabled, text])

  // called whenever the user clicks the swap button or toggles the switch in Fwew Settings to reverse search direction
  const toggleReverse = (): void => {
    const newIsReverseEnabled = !isReverseEnabled
    onUpdateSettingsNumber({
      ...settingsNumber,
      isReverseEnabled: newIsReverseEnabled
    })
    if (text === '') return
    if (newIsReverseEnabled) {
      fetchData(`${apiRoot}/number/r/${text}`)
    } else {
      fetchData(`${apiRoot}/number/${text}`)
    }
  }

  // fetches Na'vi word data from the Fwew API and updates the state data accordingly
  const fetchData = (endpoint: string): void => {
    setIsLoading(true)
    axios
      .get<FwewNumber>(endpoint)
      .then((response: AxiosResponse<FwewNumber>) => {
        setIsLoading(false)
        if (response.data) {
          setData(response.data)
          setErr(null as FwewError)
        }
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) {
          const serverError = e as AxiosError<FwewError>
          if (serverError && serverError.response) {
            setIsLoading(false)
            setErr(serverError.response.data)
            setData(null as FwewNumber)
          }
        }
      })
  }

  // calculates API endpoint for data fetching
  const getEndpoint = (text?: string): string => {
    return isReverseEnabled
      ? `${apiRoot}/number/r/${text}`
      : `${apiRoot}/number/${text}`
  }

  // called whenever the user types or modifies text in the text input of the action bar / app bar
  const searchData = (text: string): void => {
    setText(text)
    if (!!text) {
      fetchData(getEndpoint(text))
    } else {
      setData({} as FwewNumber)
    }
  }

  // sets the search bar placeholder text depending on reverse being set or not
  const getInputPlaceholderText = (): string => {
    if (isReverseEnabled) {
      return '1337'
    }
    return 'pxevofu'
  }

  let content: JSX.Element = null

  if (isLoading) {
    content = (
      <ActivityIndicator
        style={styles.activityIndicator}
        size={'large'}
        color={colors.accent}
      />
    )
  } else if (text && data && !err) {
    content = <NumberCard data={data} />
  } else if (text && !data && err) {
    content = <InfoMessage error={err} text={text} />
  }

  return (
    /* main content */
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          orientation === Orientation.PORTRAIT
            ? colors.primary
            : colors.screenBackground
      }}
    >
      <View style={styles.mainView}>{content}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.screenBackground
  },
  activityIndicator: {
    marginTop: 16
  },
  resultCount: {
    alignSelf: 'center',
    marginTop: 16,
    fontSize: 16
  },
  modalContainerStyle: {
    padding: 16,
    shadowOpacity: 0
  }
})

export default NumberScreen
