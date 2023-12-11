import { ResultCard } from "@/components/common/ResultCard";
import { useResultsLanguage } from "@/hooks/useResultsLanguage";
import type { LanguageCode, Word } from "fwew.js";
import { StyleSheet } from "react-native";
import { Text, View } from "../common/Themed";

type FwewSearchResultsProps = {
  query: string;
  results: Word[][];
};

export function FwewSearchResults({ query, results }: FwewSearchResultsProps) {
  const { resultsLanguage } = useResultsLanguage();
  const languageCode = resultsLanguage.toUpperCase() as Uppercase<LanguageCode>;
  const terms = query.split(" ");

  // TODO: This is a mess. Refactor.
  // TODO: just expose `target` on fwew.Word instead of this mess
  const matchNavi = (word: Word) => {
    if (terms.includes(word.Navi)) return word.Navi;
    if (query.includes(word.Navi) && word.Navi.includes(" ")) return word.Navi;
    let navi = terms.filter((term) => term.includes(word.Navi));
    if (navi.length > 0) return navi.join(" ");
    navi = terms.filter((term) => {
      if (word.Affixes.Prefix) {
        if (
          term.startsWith(
            word.Affixes.Prefix.reduce((prev, curr) => prev + curr, "")
          )
        )
          return true;
      }
      if (word.Affixes.Suffix) {
        if (
          term.endsWith(
            word.Affixes.Suffix.reduce((prev, curr) => prev + curr, "")
          )
        )
          return true;
      }
      if (word.Affixes.Infix && word.Affixes.Infix.length > 0) {
        for (const infix of word.Affixes.Infix) {
          if (
            term.includes(infix) &&
            word.Navi.startsWith(term[0]) &&
            word.Navi.endsWith(term[term.length - 1])
          )
            return true;
        }
      }
      if (word.Affixes.Lenition && word.Affixes.Lenition.length > 0) {
        for (const lenition of word.Affixes.Lenition) {
          const [from, to] = lenition.split("→");
          if (word.Navi.startsWith(from) && term.startsWith(to)) return true;
        }
      }
      return false;
    });
    if (navi.length > 0) return navi.join(" ");
    return null;
  };

  // TODO: This is a mess. Refactor.
  // TODO: just expose `target` on fwew.Word instead of this mess
  const matchLocal = (word: Word) => {
    if (query.includes(word[languageCode])) return word[languageCode];
    const local = word[languageCode]
      .replace(/[;,.!?()\[\]]/g, "")
      .split(" ")
      .filter((lw) => terms.includes(lw));
    return local.length > 0 ? local.join(" ") : null;
  };

  return (
    <>
      {results.map((result, i) => (
        <View key={`fsr_${i}`}>
          {result.map((word, j) => {
            const navi = matchNavi(word);
            const local = matchLocal(word);
            return (
              <>
                {j === 0 && navi && <Text style={styles.label}>{navi}</Text>}
                {j === 0 && !navi && local && (
                  <Text style={styles.label}>{local}</Text>
                )}
                <ResultCard key={word.ID} word={word} />
              </>
            );
          })}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    padding: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
});
