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
import { StyleSheet, Text, View } from 'react-native'
import colors from './colors'

// content of the modal which appears when user taps on an entry
function EntryModalContent({ entry, onModalBackButtonPress }) {
  return (
    <View style={styles.modalContainer}>
      {/* the Na'vi word */}
      <Text selectable={true} style={styles.modal_navi}>
        {entry.Navi}
      </Text>

      {/* part of speech and definition */}
      <View style={styles.modal_group}>
        <Text selectable={true} style={styles.modal_label}>
          {'part of speech: '}
          <Text selectable={true} style={styles.modal_text}>
            {entry.PartOfSpeech}
          </Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {'definition: '}
          <Text selectable={true} style={styles.modal_text}>
            {entry.EN}
          </Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {'source: '}
          <Text selectable={true} style={styles.modal_text}>
            {entry.Source}
          </Text>
        </Text>
      </View>

      {/* pronunciation data */}
      <View style={styles.modal_group}>
        <Text selectable={true} style={styles.modal_label}>
          {'IPA: '}
          <Text
            selectable={true}
            style={styles.modal_text}
          >{`[${entry.IPA}]`}</Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {'syllables: '}
          <Text selectable={true} style={styles.modal_text}>
            {entry.Syllables}
          </Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {'stressed syllable: '}
          <Text selectable={true} style={styles.modal_text}>
            {entry.Stressed}
          </Text>
        </Text>
      </View>

      {/* verb infix location data */}
      {entry.InfixLocations !== 'NULL' && (
        <View style={styles.modal_group}>
          <Text selectable={true} style={styles.modal_label}>
            {'infix slots: '}
            <Text selectable={true} style={styles.modal_text}>
              {entry.InfixLocations}
            </Text>
          </Text>
          <Text selectable={true} style={styles.modal_label}>
            {'infix dots: '}
            <Text selectable={true} style={styles.modal_text}>
              {entry.InfixDots}
            </Text>
          </Text>
        </View>
      )}

      {/* affixes */}
      <View style={styles.modal_group}>
        {entry.Affixes && entry.Affixes.Prefix && (
          <Text selectable={true} style={styles.modal_label}>
            {'prefixes: '}
            <Text selectable={true} style={styles.modal_text}>
              {entry.Affixes.Prefix}
            </Text>
          </Text>
        )}

        {entry.Affixes && entry.Affixes.Infix && (
          <Text selectable={true} style={styles.modal_label}>
            {'infixes: '}
            <Text selectable={true} style={styles.modal_text}>
              {entry.Affixes.Infix}
            </Text>
          </Text>
        )}

        {entry.Affixes && entry.Affixes.Suffix && (
          <Text selectable={true} style={styles.modal_label}>
            {'suffixes: '}
            <Text selectable={true} style={styles.modal_text}>
              {entry.Affixes.Suffix}
            </Text>
          </Text>
        )}

        {entry.Affixes && entry.Affixes.Lenition && (
          <Text selectable={true} style={styles.modal_label}>
            {'lenition: '}
            <Text selectable={true} style={styles.modal_text}>
              {entry.Affixes.Lenition}
            </Text>
          </Text>
        )}
      </View>
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
    fontSize: 14,
    fontWeight: 'normal'
  }
})

export default EntryModalContent
