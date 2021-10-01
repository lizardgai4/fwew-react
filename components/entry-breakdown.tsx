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

import { EntryBreakdownProps } from '../lib/interfaces/props'
import React from 'react'
import Stressed from './stressed'

/**
 * EntryBreakdown Component
 *
 * Includes syllabification with stressed syllable underlined
 * for verbs also includes infix dots
 */
function EntryBreakdown({
  stressed,
  syllables,
  infixDots
}: EntryBreakdownProps): JSX.Element {
  return (
    <Text selectable={true} style={styles.entry_breakdown}>
      {' ('}
      <Stressed stressed={stressed}>{syllables}</Stressed>
      {infixDots !== 'NULL' ? `, ${infixDots})` : ')'}
    </Text>
  )
}

const styles = StyleSheet.create({
  entry_breakdown: { fontWeight: 'normal', fontSize: 18 },
  underline: { textDecorationLine: 'underline' }
})

export default EntryBreakdown
