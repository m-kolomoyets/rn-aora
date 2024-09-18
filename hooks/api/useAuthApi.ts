import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/api/auth";

export const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: signUp,
  });

  return mutation;
};
