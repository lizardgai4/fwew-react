import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { Href, Link } from "expo-router";
import { StyleSheet, View } from "react-native";

type Props = {
  href: Href;
  title: string;
  description?: string;
};

export function ScreenLinkCard({ href, title, description }: Props) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <Link href={href}>
      <Themed.CardView style={styles.card}>
        <View style={styles.textGroup}>
          <Themed.Text style={styles.text}>{title}</Themed.Text>
          {description && <Themed.ItalicText>{description}</Themed.ItalicText>}
        </View>
      </Themed.CardView>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 32,
    width: 320,
    borderRadius: 8,
  },
  textGroup: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  text: {
    fontSize: 24,
  },
});
