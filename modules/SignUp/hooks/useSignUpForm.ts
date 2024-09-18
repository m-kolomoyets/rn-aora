import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SignUpFormSchema } from "../types";
import { signUpFormSchema } from "../schemas";

export const useSignUpForm = () => {
  const { control, ...rest } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const usernameController = useController({
    control,
    name: "username",
  });
  const emailController = useController({
    control,
    name: "email",
  });
  const passwordController = useController({
    control,
    name: "password",
  });

  return {
    usernameController,
    emailController,
    passwordController,
    ...rest,
  };
};
