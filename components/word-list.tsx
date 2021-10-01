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
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useContext, useState } from 'react'

import Entry from './entry'
import { FAB } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { SettingsContext } from '../context'
import { Word } from '../lib/interfaces/word'
import { WordListProps } from '../lib/interfaces/props'
import colors from '../lib/colors'
import { compareWords } from '../lib'

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
  const { settingsFwew } = useContext(SettingsContext)
  const { posFilterText } = settingsFwew
  const flatListRef = React.useRef()
  const [scrollOffset, setScrollOffset] = useState(0)

  const scrollToTop = () => {
    // @ts-ignore
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
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
    return data
  }

  // handle scroll event
  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    setScrollOffset(event.nativeEvent.contentOffset.y)
  }

  // only try to render the list if there is data for it
  if (data && data.length > 0) {
    return (
      <View style={styles.listContainer}>
        <FlatList
          ref={flatListRef}
          data={filterData()}
          extraData={text}
          keyExtractor={(item) => `k0_${item.ID}`}
          contentContainerStyle={styles.listContentContainer}
          onScroll={(e) => handleScroll(e)}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                toggleModal(item)
              }}
            >
              <Entry number={index + 1} word={item} />
            </TouchableOpacity>
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
      <View style={styles.fallbackView}>
        {text ? (
          <View style={styles.msgParent}>
            <MaterialIcons
              name="error"
              size={48}
              color={colors.infoMessageIcon}
            />
            <Text style={styles.msgText}>
              {err.message}: {text}
            </Text>
          </View>
        ) : null}
      </View>
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
  fallbackView: {
    flex: 1
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
