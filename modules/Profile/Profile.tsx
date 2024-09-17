import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import s from "./Profile.styles";

const Profile: React.FC = () => {
  return (
    <ThemedView style={s.wrap}>
      <ThemedText>Profile</ThemedText>
    </ThemedView>
  );
};

export default Profile;
