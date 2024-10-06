import { ResultOverview } from "@/components/common/ResultOverview";
import { ContextProviders } from "@/context/ContextProviders";
import { render } from "@testing-library/react-native";
import type { Word } from "fwew.js";

describe("<ResultOverview />", () => {
  type Param = { forest: string; ipa: string; reef: string; pos: string };

  const params: Param[] = [
    { forest: "kaltxì", ipa: "kal.ˈt'ɪ", reef: "kaldì", pos: "intj." },
    { forest: "rä'ä", ipa: "ɾæ.ˈʔæ", reef: "rä'ä", pos: "part." },
    // { forest: "rä'ä", ipa: "ɾæ.ˈʔæ",  reef: "rää", pos: "part." },
    { forest: "syaw", ipa: "sj·aw", reef: "shaw", pos: "vin." },
    { forest: "tsyo", ipa: "t͡sjo", reef: "cho", pos: "n." },
    { forest: "apxa", ipa: "a.ˈp'a", reef: "aba", pos: "adj." },
    { forest: "txan", ipa: "t'an", reef: "dan", pos: "adj." },
    { forest: "kxì", ipa: "k'ɪ", reef: "gì", pos: "intj." },
    { forest: "hum", ipa: "h·ʊm", reef: "hùm", pos: "vin." },
    { forest: "ätxäle", ipa: "æ.ˈt'æ.lɛ", reef: "edäle", pos: "n." },
    {
      forest: "ätxäle si",
      ipa: "æ.ˈt'æ.lɛ ˈs·i",
      reef: "edäle si",
      pos: "vin.",
    },
    { forest: "tsyal", ipa: "t͡sjal", reef: "chal", pos: "n." },
  ];

  params.forEach(({ forest, ipa, reef, pos }) => {
    test(`[Reef] Na'vi: ${forest} -> ${reef}`, () => {
      const { getByText } = render(
        <ContextProviders>
          <ResultOverview
            dialect="reef"
            word={{ Navi: forest, IPA: ipa, PartOfSpeech: pos } as Word}
            local="EN"
          />
        </ContextProviders>
      );

      getByText(reef);
    });
  });
});
