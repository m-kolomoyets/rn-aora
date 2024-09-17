import { View, Text } from "react-native";
import { Link } from "expo-router";
import Typography from "@/components/Typography";
import s from "./Home.styles";

const Home: React.FC = () => {
  return (
    <View style={s.wrap}>
      <Typography style={s.title} variant="title-xl">
        Home Page
      </Typography>

      <Link href="/(home)/profile">
        <Typography style={s.link} variant="subtitle-md">
          Go to profile
        </Typography>
      </Link>
    </View>
  );
};

export default Home;
