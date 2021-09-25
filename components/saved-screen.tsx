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
import React, { Fragment, useContext } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

import ActionBar from './action-bar'
import { StateContext } from '../context'
import WordList from './word-list'
import colors from './colors'

function SavedScreen(): JSX.Element {
  const { dataCache } = useContext(StateContext)
  const data = [...dataCache]
  const err = { message: null }
  const isLoading = false
  const onRefresh = () => {}
  const text = ''
  const toggleModal = () => {}
  const posFilterEnabled = false

  return (
    <Fragment>
      {/* status bar */}
      <SafeAreaView style={styles.safeStatusBar} />
      <StatusBar barStyle="light-content" />

      {/* main content */}
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.mainView}>
          <ActionBar />
          <WordList
            data={data}
            err={err}
            isLoading={isLoading}
            onRefresh={onRefresh}
            text={text}
            toggleModal={toggleModal}
            posFilterEnabled={posFilterEnabled}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  safeStatusBar: {
    flex: 0,
    backgroundColor: colors.secondary
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.screenBackground
  },
  mainView: {
    flex: 1
  }
})

export default SavedScreen
