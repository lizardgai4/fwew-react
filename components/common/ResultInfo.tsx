import { Button } from "@/components/common/Button";
import {
  BoldText,
  ItalicText,
  UnderlinedText,
} from "@/components/common/StyledText";
import { CardView, Text, View } from "@/components/common/Themed";
import { Affixes } from "@/constants/Affixes";
import Colors from "@/constants/Colors";
import { LenitingAdpositions } from "@/constants/Lenition";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useSound } from "@/hooks/useSound";
import { useTheme } from "@react-navigation/native";
import { fwewSimple, type LanguageCode, type Word } from "fwew.js";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Autolink from "react-native-autolink";

type ResultInfoProps = {
  word: Word;
};

export function ResultInfo({ word }: ResultInfoProps) {
  const { playSound, disabled } = useSound();
  const { resultsLanguage } = useResultsLanguageContext();
  const local = word[resultsLanguage.toUpperCase() as Uppercase<LanguageCode>];
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];

  return (
    <CardView style={styles.container}>
      <CardView style={styles.buttonContainer}>
        <Button
          onPress={() => playSound(word.ID)}
          disabled={disabled}
          icon="volume-up"
          text={ui.search.audio}
          style={styles.audioButton}
          textStyle={{ color: Colors.dark.text }}
        />
        <FavoriteButton word={word} />
      </CardView>
      <DetailItem label={ui.search.navi} value={word.Navi} />
      <DetailItem
        label={ui.search.partOfSpeech}
        value={`${word.PartOfSpeech} (${
          ui.common.partOfSpeech[word.PartOfSpeech]
        })`}
      />
      <DetailItem label={ui.search.definition} value={local} />
      <Pronunciation {...word} />
      {word.PartOfSpeech.startsWith("v") && (
        <>
          <DetailItem label={ui.search.infixDots} value={word.InfixDots} />
          <DetailItem
            label={ui.search.infixSlots}
            value={word.InfixLocations}
          />
        </>
      )}
      {word.Affixes.Prefix && (
        <AffixDetail
          label={ui.search.prefixes}
          value={word.Affixes.Prefix}
          type="prefix"
        />
      )}
      {word.Affixes.Infix && (
        <AffixDetail
          label={ui.search.infixes}
          value={word.Affixes.Infix}
          type="infix"
        />
      )}
      {word.Affixes.Suffix && (
        <AffixDetail
          label={ui.search.suffixes}
          value={word.Affixes.Suffix}
          type="suffix"
        />
      )}
      {word.Affixes.Lenition && (
        <DetailItem
          label={ui.search.lenition}
          value={word.Affixes.Lenition.join(", ")}
        />
      )}
      {word.Affixes.Comment && (
        <DetailItem
          label={ui.search.comment}
          value={word.Affixes.Comment.join(", ")}
        />
      )}
      <DetailItem link label={ui.search.source} value={word.Source} />
    </CardView>
  );
}

