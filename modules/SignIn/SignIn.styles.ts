import { FONT_FAMILY } from "@/components/Typography/constants";
import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY.semibold,
    color: COLORS.white,
    marginBottom: 32,
  },
});
