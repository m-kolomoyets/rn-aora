import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";
import { FONT_FAMILY } from "@/components/Typography/constants";

export default StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  scrollViewContentContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 115,
    height: 34,
    resizeMode: "contain",
    marginBottom: 24,
  },
  cards: {
    width: "100%",
    height: 298,
    marginBottom: 12,
  },
  titleWrap: {
    position: "relative",
  },
  title: {
    textAlign: "center",
    fontFamily: FONT_FAMILY.bold,
    color: COLORS.white,
    marginBottom: 20,
  },
  titleAccent: {
    color: COLORS.secondary100,
  },
  titleAccentDecor: {
    position: "absolute",
    bottom: 22,
    right: 0,
  },
  subtitle: {
    color: COLORS.gray100,
    textAlign: "center",
    marginBottom: 30,
  },
});
