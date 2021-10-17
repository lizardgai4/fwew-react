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
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { Fragment, useLayoutEffect, useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

import ActionBar from './action-bar'
import EntryModalContent from './entry-modal-content'
import { FwewError } from '../lib/interfaces/fwew-error'
import If from './if'
import ListForm from './list-form'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Modal } from 'react-native-paper'
import RandomForm from './random-form'
import ResultCount from './result-count'
import { ScreenProps } from '../lib/interfaces/props'
import { Word } from '../lib/interfaces/word'
import WordList from './word-list'
import colors from '../lib/colors'

/**
 * Screen component
 *
 * The layout and logic for List and Random screens
 */
function Screen({ apiUrl, screenType, navigation }: ScreenProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')
  const [data, setData] = useState([] as Word[])
  const [err, setErr] = useState({} as FwewError)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({} as Word)

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <View>
          {/* status bar */}
          <SafeAreaView style={styles.safeStatusBar} />
          <StatusBar barStyle="light-content" />
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
          </ActionBar>
        </View>
      )
    })
  }, [navigation, text])

  // toggles info modal visible when user taps a list entry or modal backdrop
  const toggleModal = (item: Word): void => {
    setIsModalVisible(!isModalVisible)
    setSelectedItem(item)
  }

  // calculates API endpoint for data fetching
  const getEndpoint = (text?: string): string => {
    if (screenType === 'random') {
      if (text === 'random') {
        return `${apiUrl}0`
      }
      if (text.match(/^random where /)) {
        return `${apiUrl}${text.replace(/^random where /, '0/')}`
      }
      return `${apiUrl}${text.replace(/^(\d+) where /, '$1/')}`
    }
    return `${apiUrl}${text}`
  }

  // called when the user pulls down on the word list after it has rendered
  const onRefresh = () => {
    setData([])
    fetchData(getEndpoint(text))
  }

  // fetches Na'vi word data from the Fwew API and updates the state data accordingly
  const fetchData = (endpoint: string): void => {
    setIsLoading(true)
    axios
      .get<Word[]>(encodeURI(endpoint))
      .then((response: AxiosResponse<Word[]>) => {
        setData(response.data)
        setIsLoading(false)
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) {
          const serverError = e as AxiosError<FwewError>
          setErr(serverError.response.data)
          setData([])
          setIsLoading(false)
        }
      })
  }

  // called whenever the user types or modifies text in the text input of the action bar / app bar
  const searchData = (text: string): void => {
    setText(text)
    if (text === '') {
      setData([])
    } else {
      fetchData(getEndpoint(text))
    }
  }

  // sets the search bar placeholder text depending on the currently selected tab / screen
  const getInputPlaceholderText = (): string => {
    switch (screenType) {
      case 'list':
        return 'word starts r and pos is vtr.'
      case 'random':
        return '10 where pos is vtr.'
      default:
        return ''
    }
  }

  return (
    <Fragment>
      {/* main content */}
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.mainView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.mainView}
          >
            <If condition={isLoading}>
              <ActivityIndicator
                style={styles.activityIndicator}
                size={'large'}
                color={colors.accent}
              />
            </If>
            <If condition={!isLoading}>
              <If condition={!!text}>
                <ResultCount data={data} />
                <WordList
                  data={data}
                  err={err}
                  text={text}
                  isLoading={isLoading}
                  onRefresh={onRefresh}
                  toggleModal={toggleModal}
                  posFilterEnabled={false}
                />
              </If>
              <If condition={!text}>
                <If condition={screenType === 'list'}>
                  <ListForm onSearch={searchData} />
                </If>
                <If condition={screenType === 'random'}>
                  <RandomForm onSearch={searchData} />
                </If>
              </If>
            </If>
          </KeyboardAvoidingView>
          {/* word information modal when user taps an entry in the list */}
          <Modal
            visible={isModalVisible}
            onDismiss={() => toggleModal(selectedItem)}
            contentContainerStyle={styles.modalContainerStyle}
          >
            <EntryModalContent entry={selectedItem} />
          </Modal>
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
    backgroundColor: colors.primary
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.screenBackground
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

export default Screen
