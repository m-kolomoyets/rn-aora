declare module "react-native-config" {
  export interface NativeConfig {
    APPWRITE_ENDPOINT: string;
    APPWRITE_PROJECT: string;
    APPWRITE_PLATFORM: string;
  }
  export const Config: NativeConfig;
  export default Config;
}
