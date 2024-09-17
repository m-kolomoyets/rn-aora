import { Stack } from "expo-router";

const HomeLayout: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Home",
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default HomeLayout;
