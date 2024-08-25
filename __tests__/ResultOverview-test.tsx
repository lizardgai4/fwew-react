import { ResultOverview } from "@/components/common/ResultOverview";
import Colors from "@/constants/Colors";
import { render } from "@testing-library/react-native";
import { Word } from "fwew.js";

describe("<ResultOverview />", () => {
  type Param = { forest: string; ipa: string; reef: string };

  const params: Param[] = [
    { forest: "kaltxì", ipa: "kal.ˈt'ɪ", reef: "kaldì" },
    { forest: "rä'ä", ipa: "ɾæ.ˈʔæ",  reef: "rä'ä" },
    // { forest: "rä'ä", ipa: "ɾæ.ˈʔæ",  reef: "rää" },
    { forest: "syaw", ipa: "sj·aw", reef: "shaw" },
    { forest: "tsyo", ipa: "t͡sjo", reef: "cho" },
    { forest: "apxa", ipa: "a.ˈp'a", reef: "aba" },
    { forest: "txan", ipa: "t'an", reef: "dan" },
    { forest: "kxì", ipa: "k'ɪ", reef: "gì" },
    { forest: "hum", ipa: "h·ʊm", reef: "hùm" },
    { forest: "ätxäle", ipa: "æ.ˈt'æ.lɛ", reef: "edäle" },
    { forest: "ätxäle si", ipa: "æ.ˈt'æ.lɛ ˈs·i", reef: "edäle si" },
    { forest: "tsyal", ipa: "t͡sjal", reef: "chal" },
  ];

  params.forEach(({ forest, ipa, reef }) => {
    test(`[Reef] Na'vi: ${forest} -> ${reef}`, () => {
      const { getByText } = render(
        <ResultOverview
          dialect="reef"
          word={{ Navi: forest, IPA: ipa } as Word}
          colors={Colors["light"]}
          local="EN"
        />
      );

      getByText(reef);
    });
  });
});
