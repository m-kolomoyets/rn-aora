import { memo } from "react";
import { View } from "react-native";
import Typography from "@/components/Typography";
import s from "./SignIn.styles";

const SignIn: React.FC = () => {
  return (
    <View>
      <Typography style={s.title} variant="title-lg">
        Sign in
      </Typography>
    </View>
  );
};

export default memo(SignIn);
