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
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import Constants from 'expo-constants'
import Entry from './entry'
import { FAB } from 'react-native-paper'
import InfoMessage from './info-message'
import { SettingsContext } from '../context'
import { Word } from '../lib/interfaces/word'
import { WordListProps } from '../lib/interfaces/props'
import colors from '../lib/colors'
import { compareWords } from '../lib'
import { useKeyboard } from '@react-native-community/hooks'
import { useOrientation } from '../lib/hooks/useOrientation'

/**
 * WordList Component
 *
 * A list of Fwew Word Results showing some basic data on each word
 */
function WordList({
  data,
  err,
  isLoading,
  onRefresh,
  text,
  toggleModal,
  posFilterEnabled
}: WordListProps): JSX.Element {
  const { settingsFwew, settingsGlobal } = useContext(SettingsContext)
  const { languageCode } = settingsGlobal
  const { posFilterText } = settingsFwew
  const flatListRef = React.useRef()
  const [scrollOffset, setScrollOffset] = useState(0)
  const windowHeight = Dimensions.get('window').height
  const windowWidth = Dimensions.get('window').width
  const statusBarHeight = Constants.statusBarHeight
  const actionBarHeight = 56
  const keyboard = useKeyboard()
  const orientation = useOrientation()
  const viewHeight =
    windowHeight -
    statusBarHeight -
    actionBarHeight -
    (keyboard.keyboardShown ? keyboard.keyboardHeight : 0)
  const initialColWidth = windowWidth < 360 ? 1 : Math.round(windowWidth / 360)
  const [numCols, setNumCols] = useState(initialColWidth)

  // get width of a card column for wider display / window
  const getColWidth = () =>
    windowWidth < 360 ? 1 : Math.round(windowWidth / 360)

  // get width of a card based on window size and number of columns
  const getWidth = (): number => {
    return windowWidth / numCols
  }

  useEffect(() => {
    setNumCols(getColWidth())
  }, [orientation])

  // logic for scroll FAB
  const scrollToTop = () => {
    // @ts-ignore
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
  }

  // handle scroll event
  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    setScrollOffset(event.nativeEvent.contentOffset.y)
  }

  // part of speech filtering
  const filterData = (): Word[] => {
    if (!posFilterEnabled) {
      return data
    }
    if (posFilterText !== 'all') {
      if (Array.isArray(data) && data.length) {
        return data.filter((word) => word.PartOfSpeech === posFilterText)
      }
    }
    data.sort(compareWords)
    return data.filter((word) => word[languageCode.toUpperCase()] !== 'NULL')
  }

  // only try to render the list if there is data for it
  if (data && data.length > 0) {
    return (
      <View style={[{ height: viewHeight }, styles.listContainer]}>
        <FlatList
          ref={flatListRef}
          data={filterData()}
          extraData={text}
          key={`#${numCols}`}
          keyExtractor={(item) => `k0_${item.ID}`}
          contentContainerStyle={styles.listContentContainer}
          numColumns={numCols}
          onScroll={(e) => handleScroll(e)}
          renderItem={({ item, index }) => (
            <View style={{ width: getWidth() }}>
              <TouchableOpacity
                onPress={() => {
                  toggleModal(item)
                }}
              >
                <Entry number={index + 1} word={item} />
              </TouchableOpacity>
            </View>
          )}
          // Pull to Refresh
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
          }
        />
        {/* @ts-ignore */}
        <FAB
          style={styles.fab}
          color={colors.buttonText}
          icon="arrow-up"
          onPress={scrollToTop}
          visible={scrollOffset > 0}
        />
      </View>
    )
  } else if (err && err.message) {
    return (
      // for the situation the API returns {message: "no results"}
      <InfoMessage error={err} text={text} />
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flex: 1
  },
  listContentContainer: {
    marginTop: 8,
    paddingBottom: 72
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.accent,
    borderWidth: 1,
    borderColor: colors.accentDark
  }
})

export default WordList
