declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_APPWRITE_ENDPOINT: string;
      EXPO_PUBLIC_APPWRITE_PROJECT: string;
      EXPO_PUBLIC_APPWRITE_PLATFORM: string;
    }
  }
}

export {};
