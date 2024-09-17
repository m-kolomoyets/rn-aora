import { WithChildren } from "@/types";
import type { TextProps } from "react-native";

// NOTE: For better orientation
// 30/36 - title-xl
// 24/32.4 - title-lg
// 22/31.9 - title-md
// 20/24 - title-sm
// 18/20 - subtitle-lg
// 16/22.4 - subtitle-md
// 14/<any> - caption
// 14/14 - caption-sm (line-height token)
// 12/18 - caption-xs

export type TypographyVariant =
  | "title-xl"
  | "title-lg"
  | "title-md"
  | "title-sm"
  | "subtitle-lg"
  | "subtitle-md"
  | "caption-md"
  | "caption-sm"
  | "caption-xs";

export type TypographyProps = WithChildren<TextProps> & {
  variant?: TypographyVariant;
};
