import type { SvgProps } from "react-native-svg";

export type TabBarIconProps = {
  /**
   * Whether the icon is focused.
   */
  focused: boolean;
  /**
   * The color of the icon.
   */
  color: string;
  /**
   * The size of the icon.
   */
  size: number;
  /**
   * The component to render. Defined the icon itself
   */
  Component: React.FC<SvgProps>;
  /**
   * The prop to colorize. Default is "fill"
   */
  propToColorize?: "fill" | "stroke";
};
