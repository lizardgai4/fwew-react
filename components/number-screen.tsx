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
  ActivityIndicator,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

import ActionBar from './action-bar'
import { FwewError } from '../lib/interfaces/fwew-error'
import { FwewNumber } from '../lib/interfaces/fwew-number'
import If from './if'
import InfoMessage from './info-message'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NumberCard from './number-card'
import { apiRoot } from '../lib/settings'
import colors from '../lib/colors'

/**
 * NumberScreen component
 *
 * Convert and translate numbers
 */
function NumberScreen({ navigation }): JSX.Element {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isReverseEnabled, setIsReverseEnabled] = useState(false)
  const [data, setData] = useState(null as FwewNumber)
  const [err, setErr] = useState(null as FwewError)

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        const windowWidth = Dimensions.get('window').width
        return (
          <View>
            {/* status bar */}
            <SafeAreaView style={styles.safeStatusBar} />
            <StatusBar barStyle="light-content" />
            <ActionBar>
              <If condition={windowWidth > 480}>
                <View style={{ flex: 0.5 }}></View>
              </If>
              <View style={styles.parent}>
                {/* search bar */}
                <TextInput
                  onChangeText={searchData}
                  placeholder={getInputPlaceholderText()}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  style={styles.input}
                  clearButtonMode="always"
                  value={text}
                />
                {/* search bar clear input button */}
                <If condition={Platform.OS !== 'ios' && !!text}>
                  <TouchableOpacity
                    style={styles.closeButtonParent}
                    onPress={() => searchData('')}
                  >
                    <MaterialIcons
                      style={styles.closeButton}
                      name="cancel"
                      size={18}
                      color={'#fff'}
                    />
                  </TouchableOpacity>
                </If>
              </View>
              <If condition={windowWidth > 480}>
                <View style={{ flex: 0.5 }}></View>
              </If>
              {/* Fwew Search direction toggle */}
              <TouchableOpacity onPress={toggleReverse}>
                <MaterialIcons
                  name={
                    isReverseEnabled ? 'swap-horizontal-circle' : 'swap-horiz'
                  }
                  size={36}
                  color={colors.actionBarIconFill}
                />
              </TouchableOpacity>
            </ActionBar>
          </View>
        )
      }
    })
  }, [navigation, isReverseEnabled, text])

  // called whenever the user clicks the swap button or toggles the switch in Fwew Settings to reverse search direction
  const toggleReverse = (): void => {
    const newIsReverseEnabled = !isReverseEnabled
    setIsReverseEnabled(!isReverseEnabled)
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
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainView}>{content}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeStatusBar: {
    flex: 0,
    backgroundColor: colors.secondary
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.primary
  },
  parent: {
    flex: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 8
  },
  input: {
    height: 40,
    flex: 1,
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8
  },
  closeButton: {
    color: colors.inputCloseButton,
    height: 18,
    width: 18,
    marginRight: 8
  },
  closeButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
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