function ReefMe( IPA: string ) {
  if (IPA == "ʒɛjk'.ˈsu:.li") {
		return ["ʒɛjk'.ˈsʊ:.li", "jake-sùl-ly"]
	} else if (IPA == "ˈz·ɛŋ.kɛ") {
		return ["ˈz·ɛŋ.kɛ", "zen-ke"]
	}

	// Replace the spaces so as not to confuse strings.Split()
	IPA = IPA.replaceAll(" ", "*.");

	// Unstressed ä becomes e
	let ipa_syllables = IPA.split(".")
	let new_ipa = ""
  ipa_syllables.forEach( (syllable) => {
    new_ipa += "."
		if (!syllable.includes("ˈ")) {
			new_ipa = new_ipa.concat(syllable.replaceAll("æ", "ɛ"))
		} else {
			new_ipa = new_ipa.concat(syllable)
		}
  });
	IPA = new_ipa.replaceAll("*.", " ")

	// Reefify the IPA first
  let ipaReef = ""
  IPA = IPA.replaceAll("·", "")
	ipaReef = ipaReef.concat(IPA)

  // Deal with ejectives
  ipaReef = ipaReef.replaceAll(".p'", ".b")
  ipaReef = ipaReef.replaceAll(".ˈp'", ".ˈb")
  ipaReef = ipaReef.replaceAll(".t'", ".d")
  ipaReef = ipaReef.replaceAll(".ˈt'", ".ˈd")
  ipaReef = ipaReef.replaceAll(".k'", ".g")
  ipaReef = ipaReef.replaceAll(".ˈk'", ".ˈg")
	ipaReef = ipaReef.replaceAll("t͡sj", "tʃ")
	ipaReef = ipaReef.replaceAll("sj", "ʃ")

  ipaReef = ipaReef.slice(".".length)

	let temp = ""

	// Glottal stops between two vowels are removed
  const chars = [...ipaReef];
  const vowels = ["a", "ɛ", "u", "ɪ", "o", "i", "æ", "ʊ"]
  let i = 0
  for(let rune of chars) {
    if (i != 0 && i < chars.length - 1 && rune == 'ʔ') {
      let firstI = i - 1
      let secondI = i + 1
      if (chars[i-1] == ".") {
        firstI = i - 2
      } else if (chars[i+1] == ".") {
        secondI = i + 2
      } else if (chars[i-1] == "ˈ" && i > 1) {
        firstI = i - 3
      }
      if (vowels.includes(chars[firstI]) && vowels.includes(chars[secondI])) {
        if (chars[firstI] != chars[secondI]) {
          i += 1
          continue
        }
      }
    }
    temp = temp.concat(rune)
    i += 1
  }

  ipaReef = temp

	// now Romanize the reef IPA
  let word = ipaReef.split(" ")

	let breakdown = ""

  for(let s of word) {
    if (s == "or") {
      break;
    }

    let syllables = s.split(".")

    // Onset
    for(let a of syllables) {
      a = a.replaceAll("]", "")
  
      if (a == "or") {
        break;
      }
  
      let syllables = a.split(".")
      
      // Onset
      //let syll1 = [...ipaReef]
      for (let syllable of syllables) {
        syllable = syllable.replaceAll("·", "")
        syllable = syllable.replaceAll("ˈ", "")
        syllable = syllable.replaceAll("ˌ", "")
  
        breakdown = breakdown.concat("-")
  
        let runes = [...syllable]
  
        var romanize: { [id: string]: string; } = {
          "ʔ": "'",
          "l": "l",
          "ɾ": "r",
          "h": "h",
          "m": "m",
          "n": "n",
          "ŋ": "ng",
          "v": "v",
          "w": "w",
          "j": "y",
          "z": "z",
          "b": "b",
          "d": "d",
          "g": "g",
          "ʃ": "sh", // "syawm" only
          "ʒ": "ch", // "Jakesully" only (even though we caught it above)
          "ṛ": "rr",
          "ḷ": "ll",
          "a": "a",
          "i": "i",
          "ɪ": "ì",
          "o": "o",
          "ɛ": "e",
          "u": "u",
          "æ": "ä",
          "ʊ": "ù",
          "p'": "px",
          "t'": "tx",
          "k'": "kx",
        };
  
        // tsy
        if (syllable.startsWith("tʃ")) {
          breakdown = breakdown.concat("ch")
          new_ipa = new_ipa.slice("tʃ".length)
        } else if (syllable.length >= 4 && syllable.startsWith("t͡s")) {
          // ts
          breakdown = breakdown.concat("ts")
          syllable = syllable.slice("t͡s".length)
  
          let unvoiced_plosive = ["p", "t", "k"]
          let clusterable = ["l","ɾ","m","n","ŋ","w","j"]
          runes = [...syllable]
          // tsp
          if (unvoiced_plosive.includes(runes[0])) {
            breakdown = breakdown.concat(romanize[runes[0]])
            syllable = syllable.slice(runes[0].length)
            if (runes[1] == "'") {
              syllable = syllable.slice("'".length)
              breakdown = breakdown.concat("x")
            }
          } else if (clusterable.includes(runes[0])) {
            breakdown = breakdown.concat(romanize[runes[0]])
            syllable = syllable.slice(runes[0].length)
          }
        } else if (["f", "s"].includes(runes[0])) {
          breakdown = breakdown.concat(syllable[0])
          syllable = syllable.slice(syllable[0].length)
  
          let unvoiced_plosive = ["p", "t", "k"]
          let clusterable = ["l","ɾ","m","n","ŋ","w","j"]
          runes = [...syllable]
          // tsp
          if (unvoiced_plosive.includes(runes[0])) {
            breakdown = breakdown.concat(romanize[runes[0]])
            syllable = syllable.slice(runes[0].length)
            if (runes[1] == "'") {
              // f/s + ejective onset
              syllable = syllable.slice("'".length)
              breakdown = breakdown.concat("x")
            }
          } else if (clusterable.includes(runes[0])) {
            // f/s + other consonant
            breakdown = breakdown.concat(romanize[runes[0]])
            syllable = syllable.slice(runes[0].length)
          }
        } else if (["p", "t", "k"].includes(runes[0])) {
          breakdown = breakdown.concat(romanize[runes[0]])
          syllable = syllable.slice(runes[0].length)
          if (runes[1] == "'") {
            // f/s + ejective onset
            syllable = syllable.slice("'".length)
            breakdown = breakdown.concat("x")
          }
        } else if (["ʔ","l","ɾ","h","m","n","ŋ","v","w","j","z","b","d","g","ʃ","ʒ","b","d","g"].includes(runes[0])) {
          // other normal onset
          breakdown = breakdown.concat(romanize[runes[0]])
          syllable = syllable.slice(runes[0].length)
        }
  
        // Nucleus
        runes = [...syllable]
  
        if (runes.length > 1 && ["j","w"].includes(runes[1])) {
          //diphthong
          breakdown = breakdown.concat(romanize[runes[0]])
          breakdown = breakdown.concat(romanize[runes[1]])
          let diphthong = romanize[runes[0]]
          diphthong = diphthong.concat(romanize[runes[1]])
          syllable = syllable.slice(diphthong.length)
        } else if (syllable.includes("ḷ")) {
          //psuedovowel
          breakdown = breakdown.concat("ll")
          continue // psuedovowels can't coda
        } else if (syllable.includes("ṛ")) {
          //psuedovowel
          breakdown = breakdown.concat("rr")
          continue // psuedovowels can't coda
        } else {
          // vowel
          breakdown = breakdown.concat(romanize[runes[0]])
          syllable = syllable.slice(runes[0].length)
        }
  
        // Coda
        runes = [...syllable]
  
        if (syllable.length > 0) {
          if (runes[0] == "s") {
            breakdown = breakdown.concat("sss") // oìsss only
          } else {
            if (syllable == "k̚") {
              breakdown = breakdown.concat("k")
            } else if (syllable == "p̚") {
              breakdown = breakdown.concat("p")
            } else if (syllable == "t̚") {
              breakdown = breakdown.concat("t")
            } else if (syllable == "ʔ̚") {
              breakdown = breakdown.concat("'")
            } else {
              if (runes[0] == 'k' && syllable.length > 1) {
                breakdown = breakdown.concat("kx")
              } else {
                breakdown = breakdown.concat(romanize[syllable])
              }
            }
          }
        }
      }
    }
    
    breakdown = breakdown.concat(" ")
  }

  breakdown = breakdown.replaceAll(" -", " ")
  breakdown = breakdown.trim()
  breakdown = breakdown.slice("-".length)
  while (breakdown[0] == "-") {
    breakdown = breakdown.slice("-".length)
  }
  
	return [ipaReef, breakdown]
}

