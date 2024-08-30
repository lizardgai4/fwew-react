import { ActionButtons } from "@/components/common/ActionButtons";
import Colors from "@/constants/Colors";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { Platform, StyleSheet, View } from "react-native";

export default function StackLayout() {
  const theme = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens, names } = getUI(appLanguage, dialect);

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: Colors.dark.text,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: screens.other,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="lenition"
        options={{
          title: screens.lenition,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="stats"
        options={{
          title: screens.stats,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="valid"
        options={{
          title: screens.valid,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="lists/index"
        options={{
          title: screens.lists,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="lists/cameron"
        options={{
          title: screens.cameronWords,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="lists/homonyms"
        options={{
          title: screens.homonyms,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="lists/multi-ipa"
        options={{
          title: screens.multiIPA,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="lists/oddballs"
        options={{
          title: screens.oddballs,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="lists/profanity"
        options={{
          title: screens.profanity,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="lists/that"
        options={{
          title: screens.that,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="names/index"
        options={{
          title: screens.names,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="names/name-single"
        options={{
          title: names.single,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="names/name-full"
        options={{
          title: names.full,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="names/name-alu"
        options={{
          title: names.alu,
          headerRight: () => (
            <View style={styles.actionButton}>
              <ActionButtons />
            </View>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    marginRight: Platform.OS === "web" ? 0 : -16,
  },
});
