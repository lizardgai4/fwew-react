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
import { Card, List } from 'react-native-paper'
import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { SettingsContext } from '../context'
import colors from './colors'

function SettingsForm(): JSX.Element {
  const { settingsGlobal } = useContext(SettingsContext)

  return (
    // @ts-ignore
    <Card style={styles.card}>
      <Card.Content>
        {/* @ts-ignore */}
        <List.Section>
          {/* @ts-ignore */}
          <List.Accordion
            title={'language'}
            description={`current value: ${settingsGlobal.languageCode}`}
            titleStyle={styles.sectionTitle}
            id={`s_0`}
            key={`k1_0`}
          >
            {/* @ts-ignore */}
            <TouchableOpacity>
              {/* @ts-ignore */}
              <List.Item title={settingsGlobal.languageCode} />
            </TouchableOpacity>
          </List.Accordion>
        </List.Section>
      </Card.Content>
    </Card>
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
