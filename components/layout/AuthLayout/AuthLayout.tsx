import { memo } from "react";
import { Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import type { WithChildren } from "@/types";
import s from "./AuthLayout.styles";
import logo from "@/assets/images/logo.png";

const AuthLayout: React.FC<WithChildren<unknown>> = () => {
  return (
    <SafeAreaView style={s.wrap}>
      <KeyboardAwareScrollView
        contentContainerStyle={s.scrollViewContentContainer}
        keyboardOpeningTime={0}
        enableResetScrollToCoords={false}
      >
        <Image style={s.logo} source={logo} resizeMode="contain" />
        <Slot />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default memo(AuthLayout);
