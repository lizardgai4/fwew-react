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
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import Entry from './entry'
import React from 'react'

function WordList({ data, isLoading, onRefresh, text, toggleModal }) {
  // only try to render the list if there is data for it
  if (data && data.length > 0) {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          extraData={text}
          keyExtractor={(item) => item.ID}
          contentContainerStyle={styles.listContentContainer}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                toggleModal(item)
              }}
            >
              <Entry
                number={index + 1}
                navi={item.Navi}
                ipa={item.IPA}
                pos={item.PartOfSpeech}
                syllables={item.Syllables}
                infixDots={item.InfixDots}
                en={item.EN}
              />
            </TouchableOpacity>
          )}
          // Pull to Refresh
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh.bind(this)}
            />
          }
        />
      </View>
    )
  } else if (data && data.message) {
    return (
      // for the situation the API returns {message: "no results"}
      <View style={{ alignItems: 'center' }}>
        {text ? (
          <Text>
            {data.message}: {text}
          </Text>
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
  }
})

export default WordList
