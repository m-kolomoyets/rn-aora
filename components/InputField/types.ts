import type { TextInputProps } from "react-native";
import type { SvgProps } from "react-native-svg";

export type InputFieldType = "text" | "password";

export type InputFieldProps = React.PropsWithoutRef<TextInputProps> & {
  /**
   * Label for the input field
   */
  label?: string;
  /**
   * Error message for the input field
   */
  errorMessage?: string;
  /**
   * Style for the input field
   * @default 'text'
   */
  type?: InputFieldType;
  /**
   * Custom icon addon
   */
  Icon?: React.FC<SvgProps>;
};
