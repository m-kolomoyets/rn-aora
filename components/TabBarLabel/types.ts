import type { TextProps } from "react-native";

export type TabBarLabelProps = TextProps & {
  /**
   * Whether the icon is focused.
   */
  focused: boolean;
  /**
   * The color of the icon.
   */
  color: string;
};
