import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";
import { FONT_FAMILY } from "@/components/Typography/constants";

export default StyleSheet.create({
  wrap: {
    width: "100%",
  },
  title: {
    fontFamily: FONT_FAMILY.semibold,
    color: COLORS.white,
    marginBottom: 32,
  },
  fieldsWrap: {
    width: "100%",
    flexDirection: "column",
    gap: 22,
    marginBottom: 24,
  },
  signInWrap: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  signInLabel: {
    color: COLORS.gray100,
  },
  singInLink: {
    color: COLORS.secondary100,
    fontFamily: FONT_FAMILY.semibold,
  },
});
