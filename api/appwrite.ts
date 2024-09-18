import { Client } from "react-native-appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PLATFORM, APPWRITE_PROJECT } from "@env";

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT)
  .setPlatform(APPWRITE_PLATFORM);

export default client;
