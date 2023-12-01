import { Text, TextInput, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import useNameSingle from "@/hooks/useNameSingle";
import { FontAwesome } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

export function NameSingle() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    dialect,
    setDialect,
    execute,
  } = useNameSingle();

  return (
    <View style={styles.container}>
      {/* title */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          padding: 10,
        }}
      >
        Single
      </Text>
      {/* n input */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
        }}
      >
        <TextInput
          placeholder="Number of names to generate (1-50)"
          placeholderTextColor={colors.placeholder}
          value={numNames}
          onChangeText={updateNumNames}
          keyboardType="number-pad"
          style={[styles.input, { borderColor: colors.text }]}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="never"
          autoFocus
        />
        <TouchableOpacity
          onPress={() => updateNumNames("")}
          style={{
            borderWidth: 1,
            borderColor: colors.text,
            paddingVertical: 12,
            paddingHorizontal: 10,
          }}
        >
          <FontAwesome name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      {/* s input */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
        }}
      >
        <TextInput
          placeholder="Number of syllables in the name (1-4)"
          placeholderTextColor={colors.placeholder}
          value={numSyllables}
          onChangeText={updateNumSyllables}
          keyboardType="number-pad"
          style={[styles.input, { borderColor: colors.text }]}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="never"
          autoFocus
        />
        <TouchableOpacity
          onPress={() => updateNumSyllables("")}
          style={{
            borderWidth: 1,
            borderColor: colors.text,
            paddingVertical: 12,
            paddingHorizontal: 10,
          }}
        >
          <FontAwesome name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      {/* dialect switch */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <Text>Forest</Text>
        <Switch
          value={dialect === "reef"}
          onValueChange={(isReef) => setDialect(isReef ? "reef" : "forest")}
        />
        <Text>Reef</Text>
      </View>
      {/* generate button */}
      <TouchableOpacity
        onPress={execute}
        style={{
          borderWidth: 1,
          borderColor: colors.text,
          paddingVertical: 12,
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 8,
        }}
      >
        <FontAwesome name="refresh" size={24} color={colors.text} />
        <Text>Generate</Text>
      </TouchableOpacity>
      <ScrollView>
        {names.map((name, i) => (
          <Text key={i} selectable style={{ padding: 10, fontSize: 16 }}>
            {name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
  },
});
