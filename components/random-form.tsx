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
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useContext, useState } from 'react'

import Constants from 'expo-constants'
import { FAB } from 'react-native-paper'
import If from './if'
import { ListFormProps } from '../lib/interfaces/props'
import { ListWCS } from '../lib/interfaces/list-wcs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { SettingsContext } from '../context'
import colors from '../lib/colors'
import { condToSymbol } from '../lib'
import { ui } from '../lib/i18n'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useKeyboard } from '@react-native-community/hooks'

/**
 * RandomForm component
 * The interactive form to fill out when creating Random queries on Fwew
 */
function RandomForm({ onSearch }: ListFormProps): JSX.Element {
  const { settingsList, settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].listRandomForm
  const [numRandomWords, setNumRandomWords] = useState('')
  const [what, setWhat] = useState('')
  const [cond, setCond] = useState('')
  const [spec, setSpec] = useState('')
  const [array, setArray] = useState([])
  const windowHeight = Dimensions.get('window').height
  const statusBarHeight = Constants.statusBarHeight
  const actionBarHeight = 56
  const tabBarHeight = useBottomTabBarHeight()
  const keyboard = useKeyboard()
  const scrollViewHeight =
    windowHeight -
    statusBarHeight -
    actionBarHeight -
    (Platform.OS === 'ios' && keyboard.keyboardShown ? 0 : tabBarHeight) -
    (keyboard.keyboardShown ? keyboard.keyboardHeight : 0)

  /** function to handle the back button on a card */
  const navigateBack = (index: number, wcs: ListWCS): void => {
    if (wcs.what && wcs.cond) {
      updateSpec(index, '')
      updateCond(index, '')
    } else if (wcs.what && !wcs.cond && !wcs.spec) {
      updateWhat(index, '')
    } else {
      deleteItem(index)
    }
  }

  /** function to handle the delete button on a card */
  const deleteItem = (index: number): void => {
    const newArray = [
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length)
    ]
    setWhat('')
    setCond('')
    setSpec('')
    setArray(newArray)
  }

  /** function to handle the selection of a List what-operator on a card */
  const updateWhat = (index: number, what: string): void => {
    const newArray = [...array]
    newArray[index].what = what
    setWhat(what)
    setArray(newArray)
  }

  /** function to handle the selection of a List condition (cond) on a card */
  const updateCond = (index: number, cond: string): void => {
    const newArray = [...array]
    newArray[index].cond = cond
    setCond(cond)
    setArray(newArray)
  }

  /** function to hanlde the entering of a user's specification on a card */
  const updateSpec = (index: number, spec: string): void => {
    const newArray = [...array]
    newArray[index].spec = spec
    setSpec(spec)
    setArray(newArray)
  }

  /** function to handle the Floating Action Button press to add a card */
  const add = (): void => {
    setWhat('')
    setCond('')
    setSpec('')
    const newWcs: ListWCS = { what: '', cond: '', spec: '' }
    setArray([...array, newWcs])
  }

  /** function to handle the search button press to start a List query search */
  const handleSearch = (): void => {
    if (!numRandomWords) return
    let searchString = `${numRandomWords}`
    array.forEach((wcs: ListWCS, index: number) => {
      const { what, cond, spec } = wcs
      if (index === 0) {
        searchString += '/'
      } else {
        searchString += ' and '
      }
      searchString += `${what} ${condToSymbol(cond)} ${spec}`
    })
    onSearch(searchString)
  }

  /** function to set the Card title based on which card it is in the array */
  const getCardTitle = (index: number): string => {
    if (index === 0) return `${strings.where}...`
    return `${strings.and}...`
  }

  return (
    <View>
      <ScrollView style={[{ height: scrollViewHeight }, styles.scrollView]}>
        {/* @ts-ignore */}
        <Card style={styles.card}>
          {/* @ts-ignore */}
          <Card.Title title={`${strings.random}...`} />
          <Card.Content>
            <TextInput
              style={styles.textInput}
              value={numRandomWords}
              placeholder={strings.numRandomWords}
              onChangeText={setNumRandomWords}
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
            />
            <View style={styles.buttonGroup}>
              <If condition={!!numRandomWords && array.length === 0}>
                <TouchableOpacity
                  style={styles.buttonSearch}
                  onPress={handleSearch}
                >
                  <View style={styles.buttonView}>
                    <MaterialIcons
                      name="search"
                      size={24}
                      color={colors.buttonText}
                    />
                    <Text style={styles.buttonText}>search</Text>
                  </View>
                </TouchableOpacity>
              </If>
            </View>
          </Card.Content>
        </Card>
        {array.map((wcs, idx) => (
          // @ts-ignore
          <Card
            style={idx < array.length - 1 ? styles.card : styles.lastCard}
            key={`${idx}_wcs`}
          >
            {/* @ts-ignore */}
            <Card.Title title={getCardTitle(idx)} />
            <Card.Content>
              <Text style={styles.selections}>
                {`${wcs.what && strings[wcs.what]} ${wcs.cond &&
                  strings[wcs.cond]} ${wcs.spec}`}
              </Text>
              <View>
                <If condition={!wcs.what}>
                  <View>
                    {Object.keys(settingsList).map((item, index) => (
                      // @ts-ignore
                      <List.Item
                        key={`${index}_what`}
                        title={strings[item]}
                        onPress={() => updateWhat(idx, item)}
                        right={(_props) => (
                          <MaterialIcons name="chevron-right" size={28} />
                        )}
                      />
                    ))}
                  </View>
                </If>
                <View>
                  {!!wcs.what &&
                    !wcs.cond &&
                    Object.keys(settingsList[wcs.what]).map((item, index) => (
                      // @ts-ignore
                      <List.Item
                        key={`${index}_cond`}
                        title={strings[item]}
                        onPress={() => updateCond(idx, item)}
                        right={(_props) => (
                          <MaterialIcons name="chevron-right" size={28} />
                        )}
                      />
                    ))}
                </View>
                <If condition={!!wcs.what && !!wcs.cond}>
                  <TextInput
                    style={styles.textInput}
                    value={wcs.spec}
                    onChangeText={(text) => updateSpec(idx, text)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                  />
                </If>
                <View style={styles.buttonGroup}>
                  <If condition={!!wcs.what}>
                    <TouchableOpacity
                      style={styles.buttonBack}
                      onPress={() => navigateBack(idx, wcs)}
                    >
                      <View style={styles.buttonView}>
                        <MaterialIcons
                          name="chevron-left"
                          size={24}
                          color={colors.buttonText}
                        />
                        <Text style={styles.buttonText}>back</Text>
                      </View>
                    </TouchableOpacity>
                  </If>
                  <If
                    condition={
                      idx !== 0 || !!wcs.what || !!wcs.cond || !!wcs.spec
                    }
                  >
                    <TouchableOpacity
                      style={styles.buttonDelete}
                      onPress={() => deleteItem(idx)}
                    >
                      <View style={styles.buttonView}>
                        <MaterialIcons
                          name="delete"
                          size={24}
                          color={colors.buttonText}
                        />
                        <Text style={styles.buttonText}>delete</Text>
                      </View>
                    </TouchableOpacity>
                  </If>
                  <If
                    condition={
                      idx === array.length - 1 &&
                      !!wcs.what &&
                      !!wcs.cond &&
                      !!wcs.spec
                    }
                  >
                    <TouchableOpacity
                      style={styles.buttonSearch}
                      onPress={handleSearch}
                    >
                      <View style={styles.buttonView}>
                        <MaterialIcons
                          name="search"
                          size={24}
                          color={colors.buttonText}
                        />
                        <Text style={styles.buttonText}>search</Text>
                      </View>
                    </TouchableOpacity>
                  </If>
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      {/* @ts-ignore */}
      <FAB
        style={styles.fab}
        color={colors.buttonText}
        icon="plus"
        onPress={add}
        visible={array.length === 0 || (!!what && !!cond && !!spec)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 8
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    borderColor: colors.secondary,
    borderWidth: 1.5,
    maxHeight: '100%'
  },
  lastCard: {
    marginTop: 8,
    marginBottom: 96,
    marginHorizontal: 16,
    borderRadius: 16,
    borderColor: colors.secondary,
    borderWidth: 1.5
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
    justifyContent: 'flex-end'
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBack: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 48,
    paddingHorizontal: 8,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8
  },
  buttonDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 96,
    height: 48,
    paddingHorizontal: 8,
    marginLeft: 16,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8
  },
  buttonSearch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 96,
    height: 48,
    paddingHorizontal: 8,
    marginLeft: 16,
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

export default RandomForm
