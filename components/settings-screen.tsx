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
import React, { useContext, useLayoutEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

import ActionBar from './action-bar'
import { SettingsContext } from '../context'
import SettingsForm from './settings-form'
import colors from '../lib/colors'
import { ui } from '../lib/i18n'

/**
 * SettingsScreen component
 *
 * Screen where all the app information and settings are
 */
function SettingsScreen({ navigation }): JSX.Element {
  const { settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].settingsScreen

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <View>
          <SafeAreaView style={styles.safeStatusBar} />
          <StatusBar barStyle="light-content" />
          <ActionBar>
            <View style={styles.titleParent}>
              <Text style={styles.title}>{strings.title}</Text>
            </View>
          </ActionBar>
        </View>
      )
    })
  }, [navigation, strings])

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainView}>
        <SettingsForm />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeStatusBar: {
    flex: 0,
    backgroundColor: colors.secondary
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.primary
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.screenBackground
  },
  titleParent: {
    marginRight: 48,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: colors.actionBarTitle,
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default SettingsScreen
