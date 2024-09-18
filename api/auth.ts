import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ASYNC_STORAGE_LOGGED_USER_EMAIL_KEY,
  ASYNC_STORAGE_USER_KEY,
} from "@/constants";

export type User = {
  username: string;
  email: string;
};

export type UserFromStorage = User & {
  password: string;
};

export type SignUpRequest = User & {
  password: string;
};

export type SignInRequest = {
  email: string;
  password: string;
};

// NOTE: because of no DB for now, we are using a fake data storage
// NOTE: YES, I am using AsyncStorage and storing the password in plain text, this is just a demo
// NOTE: key value of this project is about react-native and not about security
// NOTE: Thanks for understanding
// NOTE: >_<

export const signUp = async (data: SignUpRequest) => {
  const userEmailKey = `${ASYNC_STORAGE_USER_KEY}_${data.email}`;
  const existingUserWithSameEmail = await AsyncStorage.getItem(userEmailKey);

  if (existingUserWithSameEmail) {
    throw new Error("User with same email already exists");
  }

  await AsyncStorage.setItem(userEmailKey, JSON.stringify(data));

  return data;
};

export const signIn = async (data: SignInRequest) => {
  const user = await AsyncStorage.getItem(
    `${ASYNC_STORAGE_USER_KEY}_${data.email}`
  );

  if (!user) {
    throw new Error("User not found");
  }

  const parsedUser = JSON.parse(user) as UserFromStorage;

  if (parsedUser.password !== data.password) {
    throw new Error("Invalid email or password");
  }

  await AsyncStorage.setItem(
    ASYNC_STORAGE_LOGGED_USER_EMAIL_KEY,
    parsedUser.email
  );

  return parsedUser;
};

export const getMe = async () => {
  const loggedInUserEmail = await AsyncStorage.getItem(
    ASYNC_STORAGE_LOGGED_USER_EMAIL_KEY
  );

  if (!loggedInUserEmail) {
    throw new Error("You are not logged in");
  }

  const user = await AsyncStorage.getItem(
    `${ASYNC_STORAGE_USER_KEY}_${loggedInUserEmail}`
  );

  if (!user) {
    throw new Error("You are not logged in");
  }

  return JSON.parse(user) as User;
};
