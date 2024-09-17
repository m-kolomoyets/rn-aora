import { StatusBar } from "expo-status-bar";
import React from "react";
import { Stack } from "expo-router";
import { COLORS } from "@/constants/colors";
import AthLayoutWrap from "@/components/layout/AuthLayout";

const AuthLayout: React.FC = () => {
  return (
    <>
      <AthLayoutWrap>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="sign-in" />
          <Stack.Screen name="sign-up" />
        </Stack>
      </AthLayoutWrap>
      <StatusBar backgroundColor={COLORS.primary} style="light" />
    </>
  );
};

export default AuthLayout;
