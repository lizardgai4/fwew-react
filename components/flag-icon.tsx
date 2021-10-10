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
import { FlagIconProps } from '../lib/interfaces/props'
import Icon from 'react-native-ico-flags'

/**
 * FlagIcon Component
 *
 * renders a flag icon representing the country associated with the given
 * language code
 */
const FlagIcon = ({ language }: FlagIconProps): JSX.Element => {
  let countryMap = {
    de: 'germany',
    en: 'united-states-of-america',
    et: 'estonia',
    fr: 'france',
    hu: 'hungary',
    nl: 'netherlands',
    pl: 'poland',
    ru: 'russia',
    sv: 'sweden'
  }
  if (!Object.keys(countryMap).includes(language)) {
    return null
  }
  return <Icon name={countryMap[language]} />
}

export default FlagIcon
