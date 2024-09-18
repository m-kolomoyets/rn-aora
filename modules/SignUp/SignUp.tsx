import { memo, useRef } from "react";
import { TextInput, View } from "react-native";
import { Link } from "expo-router";
import { useSignUpForm } from "./hooks/useSignUpForm";
import { InputField } from "@/components/InputField";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import s from "./SignUp.styles";
import { useSignUp } from "@/hooks/api/useAuthApi";

const SignUp: React.FC = () => {
  const emailFieldRef = useRef<TextInput>(null);
  const passwordFieldRef = useRef<TextInput>(null);

  const {
    usernameController: {
      field: usernameField,
      fieldState: { error: usernameError },
    },
    emailController: {
      field: emailField,
      fieldState: { error: emailError },
    },
    passwordController: {
      field: passwordField,
      fieldState: { error: passwordError },
    },
    handleSubmit,
  } = useSignUpForm();

  const { mutate: signUp, isPending: isSignUpPending } = useSignUp();

  const submitHandler = handleSubmit(
    (data) => {
      signUp(data, {
        onSuccess() {
          console.log(data);
        },
        onError(error) {
          console.log(error);
        },
      });
    },
    (err) => {
      console.log(err);
    }
  );

  return (
    <View style={s.wrap}>
      <Typography style={s.title} variant="title-lg">
        Sign up
      </Typography>
      <View style={s.fieldsWrap}>
        <InputField
          label="Username"
          placeholder="Enter your unique username"
          keyboardType="default"
          returnKeyType="next"
          value={usernameField.value}
          errorMessage={usernameError?.message}
          onChange={(event) => {
            usernameField.onChange(event.nativeEvent.text);
          }}
          onSubmitEditing={() => {
            emailFieldRef.current?.focus();
          }}
        />
        <InputField
          ref={emailFieldRef}
          label="Email"
          placeholder="Enter your email"
          autoComplete="email"
          returnKeyType="next"
          keyboardType="email-address"
          value={emailField.value}
          errorMessage={emailError?.message}
          onChange={(event) => {
            emailField.onChange(event.nativeEvent.text);
          }}
          onSubmitEditing={() => {
            passwordFieldRef.current?.focus();
          }}
        />
        <InputField
          ref={passwordFieldRef}
          label="Password"
          placeholder="Enter your password"
          type="password"
          returnKeyType="done"
          keyboardType="visible-password"
          value={passwordField.value}
          errorMessage={passwordError?.message}
          onChange={(event) => {
            passwordField.onChange(event.nativeEvent.text);
          }}
        />
      </View>
      <Button onPress={submitHandler} isLoading={isSignUpPending}>
        Sign Up
      </Button>
      <View style={s.signInWrap}>
        <Typography style={s.signInLabel} variant="subtitle-md">
          Already have an account?{" "}
          <Link href="/(auth)/sign-in" push>
            <Typography style={s.singInLink} variant="subtitle-md">
              Login
            </Typography>
          </Link>
        </Typography>
      </View>
    </View>
  );
};

export default memo(SignUp);
