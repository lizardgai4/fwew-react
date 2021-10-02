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
import { StyleSheet, Text } from 'react-native'
import { join, withKeys } from '../lib'

import React from 'react'
import { StressedProps } from '../lib/interfaces/props'
import Underline from './underline'

/**
 * Stressed Component
 *
 * A Text element of given syllabification with stressed syllable underlined
 */
function Stressed({ stressed, children }: StressedProps): JSX.Element {
  if (!stressed || !children) return null

  const syllables = children

  if (!syllables.includes('-')) {
    return <Text>{children}</Text>
  }

  const syllableArray: Array<string | JSX.Element> = syllables.split(/[ -]/)
  const stressedIndex = parseInt(stressed, 10)
  const stressedSyllable = syllableArray[stressedIndex - 1]

  syllableArray[stressedIndex - 1] = <Underline>{stressedSyllable}</Underline>

  return (
    <Text style={styles.flexRow}>{withKeys(join(syllableArray, '-'))}</Text>
  )
}

const styles = StyleSheet.create({
  flexRow: { flexDirection: 'row' }
})

export default Stressed
