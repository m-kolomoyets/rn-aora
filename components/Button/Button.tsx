import { memo } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import type { ButtonProps } from "./types";
import { BUTTON_LOADER_COLORS } from "./constants";
import Typography from "@/components/Typography";
import s from "./Button.styles";

const Button: React.FC<ButtonProps> = ({
  style,
  variant = "primary",
  children,
  isLoading,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[s.wrap, s[variant], style, isLoading && s.loading]}
      disabled={rest?.disabled || isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      <Typography style={s[`${variant}Label`]} variant="subtitle-md">
        {isLoading ? (
          <ActivityIndicator
            style={s[`${variant}Loader`]}
            color={BUTTON_LOADER_COLORS[variant]}
          />
        ) : (
          children
        )}
      </Typography>
    </TouchableOpacity>
  );
};

export default memo(Button);
