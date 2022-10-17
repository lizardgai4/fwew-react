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
 * 
 * This component was taken from the Issue 1377 comment on the React Native Paper repository at
 * https://github.com/callstack/react-native-paper/issues/1377#issuecomment-782562768
 * and modified
 */
import React from 'react';
import { Platform } from 'react-native';

function GlobalStyle(): null {
  const css = "input {outline: none;}"

  React.useEffect(() => {
    if (Platform.OS === 'web') {
      const style = document.createElement('style')
      style.textContent = css
      document.head.append(style)
      return () => style.remove()
    }
  }, [css])
  return null
};

export default React.memo(GlobalStyle);