import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "@/components/Typography/constants";

export default StyleSheet.create({
  wrap: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    opacity: 0.5,
  },
  primary: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
  primaryLabel: {
    fontFamily: FONT_FAMILY.semibold,
    color: COLORS.black,
  },
  primaryLoader: {
    width: 23,
    height: 23,
  },
});
