import { ResultCard } from "@/components/common/ResultCard";
import { useFavorites } from "@/hooks/useFavorites";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";

export default function FavoritesScreen() {
  const { favorites } = useFavorites();

  return (
    <ScrollView>
      <StatusBar style="light" />
      <View style={styles.container}>
        {favorites.map((word) => (
          <ResultCard key={word.ID} word={word} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
});
