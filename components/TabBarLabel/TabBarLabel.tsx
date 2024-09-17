import { memo } from "react";
import { COLORS } from "@/constants/colors";
import type { TabBarLabelProps } from "./types";
import { FONT_FAMILY } from "@/components/Typography/constants";
import Typography from "@/components/Typography";

const TabBarLabel: React.FC<TabBarLabelProps> = ({
  color,
  focused,
  ...rest
}) => {
  return (
    <Typography
      style={{
        color: focused ? COLORS.secondary : color,
        fontFamily: FONT_FAMILY.bold,
      }}
      variant="caption-xs"
      {...rest}
    />
  );
};

export default memo(TabBarLabel);
