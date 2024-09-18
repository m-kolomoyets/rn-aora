import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useLoadFonts } from "@/hooks/useLoadFonts";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/queryClient";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = () => {
  const [loaded, error] = useLoadFonts();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
};

export default RootLayout;
