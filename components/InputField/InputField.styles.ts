import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";
import { FONT_FAMILY } from "@/components/Typography/constants";

export default StyleSheet.create({
  label: {
    color: COLORS.gray100,
    marginBottom: 8,
    fontFamily: FONT_FAMILY.medium,
  },
  inputWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: COLORS.black100,
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.black200,
    borderStyle: "solid",
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22.4,
    letterSpacing: 0.2,
    fontFamily: FONT_FAMILY.bold,
    color: COLORS.white,
  },
  inputFocused: {
    borderColor: COLORS.secondary200,
  },
  errorMessage: {
    color: COLORS.secondary100,
    marginTop: 10,
    fontFamily: FONT_FAMILY.medium,
  },
  addonIcon: {
    width: 20,
    height: 20,
    color: COLORS.gray100,
  },
});
