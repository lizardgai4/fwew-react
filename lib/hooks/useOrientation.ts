import { useEffect, useState } from 'react'

import { Dimensions } from 'react-native'
import { Orientation } from '../interfaces/orientation'

export function useOrientation() {
  const [orientation, setOrientation] = useState(Orientation.PORTRAIT)

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
