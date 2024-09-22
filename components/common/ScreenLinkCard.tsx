import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text } from "@/components/common/Themed";
import { Href, Link } from "expo-router";
import { StyleSheet } from "react-native";

type Props = {
  href: Href<string>;
  title: string;
  description?: string;
};

export function ScreenLinkCard({ href, title, description }: Props) {
  return (
    <Link href={href}>
      <CardView style={styles.card}>
        <CardView style={styles.textGroup}>
          <Text style={styles.text}>{title}</Text>
          {description && <ItalicText>{description}</ItalicText>}
        </CardView>
      </CardView>
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