function FavoriteButton({ word }: { word: Word }) {
  const theme = useTheme();
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];

  const faved = isFavorite(word);
  return (
    <Button
      onPress={() => toggleFavorite(word)}
      icon={faved ? "heart" : "heart-o"}
      text={ui.search.favorite}
      style={{
        ...styles.audioButton,
        backgroundColor: faved
          ? theme.colors?.primary
          : Colors[theme.dark ? "dark" : "light"].innerCard,
      }}
      textStyle={{ color: Colors.dark.text }}
    />
  );
}

type AffixDetailProps = {
  label: string;
  value: string[];
  type: "prefix" | "infix" | "suffix";
};

function AffixDetail({ label, value, type }: AffixDetailProps) {
  if (value.length === 0) return null;

  const affixes = value.map((v) => Affixes[type][v]);

  return (
    <CardView>
      <BoldText style={styles.label}>{label}:</BoldText>
      {affixes.map((affix, i) => {
        if (affix?.navi) {
          return (
            <CardView key={`rip_a_${i}`} style={styles.wrapRow}>
              <Text style={styles.value}>
                <BoldText>{affix.navi}</BoldText>{" "}
                <ItalicText>{affix.display}</ItalicText> (
                {affix.productive ? "" : "not "}
                productive{affix.productive ? ` for ${affix.for}` : ""})
              </Text>
            </CardView>
          );
        }
        return (
          <CardView key={`rip_a_${i}`} style={styles.wrapRow}>
            <Text style={styles.value}>
              <BoldText>
                -{value[i]}
                {LenitingAdpositions.includes(value[i]) ? "+" : ""}
              </BoldText>{" "}
              <AdpositionDisplay adposition={value[i]} /> (productive for nouns)
            </Text>
          </CardView>
        );
      })}
    </CardView>
  );
}

