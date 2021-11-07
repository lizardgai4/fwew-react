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
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Bold from './bold'
import { Card } from 'react-native-paper'
import { NumberCardProps } from '../lib/interfaces/props'
import colors from '../lib/colors'
import { useOrientation } from '../lib/hooks/useOrientation'

/**
 * NumberCard Component
 *
 * Show the results of a Fwew Number lookup
 */
export default function NumberCard({ data }: NumberCardProps): JSX.Element {
  const windowWidth = Dimensions.get('window').width
  const mainAlign = windowWidth > 480 ? 'center' : null
  const cardWidth = windowWidth > 480 ? '50%' : null
  const orientation = useOrientation()
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setToggle(!toggle)
  }, [orientation])

  return (
    <View
      style={{
        justifyContent: 'flex-start',
        alignItems: mainAlign
      }}
    >
      <View style={{ width: cardWidth }}>
        {/* @ts-ignore */}
        <Card style={styles.card}>
          {/* @ts-ignore */}
          <Card.Title title={data.name} />
          <Card.Content style={styles.cardContent}>
            <Text selectable={true} style={styles.text}>
              <Bold>decimal</Bold>: {data.decimal}
            </Text>
            <Text selectable={true} style={styles.text}>
              <Bold>octal</Bold>: {data.octal}
            </Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 16,
    borderColor: colors.secondary,
    borderWidth: 1.5
  },
  cardContent: {
    margin: 8
  },
  text: {
    fontSize: 16,
    padding: 8
  }
})
