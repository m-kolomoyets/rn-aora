import { Client } from "react-native-appwrite";
import Config from "react-native-config";

const client = new Client()
  .setEndpoint(Config.APPWRITE_ENDPOINT)
  .setProject(Config.APPWRITE_PROJECT)
  .setPlatform(Config.APPWRITE_PLATFORM);

export default client;
