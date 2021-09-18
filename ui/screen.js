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
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { Fragment, useContext, useEffect, useState } from 'react'

import ActionBar from './action-bar'
import EntryModalContent from './entry-modal-content'
import FwewSettings from './fwew-settings'
import ListSettings from './list-settings'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'
import RandomSettings from './random-settings'
import { SettingsContext } from '../context'
import WordList from './word-list'
import axios from 'axios'
import colors from './colors'
import fwew from '../assets/fwew.png'

// The main content area of the app
const Screen = (props) => {
  const { ApiUrl, screenType } = props
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState('')
  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isSettingsVisible, setIsSettingsVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const {
    settingsGlobal,
    settingsFwew,
    settingsList,
    onUpdateSettingsGlobal,
    onUpdateSettingsFwew,
    onUpdateSettingsList
  } = useContext(SettingsContext)

  // toggles settings modal visible when user taps the settings icon in the app bar
  const toggleSettings = () => {
    setIsSettingsVisible(!isSettingsVisible)
  }

  // toggles info modal visible when user taps a list entry or modal backdrop
  const toggleModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedItem(item)
  }

  // calculates API endpoint for data fetching
  const getEndpoint = (text) => {
    let endpoint
    if (screenType === 'fwew') {
      const { languageCode } = settingsGlobal
      endpoint = settingsFwew.isReverseEnabled
        ? `${ApiUrl}r/${languageCode}/${text}`
        : `${ApiUrl}${text}`
    } else {
      endpoint = `${ApiUrl}${text}`
    }
    return endpoint
  }

  // called when the user pulls down on the word list after it has rendered
  const onRefresh = () => {
    setData([])
    fetchData(getEndpoint())
  }

  // fetches Na'vi word data from the Fwew API and updates the state data accordingly
  const fetchData = (endpoint) => {
    setIsLoading(true)
    axios
      .get(endpoint)
      .then((response) => {
        setIsLoading(false)
        setData(response.data)
      })
      .catch((e) => {
        setIsLoading(false)
        setData([])
      })
  }

  // fetch data and re-render after this component is mounted to the DOM and rendered in initial loading state
  useEffect(() => {
    fetchData(`${ApiUrl}${text}`)
  }, [])

  // called whenever the user types or modifies text in the text input of the action bar / app bar
  const searchData = (text) => {
    setText(text)
    fetchData(getEndpoint(text))
  }

  const toggleReverse = () => {
    const { isReverseEnabled } = settingsFwew
    onUpdateSettingsFwew({
      ...settingsFwew,
      isReverseEnabled: !isReverseEnabled
    })
  }

  const getInputPlaceholderText = () => {
    switch (screenType) {
      case 'fwew':
        return `search ${isReverseEnabled ? 'English' : "Na'vi"}...`
      case 'list':
        return 'word starts r and pos is vtr.'
      case 'random':
        return '10/pos is vtr.'
      case 'settings':
        return ''
      default:
        return 'search...'
    }
  }

  const { posFilterText, isReverseEnabled } = settingsFwew
  if (posFilterText !== 'all') {
    if (Array.isArray(data) && data.length) {
      data = data.filter((word) => word.PartOfSpeech === posFilterText)
    }
  }
  console.log(getEndpoint())
  return (
    <Fragment>
      {/* status bar */}
      <SafeAreaView style={styles.safeStatusBar} />
      <StatusBar barStyle="light-content" />

      {/* main content */}
      <SafeAreaView style={styles.safeContainer}>
        <View style={{ flex: 1 }}>
          <ActionBar>
            {/* settings button that will open settings modal */}
            <TouchableOpacity style={styles.menu} onPress={toggleSettings}>
              <MaterialIcons
                name="menu"
                size={36}
                color={colors.actionBarIconFill}
              />
            </TouchableOpacity>
            <Image source={fwew} style={styles.icon} />
            <TextInput
              onChangeText={searchData}
              placeholder={getInputPlaceholderText()}
              autoCapitalize={'none'}
              autoCorrect={false}
              style={styles.input}
            />
            {/* Fwew Search direction toggle */}
            {screenType === 'fwew' && (
              <TouchableOpacity onPress={toggleReverse}>
                <MaterialIcons
                  name={
                    isReverseEnabled ? 'swap-horizontal-circle' : 'swap-horiz'
                  }
                  size={36}
                  color={colors.actionBarIconFill}
                />
              </TouchableOpacity>
            )}
          </ActionBar>

          {/*
            render activity indicator when loading
            render word list when finished loading
            */}
          {isLoading ? (
            <ActivityIndicator style={{ marginTop: 16 }} />
          ) : (
            <WordList
              data={data}
              text={text}
              isLoading={isLoading}
              onRefresh={onRefresh}
              toggleModal={toggleModal}
            />
          )}

          {/* word information modal when user taps an entry in the list */}
          <Modal
            isVisible={isModalVisible}
            animationIn="slideInRight"
            animationOut="slideOutRight"
            onBackButtonPress={() => toggleModal(selectedItem)}
            onBackdropPress={() => toggleModal(selectedItem)}
            backdropTransitionOutTiming={0}
          >
            <EntryModalContent
              entry={selectedItem}
              onModalBackButtonPress={() => toggleModal(selectedItem)}
            />
          </Modal>

          {/* settings modal when user taps on the settings icon in the app bar */}
          <Modal
            isVisible={isSettingsVisible}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            onBackButtonPress={toggleSettings}
            onBackdropPress={toggleSettings}
            backdropTransitionOutTiming={0}
          >
            {screenType === 'fwew' && (
              <FwewSettings
                settingsGlobal={settingsGlobal}
                settingsFwew={settingsFwew}
                onUpdateSettingsGlobal={onUpdateSettingsGlobal}
                onUpdateSettingsFwew={onUpdateSettingsFwew}
                onSettingsBackButtonPress={toggleSettings}
              />
            )}
            {screenType === 'list' && (
              <ListSettings
                settingsGlobal={settingsGlobal}
                settingsList={settingsList}
                onUpdateSettingsGlobal={onUpdateSettingsGlobal}
                onUpdateSettingsList={onUpdateSettingsList}
                onSettingsBackButtonPress={toggleSettings}
              />
            )}
            {screenType === 'random' && (
              <RandomSettings onSettingsBackButtonPress={toggleSettings} />
            )}
          </Modal>
        </View>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  menu: {
    marginLeft: 8
  },
  icon: {
    marginLeft: 8,
    width: 48,
    height: 48
  },
  safeStatusBar: {
    flex: 0,
    backgroundColor: colors.secondary
  },
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.screenBackground,
    alignItems: 'stretch'
  },
  input: {
    height: 40,
    flex: 1,
    paddingLeft: 16,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: colors.inputBackground,
    borderRadius: 16
  }
})

export default Screen
