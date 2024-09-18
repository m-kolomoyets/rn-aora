import { memo, useRef } from "react";
import { TextInput, View } from "react-native";
import { Link, router } from "expo-router";
import { useSignIn } from "@/hooks/api/useAuthApi";
import { useSignInForm } from "./hooks/useSignInForm";
import { toast } from "@/utils/toast";
import { InputField } from "@/components/InputField";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import s from "./SignIn.styles";

const SignIn: React.FC = () => {
  const passwordFieldRef = useRef<TextInput>(null);

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

  const { mutate: signIn, isPending: isSignInPending } = useSignIn();

  const submitHandler = handleSubmit(
    (data) => {
      signIn(data, {
        onSuccess() {
          // TODO: navigate to the main screen
          toast("Logged in successfully", { variant: "success" });

          router.replace("/(tabs)/home");
        },
        onError(error) {
          toast(error.message, { variant: "error" });
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
        Sign in
      </Typography>
      <View style={s.fieldsWrap}>
        <InputField
          label="Email"
          placeholder="Enter your email"
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="next"
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
          keyboardType="visible-password"
          returnKeyType="done"
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
      <Button isLoading={isSignInPending} onPress={submitHandler}>
        Log In
      </Button>
      <View style={s.signUpWrap}>
        <Typography style={s.signUpLabel} variant="subtitle-md">
          Don't have an account?{" "}
          <Link href="/(auth)/sign-up" push>
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
