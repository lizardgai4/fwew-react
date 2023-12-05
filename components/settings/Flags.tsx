import { View } from "@/components/common/Themed";
import { ExtendedLanguageCode } from "@/types/common";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

// de
export const Germany = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.331h512v341.337H0z" fill="#d80027" />
    <Path d="M0 85.331h512v113.775H0z" />
    <Path d="M0 312.882h512v113.775H0z" fill="#ffda44" />
  </Svg>
);

// en
export const USA = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.331h512v341.337H0z" fill="#f0f0f0" />
    <Path
      d="M0 127.994h512v42.663H0zM0 213.331h512v42.663H0zM0 298.657h512v42.663H0zM0 383.994h512v42.663H0z"
      fill="#d80027"
    />
    <Path d="M0 85.331h256v183.797H0z" fill="#2e52b2" />
    <Path
      d="m99.822 160.624-4.123 12.684H82.363l10.791 7.835-4.123 12.683 10.791-7.835 10.784 7.835-4.122-12.683 10.791-7.835h-13.337zM103.938 219.08l-4.116-12.683-4.123 12.683H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836zM47.577 219.08l-4.117-12.683-4.123 12.683H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836zM43.46 160.624l-4.123 12.684H26.001l10.791 7.835-4.123 12.683 10.791-7.835 10.785 7.835-4.122-12.683 10.789-7.835H47.577zM99.822 114.85l-4.123 12.685H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836h-13.337zM43.46 114.85l-4.123 12.685H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836H47.577zM156.183 160.624l-4.122 12.684h-13.336l10.79 7.835-4.121 12.683 10.789-7.835 10.786 7.835-4.123-12.683 10.791-7.835h-13.336zM160.301 219.08l-4.118-12.683-4.122 12.683h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836zM216.663 219.08l-4.117-12.683-4.123 12.683h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836zM212.546 160.624l-4.123 12.684h-13.335l10.789 7.835-4.122 12.683 10.791-7.835 10.785 7.835-4.123-12.683 10.791-7.835h-13.336zM156.183 114.85l-4.122 12.685h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836h-13.336zM212.546 114.85l-4.123 12.685h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836h-13.336z"
      fill="#f0f0f0"
    />
  </Svg>
);

// eo
export const Esperanto = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path fill="#FFF" d="M0 0h202v202H0" />
    <Path
      fill="#090"
      d="M0 200h200V0h400v400H0m58-243L99 31l41 126L33 79h133"
    />
  </Svg>
);

// es
export const Mexico = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M341.334 85.33H0v341.332h512V85.33z" fill="#d80027" />
    <Path d="M0 85.333h170.663V426.67H0z" fill="#6da544" />
    <Path d="M170.663 85.333h170.663V426.67H170.663z" fill="#f0f0f0" />
    <Path
      d="M208 255.996c0 26.509 21.491 48 48 48s48-21.491 48-48v-16h-96v16z"
      fill="#6da544"
    />
    <Path
      d="M320 223.996h-48c0-8.836-7.164-16-16-16s-16 7.164-16 16h-48c0 8.836 7.697 16 16.533 16H208c0 8.836 7.164 16 16 16 0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16 8.836 0 16-7.164 16-16h-.533c8.836 0 16.533-7.163 16.533-16z"
      fill="#ff9811"
    />
  </Svg>
);

// et
export const Estonia = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.337h512v341.326H0z" />
    <Path d="M0 85.337h512v113.775H0z" fill="#0052b4" />
    <Path d="M0 312.888h512v113.775H0z" fill="#f0f0f0" />
  </Svg>
);

// fr
export const France = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.331h512v341.337H0z" fill="#f0f0f0" />
    <Path d="M0 85.331h170.663v341.337H0z" fill="#0052b4" />
    <Path d="M341.337 85.331H512v341.337H341.337z" fill="#d80027" />
  </Svg>
);

