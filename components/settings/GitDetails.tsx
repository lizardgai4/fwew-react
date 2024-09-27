import { ExternalLink } from "@/components/common/ExternalLink";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import { StyleSheet, useColorScheme } from "react-native";

type GitDetailsProps = {
  branch?: string;
  commitHash?: string;
};

export function GitDetails({ branch, commitHash }: GitDetailsProps) {
  const colorScheme = useColorScheme();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorScheme ?? "light"];
  const Themed = getThemedComponents(themeName);

  if (!branch || !commitHash) {
    return null;
  }

  return (
    <Themed.MonoText style={styles.text}>
      (
      <ExternalLink href={`https://github.com/corscheid/fwew-react/tree/next`}>
        <Themed.MonoText style={{ color: colors.link }}>
          {branch} {commitHash?.substring(0, 7)}
        </Themed.MonoText>
      </ExternalLink>
      )
    </Themed.MonoText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