function AdpositionDisplay({ adposition }: { adposition: string }) {
  const { resultsLanguage } = useResultsLanguageContext();
  const languageCode = resultsLanguage.toUpperCase() as Uppercase<LanguageCode>;
  const [display, setDisplay] = useState<string>();

  const getWord = useCallback(async () => {
    const results = await fwewSimple(adposition);
    if (
      !results ||
      results.length === 0 ||
      !results[0] ||
      results[0].length === 0
    ) {
      return;
    }
    const result = results[0][1][languageCode];
    setDisplay(result);
  }, [adposition, languageCode]);

  useEffect(() => {
    getWord().then();
  }, [getWord]);

  return <ItalicText style={styles.value}>{display ?? adposition}</ItalicText>;
}

type DetailItemProps = {
  label: string;
  value: string;
  link?: boolean;
};

function DetailItem({ label, value, link }: DetailItemProps) {
  return (
    <CardView>
      <BoldText style={[styles.label, { userSelect: "text" }]}>
        {label}:
      </BoldText>
      {link ? (
        <Autolink url text={value} style={styles.value} component={Text} />
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </CardView>
  );
}

type PronunciationProps = Pick<Word, "IPA" | "Stressed" | "Syllables">;

function Pronunciation({ IPA, Stressed, Syllables }: PronunciationProps) {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];
  let reefs = ReefMe(IPA)
  let reefIPA = reefs[0]
  let ReefSyllables = reefs[1]
  let reefDialect = "Reef dialect: "
  return (
    <>
      <DetailItem label={ui.search.ipa} value={`[${IPA.replaceAll("ʊ", "u")}] (reef dialect [${reefIPA}])`} />
      <CardView>
        <BoldText style={[styles.label, { userSelect: "text" }]}>
          {ui.search.breakdown}:
        </BoldText>
        <View style={{
            flexDirection: "row",
          }} >
          <Breakdown Stressed={Stressed} Syllables={Syllables} />
          <Text style={styles.value}>{reefDialect}</Text>
          <Breakdown Stressed={Stressed} Syllables={ReefSyllables} />
        </View>
      </CardView>
    </>
  );
}

type BreakdownProps = Pick<Word, "Stressed" | "Syllables">;

function Breakdown({ Stressed, Syllables }: BreakdownProps) {
  const stressedIndex = +Stressed - 1;
  const syllables = Syllables.toLowerCase().replace(/ /g, "-").split("-");
  let before = "";
  let stressed = "";
  let after = "";
  for (let i = 0; i < syllables.length; i++) {
    if (i < stressedIndex) {
      before += syllables[i] + "-";
    } else if (i === stressedIndex) {
      stressed = syllables[i].toUpperCase();
    } else {
      if (i === stressedIndex + 1) {
        after += "-";
      }
      after += syllables[i];
      if (i < syllables.length - 1) {
        after += "-";
      }
    }
  }
  if (syllables.length === 1) {
    return <Text style={styles.value}>{syllables[0]}</Text>;
  }
  return (
    <Text style={styles.value}>
      {before}
      <UnderlinedText>{stressed}</UnderlinedText>
      {after}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    userSelect: "text",
  },
  audioButton: {
    flex: 1,
    marginBottom: 16,
    borderRadius: 8,
  },
  wrapRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
