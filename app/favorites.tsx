import { ResultCard } from "@/components/common/ResultCard";
import { Text, View } from "@/components/common/Themed";
import { useFavorites } from "@/hooks/useFavorites";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Platform, ScrollView } from "react-native";

export default function FavoritesScreen() {
  const { favorites } = useFavorites();

  return (
    <ScrollView>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View style={styles.container}>
        <Text style={styles.value}>Favorites</Text>
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
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
