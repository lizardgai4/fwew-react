import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import type { Word } from "fwew.js";
import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Word[]>([]);
  const { getItem, setItem } = useAsyncStorage("savedWords");

  function isFavorite(word: Word) {
    return favorites.some((w) => w.ID === word.ID);
  }

  async function getFavorites() {
    try {
      const value = await getItem();
      if (!value) return;
      const savedWordsArr: Word[] = JSON.parse(value);
      if (savedWordsArr == null) return;
      setFavorites(savedWordsArr);
    } catch (e) {
      // error reading value
    }
  }

  async function addFavorite(word: Word) {
    try {
      const exists = isFavorite(word);
      if (exists) return;
      const value = JSON.stringify([...favorites, word]);
      await setItem(value);
      setFavorites((prev) => [...prev, word]);
    } catch (error) {
      console.error(error);
      return;
    }
  }

  async function removeFavorite(word: Word) {
    try {
      const newFavorites = favorites.filter((w) => w.ID !== word.ID);
      const value = JSON.stringify(newFavorites);
      await setItem(value);
      setFavorites(newFavorites);
    } catch (error) {
      console.error(error);
      return;
    }
  }

  async function toggleFavorite(word: Word) {
    if (isFavorite(word)) {
      removeFavorite(word);
    } else {
      addFavorite(word);
    }
  }

  async function clearFavorites() {
    try {
      await setItem(JSON.stringify([]));
      setFavorites([]);
    } catch (error) {
      console.error(error);
      return;
    }
  }

  useEffect(() => {
    getFavorites();
  }, []);

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    clearFavorites,
  };
}
