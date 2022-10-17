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

import { UITranslation } from '../interfaces/i18n'

/** UI - Turkish */
const tr: UITranslation = {
  active: true,
  resultsActive: true,
  entryModalContent: {
    partOfSpeech: 'konuşmanın bölümü',
    definition: 'tanım',
    source: 'kaynak',
    ipa: 'IPA',
    syllables: 'heceler',
    stressedSyllable: 'vurgulu hece pozisyonu',
    infixSlots: 'infix yerleri',
    infixDots: 'infix noktaları',
    prefixes: 'önekler',
    infixes: 'düzeltmeler',
    suffixes: 'son ekler',
    lenition: 'cömertlik',
    listen: 'dinle'
  },
  fwewScreen: {
    search: 'ara'
  },
  listRandomForm: {
    word: 'kelime',
    pos: 'konuşmanın bölümü',
    syllables: 'hece sayısı',
    stress: 'vurgulu hece pozisyonu',
    words: 'çıkış tarihi sırasına göre',
    length: 'uzunluk',
    starts: 'ile başlar',
    ends: 'ile biter',
    is: 'tam olarak',
    has: 'sahip olmak',
    like: 'gibi',
    notStarts: 'ile başlamaz',
    notEnds: 'ile bitmiyor',
    notIs: 'tam olarak değil',
    notHas: 'bulunmamaktadır',
    notLike: 'gibi değil',
    lessThan: 'daha az (<)',
    lessThanEqual: 'en fazla (≤)',
    equal: 'mükemmel (=)',
    greaterThanEqual: 'en azından (≥)',
    greaterThan: 'daha fazladır (>)',
    notEqual: 'tam olarak değil (≠)',
    first: 'eski kelimeler',
    last: 'yeni kelimeler',
    numRandomWords: 'random kelimeler için bir sayı giriniz',
    list: 'liste',
    and: 've',
    random: 'rastgele',
    where: 'nerede',
    back: 'geri',
    delete: 'sil',
    search: 'ara'
  },
  savedScreen: {
    title: 'kaydedilen kelimeler',
    infoText: 'bir kelimeyi kaydetmek veya kaydetmeyi kaldırmak için bir girişteki numaraya dokunun'
  },
  settingsScreen: {
    title: 'ayarlar',
    appLanguage: 'uygulama dili',
    appLanguageDesc: 'uygulama arayüzünün dili',
    resultsLanguage: 'sonuç dili',
    resultsLanguageDesc: 'sonuç kelimelerinin dili'
  },
  drawerNavigator: {
    fwew: 'ara',
    list: 'liste',
    random: 'rastgele',
    saved: 'kaydedilenler',
    number: 'sayı',
    settings: 'ayarlar'
  },
  versionCard: {
    title: 'fwew hakkında',
    versionInfo: 'versiyon hakkında',
    dictionary: 'sözlük',
    credits: 'yardımcılar',
    development: 'geliştirici',
    design: 'tasarımcı',
    testing: 'test yapan',
    translation: 'çevirmen'
  },
  resultCount: {
    results: 'sonuçlar',
    result: 'sonuç'
  }
}

export default tr
