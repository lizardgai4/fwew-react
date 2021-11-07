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
import { Card, List, RadioButton } from 'react-native-paper'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { Languages, languageNames, ui } from '../lib/i18n'
import React, { useContext, useEffect, useState } from 'react'

import { DefaultTheme } from 'react-native-paper'
import FlagIcon from './flag-icon'
import { Language } from '../lib/interfaces/i18n'
import { SettingsContext } from '../context'
import VersionCard from './version-card'
import colors from '../lib/colors'
import { useOrientation } from '../lib/hooks/useOrientation'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
}

/**
 * SettingsForm Component
 *
 * Provides screen to view and update global application settings
 */
function SettingsForm(): JSX.Element {
  const { settingsGlobal, onUpdateSettingsGlobal } = useContext(SettingsContext)
  const { languageCode, languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].settingsScreen
  const windowWidth = Dimensions.get('window').width
  const mainAlign = windowWidth > 480 ? 'center' : null
  const cardWidth = windowWidth > 480 ? '50%' : null

  const orientation = useOrientation()
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setToggle(!toggle)
  }, [orientation])

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
    <ScrollView
      contentContainerStyle={{
        justifyContent: mainAlign,
        alignItems: mainAlign
      }}
    >
      <View style={{ width: cardWidth }}>
        {/* Version Information */}
        <VersionCard />
        {/* UI Language Setting */}
        {/* @ts-ignore */}
        <Card style={styles.card}>
          {/* @ts-ignore */}
          <Card.Title
            title={strings.appLanguage}
            subtitle={strings.appLanguageDesc}
          />
          <Card.Content>
            <List.Accordion
              theme={theme}
              title={languageNames[languageCodeUI]}
              titleStyle={styles.sectionTitle}
              left={(_props) => <FlagIcon language={languageCodeUI} />}
            >
              <RadioButton.Group
                onValueChange={updateUILanguage}
                value={languageCodeUI}
              >
                {Languages.filter((l) => ui[l].active).map(
                  (language, index) => (
                    <View key={index}>
                      <RadioButton.Item
                        label={languageNames[language]}
                        value={language}
                        color={colors.accent}
                      />
                    </View>
                  )
                )}
              </RadioButton.Group>
            </List.Accordion>
          </Card.Content>
        </Card>
        {/* Results Language Setting */}
        {/* @ts-ignore */}
        <Card style={styles.card}>
          {/* @ts-ignore */}
          <Card.Title
            title={strings.resultsLanguage}
            subtitle={strings.resultsLanguageDesc}
          />
          <Card.Content>
            <List.Accordion
              theme={theme}
              title={languageNames[languageCode]}
              titleStyle={styles.sectionTitle}
              left={(_props) => <FlagIcon language={languageCode} />}
            >
              <RadioButton.Group
                onValueChange={updateResultsLanguage}
                value={languageCode}
              >
                {Languages.filter((l) => ui[l].resultsActive).map(
                  (language, index) => (
                    <View key={index}>
                      <RadioButton.Item
                        label={languageNames[language]}
                        value={language}
                        color={colors.accent}
                      />
                    </View>
                  )
                )}
              </RadioButton.Group>
            </List.Accordion>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    margin: 16,
    borderRadius: 16,
    borderColor: colors.secondary,
    borderWidth: 1.5
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: colors.text
  }
})

export default SettingsForm
