import { Text } from "react-native";
import type { TypographyProps } from "./types";
import s from "./Typography.styles";

const Typography: React.FC<TypographyProps> = ({
  variant = "subtitle-lg",
  style,
  ...rest
}) => {
  return <Text style={[s[variant], style]} {...rest} />;
};

export default Typography;
