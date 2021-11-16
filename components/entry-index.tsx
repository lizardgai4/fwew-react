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
import { StyleSheet, Text, View } from 'react-native'

import { EntryIndexProps } from '../lib/interfaces/props'
import React from 'react'
import colors from '../lib/colors'

/**
 * EntryIndex Component
 *
 * The list entry row item number
 */
function EntryIndex({ number }: EntryIndexProps): JSX.Element {
  return (
    <View style={styles.entry_index}>
      <Text
        style={number < 1000 ? styles.entry_number : styles.entry_number_large}
      >
        {number}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  entry_index: {
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: colors.secondary
  },
  entry_number: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.entryNumber
  },
  entry_number_large: {
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.entryNumber
  }
})

export default EntryIndex
