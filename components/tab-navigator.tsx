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
import SavedScreen from './saved-screen'
import Screen from './screen'
import { SettingsContext } from '../context'
import SettingsScreen from './settings-screen'
import { apiRoot } from '../lib/settings'
import colors from '../lib/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ui } from '../lib/i18n'

// screen where the user can list all words (or all words that have given properties)
function ListScreen(): JSX.Element {
  const endpoint = apiRoot + '/list/'
  return <Screen screenType="list" apiUrl={endpoint} />
}

// screen where the user can view a randomized list of words
function RandomScreen(): JSX.Element {
  const endpoint = apiRoot + '/random/'
  return <Screen screenType="random" apiUrl={endpoint}></Screen>
}

const Tab = createBottomTabNavigator()

// the tab navigation at the bottom of the screen used to jump between the above screens
function TabNavigator(): JSX.Element {
  const { settingsGlobal } = useContext(SettingsContext)
  const { languageCodeUI } = settingsGlobal
  const strings = ui[languageCodeUI].tabNavigator

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string
          switch (route.name) {
            case 'Fwew':
              iconName = 'search'
              break
            case 'List':
              iconName = 'list'
              break
            case 'Random':
              iconName = focused ? 'help' : 'help-outline'
              break
            case 'Saved':
              iconName = 'star'
              break
            case 'Settings':
              iconName = 'settings'
              break
          }
          return <MaterialIcons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.activeTabTint,
        tabBarInactiveTintColor: colors.inactiveTabTint,
        tabBarActiveBackgroundColor: colors.activeTabBackground,
        tabBarInactiveBackgroundColor: colors.inactiveTabBackground,
        tabBarStyle: [
          { display: 'flex', backgroundColor: colors.secondary },
          null
        ],
        tabBarIconStyle: { marginTop: 4 },
        tabBarItemStyle: { paddingBottom: 4 },
        headerShown: false
      })}
    >
      <Tab.Screen name={strings.fwew} component={FwewScreen} />
      <Tab.Screen name={strings.list} component={ListScreen} />
      <Tab.Screen name={strings.random} component={RandomScreen} />
      <Tab.Screen name={strings.saved} component={SavedScreen} />
      <Tab.Screen name={strings.settings} component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
