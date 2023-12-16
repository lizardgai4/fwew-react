import AudioResources from "@/constants/AudioResources";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";

export function useSound() {
  const [sound, setSound] = useState(new Audio.Sound());

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

  return { playSound };
}
