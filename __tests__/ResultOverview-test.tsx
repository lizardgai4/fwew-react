import { ResultOverview } from "@/components/common/ResultOverview";
import Colors from "@/constants/Colors";
import { render } from "@testing-library/react-native";
import { Word } from "fwew.js";

describe("<ResultOverview />", () => {
  type Param = { forest: string; reef: string };

  const params: Param[] = [
    { forest: "kaltxì", reef: "kaldì" },
    { forest: "rä'ä", reef: "rää" },
    { forest: "syaw", reef: "shaw" },
    { forest: "tsyo", reef: "cho" },
    { forest: "apxa", reef: "aba" },
    { forest: "txan", reef: "dan" },
    { forest: "kxì", reef: "gì" },
    { forest: "hum", reef: "hùm" },
    { forest: "ätxäle", reef: "edäle" },
    { forest: "ätxäle si", reef: "edäle si" },
    { forest: "tsyal", reef: "chal" },
  ];

  params.forEach(({ forest, reef }) => {
    test(`[Reef] Na'vi: ${forest} -> ${reef}`, () => {
      const { getByText } = render(
        <ResultOverview
          dialect="reef"
          word={{ Navi: forest } as Word}
          colors={Colors["light"]}
          local="EN"
        />
      );

      getByText(reef);
    });
  });
});
