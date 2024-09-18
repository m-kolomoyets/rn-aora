import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SignInFormSchema } from "../types";
import { signInFormSchema } from "../schemas";

export const useSignInForm = () => {
  const { control, ...rest } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
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
    emailController,
    passwordController,
    ...rest,
  };
};
