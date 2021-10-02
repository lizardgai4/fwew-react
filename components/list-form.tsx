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
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import { FAB } from 'react-native-paper'
import If from './if'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { SettingsContext } from '../context'
import colors from '../lib/colors'
import { ui } from '../lib/i18n'

function ListForm(): JSX.Element {
  const { settingsList, settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].listRandomForm
  const [what, setWhat] = useState('')
  const [cond, setCond] = useState('')
  const [spec, setSpec] = useState('')
  const [array, setArray] = useState([])

  interface ListWCS {
    what: string
    cond: string
    spec: string
  }

  const clearValues = (): void => {
    setWhat('')
    setCond('')
    setSpec('')
    setArray([])
  }

  const add = (item: ListWCS): void => {
    setArray([...array, item])
  }

  return (
    <View style={styles.listFormContainer}>
      {/* @ts-ignore */}
      <Card style={styles.card}>
        {/* @ts-ignore */}
        <Card.Title title={'list...'} />
        <Card.Content>
          <Text style={styles.selections}>{`${what} ${cond} ${spec}`}</Text>
          <Text>
            {array.map((wcs) => `${wcs.what} ${wcs.cond} ${wcs.spec} `)}
          </Text>
          <If condition={!what}>
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
          </If>
          <View>
            {!!what &&
              !cond &&
              Object.keys(settingsList[what]).map((item, idx) => (
                // @ts-ignore
                <List.Item
                  key={idx}
                  title={item}
                  onPress={() => setCond(item)}
                  right={(_props) => (
                    <MaterialIcons name="chevron-right" size={28} />
                  )}
                />
              ))}
          </View>
          <If condition={!!what && !!cond}>
            <TextInput
              style={styles.textInput}
              value={spec}
              onChangeText={(text) => setSpec(text)}
            />
          </If>
          <View style={styles.buttonGroup}>
            <If condition={!!what || !!cond || !!spec}>
              <TouchableOpacity
                style={styles.buttonClear}
                onPress={clearValues}
              >
                <Text style={styles.buttonText}>clear</Text>
              </TouchableOpacity>
            </If>
            <If condition={!!what && !!cond && !!spec}>
              <TouchableOpacity style={styles.buttonSearch}>
                <Text style={styles.buttonText}>search</Text>
              </TouchableOpacity>
            </If>
          </View>
        </Card.Content>
      </Card>
      {/* @ts-ignore */}
      <FAB
        style={styles.fab}
        color={colors.buttonText}
        icon="plus"
        onPress={() => add({ what, cond, spec })}
        visible={!!what && !!cond && !!spec}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listFormContainer: {
    height: '92%'
  },
  card: {
    margin: 16,
    borderRadius: 16,
    borderColor: colors.secondary,
    borderWidth: 1.5,
    maxHeight: '100%'
  },
  selections: {
    fontSize: 16
  },
  textInput: {
    marginTop: 16,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.secondary,
    paddingLeft: 8,
    paddingRight: 8
  },
  buttonGroup: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonClear: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 48,
    backgroundColor: colors.buttonNegative,
    borderWidth: 1,
    borderColor: colors.buttonNegativeBorder,
    borderRadius: 8
  },
  buttonSearch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 48,
    backgroundColor: colors.accent,
    borderWidth: 1,
    borderColor: colors.accentDark,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    color: colors.buttonText
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.accent,
    borderWidth: 1,
    borderColor: colors.accentDark
  }
})

export default ListForm
