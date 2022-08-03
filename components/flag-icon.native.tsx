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
import { FlagIconProps } from '../lib/interfaces/props'
import React from 'react'
import SvgMain from 'react-svg-main'
import { flagIcons } from '../lib/flag-icons'

/**
 * Icon class to override default icon set of SvgMain
 */
class Icon extends SvgMain {
  constructor(props: any) {
    super(props)
    this.iconsSet = flagIcons
  }
}

/**
 * FlagIcon Component (Android / iOS version)
 *
 * renders a flag icon representing the country associated with the given
 * language code
 */
function FlagIcon({ language }: FlagIconProps): JSX.Element {
  let countryMap = {
    de: 'germany',
    en: 'united-states-of-america',
    es: 'mexico',
    et: 'estonia',
    fr: 'france',
    hu: 'hungary',
    nl: 'netherlands',
    pl: 'poland',
    ru: 'russia',
    sv: 'sweden',
    tr: 'turkey'
  }
  if (!Object.keys(countryMap).includes(language)) {
    return null
  }
  // @ts-ignore
  return <Icon name={countryMap[language]} />
}

export default FlagIcon
