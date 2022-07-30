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
import { Language, LanguageNames, UI } from '../interfaces/i18n'

import de from './de'
import en from './en'
import es from './es'
import et from './et'
import fr from './fr'
import hu from './hu'
import nl from './nl'
import nx from './nx'
import pl from './pl'
import ru from './ru'
import sv from './sv'
import tr from './tr'

/** Array of all supported language codes */
export const Languages: Language[] = [
  Language.DE,
  Language.EN,
  Language.ES,
  Language.ET,
  Language.FR,
  Language.HU,
  Language.NL,
  Language.PL,
  Language.RU,
  Language.SV,
  Language.TR,
  Language.NX
]

/* Map of language codes to language names for the settings page */
export const languageNames: LanguageNames = {
  de: `Deutsch`,
  en: `English`,
  es: `Español`,
  et: `Eesti`,
  fr: `Français`,
  hu: `Magyar`,
  nl: `Nederlands`,
  pl: `Polski`,
  ru: `Русский`,
  sv: `Svenska`,
  tr: `Türkçe`,
  nx: `Na'vi`
}

/** Internationalized UI strings */
export const ui: UI = { de, en, es, et, fr, hu, nl, pl, ru, sv, tr, nx }
