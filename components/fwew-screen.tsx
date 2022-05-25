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
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

import EntryModalContent from './entry-modal-content'
import { FwewError } from '../lib/interfaces/fwew-error'
import FwewHeader from './fwew-header'
import If from './if'
import { Modal } from 'react-native-paper'
import { Orientation } from '../lib/interfaces/orientation'
import ResultCount from './result-count'
import { SettingsContext } from '../context'
import { Word } from '../lib/interfaces/word'
import WordList from './word-list'
import { apiRoot } from '../lib/settings'
import colors from '../lib/colors'
import { languageNames } from '../lib/i18n'
import { ui } from '../lib/i18n'
import { useOrientation } from '../lib/hooks/useOrientation'

/**
 * FwewScreen Component
 *
 * Screen where the user can search for specific word(s)
 */
function FwewScreen({ navigation, route }): JSX.Element {
  const { q } = route.params || ''
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState(q)
  const [data, setData] = useState([] as Word[])
  const [err, setErr] = useState({} as FwewError)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({} as Word)
  const { settingsGlobal, settingsFwew, onUpdateSettingsFwew } = useContext(
    SettingsContext
  )
  const { isReverseEnabled } = settingsFwew
  const { languageCodeUI, languageCode } = settingsGlobal
  const strings = ui[languageCodeUI].fwewScreen
  const languageUIName = languageNames[languageCode]
  const orientation = useOrientation()
  const windowWidth = Dimensions.get('window').width
  const mainAlign = windowWidth > 480 ? 'center' : null
  const modalWidth = windowWidth > 480 ? '50%' : null

  // fetch data and re-render after this component is mounted to the DOM and rendered in initial loading state
  useEffect(() => {
    if (q !== '') {
      searchData(q)
    } else {
      fetchData(`${apiRoot}/list/`)
    }
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <FwewHeader
          searchDataFn={searchData}
          inputPlaceholderTextFn={getInputPlaceholderText}
          text={text}
          toggleReverseFn={toggleReverse}
          isReverseEnabled={isReverseEnabled}
        />
      )
    })
  }, [navigation, isReverseEnabled, text, strings, languageUIName, orientation])

  // toggles info modal visible when user taps a list entry or modal backdrop
  const toggleModal = (item: Word): void => {
    setIsModalVisible(!isModalVisible)
    setSelectedItem(item)
  }

  // calculates API endpoint for data fetching
  const getEndpoint = (text?: string): string => {
    if (!text) {
      return `${apiRoot}/list/`
    }
    const { languageCode } = settingsGlobal
    return isReverseEnabled
      ? `${apiRoot}/fwew/r/${languageCode}/${text}`
      : `${apiRoot}/fwew/${text}`
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
      fetchData(`${apiRoot}/list/`)
    } else {
      fetchData(getEndpoint(text))
    }
  }

  // called whenever the user clicks the swap button or toggles the switch in Fwew Settings to reverse search direction
  const toggleReverse = (): void => {
    const newIsReverseEnabled = !isReverseEnabled
    onUpdateSettingsFwew({
      ...settingsFwew,
      isReverseEnabled: newIsReverseEnabled
    })
    if (text === '') return
    if (newIsReverseEnabled) {
      fetchData(`${apiRoot}/fwew/r/${languageCode}/${text}`)
    } else {
      fetchData(`${apiRoot}/fwew/${text}`)
    }
  }

  // sets the search bar placeholder text depending on the currently selected tab / screen
  const getInputPlaceholderText = (): string => {
    return `${strings.search} ${isReverseEnabled ? languageUIName : "Na'vi"}...`
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
        <If condition={isLoading}>
          <ActivityIndicator
            style={styles.activityIndicator}
            size={'large'}
            color={colors.accent}
          />
        </If>
        <If condition={!isLoading}>
          <ResultCount data={data} />
          <WordList
            data={data}
            err={err}
            text={text}
            isLoading={isLoading}
            onRefresh={onRefresh}
            toggleModal={toggleModal}
            posFilterEnabled={true}
          />
        </If>
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

export default FwewScreen
