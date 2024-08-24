const nonPhoneticSpellings = new Map<string, string>([
  ["ʒɛjk'.ˈsu:.li", "jake-sùl-ly"], // Obsolete path
  // We hear this in Avatar 2
  ["ɾæ.ˈʔæ", "rä'ä"],
  ["ˈɾæ.ʔæ", "rä'ä"],
  // zenke sounds like zengke
  ["ˈzɛŋ.kɛ", "zenke"],
  ["ˈzɛŋ·.kɛ", "zenke"],
  ["ˈzɛŋ.·kɛ", "zenke"],
  // ayoeng sounds like ayweng
  ["aj.ˈwɛŋ", "ayoeng"],
  ["nɪ.aj.ˈwɛŋ] or [naj.ˈwɛŋ", "nìayoeng"],
]);

/**
 * Get Reef IPA and Syllables by forest IPA
 *
 * @param {string} IPA forest IPA
 * @returns {[string, string, string]} Reef Word, Reef IPA, Reef Syllables
 */
export function ReefMe(IPA: string): [string, string, string] {
  // Reefify the IPA first
  let ipaReef = IPA.replaceAll("·", "");

  // Deal with ejectives
  var soften: { [id: string]: string } = {
    "p'": "b",
    "t'": "d",
    "k'": "g",
  };
  
  const vowels = ["a", "ɛ", "u", "ɪ", "o", "i", "æ", "ʊ"];

  // atxkxe and ekxtxu become adge and egdu
  let ejectives = ["p'", "t'", "k'"];
  for (let b of ejectives) {
    for (let a of ejectives) {
      ipaReef = ipaReef.replaceAll(
        a.concat(".".concat(b)),
        soften[a].concat(".".concat(soften[b]))
      );
      ipaReef = ipaReef.replaceAll(
        a.concat(".ˈ".concat(b)),
        soften[a].concat(".ˈ".concat(soften[b]))
      );
    }
  }

  // Ejectives before vowels and diphthongs become voiced plosives regardless of syllable boundaries
  for (let b of ejectives) {
    ipaReef = ipaReef.replaceAll(".".concat(b), ".".concat(soften[b]));
    ipaReef = ipaReef.replaceAll(".ˈ".concat(b), ".ˈ".concat(soften[b]));
    // in case there's a space before the ejective
    ipaReef = ipaReef.replaceAll(" ".concat(b), " ".concat(soften[b]));
    ipaReef = ipaReef.replaceAll(" ˈ".concat(b), " ˈ".concat(soften[b]));

    // start without stress marker
    if (ipaReef.startsWith(b)) {
      ipaReef = ipaReef.slice(b.length);
      ipaReef = soften[b] + ipaReef;
    }

    // start with stress marker
    if (ipaReef.startsWith("ˈ" + b)) {
      ipaReef = ipaReef.slice(("ˈ" + b).length);
      ipaReef = "ˈ" + soften[b] + ipaReef;
    }

    for (let a of vowels) {
      ipaReef = ipaReef.replaceAll(
        b.concat(".".concat(a)),
        soften[b].concat(".".concat(a))
      );
      ipaReef = ipaReef.replaceAll(
        b.concat(".ˈ".concat(a)),
        soften[b].concat(".ˈ".concat(a))
      );
    }
  }
  ipaReef = ipaReef.replaceAll("t͡sj", "tʃ");
  ipaReef = ipaReef.replaceAll("sj", "ʃ");

  let temp = "";

  // Glottal stops between two vowels are removed
  const chars = [...ipaReef];

  let i = 0;
  for (let rune of chars) {
    if (i !== 0 && i < chars.length - 1 && rune === "ʔ") {
      let firstI = i - 1;
      let secondI = i + 1;
      if (chars[i - 1] === ".") {
        firstI = i - 2;
      } else if (chars[i + 1] === ".") {
        secondI = i + 2;
      } else if (chars[i - 1] === "ˈ" && i > 1) {
        firstI = i - 3;
      }
      if (vowels.includes(chars[firstI]) && vowels.includes(chars[secondI])) {
        if (chars[firstI] !== chars[secondI]) {
          i += 1;
          continue;
        }
      }
    }
    temp = temp.concat(rune);
    i += 1;
  }

  ipaReef = temp;

  // Replace the spaces so as not to confuse strings.Split()
  ipaReef = ipaReef.replaceAll(" ", "*.");

  // Unstressed ä becomes e
  let ipa_syllables = ipaReef.split(".");
  if (ipa_syllables.length > 1) {
    let new_ipa = "";
    ipa_syllables.forEach((syllable) => {
      new_ipa += ".";
      if (!syllable.includes("ˈ")) {
        new_ipa = new_ipa.concat(syllable.replaceAll("æ", "ɛ"));
      } else {
        new_ipa = new_ipa.concat(syllable);
      }
    });
    ipaReef = new_ipa;
    ipaReef = ipaReef.slice(".".length);
  }

  ipaReef = ipaReef.replaceAll("*.", " ");

  // now Romanize the reef IPA
  let word = ipaReef.split(" ");

  let breakdown = "";

  for (let s of word) {
    if (s === "or") {
      breakdown = breakdown.concat("or ");
      continue;
    }

    let syllables = s.split(".");

    // Onset
    for (let a of syllables) {
      a = a.replaceAll("]", "");
      a = a.replaceAll("[", "");

      let syllables = a.split(".");

      // Onset
      for (let syllable of syllables) {
        syllable = syllable.replaceAll("·", "");
        syllable = syllable.replaceAll("ˈ", "");
        syllable = syllable.replaceAll("ˌ", "");

        breakdown = breakdown.concat("-");

        let runes = [...syllable];

        var romanize: { [id: string]: string } = {
          ʔ: "'",
          l: "l",
          ɾ: "r",
          h: "h",
          m: "m",
          n: "n",
          ŋ: "ng",
          v: "v",
          w: "w",
          j: "y",
          z: "z",
          b: "b",
          d: "d",
          g: "g",
          ʃ: "sh", // "syawm" only
          ʒ: "ch", // "Jakesully" only (even though we caught it above)
          ṛ: "rr",
          ḷ: "ll",
          a: "a",
          i: "i",
          ɪ: "ì",
          o: "o",
          ɛ: "e",
          u: "u",
          æ: "ä",
          ʊ: "ù",
          "p'": "px",
          "t'": "tx",
          "k'": "kx",
          p: "p",
          t: "t",
          k: "k",
        };

        // tsy
        if (syllable.startsWith("tʃ")) {
          breakdown = breakdown.concat("ch");
          syllable = syllable.slice("tʃ".length);
        } else if (syllable.length >= 4 && syllable.startsWith("t͡s")) {
          // ts
          breakdown = breakdown.concat("ts");
          syllable = syllable.slice("t͡s".length);

          let unvoiced_plosive = ["p", "t", "k"];
          let clusterable = ["l", "ɾ", "m", "n", "ŋ", "w", "j"];
          runes = [...syllable];
          // tsp
          if (unvoiced_plosive.includes(runes[0])) {
            breakdown = breakdown.concat(romanize[runes[0]]);
            syllable = syllable.slice(runes[0].length);
            if (runes[1] === "'") {
              syllable = syllable.slice("'".length);
              breakdown = breakdown.concat("x");
            }
          } else if (clusterable.includes(runes[0])) {
            breakdown = breakdown.concat(romanize[runes[0]]);
            syllable = syllable.slice(runes[0].length);
          }
        } else if (["f", "s"].includes(runes[0])) {
          breakdown = breakdown.concat(syllable[0]);
          syllable = syllable.slice(syllable[0].length);

          let unvoiced_plosive = ["p", "t", "k"];
          let clusterable = ["l", "ɾ", "m", "n", "ŋ", "w", "j"];
          runes = [...syllable];
          // tsp
          if (unvoiced_plosive.includes(runes[0])) {
            breakdown = breakdown.concat(romanize[runes[0]]);
            syllable = syllable.slice(runes[0].length);
            if (runes[1] === "'") {
              // f/s + ejective onset
              syllable = syllable.slice("'".length);
              breakdown = breakdown.concat("x");
            }
          } else if (clusterable.includes(runes[0])) {
            // f/s + other consonant
            breakdown = breakdown.concat(romanize[runes[0]]);
            syllable = syllable.slice(runes[0].length);
          }
        } else if (["p", "t", "k"].includes(runes[0])) {
          breakdown = breakdown.concat(romanize[runes[0]]);
          syllable = syllable.slice(runes[0].length);
          if (runes[1] === "'") {
            // f/s + ejective onset
            syllable = syllable.slice("'".length);
            breakdown = breakdown.concat("x");
          }
        } else if (
          [
            "ʔ",
            "l",
            "ɾ",
            "h",
            "m",
            "n",
            "ŋ",
            "v",
            "w",
            "j",
            "z",
            "b",
            "d",
            "g",
            "ʃ",
            "ʒ",
            "b",
            "d",
            "g",
          ].includes(runes[0])
        ) {
          // other normal onset
          breakdown = breakdown.concat(romanize[runes[0]]);
          syllable = syllable.slice(runes[0].length);
        }

        // Nucleus
        runes = [...syllable];

        if (runes.length > 1 && ["j", "w"].includes(runes[1])) {
          //diphthong
          breakdown = breakdown.concat(romanize[runes[0]]);
          breakdown = breakdown.concat(romanize[runes[1]]);
          let diphthong = romanize[runes[0]];
          diphthong = diphthong.concat(romanize[runes[1]]);
          syllable = syllable.slice(diphthong.length);
        } else if (syllable.includes("ḷ")) {
          //psuedovowel
          breakdown = breakdown.concat("ll");
          continue; // psuedovowels can't coda
        } else if (syllable.includes("ṛ")) {
          //psuedovowel
          breakdown = breakdown.concat("rr");
          continue; // psuedovowels can't coda
        } else {
          // vowel
          breakdown = breakdown.concat(romanize[runes[0]]);
          syllable = syllable.slice(runes[0].length);
        }

        // Coda
        runes = [...syllable];

        if (syllable.length > 0) {
          if (runes[0] === "s") {
            breakdown = breakdown.concat("sss"); // oìsss only
          } else {
            if (syllable === "k̚") {
              breakdown = breakdown.concat("k");
            } else if (syllable === "p̚") {
              breakdown = breakdown.concat("p");
            } else if (syllable === "t̚") {
              breakdown = breakdown.concat("t");
            } else if (syllable === "ʔ̚") {
              breakdown = breakdown.concat("'");
            } else {
              if (runes[0] === "k" && syllable.length > 1) {
                breakdown = breakdown.concat("kx");
              } else {
                breakdown = breakdown.concat(romanize[syllable]);
              }
            }
          }
        }
      }
    }

    breakdown = breakdown.concat(" ");
  }

  breakdown = breakdown.replaceAll(" -", " ");
  breakdown = breakdown.trim();
  breakdown = breakdown.slice("-".length);
  while (breakdown[0] === "-") {
    breakdown = breakdown.slice("-".length);
  }

  // If there's a tìftang between two identical vowels, the tìftang is optional
  let shortString = ipaReef.replaceAll("ˈ", "");
  shortString = shortString.replaceAll(".", "");
  for (let a of ["a", "ɛ", "ɪ", "o", "u", "i", "æ", "ʊ"]) {
    if (shortString.includes(a + "ʔ" + a)) {
      // fix IPA
      let noTìftangIPA = ipaReef.replaceAll(a + ".ˈʔ" + a, a + ".ˈ" + a);
      noTìftangIPA = noTìftangIPA.replaceAll(a + ".ʔ" + a, a + "." + a);
      noTìftangIPA = noTìftangIPA.replaceAll(a + "ʔ." + a, a + "." + a);
      noTìftangIPA = noTìftangIPA.replaceAll(a + "ʔ.ˈ" + a, a + ".ˈ" + a);

      ipaReef = ipaReef.concat("] or [");
      ipaReef = ipaReef.concat(noTìftangIPA);
    }
  }

  // fix breakdown
  shortString = breakdown.replaceAll("-", "");
  for (let a of ["a", "e", "ì", "o", "u", "i", "ä", "ù"]) {
    if (shortString.includes(a + "'" + a)) {
      // fix IPA
      let noTìftangBreakdown = breakdown.replaceAll(a + "'-" + a, a + "-" + a);
      noTìftangBreakdown = noTìftangBreakdown.replaceAll(
        a + "-'" + a,
        a + "-" + a
      );

      breakdown = breakdown.concat(" or ");
      breakdown = breakdown.concat(noTìftangBreakdown);
    }
  }

  let reefWord = ""
  if (nonPhoneticSpellings.has(IPA)) {
    // Obsolete path
    reefWord = nonPhoneticSpellings.get(IPA)!; // non-null assertion
  } else {
    reefWord = breakdown.split(" or ",1)[0].replaceAll("-","")
  }

  return [reefWord, ipaReef, breakdown];
}
