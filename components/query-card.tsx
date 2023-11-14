/**
 * This file is part of fwew-react.
 * fwew-react: Fwew Na'vi Dictionary app written using React Native
 * Copyright (C) 2022 Corey Scheideman <corscheid@gmail.com>
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
import { useWindowDimensions } from 'react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from '../lib/colors'
import { QueryCardProps } from '../lib/interfaces/props'

function QueryCard({ queryText, onEdit, onClear }: QueryCardProps): JSX.Element {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onEdit}>
        <MaterialIcons name="edit" size={32} color={colors.secondary} />
      </TouchableOpacity>
      <Text numberOfLines={1} selectable={true} style={[styles.queryText, { maxWidth: width - 64 - 56 }]}>{queryText}</Text>
      <TouchableOpacity onPress={onClear}>
        <MaterialIcons name="clear" size={32} color={colors.inputCloseButton} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 16,
    backgroundColor: colors.entryBackground,
    height: 64,
    padding: 16,
    borderWidth: 1.5,
    borderColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  queryText: {
    fontSize: 18
  },
})

export default QueryCard