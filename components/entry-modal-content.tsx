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
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SettingsContext } from '../context'
import colors from '../lib/colors'
import { ui } from '../lib/i18n'
import { EntryModalContentProps } from '../lib/interfaces/props'
import If from './if'
import Stressed from './stressed'
import Autolink from 'react-native-autolink'
import { Audio } from 'expo-av'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

/**
 * EntryModalContent Component
 *
 * Content of the modal which appears when user taps on an entry in the word list
 */
function EntryModalContent({ entry }: EntryModalContentProps): JSX.Element {
  const { settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI, languageCode } = settingsGlobal
  const strings = ui[languageCodeUI].entryModalContent
  const [sound, setSound] = useState(new Audio.Sound());

  const playSound = async (wordId: string): Promise<void> => {
    const audioUrl = `https://s.learnnavi.org/audio/vocab/${wordId}.mp3`
    const { sound } = await Audio.Sound.createAsync({ uri: audioUrl})
    setSound(sound)
    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync()
      }
      : undefined
  }, [sound])

  return (
    <View style={styles.modalContainer}>
      {/* the Na'vi word */}
      <Text selectable={true} style={styles.modal_navi}>
        {entry.Navi}
      </Text>

      {/* part of speech and definition */}
      <View style={styles.modal_group}>
        <Text selectable={true} style={styles.modal_label}>
          {`${strings.partOfSpeech}: `}
          <Text selectable={true} style={styles.modal_text}>
            {entry.PartOfSpeech}
          </Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {`${strings.definition}: `}
          <Text selectable={true} style={styles.modal_text}>
            {entry[languageCode.toUpperCase()]}
          </Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {`${strings.source}: `}
          <Autolink url text={entry.Source} selectable={true} style={styles.modal_text} />
        </Text>
      </View>

      {/* pronunciation data */}
      <View style={styles.modal_group}>
        <Text selectable={true} style={styles.modal_label}>
          {`${strings.ipa}: `}
          <Text
            selectable={true}
            style={styles.modal_text}
          >{`[${entry.IPA}]`}</Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {`${strings.syllables}: `}
          <Text selectable={true} style={styles.modal_text}>
            <Stressed stressed={entry.Stressed}>{entry.Syllables}</Stressed>
          </Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {`${strings.stressedSyllable}: `}
          <Text selectable={true} style={styles.modal_text}>
            {entry.Stressed}
          </Text>
        </Text>
      </View>

      {/* verb infix location data */}
      <If condition={entry.InfixLocations !== 'NULL'}>
        <View style={styles.modal_group}>
          <Text selectable={true} style={styles.modal_label}>
            {`${strings.infixSlots}: `}
            <Text selectable={true} style={styles.modal_text}>
              {entry.InfixLocations}
            </Text>
          </Text>
          <Text selectable={true} style={styles.modal_label}>
            {`${strings.infixDots}: `}
            <Text selectable={true} style={styles.modal_text}>
              {entry.InfixDots}
            </Text>
          </Text>
        </View>
      </If>

      {/* affixes */}
      <View style={styles.modal_group}>
        <If condition={!!entry.Affixes && !!entry.Affixes.Prefix}>
          <Text selectable={true} style={styles.modal_label}>
            {`${strings.prefixes}: `}
            <Text selectable={true} style={styles.modal_text}>
              {entry.Affixes.Prefix}
            </Text>
          </Text>
        </If>

        <If condition={!!entry.Affixes && !!entry.Affixes.Infix}>
          <Text selectable={true} style={styles.modal_label}>
            {`${strings.infixes}: `}
            <Text selectable={true} style={styles.modal_text}>
              {entry.Affixes.Infix}
            </Text>
          </Text>
        </If>

        <If condition={!!entry.Affixes && !!entry.Affixes.Suffix}>
          <Text selectable={true} style={styles.modal_label}>
            {`${strings.suffixes}: `}
            <Text selectable={true} style={styles.modal_text}>
              {entry.Affixes.Suffix}
            </Text>
          </Text>
        </If>

        <If condition={!!entry.Affixes && !!entry.Affixes.Lenition}>
          <Text selectable={true} style={styles.modal_label}>
            {`${strings.lenition}: `}
            <Text selectable={true} style={styles.modal_text}>
              {entry.Affixes.Lenition}
            </Text>
          </Text>
        </If>
      </View>
      <TouchableOpacity style={styles.modal_playButton} onPress={() => playSound(entry.ID)}>
        <MaterialIcons name={'volume-up'} color={colors.buttonText} size={24} />
        <Text style={styles.modal_playButtonText}>{strings.listen}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.modalBackground,
    flexDirection: 'column',
    padding: 16,
    borderRadius: 16,
    borderColor: colors.modalBorder
  },
  modal_group: {
    marginTop: 16
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
  modal_text: {
    fontSize: 16,
    fontWeight: 'normal'
  },
  modal_playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 8,
    borderRadius: 4,
    backgroundColor: colors.accent
  },
  modal_playButtonText: {
    marginLeft: 8,
    color: colors.buttonText,
    fontSize: 16
  }
})

export default EntryModalContent
