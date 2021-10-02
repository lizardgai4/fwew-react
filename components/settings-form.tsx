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
import { Card, RadioButton } from 'react-native-paper'
import { Languages, languageNames } from '../lib/i18n'
import React, { useContext } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { Language } from '../lib/interfaces/i18n'
import { SettingsContext } from '../context'
import colors from '../lib/colors'

/**
 * SettingsForm Component
 *
 * Provides screen to view and update global application settings
 */
function SettingsForm(): JSX.Element {
  const { settingsGlobal, onUpdateSettingsGlobal } = useContext(SettingsContext)
  const { languageCode, languageCodeUI } = settingsGlobal

  // update the default language of fwew/list/random results
  const updateResultsLanguage = (language: Language): void => {
    const newSettingsGlobal = { ...settingsGlobal, languageCode: language }
    onUpdateSettingsGlobal(newSettingsGlobal)
  }

  // update the default language of the app UI
  const updateUILanguage = (language: Language): void => {
    const newSettingsGlobal = { ...settingsGlobal, languageCodeUI: language }
    onUpdateSettingsGlobal(newSettingsGlobal)
  }

  return (
    <ScrollView>
      {/* UI Language Setting */}
      {/* @ts-ignore */}
      <Card style={styles.card}>
        {/* @ts-ignore */}
        <Card.Title
          title="app language"
          subtitle="default language of app interface"
        />
        <Card.Content>
          <RadioButton.Group
            onValueChange={updateUILanguage}
            value={languageCodeUI}
          >
            {Languages.map((language, index) => (
              <View key={index}>
                <RadioButton.Item
                  label={languageNames[language]}
                  value={language}
                  color={colors.accent}
                />
              </View>
            ))}
          </RadioButton.Group>
        </Card.Content>
      </Card>
      {/* Results Language Setting */}
      {/* @ts-ignore */}
      <Card style={styles.card}>
        {/* @ts-ignore */}
        <Card.Title
          title="results language"
          subtitle="default language of results"
        />
        <Card.Content>
          <RadioButton.Group
            onValueChange={updateResultsLanguage}
            value={languageCode}
          >
            {Languages.map((language, index) => (
              <View key={index}>
                <RadioButton.Item
                  label={languageNames[language]}
                  value={language}
                  color={colors.accent}
                />
              </View>
            ))}
          </RadioButton.Group>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 16,
    borderColor: colors.secondary,
    borderWidth: 1.5,
    maxHeight: '88%'
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: colors.text
  },
  textInput: {
    width: '50%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.secondary,
    paddingLeft: 8,
    paddingRight: 8
  }
})

export default SettingsForm
