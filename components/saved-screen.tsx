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
import React, { useContext, useLayoutEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Modal } from 'react-native-paper'
import { SettingsContext, StateContext } from '../context'
import colors from '../lib/colors'
import { useOrientation } from '../lib/hooks/useOrientation'
import { ui } from '../lib/i18n'
import { Orientation } from '../lib/interfaces/orientation'
import { Word } from '../lib/interfaces/word'
import EntryModalContent from './entry-modal-content'
import If from './if'
import InfoMessage from './info-message'
import ResultCount from './result-count'
import TitleHeader from './title-header'
import WordList from './word-list'

/**
 * SavedScreen component
 *
 * Displays list of entries saved by the user
 */
function SavedScreen({ navigation }): JSX.Element {
  const { savedWords } = useContext(StateContext)
  const { settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].savedScreen
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({} as Word)
  const data = [...savedWords]
  const err = { message: null }
  const isLoading = false
  const text = ''
  const posFilterEnabled = false
  const orientation = useOrientation()

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (<TitleHeader title={strings.title} />)
    })
  }, [navigation])

  // toggles info modal visible when user taps a list entry or modal backdrop
  const toggleModal = (item: Word): void => {
    setIsModalVisible(!isModalVisible)
    setSelectedItem(item)
  }

  // called when the user pulls down on the word list after it has rendered
  const onRefresh = () => { }

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
        {/* word list or instructional message */}
        <If condition={data.length > 0}>
          <ResultCount data={data} />
          <WordList
            data={data}
            err={err}
            isLoading={isLoading}
            onRefresh={onRefresh}
            text={text}
            toggleModal={toggleModal}
            posFilterEnabled={posFilterEnabled}
          />
        </If>
        {/* info message about how to save words when there are none saved */}
        <If condition={data.length === 0}>
          <InfoMessage info={strings.infoText} />
        </If>
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
  )
}

const styles = StyleSheet.create({
  safeStatusBar: {
    flex: 0,
    backgroundColor: colors.secondary
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.screenBackground
  },
  titleParent: {
    marginRight: 48,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: colors.actionBarTitle,
    fontWeight: 'bold',
    fontSize: 20
  },
  modalContainerStyle: {
    padding: 16,
    shadowOpacity: 0
  }
})

export default SavedScreen
