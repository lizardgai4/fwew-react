export type ColorExtension = Record<
  "light" | "dark",
  {
    text: string;
    background: string;
    tint: string;
    placeholder: string;
    tabIconDefault: string;
    tabIconSelected: string;
    link: string;
    innerCard: string;
  }
>;
