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
import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { SettingsContext } from '../context'
import colors from '../lib/colors'
import { ui } from '../lib/i18n'

function ListForm(): JSX.Element {
  const { settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].listRandomForm
  const [what, setWhat] = useState('')

  return (
    // @ts-ignore
    <Card style={styles.card}>
      {/* @ts-ignore */}
      <Card.Title title={'list...'} />
      <Card.Content>
        <Text>{`${what}`}</Text>
        <ScrollView>
          <View>
            {/* @ts-ignore */}
            <List.Item
              title={strings.word}
              onPress={() => setWhat('word')}
              right={(_props) => (
                <MaterialIcons name="chevron-right" size={28} />
              )}
            />
            {/* @ts-ignore */}
            <List.Item
              title={strings.pos}
              onPress={() => setWhat('pos')}
              right={(_props) => (
                <MaterialIcons name="chevron-right" size={28} />
              )}
            />
            {/* @ts-ignore */}
            <List.Item
              title={strings.syllables}
              onPress={() => setWhat('syllables')}
              right={(_props) => (
                <MaterialIcons name="chevron-right" size={28} />
              )}
            />
            {/* @ts-ignore */}
            <List.Item
              title={strings.stress}
              onPress={() => setWhat('stress')}
              right={(_props) => (
                <MaterialIcons name="chevron-right" size={28} />
              )}
            />
            {/* @ts-ignore */}
            <List.Item
              title={strings.words}
              onPress={() => setWhat('words')}
              right={(_props) => (
                <MaterialIcons name="chevron-right" size={28} />
              )}
            />
          </View>
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

export default ListForm
