import { memo } from "react";
import { ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import type { WithChildren } from "@/types";
import s from "./AuthLayout.styles";
import logo from "@/assets/images/logo.png";

const AuthLayout: React.FC<WithChildren<unknown>> = () => {
  return (
    <SafeAreaView style={s.wrap}>
      <ScrollView contentContainerStyle={s.scrollViewContentContainer}>
        <Image style={s.logo} source={logo} resizeMode="contain" />
        <Slot />
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(AuthLayout);
