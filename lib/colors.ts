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

import { ColorConfig } from './interfaces/color-config'

/**
 * Global Color configuration for application-wide styles
 */
const colors: ColorConfig = {
  primary: '#7494ba',
  secondary: '#537aa8',
  text: '#000',
  statusBar: '#76a853',
  entryNumber: '#fff',
  entryBorder: '#ddd',
  buttonText: '#fff',
  entryBackground: '#fff',
  modalBackground: '#fff',
  modalBorder: '#ddd',
  modalRowBorder: '#757575',
  screenBackground: '#d9e2ed',
  inputBackground: '#fff',
  switchTrackColorFalse: '#767577',
  switchTrackColorTrue: '#7494ba',
  switchThumbColorFalse: '#f4f3f4',
  switchThumbColorTrue: '#537aa8',
  switchIOSBackgroundColor: '#3e3e3e',
  activeTabBackground: '#fff',
  activeTabTint: '#7494ba',
  inactiveTabBackground: '#7494ba',
  inactiveTabTint: '#fff',
  settingsButtonFill: '#fff',
  actionBarIconFill: '#fff',
  actionBarTitle: '#fff',
  inputCloseButton: '#ccc',
  entryIndexIconFill: '#fff',
  infoMessageIcon: '#98b0cd',
  accent: '#9dd197',
  accentDark: '#64a853',
  posTagBackground: '#d9d9d9'
}

export default colors
