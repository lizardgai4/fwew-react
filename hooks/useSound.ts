import AudioResources from "@/constants/AudioResources";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";

export function useSound() {
  const [sound, setSound] = useState(new Audio.Sound());
  const [disabled, setDisabled] = useState(false);

  const playSound = async (wordId: string): Promise<void> => {
    const audioUrl = `${AudioResources.URL}/${wordId}.mp3`;
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
      setSound(sound);
      setDisabled(false);
      await sound.playAsync();
    } catch (error) {
      console.error(error);
      setDisabled(true);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return { playSound, disabled };
}
