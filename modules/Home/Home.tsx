import { SafeAreaView, View, Image } from "react-native";
import Typography from "@/components/Typography";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getMeQueryOptions } from "@/hooks/api/useAuthApi";
import SearchIcon from "@/components/Icons/components/SearchIcon";
import { InputField } from "@/components/InputField";
import TrendingVideosCarousel from "./components/TrendingVideosCarousel";
import logoMin from "@/assets/images/logo-min.png";
import s from "./Home.styles";

const Home: React.FC = () => {
  const { data: me, isFetching } = useSuspenseQuery(getMeQueryOptions());

  return (
    <SafeAreaView style={s.wrap}>
      <View style={s.container}>
        <View style={s.header}>
          <View style={s.usernameWrap}>
            <Typography style={s.headerTitle} variant="caption-md">
              Welcome back
            </Typography>
            <Typography style={s.headerName} variant="title-lg">
              {isFetching ? "Loading..." : me?.username}
            </Typography>
          </View>
          <Image style={s.headerLogo} source={logoMin} resizeMode="cover" />
        </View>
        <View>
          <InputField
            placeholder="Search for a video topic"
            Icon={SearchIcon}
          />
        </View>
        <TrendingVideosCarousel />
      </View>
    </SafeAreaView>
  );
};

export default Home;
