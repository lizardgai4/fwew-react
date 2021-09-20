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
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { Fragment, useState } from 'react'

import ActionBar from './action-bar'
import EntryModalContent from './entry-modal-content'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'
import WordList from './word-list'
import axios from 'axios'
import colors from './colors'

// The main content area of the app
const Screen = ({ apiUrl, screenType }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState('')
  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

  // toggles info modal visible when user taps a list entry or modal backdrop
  const toggleModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedItem(item)
  }

  // calculates API endpoint for data fetching
  const getEndpoint = (text) => {
    return `${apiUrl}${text}`
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
      .get(encodeURI(endpoint))
      .then((response) => {
        setIsLoading(false)
        setData(response.data)
      })
      .catch((_e) => {
        setIsLoading(false)
        setData([])
      })
  }

  // called whenever the user types or modifies text in the text input of the action bar / app bar
  const searchData = (text) => {
    setText(text)
    fetchData(getEndpoint(text))
  }

  // sets the search bar placeholder text depending on the currently selected tab / screen
  const getInputPlaceholderText = () => {
    switch (screenType) {
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
              {Platform.OS === 'android' && (
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
              )}
            </View>
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
              posFilterEnabled={false}
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
    width: '85%',
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
    paddingLeft: 16,
    marginLeft: 8,
    marginRight: 8,
    width: '100%'
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

export default Screen
