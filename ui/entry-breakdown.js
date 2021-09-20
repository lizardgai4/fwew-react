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

import React from 'react'

function Underline({ children }) {
  return <Text style={styles.underline}>{children}</Text>
}

function Stressed({ stressed, children }) {
  const syllables = children

  if (syllables.includes('-')) {
    return <Text>{children}</Text>
  }

  const syllableArray = syllables.split(/[ -]/)
  const stressedIndex = parseInt(stressed, 10)
  const stressedSyllable = syllableArray[stressedIndex - 1]

  if (stressedSyllable.includes(' ')) {
    const tmp = stressedSyllable.split(' ')
    tmp[0] = <Underline>tmp[0]</Underline>
  }

  // TODO: return Text JSX.Element with appropriate underlining

  return <Text style={{ flexDirection: 'row' }}>{children}</Text>
}

function EntryBreakdown({ stressed, syllables, infixDots }) {
  return (
    <Text selectable={true} style={styles.entry_breakdown}>
      {'('}
      <Stressed stressed={stressed}>{syllables}</Stressed>
      {infixDots !== 'NULL' ? `, ${infixDots})` : ')'}
    </Text>
  )
}

const styles = StyleSheet.create({
  entry_breakdown: { fontWeight: 'normal', fontSize: 14 },
  underline: { textDecorationLine: 'underline' }
})

export default EntryBreakdown
