import { Word } from "fwew.js";
import reefForestPairs from "./u-words.json";

/**
 * converts a single syllable of forest dialect IPA to reef
 *
 * @param forestSyllableIPA single syllable unit of forest dialect IPA
 * @returns {string} corresponding single syllable unit of reef dialect IPA
 */
function convertSyllableIPA(forestSyllableIPA: string): string {
  return forestSyllableIPA;
}

/**
 * converts IPA in forest dialect to IPA in reef dialect
 *
 * @param {string} forestIPA forest dialect IPA
 * @returns {string} reef dialect IPA
 */
export function getReefIPA(forestIPA: string): string {
  if (forestIPA.replaceAll("·", "") === "ˈzɛŋ.kɛ") {
    return "ˈz·ɛŋ·.kɛ";
  } else if (forestIPA === "ɾæ.ˈʔæ" || forestIPA === "ˈɾæ.ʔæ") {
    return "ɾæ.ˈʔæ";
  }

  const syllables = forestIPA.replace(" ", ". .").split(".");
  const reefSyllables: string[] = [];

  for (const syllable of syllables) {
    reefSyllables.push(convertSyllableIPA(syllable));
  }

  return reefSyllables.join("");
}

/**
 * converts a single syllable in forest dialect to reef dialect
 *
 * @param {string} forestSyllable forest dialect syllable
 * @returns {string} reef dialect syllable
 */
function getReefSyllable(forestSyllable: string): string {
  return forestSyllable;
}

/**
 * converts syllable breakdown in forest dialect to syllable breakdown in reef dialect
 *
 * @param {string} forestSyllables forest dialect syllables
 * @returns {string} reef dialect syllables
 */
export function getReefSyllables(forestSyllables: string): string {
  return getReefSyllable(forestSyllables);
}

/**
 * converts Na'vi word in forest dialect to reef dialect
 *
 * References:
 * - https://naviteri.org/2022/12/neytiriya-waytelem-neytiris-song-cord/
 * - https://naviteri.org/2023/01/reef-navi-part-1-phonetics-and-phonology/
 * - https://naviteri.org/2023/01/2653/
 * - https://naviteri.org/2023/05/reef-navi-part-2-morphology-syntax-lexicon-and-more/
 * - https://naviteri.org/2023/07/the-complete-u-u-list-for-reef-navi/
 *
 * @param {Word} word forest dialect Na'vi word
 * @returns {string} reef dialect Na'vi word
 */
export function getReefNavi(word: Word): string {
  // ätxäle corresponds to edäle when the RN changes are implemented.
  if (word.Navi === "ätxäle") {
    return "edäle";
  }
  if (word.Navi === "ätxäle si") {
    return "edäle si";
  }

  let reefNavi = "";
  let forestNavi = word.Navi.split("");

  // unstressed ä -> e
  if (forestNavi.includes("ä") && +word.Syllables > 1) {
    for (let i = 0; i < forestNavi.length; i++) {
      let vowelCount = 0;
      if (forestNavi[i].match(/[aäeiìouéù]/)) {
        vowelCount++;
        if (vowelCount === +word.Stressed && forestNavi[i] === "ä") {
          forestNavi[i] = "e";
        }
      }
    }
    word.Navi = forestNavi.join("");
  }

  // ù https://naviteri.org/2023/07/the-complete-u-u-list-for-reef-navi/
  for (const pair of reefForestPairs) {
    if (pair.forest === word.Navi) {
      reefNavi = pair.reef;
      break;
    }
  }

  if (reefNavi === "") {
    reefNavi = `${word.Navi}`;
  }

  // tsy -> ch
  reefNavi = reefNavi.replace("tsy", "ch");
  // sy -> sh
  reefNavi = reefNavi.replace("sy", "sh");

  // ' lost between non-identical vowels
  // ' lost optionally between identical vowels
  // no merge if ' lost between identical vowels
  // rää, apxaa, meeveng, seii, etc. remain
  const reGlottalStop = new RegExp(
    `([aeiouìäéùAEIOUÌÄÉÙ])'([aeiouìäéùAEIOUÌÄÉÙ])`,
    "g"
  );

  reefNavi = reefNavi.replaceAll(reGlottalStop, "$1$2");

  // px,tx,kx -> b,d,g @ syllable onset
  // 'awkx -> 'awgìl
  // px
  var rePx0 = new RegExp(`px([aeiouìäéùAEIOUÌÄÉÙ])`, "g");
  reefNavi = reefNavi.replaceAll(rePx0, "b$1");
  var rePx1 = new RegExp(`px(ll|rr)`, "g");
  reefNavi = reefNavi.replaceAll(rePx1, "b$1");
  // tx
  var reTx0 = new RegExp(`tx([aeiouìäéùAEIOUÌÄÉÙ])`, "g");
  reefNavi = reefNavi.replaceAll(reTx0, "d$1");
  var reTx1 = new RegExp(`tx(ll|rr)`, "g");
  reefNavi = reefNavi.replaceAll(reTx1, "d$1");
  // kx
  var reKx0 = new RegExp(`kx([aeiouìäéùAEIOUÌÄÉÙ])`, "g");
  reefNavi = reefNavi.replaceAll(reKx0, "g$1");
  var reKx1 = new RegExp(`kx(ll|rr)`, "g");
  reefNavi = reefNavi.replaceAll(reKx1, "g$1");

  // It's adge and egdu
  // dg etc.
  var reTx2 = new RegExp(`tx([bdg])`, "g");
  reefNavi = reefNavi.replaceAll(reTx2, "d$1");
  // gd etc.
  var reKx2 = new RegExp(`kx([bdg])`, "g");
  reefNavi = reefNavi.replaceAll(reKx2, "g$1");
  // for good measure, bg etc.
  var rePx2 = new RegExp(`px([bdg])`, "g");
  reefNavi = reefNavi.replaceAll(rePx2, "b$1");

  return reefNavi;
}

/**
 * converts angle-bracket infix locations from forest dialect to reef dialect
 *
 * @param {string} forestInfixBrackets forest dialect infix brackets
 * @returns {string} reef dialect infix brackets
 */
export function getReefInfixBrackets(forestInfixBrackets: string): string {
  return forestInfixBrackets;
}

/**
 * converts dot notation infix locations from forest dialect to reef dialect
 *
 * @param {string} forestInfixDots forest dialect infix dots
 * @returns {string} reef dialect infix dots
 */
export function getReefInfixDots(forestInfixDots: string): string {
  return forestInfixDots;
}
