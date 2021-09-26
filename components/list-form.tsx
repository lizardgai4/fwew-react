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
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import { SettingsContext } from '../context'
import colors from './colors'

function ListForm(): JSX.Element {
  const { settingsList } = useContext(SettingsContext)

  return (
    <Card style={styles.card}>
      <Card.Content>
        <ScrollView>
          <List.AccordionGroup>
            {Object.keys(settingsList).map((key1, index) => (
              <List.Accordion
                title={key1}
                id={`s_${index}`}
                key={`k1_${index}`}
              >
                {Object.keys(settingsList[key1]).map((key2, index2) => (
                  <TouchableOpacity key={`k2_${index2}`}>
                    <List.Item title={key2} />
                  </TouchableOpacity>
                ))}
              </List.Accordion>
            ))}
          </List.AccordionGroup>
        </ScrollView>
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
  }
})

export default ListForm
