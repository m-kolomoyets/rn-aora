import { memo } from "react";
import { View } from "react-native";
import { Link } from "expo-router";
import { useSignInForm } from "./hooks/useSignInForm";
import { InputField } from "@/components/InputField";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import s from "./SignIn.styles";

const SignIn: React.FC = () => {
  const {
    emailController: {
      field: emailField,
      fieldState: { error: emailError },
    },
    passwordController: {
      field: passwordField,
      fieldState: { error: passwordError },
    },
    handleSubmit,
  } = useSignInForm();

  const submitHandler = handleSubmit(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    }
  );

  return (
    <View style={s.wrap}>
      <Typography style={s.title} variant="title-lg">
        Sign in
      </Typography>
      <View style={s.fieldsWrap}>
        <InputField
          label="Email"
          placeholder="Enter your email"
          autoComplete="email"
          keyboardType="email-address"
          value={emailField.value}
          errorMessage={emailError?.message}
          onChange={(event) => {
            emailField.onChange(event.nativeEvent.text);
          }}
        />
        <InputField
          label="Password"
          placeholder="Enter your password"
          type="password"
          keyboardType="visible-password"
          value={passwordField.value}
          errorMessage={passwordError?.message}
          onChange={(event) => {
            passwordField.onChange(event.nativeEvent.text);
          }}
        />
      </View>
      <Typography style={s.forgotPassword} variant="subtitle-md">
        Forgot password?
      </Typography>
      <Button onPress={submitHandler}>Log In</Button>
      <View style={s.signUpWrap}>
        <Typography style={s.signUpLabel} variant="subtitle-md">
          Don't have an account?{" "}
          <Link href="/(auth)/sign-up">
            <Typography style={s.singUpLink} variant="subtitle-md">
              Sign up
            </Typography>
          </Link>
        </Typography>
      </View>
    </View>
  );
};

export default memo(SignIn);
