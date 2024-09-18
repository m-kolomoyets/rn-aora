import React, { forwardRef } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { useToggle } from "@react-hookz/web";
import type { InputFieldProps } from "./types";
import { COLORS } from "@/constants/colors";
import Typography from "@/components/Typography";
import EyeOffIcon from "@/components/Icons/components/EyeOffIcon";
import EyeOnIcon from "@/components/Icons/components/EyeOnIcon";
import s from "./InputField.styles";

const InputField: React.ForwardRefRenderFunction<TextInput, InputFieldProps> = (
  { label, errorMessage, style, type = "text", Icon, ...rest },
  ref
) => {
  const [isFocused, toggleIsFocused] = useToggle();
  const [isPasswordVisible, toggleIsPasswordVisible] = useToggle();

  const isPasswordType = type === "password";

  return (
    <View style={style}>
      {label ? (
        <Typography style={s.label} variant="subtitle-md">
          {label}
        </Typography>
      ) : null}
      <View style={[s.inputWrap, isFocused && s.inputFocused]}>
        <TextInput
          ref={ref}
          secureTextEntry={isPasswordType && !isPasswordVisible}
          style={s.input}
          selectionColor={COLORS.secondary100}
          {...rest}
          onFocus={(event) => {
            rest?.onFocus?.(event);
            toggleIsFocused(true);
          }}
          onBlur={(event) => {
            rest?.onBlur?.(event);
            toggleIsFocused(false);
          }}
        />
        {Icon ? <Icon style={s.addonIcon} /> : null}
        {!Icon && isPasswordType ? (
          <TouchableOpacity
            onPress={() => {
              toggleIsPasswordVisible((prev) => {
                return !prev;
              });
            }}
          >
            {isPasswordVisible ? (
              <EyeOffIcon style={s.addonIcon} />
            ) : (
              <EyeOnIcon style={s.addonIcon} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {errorMessage ? (
        <Typography style={s.errorMessage} variant="caption-sm">
          {errorMessage}
        </Typography>
      ) : null}
    </View>
  );
};

export default forwardRef(InputField);
