import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import Typography from "@/components/Typography";

const Home = () => {
  return (
    <SafeAreaView>
      <Link href="/(tabs)/home">
        <Typography>Go to Home</Typography>
      </Link>
    </SafeAreaView>
  );
};

export default Home;
