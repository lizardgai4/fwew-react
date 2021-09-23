/** Global Settings Interface */
export interface SettingsGlobal {
  languageCode: string
}

/** Fwew Settings Interface */
export interface SettingsFwew {
  isReverseEnabled: boolean
  posFilterText: string
}

interface WordWhat {
  has: string
  starts: string
  ends: string
  like: string
}

interface PosWhat extends WordWhat {
  is: string
}

interface NumWhat {
  lessThan: string
  lessThanEqual: string
  equal: string
  greaterThanEqual: string
  greaterThan: string
}

interface WordsWhat {
  first: string
  last: string
}

export interface SettingsList {
  word: WordWhat
  pos: PosWhat
  syllables: NumWhat
  stress: NumWhat
  words: WordsWhat
}

export interface SettingsRandom extends SettingsList {
  numRandomWords: string
}
