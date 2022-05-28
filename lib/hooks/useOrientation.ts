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
import { useEffect, useState } from 'react'

import { Dimensions } from 'react-native'
import { Orientation } from '../interfaces/orientation'

function useOrientation() {
  const { width, height } = Dimensions.get('window')
  const initialOrientation =
    width < height ? Orientation.PORTRAIT : Orientation.LANDSCAPE
  const [orientation, setOrientation] = useState(initialOrientation)

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window: { width, height } }) => {
        if (width < height) {
          setOrientation(() => Orientation.PORTRAIT)
        } else {
          setOrientation(() => Orientation.LANDSCAPE)
        }
      }
    )
    // @ts-ignore
    return () => subscription?.remove()
  }, [])

  return orientation
}

export { useOrientation }
