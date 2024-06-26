import { ExternalLink } from "@/components/common/ExternalLink";
import { MonoText } from "@/components/common/StyledText";
import Colors from "@/constants/Colors";
import { StyleSheet, useColorScheme } from "react-native";

type GitDetailsProps = {
  branch?: string;
  commitHash?: string;
};

export function GitDetails({ branch, commitHash }: GitDetailsProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  if (!branch || !commitHash) {
    return null;
  }

  return (
    <MonoText style={styles.text}>
      (
      <ExternalLink href={`https://github.com/corscheid/fwew-react/tree/next`}>
        <MonoText style={{ color: colors.link }}>
          {branch} {commitHash?.substring(0, 7)}
        </MonoText>
      </ExternalLink>
      )
    </MonoText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
