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
import { useDimensions } from '@react-native-community/hooks'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import colors from '../lib/colors'
import { TitleHeaderProps } from '../lib/interfaces/props'
import ActionBar from './action-bar'

function TitleHeader({ title }: TitleHeaderProps): JSX.Element {
  // const { width } = useDimensions().window
  return (
    <View>
      {/* status bar */}
      <SafeAreaView style={styles.safeStatusBar} />
      <StatusBar barStyle="light-content" />
      <ActionBar>
        <View style={[styles.titleParent, { marginRight: 96 }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ActionBar>
    </View>
  )
}

const styles = StyleSheet.create({
  safeStatusBar: {
    flex: 0,
    backgroundColor: colors.secondary
  },
  titleParent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    color: colors.actionBarTitle,
    fontWeight: 'bold',
    fontSize: 20
  },
})

export default TitleHeader