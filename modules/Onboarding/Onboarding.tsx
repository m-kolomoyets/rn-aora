import { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View, Image, Text } from "react-native";
import TitleAccentPath from "@/components/Icons/components/TitleAccentPath";
import Typography from "@/components/Typography";
import s from "./Onboarding.styles";
import logo from "../../assets/images/logo.png";
import onboardingCards from "../../assets/images/onboarding-cards.png";
import Button from "@/components/Button";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/constants/colors";

const Onboarding: React.FC = () => {
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
          <Button
            onPress={() => {
              console.log("Continue with Email");
            }}
          >
            Continue with Email
          </Button>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor={COLORS.primary} style="light" />
    </>
  );
};

export default memo(Onboarding);
