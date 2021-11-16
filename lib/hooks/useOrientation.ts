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
