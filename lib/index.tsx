import React, { Fragment } from 'react'

import { Text } from 'react-native'
import { Word } from './interfaces/word'

/**
 * compress digraphs so that each phoneme is represented by exactly one unique character
 *
 * @param word Na'vi string to be compressed
 * @return word with every every digraph replaced by a unique substitute
 */
export function compress(word: string): string {
  const compressed = {
    aw: '0',
    ay: '1',
    ew: '2',
    ey: '3',
    kx: '4',
    ll: '5',
    ng: '6',
    px: '7',
    rr: '8',
    ts: '9',
    tx: 'Q'
  }
  for (const c in compressed) {
    word = word.replace(c, compressed[c])
  }
  return word
}

/**
 * Compare two Fwew Word objects for sorting according to custom Na'vi Collation
 *
 * @param a Fwew Word object
 * @param b Fwew Word object
 * @return -1 if a is to be sorted before b, 1 if a is to be sorted after b, 0 otherwise
 */
export function compareWords(a: Word, b: Word): number {
  const sortOrderCompressed = "'a01äe23fhiìjk4l5mn6op7r8st9Quvwyz-".split('')
  const compressedA = compress(a.Navi.toLowerCase())
  const compressedB = compress(b.Navi.toLowerCase())
  const length =
    compressedA.length < compressedB.length
      ? compressedA.length
      : compressedB.length

  for (let i = 0; i < length; i++) {
    const indexA = sortOrderCompressed.indexOf(compressedA[i])
    const indexB = sortOrderCompressed.indexOf(compressedB[i])
    if (indexA < indexB) {
      return -1
    } else if (indexA > indexB) {
      return 1
    }
  }

  if (compressedA.length < compressedB.length) {
    return -1
  } else if (compressedA.length > compressedB.length) {
    return 1
  }
  return 0
}

/**
 * Ensures all items in an array have unique keys
 *
 * @param arr an array of JSX Elements
 * @return the given array with unique key props
 */
export function withKeys(arr: JSX.Element[]): JSX.Element[] {
  return arr.map((item, index) => <Fragment key={index}>{item}</Fragment>)
}

/**
 * joins items in an array with char in between, much like Array.prototype.join,
 * but for React Native Text
 *
 * @param arr a mixed array of strings and/or Text Elements
 * @param str the string to place between all the array items
 * @return array of Text Elements, with a Text containing `str` in between each
 */
export function join(
  arr: Array<string | JSX.Element>,
  str: string
): JSX.Element[] {
  return arr.map((item, index) =>
    index > 0 ? (
      <Text>
        {str}
        {item}
      </Text>
    ) : (
      <Text>{item}</Text>
    )
  )
}
