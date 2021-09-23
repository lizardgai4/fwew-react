/**
 * compress digraphs so that each phoneme is represented by exactly one unique character
 *
 * @param word Na'vi string to be compressed
 * @return word with every every digraph replaced by a unique substitute
 */
export function compress(word) {
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
export function compareWords(a, b) {
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
