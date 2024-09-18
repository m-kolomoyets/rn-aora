import { queryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { getMe, signIn, signOut, signUp } from "@/api/auth";
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

export const getMeQueryOptions = () => {
  const query = queryOptions({
    queryKey: ["auth/me"],
    queryFn: getMe,
    staleTime: 10 * ONE_MINUTE,
  });

  return query;
};

export const useGetMe = () => {
  const query = useQuery(getMeQueryOptions());

  return query;
};

export const useSignOut = () => {
  const mutation = useMutation({
    mutationFn: signOut,
  });

  return mutation;
};
