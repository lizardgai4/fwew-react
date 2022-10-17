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
import axios, { AxiosError, AxiosResponse } from 'axios'
import React, { useContext, useLayoutEffect, useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native'
import { Modal } from 'react-native-paper'
import { SettingsContext } from '../context'
import { textToWCS } from '../lib/functions'
import colors from '../lib/colors'
import { useOrientation } from '../lib/hooks/useOrientation'
import { ui } from '../lib/i18n'
import { FwewError } from '../lib/interfaces/fwew-error'
import { ListWCS } from '../lib/interfaces/list-wcs'
import { Orientation } from '../lib/interfaces/orientation'
import { ScreenProps } from '../lib/interfaces/props'
import { Word } from '../lib/interfaces/word'
import EntryModalContent from './entry-modal-content'
import If from './if'
import ListForm from './list-form'
import QueryCard from './query-card'
import RandomForm from './random-form'
import ResultCount from './result-count'
import TitleHeader from './title-header'
import WordList from './word-list'

/**
 * Screen component
 *
 * The layout and logic for List and Random screens
 */
function Screen({ apiUrl, screenType, navigation }: ScreenProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')
  const [array, setArray] = useState([] as ListWCS[])
  const [numRandomWords, setNumRandomWords] = useState('')
  const [data, setData] = useState([] as Word[])
  const [err, setErr] = useState({} as FwewError)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({} as Word)
  const orientation = useOrientation()
  const windowWidth = Dimensions.get('window').width
  const mainAlign = windowWidth > 480 ? 'center' : null
  const modalWidth = windowWidth > 480 ? '80%' : null
  const { settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].drawerNavigator

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (<TitleHeader title={strings[screenType]} />)
    })
  }, [navigation, text, orientation, strings])

  // toggles info modal visible when user taps a list entry or modal backdrop
  const toggleModal = (item: Word): void => {
    setIsModalVisible(!isModalVisible)
    setSelectedItem(item)
  }

  // calculates API endpoint for data fetching
  const getEndpoint = (text?: string): string => {
    if (screenType === 'random') {
      if (text === 'random') {
        return `${apiUrl}/0`
      }
      if (text.match(/^random where /)) {
        return `${apiUrl}/${text.replace(/^random where /, '0/')}`
      }
      return `${apiUrl}/${text.replace(/^(\d+) where /, '$1/')}`
    }
    return `${apiUrl}/${text}`
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

  const handleQueryCardClear = (): void => {
    setArray([])
    setText('')
    setNumRandomWords('')
  }

  const handleQueryCardEdit = (): void => {
    const splitText = text.split(' ')
    if (splitText.length > 0) {
      setNumRandomWords(splitText[0])
    }
    setArray(textToWCS(text))
    setText('')
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
              <QueryCard queryText={text} onEdit={handleQueryCardEdit} onClear={handleQueryCardClear} />
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
                <ListForm wcsArray={array} onSearch={searchData} />
              </If>
              <If condition={screenType === 'random'}>
                <RandomForm numRandomWords={numRandomWords} wcsArray={array} onSearch={searchData} />
              </If>
            </If>
          </If>
        </KeyboardAvoidingView>
        {/* word information modal when user taps an entry in the list */}
        <Modal
          visible={isModalVisible}
          onDismiss={() => toggleModal(selectedItem)}
          style={{ justifyContent: mainAlign, alignItems: mainAlign }}
          contentContainerStyle={[
            styles.modalContainerStyle,
            { width: modalWidth }
          ]}
        >
          <EntryModalContent entry={selectedItem} />
        </Modal>
      </View>
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

export default Screen
