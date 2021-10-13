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
import React, { Fragment, useContext, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

import ActionBar from './action-bar'
import EntryModalContent from './entry-modal-content'
import If from './if'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Modal } from 'react-native-paper'
import { SettingsContext } from '../context'
import { StateContext } from '../context'
import { Word } from '../lib/interfaces/word'
import WordList from './word-list'
import colors from '../lib/colors'
import { ui } from '../lib/i18n'

/**
 * SavedScreen component
 *
 * Displays list of entries saved by the user
 */
function SavedScreen(): JSX.Element {
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

  // toggles info modal visible when user taps a list entry or modal backdrop
  const toggleModal = (item: Word): void => {
    setIsModalVisible(!isModalVisible)
    setSelectedItem(item)
  }

  // called when the user pulls down on the word list after it has rendered
  const onRefresh = () => {}

  return (
    <Fragment>
      {/* status bar */}
      <SafeAreaView style={styles.safeStatusBar} />
      <StatusBar barStyle="light-content" />

      {/* main content */}
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.mainView}>
          <ActionBar>
            <View style={styles.titleParent}>
              <Text style={styles.title}>{strings.title}</Text>
            </View>
          </ActionBar>

          {/* word list or instructional message */}
          <If condition={data.length > 0}>
            <Text style={styles.resultCount}>{data.length} results</Text>
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
          <If condition={data.length === 0}>
            <View style={styles.msgParent}>
              <MaterialIcons
                name="info"
                size={48}
                color={colors.infoMessageIcon}
              />
              <Text style={styles.msgText}>{strings.infoText}</Text>
            </View>
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
  msgParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  msgText: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16
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

export default SavedScreen
