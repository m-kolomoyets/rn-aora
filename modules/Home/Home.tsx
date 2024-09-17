import { Link } from "expo-router";
import { View, Text } from "react-native";

const Home: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-black text-3xl font-bold">Home</Text>
      <Link href="/(home)/profile">
        <Text className="text-blue-500">Go to profile</Text>
      </Link>
    </View>
  );
};

export default Home;
