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
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from './colors'

// the list entry row item number
function EntryIndex(props) {
  return (
    <View style={styles.entry_index}>
      <Text style={styles.entry_number}>{props.number}</Text>
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
  }
})

export default EntryIndex
