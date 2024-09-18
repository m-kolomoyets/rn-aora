import { ID } from "react-native-appwrite";
import { account } from "@/api/appwrite";

export type SignUpRequest = {
  username: string;
  email: string;
  password: string;
};

export const signUp = async (data: SignUpRequest) => {
  const response = await account.create(
    ID.unique(),
    data.email,
    data.password,
    data.username
  );

  return response;
};
