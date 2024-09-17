import { View } from "react-native";
import React from "react";
import Typography from "@/components/Typography";
import s from "./Profile.style";

const Profile: React.FC = () => {
  return (
    <View style={s.wrap}>
      <Typography style={s.title} variant="title-xl">
        Profile
      </Typography>
    </View>
  );
};

export default Profile;
