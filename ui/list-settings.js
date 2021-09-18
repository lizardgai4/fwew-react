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
import React from 'react'
import { Button, StyleSheet, ScrollView, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import colors from './colors'

// content of the modal which appears when user taps on an entry
function ListSettings({
  settingsGlobal,
  settingsList,
  onSettingsBackButtonPress,
  onUpdateSettingsGlobal,
  onUpdateSettingsList
}) {
  let { languageCode } = settingsGlobal
  let { word, pos, syllables, stress, words } = settingsList

  return (
    <View style={styles.modalContainer}>
      <Text selectable={true} style={styles.modal_navi}>
        list | settings
      </Text>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.modal_label}>language</Text>
        <TextInput
          mode="outlined"
          label="language"
          value={languageCode}
          placeholder="en"
          theme={inputTheme}
          style={styles.input}
          onChangeText={(text) => {
            onUpdateSettingsGlobal({ languageCode: text })
          }}
        />
        <Text style={styles.modal_label}>word</Text>
        <TextInput
          mode="outlined"
          label="word has..."
          theme={inputTheme}
          style={styles.input}
          value={word.has}
          onChangeText={(text) => {
            onUpdateSettingsList({ word: { ...word, has: text } })
          }}
        />
        <TextInput
          mode="outlined"
          label="word starts with..."
          theme={inputTheme}
          style={styles.input}
          value={word.starts}
          onChangeText={(text) => {
            onUpdateSettingsList({ word: { ...word, starts: text } })
          }}
        />
        <TextInput
          mode="outlined"
          label="word ends with..."
          theme={inputTheme}
          style={styles.input}
          value={word.ends}
          onChangeText={(text) => {
            onUpdateSettingsList({ word: { ...word, ends: text } })
          }}
        />
        <TextInput
          mode="outlined"
          label="word is like..."
          theme={inputTheme}
          style={styles.input}
          value={word.like}
          onChangeText={(text) => {
            onUpdateSettingsList({ word: { ...word, like: text } })
          }}
        />
        <Text style={styles.modal_label}>part of speech</Text>
        <TextInput
          mode="outlined"
          label="part of speech is..."
          theme={inputTheme}
          style={styles.input}
          value={pos.is}
          onChangeText={(text) => {
            onUpdateSettingsList({ pos: { ...pos, is: text } })
          }}
        />
        <TextInput
          mode="outlined"
          label="part of speech has..."
          theme={inputTheme}
          style={styles.input}
          value={pos.has}
          onChangeText={(text) => {
            onUpdateSettingsList({ pos: { ...pos, has: text } })
          }}
        />
        <TextInput
          mode="outlined"
          label="part of speech starts with..."
          theme={inputTheme}
          style={styles.input}
          value={pos.starts}
          onChangeText={(text) => {
            onUpdateSettingsList({ pos: { ...pos, starts: text } })
          }}
        />
        <TextInput
          mode="outlined"
          label="part of speech ends with..."
          theme={inputTheme}
          style={styles.input}
          value={pos.ends}
          onChangeText={(text) => {
            onUpdateSettingsList({ pos: { ...pos, ends: text } })
          }}
        />
        <TextInput
          mode="outlined"
          label="part of speech is like..."
          theme={inputTheme}
          style={styles.input}
          value={pos.like}
          onChangeText={(text) => {
            onUpdateSettingsList({ pos: { ...pos, like: text } })
          }}
        />
        <Text style={styles.modal_label}>syllables</Text>
        <TextInput
          mode="outlined"
          label="#syllables < ..."
          theme={inputTheme}
          style={styles.input}
          value={syllables.lessThan}
          onChangeText={(text) => {
            onUpdateSettingsList({
              syllables: { ...syllables, lessThan: text }
            })
          }}
        />
        <TextInput
          mode="outlined"
          label="#syllables ≤ ..."
          theme={inputTheme}
          style={styles.input}
          value={syllables.lessThanEqual}
          onChangeText={(text) => {
            onUpdateSettingsList({
              syllables: { ...syllables, lessThanEqual: text }
            })
          }}
        />
        <TextInput
          mode="outlined"
          label="#syllables = ..."
          theme={inputTheme}
          style={styles.input}
          value={syllables.equal}
          onChangeText={(text) => {
            onUpdateSettingsList({
              syllables: { ...syllables, equal: text }
            })
          }}
        />
        <TextInput
          mode="outlined"
          label="#syllables ≥ ..."
          theme={inputTheme}
          style={styles.input}
          value={syllables.greaterThanEqual}
          onChangeText={(text) => {
            onUpdateSettingsList({
              syllables: { ...syllables, greaterThanEqual: text }
            })
          }}
        />
        <TextInput
          mode="outlined"
          label="#syllables > ..."
          theme={inputTheme}
          style={styles.input}
          value={syllables.greaterThan}
          onChangeText={(text) => {
            onUpdateSettingsList({
              syllables: { ...syllables, greaterThan: text }
            })
          }}
        />
        <Text style={styles.modal_label}>stress</Text>
        <TextInput
          mode="outlined"
          label="stressed syllable < ..."
          theme={inputTheme}
          style={styles.input}
          value={stress.lessThan}
          onChangeText={(text) => {
            onUpdateSettingsList({
              stress: { ...stress, lessThan: text }
            })
          }}
        />
        <TextInput
          mode="outlined"
          label="stressed syllable ≤ ..."
          theme={inputTheme}
          style={styles.input}
          value={stress.lessThanEqual}
          onChangeText={(text) => {
            onUpdateSettingsList({
              stress: { ...stress, lessThanEqual: text }
            })
          }}
        />
        <TextInput
          mode="outlined"
          label="stressed syllable = ..."
          theme={inputTheme}
          style={styles.input}
          value={stress.equal}
          onChangeText={(text) => {
            onUpdateSettingsList({
              stress: { ...stress, equal: text }
            })
          }}
        />
        <TextInput
          mode="outlined"
          label="stressed syllable ≥ ..."
          theme={inputTheme}
          style={styles.input}
          value={stress.greaterThanEqual}
          onChangeText={(text) => {
            onUpdateSettingsList({
              stress: { ...stress, greaterThanEqual: text }
            })
          }}
        />
        <TextInput
          mode="outlined"
          label="stressed syllable > ..."
          theme={inputTheme}
          style={styles.input}
          value={stress.greaterThan}
          onChangeText={(text) => {
            onUpdateSettingsList({
              stress: { ...stress, greaterThan: text }
            })
          }}
        />
        <Text style={styles.modal_label}>words</Text>
        <TextInput
          mode="outlined"
          label="words first ..."
          theme={inputTheme}
          style={styles.input}
          value={words.first}
          onChangeText={(text) => {
            onUpdateSettingsList({
              words: { ...words, first: text }
            })
          }}
        />
        <TextInput
          mode="outlined"
          label="words last ..."
          theme={inputTheme}
          style={styles.input}
          value={words.last}
          onChangeText={(text) => {
            onUpdateSettingsList({
              words: { ...words, last: text }
            })
          }}
        />
      </ScrollView>
      <View style={styles.modal_button}>
        <Button
          title="back"
          onPress={onSettingsBackButtonPress}
          color={colors.secondary}
        />
      </View>
    </View>
  )
}

const inputTheme = {
  colors: {
    primary: colors.primary,
    accent: colors.secondary
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: '80%',
    marginBottom: 16
  },
  modalContainer: {
    backgroundColor: colors.modalBackground,
    flexDirection: 'column',
    padding: 16,
    borderRadius: 16,
    borderColor: colors.modalBorder
  },
  modal_navi: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24
  },
  modal_label: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: colors.inputBackground
  },
  modal_button: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default ListSettings
