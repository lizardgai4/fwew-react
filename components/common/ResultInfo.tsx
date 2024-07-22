import { Button } from "@/components/common/Button";
import {
  BoldText,
  ItalicText,
  UnderlinedText,
} from "@/components/common/StyledText";
import { CardView, Text } from "@/components/common/Themed";
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
import { useEffect, useState } from "react";
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

  const getWord = async () => {
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
  };

  useEffect(() => {
    getWord().then();
  }, []);

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
  return (
    <>
      <DetailItem label={ui.search.ipa} value={`[${IPA}]`} />
      <CardView>
        <BoldText style={[styles.label, { userSelect: "text" }]}>
          {ui.search.breakdown}:
        </BoldText>
        <Breakdown Stressed={Stressed} Syllables={Syllables} />
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
