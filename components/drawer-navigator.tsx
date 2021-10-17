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

import FwewScreen from './fwew-screen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NumberScreen from './number-screen'
import SavedScreen from './saved-screen'
import Screen from './screen'
import { SettingsContext } from '../context'
import SettingsScreen from './settings-screen'
import { apiRoot } from '../lib/settings'
import colors from '../lib/colors'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { ui } from '../lib/i18n'

/**
 * ListScreen component
 * screen where the user can list all words (or all words that have given properties)
 */
function ListScreen({ navigation }): JSX.Element {
  const endpoint = apiRoot + '/list/'
  return <Screen navigation={navigation} screenType="list" apiUrl={endpoint} />
}

/**
 * RandomScreen component
 * screen where the user can view a randomized list of words
 */
function RandomScreen({ navigation }): JSX.Element {
  const endpoint = apiRoot + '/random/'
  return (
    <Screen navigation={navigation} screenType="random" apiUrl={endpoint} />
  )
}

const Drawer = createDrawerNavigator()

/**
 * DrawerNavigator component
 * the drawer navigation used to jump between screens
 */
function DrawerNavigator() {
  const { settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].tabNavigator

  return (
    <Drawer.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: colors.actionBarIconFill,
        headerTitleStyle: {
          color: colors.actionBarTitle
        },
        drawerItemStyle: {
          width: '100%',
          marginLeft: 0,
          paddingLeft: 8
        },
        drawerLabelStyle: {
          fontSize: 24
        },
        drawerActiveTintColor: colors.accentDark
      })}
    >
      <Drawer.Screen
        name="Fwew"
        component={FwewScreen}
        options={{
          title: strings.fwew,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="List"
        component={ListScreen}
        options={{
          title: strings.list,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="list" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Random"
        component={RandomScreen}
        options={{
          title: strings.random,
          drawerIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name={focused ? 'help' : 'help-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          title: strings.saved,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="star" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Number"
        component={NumberScreen}
        options={{
          title: strings.number,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="tag" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: strings.settings,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
