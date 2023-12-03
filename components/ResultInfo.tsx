import { BoldText, UnderlinedText } from "@/components/StyledText";
import { Text, View } from "@/components/Themed";
import AudioResources from "@/constants/AudioResources";
import Colors from "@/constants/Colors";
import { PartOfSpeech } from "@/constants/PartOfSpeech";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import type { Word } from "fwew.js";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type ResultInfoProps = {
  word: Word;
};

export function ResultInfo({ word }: ResultInfoProps) {
  const [sound, setSound] = useState(new Audio.Sound());
  const colorScheme = useColorScheme();
  const { text } = Colors[colorScheme ?? "light"];

  const playSound = async (wordId: string): Promise<void> => {
    const audioUrl = `${AudioResources.URL}/${wordId}.mp3`;
    const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={[styles.container, { borderColor: text }]}>
      <TouchableOpacity
        onPress={() => playSound(word.ID)}
        style={[styles.audioButton, { borderColor: text }]}
      >
        <FontAwesome name="volume-up" size={24} color={text} />
        <Text style={styles.audioButtonText}> Audio</Text>
      </TouchableOpacity>
      <DetailItem
        label="Part of Speech"
        value={`${word.PartOfSpeech} (${PartOfSpeech.en[word.PartOfSpeech]})`}
      />
      <DetailItem label="Definition" value={word.EN} />
      <Pronunciation {...word} />
      {word.PartOfSpeech.startsWith("v") && (
        <>
          <DetailItem label="Infixes (dots)" value={word.InfixDots} />
          <DetailItem label="Infixes (slots)" value={word.InfixLocations} />
        </>
      )}
      {word.Affixes.Prefix && (
        <DetailItem label="Prefix" value={word.Affixes.Prefix.join(", ")} />
      )}
      {word.Affixes.Infix && (
        <DetailItem label="Infix" value={word.Affixes.Infix.join(", ")} />
      )}
      {word.Affixes.Suffix && (
        <DetailItem label="Suffix" value={word.Affixes.Suffix.join(", ")} />
      )}
      {word.Affixes.Lenition && (
        <DetailItem label="Lenition" value={word.Affixes.Lenition.join(", ")} />
      )}
      {word.Affixes.Comment && (
        <DetailItem label="Comment" value={word.Affixes.Comment.join(", ")} />
      )}
      <DetailItem label="Source" value={word.Source} />
    </View>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <View>
      <BoldText style={styles.label}>{label}:</BoldText>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

function Pronunciation({
  IPA,
  Stressed,
  Syllables,
}: Pick<Word, "IPA" | "Stressed" | "Syllables">) {
  return (
    <>
      <DetailItem label="IPA" value={`[${IPA}]`} />
      <View>
        <BoldText style={styles.label}>Breakdown:</BoldText>
        <Breakdown Stressed={Stressed} Syllables={Syllables} />
      </View>
    </>
  );
}

function Breakdown({
  Stressed,
  Syllables,
}: Pick<Word, "Stressed" | "Syllables">) {
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
    borderWidth: 1,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    padding: 4,
    marginBottom: 16,
  },
  audioButtonText: {
    fontSize: 16,
    padding: 8,
  },
});
