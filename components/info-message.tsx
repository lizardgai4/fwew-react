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

import { InfoMessageProps } from '../lib/interfaces/props'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import colors from '../lib/colors'

/**
 * InfoMessage Component
 *
 * An info icon with text of an error message or info message
 */
export default function InfoMessage({
  error,
  text,
  info
}: InfoMessageProps): JSX.Element {
  // determine the info / error text
  const getText = (): string => {
    if (error && error.message) {
      if (text && error.message.endsWith(`${text}`)) {
        return error.message
      }
      if (text && error.message.endsWith(': ')) {
        return `${error.message}${text}`
      }
      return `${error.message}: ${text}`
    } else if (info && !error) {
      return info
    }
    return null
  }

  if (!text && !info) {
    return null
  }

  return (
    // for the situation the API returns {message: "no results"}
    <View style={styles.msgParent}>
      <MaterialIcons name="error" size={48} color={colors.infoMessageIcon} />
      <Text style={styles.msgText}>{getText()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  msgParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.screenBackground
  },
  msgText: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16
  }
})
