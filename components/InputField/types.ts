import type { TextInputProps } from "react-native";

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
};
