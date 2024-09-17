import { memo } from "react";
import type { TabBarIconProps } from "./types";
import { COLORS } from "@/constants/colors";

const TabBarIcon: React.FC<TabBarIconProps> = ({
  Component,
  color,
  focused,
  size,
  propToColorize = "fill",
}) => {
  return (
    <Component
      height={size}
      width={size}
      {...{
        [propToColorize]: focused ? COLORS.secondary : color,
      }}
    />
  );
};

export default memo(TabBarIcon);
