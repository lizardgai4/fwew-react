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
import { StyleSheet, Text } from 'react-native'

import { ApiVersion } from '../lib/interfaces/api-version'
import Bold from './bold'
import { Card } from 'react-native-paper'
import { List } from 'react-native-paper'
import { SettingsContext } from '../context'
import { apiRoot } from '../lib/settings'
import { version as appVersion } from '../package.json'
import axios from 'axios'
import colors from '../lib/colors'
import { ui } from '../lib/i18n'

/**
 * VersionCard component
 *
 * Displays Fwew version information
 */
function VersionCard(): JSX.Element {
  const [version, setVersion] = useState({} as ApiVersion)
  const { settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].versionCard

  useEffect(() => {
    axios
      .get(`${apiRoot}/version`)
      .then((response) => setVersion(response.data))
  }, [])

  return (
    // @ts-ignore
    <Card style={styles.card}>
      {/* @ts-ignore */}
      <Card.Title title={strings.title} />
      <Card.Content>
        <List.Accordion
          title={strings.versionInfo}
          titleStyle={styles.listItem}
        >
          <Text style={styles.text}>
            <Bold>fwew-react</Bold>: {appVersion}
          </Text>
          <Text style={styles.text}>
            <Bold>fwew-api</Bold>: {version.APIVersion}
          </Text>
          <Text style={styles.text}>
            <Bold>fwew-lib</Bold>: {version.FwewVersion}
          </Text>
          <Text style={styles.text}>
            <Bold>{strings.dictionary}</Bold>: {version.DictVersion}
          </Text>
        </List.Accordion>
        <List.Accordion title={strings.credits} titleStyle={styles.listItem}>
          <Text style={styles.text}>
            <Bold>{strings.development}</Bold>: Tirea Aean
          </Text>
          <Text style={styles.text}>
            <Bold>{strings.design}</Bold>: Morgan Hughes
          </Text>
          <Text style={styles.text}>
            <Bold>{strings.testing}</Bold>: Alyara Arati
          </Text>
        </List.Accordion>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 16,
    borderColor: colors.secondary,
    borderWidth: 1.5,
    maxHeight: '88%'
  },
  listItem: {
    color: colors.text
  },
  text: {
    fontSize: 16,
    marginHorizontal: 16,
    marginVertical: 8
  }
})

export default VersionCard
