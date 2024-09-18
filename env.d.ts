declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_APPWRITE_ENDPOINT: string;
      EXPO_PUBLIC_APPWRITE_PROJECT: string;
      EXPO_PUBLIC_APPWRITE_PLATFORM: string;
      EXPO_PUBLIC_APPWRITE_DB_ID: string;
      EXPO_PUBLIC_APPWRITE_USERS_COLLECTION_ID: string;
      EXPO_PUBLIC_APPWRITE_VIDEOS_COLLECTION_ID: string;
      EXPO_PUBLIC_APPWRITE_FILES_BUCKET_ID: string;
    }
  }
}

export {};
