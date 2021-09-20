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
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { Fragment, useContext, useEffect, useState } from 'react'

import ActionBar from './action-bar'
import EntryModalContent from './entry-modal-content'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'
import { SettingsContext } from '../context'
import WordList from './word-list'
import axios from 'axios'
import colors from './colors'

// screen where the user can search for specific word(s)
const FwewScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState('')
  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const { settingsGlobal, settingsFwew, onUpdateSettingsFwew } = useContext(
    SettingsContext
  )
  const { isReverseEnabled } = settingsFwew

  // toggles info modal visible when user taps a list entry or modal backdrop
  const toggleModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedItem(item)
  }

  // calculates API endpoint for data fetching
  const getEndpoint = (text) => {
    const apiUrl = 'https://tirea.learnnavi.org/api/fwew/'
    const { languageCode } = settingsGlobal
    return isReverseEnabled
      ? `${apiUrl}r/${languageCode}/${text}`
      : `${apiUrl}${text}`
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
      .catch((_e) => {
        setIsLoading(false)
        setData([])
      })
  }

  // fetch data and re-render after this component is mounted to the DOM and rendered in initial loading state
  useEffect(() => {
    fetchData('https://tirea.learnnavi.org/api/list/')
  }, [])

  // called whenever the user types or modifies text in the text input of the action bar / app bar
  const searchData = (text) => {
    setText(text)
    fetchData(getEndpoint(text))
  }

  // called whenever the user clicks the swap button or toggles the switch in Fwew Settings to reverse search direction
  const toggleReverse = () => {
    onUpdateSettingsFwew({
      ...settingsFwew,
      isReverseEnabled: !isReverseEnabled
    })
  }

  // sets the search bar placeholder text depending on the currently selected tab / screen
  const getInputPlaceholderText = () => {
    return `search ${isReverseEnabled ? 'English' : "Na'vi"}...`
  }

  return (
    <Fragment>
      {/* status bar */}
      <SafeAreaView style={styles.safeStatusBar} />
      <StatusBar barStyle="light-content" />

      {/* main content */}
      <SafeAreaView style={styles.safeContainer}>
        <View style={{ flex: 1 }}>
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
              {Platform.OS === 'android' &&
                (text != null && text.length > 0 ? (
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
                ) : null)}
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
              posFilterEnabled={true}
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
  parent: {
    width: '75%',
    borderColor: colors.secondary,
    backgroundColor: colors.inputBackground,
    borderRadius: 16,
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
  }
})

export default FwewScreen
