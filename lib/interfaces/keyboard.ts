import { ScreenRect } from 'react-native'

/** interface for keyboard position and dimensions */
export interface Keyboard {
  keyboardShown: boolean
  coordinates: {
    start: ScreenRect
    end: ScreenRect
  }
  keyboardHeight: number
}