// hu
export const Hungary = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.337h512v341.326H0z" fill="#f0f0f0" />
    <Path d="M0 85.337h512v113.775H0z" fill="#d80027" />
    <Path d="M0 312.888h512v113.775H0z" fill="#6da544" />
  </Svg>
);

// nl
export const Netherlands = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.337h512v341.326H0z" fill="#f0f0f0" />
    <Path d="M0 85.337h512v113.775H0z" fill="#a2001d" />
    <Path d="M0 312.888h512v113.775H0z" fill="#0052b4" />
  </Svg>
);

// pl
export const Poland = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.337h512v341.326H0z" fill="#f0f0f0" />
    <Path d="M0 85.337h512V256H0z" fill="#f0f0f0" />
    <Path d="M0 256h512v170.663H0z" fill="#d80027" />
  </Svg>
);

// pt
export const Brazil = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.331h512v341.337H0z" fill="#6da544" />
    <Path d="m256 161.678 128 94.316-128 94.316-128-94.316z" fill="#ffda44" />
    <Circle cx={256} cy={255.994} r={53.894} fill="#f0f0f0" />
    <Path
      d="M229.052 252.626a90.66 90.66 0 0 0-26.93 4.07c.377 29.44 24.348 53.193 53.877 53.193 18.259 0 34.386-9.089 44.134-22.981-16.676-20.879-42.341-34.282-71.081-34.282zM308.895 266.32c.649-3.344 1-6.793 1-10.326 0-29.765-24.13-53.895-53.895-53.895-22.21 0-41.275 13.438-49.527 32.623a111.276 111.276 0 0 1 22.579-2.307c31.304.001 59.622 13.012 79.843 33.905z"
      fill="#0052b4"
    />
  </Svg>
);

// nx
export const Navi = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props} />
);

// ru
export const Russia = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.33v341.332h512V85.33z" fill="#f0f0f0" />
    <Path d="M0 85.333h512V426.67H0z" fill="#0052b4" />
    <Path d="M0 85.333h512v113.775H0z" fill="#f0f0f0" />
    <Path d="M0 312.884h512v113.775H0z" fill="#d80027" />
  </Svg>
);

// sv
export const Sweden = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.333h512V426.67H0z" fill="#0052b4" />
    <Path
      d="M192 85.33h-64v138.666H0v64h128v138.666h64V287.996h320v-64H192z"
      fill="#ffda44"
    />
  </Svg>
);

// tr
export const Turkey = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={32} height={32} {...props}>
    <Path d="M0 85.337h512v341.326H0z" fill="#d80027" />
    <Path
      d="m247.213 216.787 17.594 24.246 28.493-9.239-17.621 24.224 17.592 24.244-28.484-9.274-17.621 24.225.018-29.955-28.484-9.275 28.494-9.239z"
      fill="#f0f0f0"
    />
    <Path
      d="M199.202 316.602c-33.469 0-60.602-27.133-60.602-60.602s27.133-60.602 60.602-60.602c10.436 0 20.254 2.639 28.827 7.284-13.448-13.152-31.84-21.269-52.135-21.269-41.193 0-74.586 33.394-74.586 74.586s33.394 74.586 74.586 74.586c20.295 0 38.687-8.117 52.135-21.269-8.572 4.647-18.391 7.286-28.827 7.286z"
      fill="#f0f0f0"
    />
  </Svg>
);

type FlagMapType = {
  [key in ExtendedLanguageCode]: JSX.Element;
};

export const FlagMap: FlagMapType = {
  de: <Germany />,
  en: <USA />,
  eo: <Esperanto />,
  es: <Mexico />,
  et: <Estonia />,
  fr: <France />,
  hu: <Hungary />,
  nl: <Netherlands />,
  nx: <Navi />,
  pl: <Poland />,
  pt: <Brazil />,
  ru: <Russia />,
  sv: <Sweden />,
  tr: <Turkey />,
};
