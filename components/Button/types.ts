import type { TouchableOpacityProps } from "react-native";

export type ButtonVariant = "primary";

export type ButtonProps = TouchableOpacityProps & {
  /**
   * The variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * Is true, the button will be in loading state
   */
  isLoading?: boolean;
};
