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

import { UITranslation } from '../interfaces/i18n'

/** UI - Spanish (Translation by Alyara Arati) */
const es: UITranslation = {
  active: true,
  resultsActive: false,
  entryModalContent: {
    partOfSpeech: 'parte de la oración',
    definition: 'definición',
    source: 'fuente',
    ipa: 'IPA',
    syllables: 'sílibas',
    stressedSyllable: 'posición de la síliba acentuada',
    infixSlots: 'espacios por los afijos entre del verbo',
    infixDots: 'puntos por los afijos entre del verbo',
    prefixes: 'prefijos',
    infixes: 'afijos entre del verbo',
    suffixes: 'sufijos',
    lenition: 'lenición'
  },
  fwewScreen: {
    search: 'busca en'
  },
  listRandomForm: {
    word: 'palabra',
    pos: 'parte de la oración',
    syllables: 'número de las sílibas',
    stress: 'posición de la síliba acentuada',
    words: 'en orden de la fecha de publicación',
    starts: 'empieza con',
    ends: 'termina con',
    is: 'es exactamente',
    has: 'tiene',
    like: 'es similar de',
    notStarts: 'no empieza con',
    notEnds: 'no termina con',
    notIs: 'ino puede ser',
    notHas: 'no tiene',
    notLike: 'no es similar de',
    lessThan: 'es menos que (<)',
    lessThanEqual: 'a lo sumo es (≤)',
    equal: 'es igual de (=)',
    greaterThanEqual: 'por lo menos es (≥)',
    greaterThan: 'es más que (>)',
    notEqual: 'no puede ser igual de (≠)',
    first: 'número de palabras más viejas',
    last: 'número de palabras más nuevas',
    numRandomWords: 'número de palabras aleatorias',
    list: 'lista',
    and: 'y',
    random: 'aleatorio',
    where: 'tal que',
    back: 'regresa',
    delete: 'elimina',
    search: 'busca'
  },
  savedScreen: {
    title: 'palabras guardadas',
    infoText:
      'para guardar o eliminar una palabra, toca el número al lado de la entrada'
  },
  settingsScreen: {
    title: 'ajustes',
    appLanguage: 'idioma de la aplicación',
    appLanguageDesc: 'idioma predeterminado de la aplicación',
    resultsLanguage: 'idioma de las resueltas',
    resultsLanguageDesc: 'idioma predeterminado de las resueltas'
  },
  drawerNavigator: {
    fwew: 'busca',
    list: 'lista',
    random: 'aleatorio',
    saved: 'guardado',
    number: 'números',
    settings: 'ajustes'
  },
  versionCard: {
    title: 'acerca de fwew',
    versionInfo: 'información sobre la versión',
    dictionary: 'diccionario',
    credits: 'créditos',
    development: 'desarrollo',
    design: 'diseño',
    testing: 'ensayo',
    translation: 'traducción'
  },
  resultCount: {
    results: 'resueltas'
  }
}

export default es
