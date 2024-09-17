import { FONT_FAMILY } from "@/components/Typography/constants";
import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.black,
    fontFamily: FONT_FAMILY.extrabold,
  },
  link: {
    color: COLORS.secondary,
  },
});
