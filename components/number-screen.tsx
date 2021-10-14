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
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { Fragment, useState } from 'react'

import ActionBar from './action-bar'
import Bold from './bold'
import { Card } from 'react-native-paper'
import { FwewError } from '../lib/interfaces/fwew-error'
import { FwewNumber } from '../lib/interfaces/fwew-number'
import If from './if'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios'
import colors from '../lib/colors'

/**
 * NumberScreen component
 *
 * Convert and translate numbers
 */
function NumberScreen(): JSX.Element {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isReverseEnabled, setIsReverseEnabled] = useState(false)
  const [data, setData] = useState({} as FwewNumber)
  const [err, setErr] = useState({} as FwewError)

  // called whenever the user clicks the swap button or toggles the switch in Fwew Settings to reverse search direction
  const toggleReverse = (): void => {
    setIsReverseEnabled(!isReverseEnabled)
  }

  // fetches Na'vi word data from the Fwew API and updates the state data accordingly
  const fetchData = (endpoint: string): void => {
    setIsLoading(true)
    axios
      .get(endpoint)
      .then((response) => {
        setIsLoading(false)
        if (response.data) {
          setData(response.data)
        } else {
          setErr(response.data)
          setData({} as FwewNumber)
        }
      })
      .catch((_e) => {
        setIsLoading(false)
        setData({} as FwewNumber)
      })
  }

  // calculates API endpoint for data fetching
  const getEndpoint = (text?: string): string => {
    const apiUrl = 'https://tirea.learnnavi.org/api/number'
    return isReverseEnabled ? `${apiUrl}/r/${text}` : `${apiUrl}/${text}`
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

  return (
    <Fragment>
      {/* status bar */}
      <SafeAreaView style={styles.safeStatusBar} />
      <StatusBar barStyle="light-content" />

      {/* main content */}
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.mainView}>
          <ActionBar>
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
          <If condition={isLoading}>
            <ActivityIndicator
              style={styles.activityIndicator}
              size={'large'}
              color={colors.accent}
            />
          </If>
          <If condition={!isLoading}>
            <View>
              <If condition={!!data.name}>
                {/* @ts-ignore */}
                <Card style={styles.card}>
                  {/* @ts-ignore */}
                  <Card.Title title={data.name} />
                  <Card.Content style={styles.cardContent}>
                    <Text style={styles.text}>
                      <Bold>decimal</Bold>: {data.decimal}
                    </Text>
                    <Text style={styles.text}>
                      <Bold>octal</Bold>: {data.octal}
                    </Text>
                  </Card.Content>
                </Card>
              </If>
              <If condition={!!err}>
                <Text>{err.message}</Text>
              </If>
            </View>
          </If>
        </View>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  safeStatusBar: {
    flex: 0,
    backgroundColor: colors.secondary
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.screenBackground
  },
  mainView: {
    flex: 1
  },
  parent: {
    width: '75%',
    borderColor: colors.secondary,
    backgroundColor: colors.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    height: 40,
    flex: 1,
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8,
    width: '90%'
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
  },
  card: {
    margin: 16,
    borderRadius: 16,
    borderColor: colors.secondary,
    borderWidth: 1.5
  },
  cardContent: {
    margin: 8
  },
  text: {
    fontSize: 16,
    padding: 8
  }
})

export default NumberScreen
