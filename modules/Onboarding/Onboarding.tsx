import { memo, useCallback } from "react";
import { ScrollView, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { COLORS } from "@/constants/colors";
import TitleAccentPath from "@/components/Icons/components/TitleAccentPath";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import s from "./Onboarding.styles";
import onboardingCards from "../../assets/images/onboarding-cards.png";
import logo from "../../assets/images/logo.png";

const Onboarding: React.FC = () => {
  const continuePressHandler = useCallback(() => {
    router.push("/(auth)/sign-in");
  }, []);

  return (
    <>
      <SafeAreaView style={s.wrap}>
        <ScrollView contentContainerStyle={s.scrollViewContentContainer}>
          <Image style={s.logo} source={logo} resizeMode="contain" />
          <Image
            style={s.cards}
            source={onboardingCards}
            resizeMode="contain"
          />
          <View>
            <Typography variant="title-xl" style={s.title}>
              Discover Endless Possibilities with{" "}
              <Text style={s.titleAccent}>Aora</Text>
            </Typography>
            <TitleAccentPath style={s.titleAccentDecor} />
          </View>
          <Typography style={s.subtitle} variant="caption-md">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Typography>
          <Button onPress={continuePressHandler}>Continue with Email</Button>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor={COLORS.primary} style="light" />
    </>
  );
};

export default memo(Onboarding);
