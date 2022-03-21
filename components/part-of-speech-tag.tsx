/**
 * This file is part of fwew-react.
 * fwew-react: Fwew Na'vi Dictionary app written using React Native
 * Copyright (C) 2022 Corey Scheideman <corscheid@gmail.com>
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
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../lib/colors'

export interface PartOfSpeechTagProps {
  text: string
}

/** PartOfSpeechTag Component
 *
 * The part of speech tag within an entry
 */
function PartOfSpeechTag({ text }: PartOfSpeechTagProps): JSX.Element {
  return (
    <View style={styles.tag}>
      <Text selectable={true} style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: colors.posTagBackground,
    borderRadius: 4,
    marginRight: 8,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    // color: colors.buttonText,
    color: colors.text,
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontSize: 18
  }
})

export default PartOfSpeechTag
