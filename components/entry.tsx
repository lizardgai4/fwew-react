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
import React, { useContext } from 'react'
import { SettingsContext, StateContext } from '../context'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { deleteById, includes } from '../lib'

import EntryBreakdown from './entry-breakdown'
import EntryIndex from './entry-index'
import { EntryProps } from '../lib/interfaces/props'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Word } from '../lib/interfaces/word'
import colors from '../lib/colors'

/**
 * Entry Component
 *
 * a list row entry item
 */
function Entry({ number, word }: EntryProps) {
  const { Navi, PartOfSpeech, InfixDots, Stressed, Syllables } = word
  const { dataCache, onUpdateDataCache } = useContext(StateContext)
  const { settingsGlobal } = useContext(SettingsContext)
  const { languageCode } = settingsGlobal

  const toggleSaved = (): void => {
    const isSaved = includes(dataCache, word)
    const newDataCache = new Set<Word>([...dataCache])

    if (!isSaved) {
      newDataCache.add(word)
    } else {
      deleteById(newDataCache, word.ID)
    }

    onUpdateDataCache(newDataCache)
  }

  return (
    <View style={styles.entry}>
      <View style={styles.row}>
        {includes(dataCache, word) ? (
          <TouchableOpacity onPress={toggleSaved}>
            <View style={styles.circle}>
              <MaterialIcons
                name="star"
                size={18}
                color={colors.entryIndexIconFill}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggleSaved}>
            <EntryIndex number={number} />
          </TouchableOpacity>
        )}
        <Text numberOfLines={1} selectable={true} style={styles.entry_navi}>
          {`${Navi}`}
          <EntryBreakdown
            stressed={Stressed}
            syllables={Syllables}
            infixDots={InfixDots}
          />
          <Text selectable={true} style={styles.entry_pos}>
            {` ${PartOfSpeech}`}
          </Text>
        </Text>
      </View>
      <Text numberOfLines={1} selectable={true} style={styles.entry_en}>
        {word[languageCode.toUpperCase()]}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 32,
    height: 32,
    backgroundColor: colors.accent,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.accentDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  entry: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1.5,
    borderRadius: 16,
    backgroundColor: colors.entryBackground,
    borderColor: colors.secondary
  },
  row: {
    flexDirection: 'row'
  },
  entry_navi: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 16,
    flex: 1
  },
  entry_pos: {
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontSize: 18,
    marginLeft: 8,
    marginTop: 8
  },
  entry_en: { fontSize: 18, marginLeft: 0, marginTop: 8, flex: 1 }
})

export default Entry
