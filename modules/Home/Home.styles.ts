import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";
import { FONT_FAMILY } from "@/components/Typography/constants";

export default StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    paddingHorizontal: 24,
  },
  header: {
    marginTop: 32,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  usernameWrap: {
    flexDirection: "column",
  },
  headerTitle: {
    fontFamily: FONT_FAMILY.medium,
    color: COLORS.gray100,
  },
  headerName: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.bold,
  },
  headerLogo: {
    width: 30,
    height: 34,
  },
});
