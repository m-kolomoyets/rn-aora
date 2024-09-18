import { memo } from "react";
import { View } from "react-native";
import type { ToastProps } from "./types";
import { TOAST_ICON_COLOR, TOAST_ICONS } from "./constants";
import Typography from "@/components/Typography";
import s from "./Toast.styles";

const Toast: React.FC<ToastProps> = ({ style, message, variant = "info" }) => {
  const Icon = TOAST_ICONS[variant];

  return (
    <View style={[s.wrap, s[variant], style]}>
      <Icon style={s.icon} stroke={TOAST_ICON_COLOR[variant]} />
      <Typography style={[s.label, s[`${variant}Label`]]} variant="subtitle-lg">
        {message}
      </Typography>
    </View>
  );
};

export default memo(Toast);
