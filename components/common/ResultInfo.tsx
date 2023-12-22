import { Button } from "@/components/common/Button";
import { BoldText, UnderlinedText } from "@/components/common/StyledText";
import { CardView, Text } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import { LenitingAdpositions, LenitingPrefixes } from "@/constants/Lenition";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useResultsLanguage } from "@/hooks/useResultsLanguage";
import { useSound } from "@/hooks/useSound";
import type { LanguageCode, Word } from "fwew.js";
import { StyleSheet } from "react-native";
import Autolink from "react-native-autolink";

type ResultInfoProps = {
  word: Word;
};

export function ResultInfo({ word }: ResultInfoProps) {
  const { playSound, disabled } = useSound();
  const { resultsLanguage } = useResultsLanguage();
  const local = word[resultsLanguage.toUpperCase() as Uppercase<LanguageCode>];
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];

  const formatPrefixes = (prefixes: string[]) => {
    return prefixes
      .map((prefix) =>
        LenitingPrefixes.includes(prefix) ? `${prefix}+` : `${prefix}-`
      )
      .join(", ");
  };

  const formatSuffixes = (suffixes: string[]) => {
    return suffixes
      .map((suffix) =>
        LenitingAdpositions.includes(suffix) ? `-${suffix}+` : `-${suffix}`
      )
      .join(", ");
  };

  const formatInfixes = (infixes: string[]) => {
    return infixes.map((infix) => `<${infix}>`).join(", ");
  };

  return (
    <CardView style={styles.container}>
      <Button
        onPress={() => playSound(word.ID)}
        disabled={disabled}
        icon="volume-up"
        text={ui.search.audio}
        style={styles.audioButton}
        textStyle={{ color: Colors.dark.text }}
      />
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
        <DetailItem
          label={ui.search.prefixes}
          value={formatPrefixes(word.Affixes.Prefix)}
        />
      )}
      {word.Affixes.Infix && (
        <DetailItem
          label={ui.search.infixes}
          value={formatInfixes(word.Affixes.Infix)}
        />
      )}
      {word.Affixes.Suffix && (
        <DetailItem
          label={ui.search.suffixes}
          value={formatSuffixes(word.Affixes.Suffix)}
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

type DetailItemProps = {
  label: string;
  value: string;
  link?: boolean;
};

function DetailItem({ label, value, link }: DetailItemProps) {
  return (
    <CardView>
      <BoldText style={styles.label}>{label}:</BoldText>
      {link ? (
        <Autolink
          url
          text={value}
          selectable={true}
          style={styles.value}
          component={Text}
        />
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
        <BoldText style={styles.label}>{ui.search.breakdown}:</BoldText>
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
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  audioButton: {
    marginBottom: 16,
    borderRadius: 8,
  },
});
