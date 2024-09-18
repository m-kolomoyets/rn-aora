import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "../Typography/constants";

export default StyleSheet.create({
  wrap: {
    width: "100%",
    padding: 16,
    borderRadius: 8,
    backgroundColor: COLORS.black300,
    shadowColor: COLORS.black,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  info: {},
  success: {},
  warning: {},
  error: {},
  label: {
    fontFamily: FONT_FAMILY.regular,
    lineHeight: 24,
    width: "80%",
  },
  infoLabel: {
    color: COLORS.blue300,
  },
  successLabel: {
    color: COLORS.green300,
  },
  warningLabel: {
    color: COLORS.yellow300,
  },
  errorLabel: {
    color: COLORS.red300,
  },
  icon: {
    width: 24,
    height: 24,
  },
  infoIcon: {
    color: COLORS.blue300,
  },
});
