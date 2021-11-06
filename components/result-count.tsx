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
import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

import { Language } from '../lib/interfaces/i18n'
import { ResultCountProps } from '../lib/interfaces/props'
import { SettingsContext } from '../context'
import { ui } from '../lib/i18n'

/**
 * ResultCount component
 *
 * Shows the total count of results with specific logic for Na'vi UI
 */
function ResultCount({ data }: ResultCountProps): JSX.Element {
  if (data == null || data.length === 0) return null

  const { settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].resultCount
  let count: string

  // use octal count for Na'vi UI, otherwise standard decimal array length
  if (languageCodeUI === Language.NX) {
    count = `°${data.length.toString(8)}a `
  } else {
    count = `${data.length} `
  }

  return (
    <Text style={styles.resultCount}>
      {count}
      {strings.results}
    </Text>
  )
}

const styles = StyleSheet.create({
  resultCount: {
    alignSelf: 'center',
    fontSize: 16
  }
})

export default ResultCount
