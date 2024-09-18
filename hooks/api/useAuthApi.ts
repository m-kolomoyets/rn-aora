import { useMutation, useQuery } from "@tanstack/react-query";
import { getMe, signIn, signUp } from "@/api/auth";
import { ONE_MINUTE } from "@/constants";

export const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: signUp,
  });

  return mutation;
};

export const useSignIn = () => {
  const mutation = useMutation({
    mutationFn: signIn,
  });

  return mutation;
};

export const useGetMe = () => {
  const query = useQuery({
    queryKey: ["auth/me"],
    queryFn: getMe,
    staleTime: 10 * ONE_MINUTE,
  });
};
