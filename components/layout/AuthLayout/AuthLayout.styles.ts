import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export default StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingTop: 0,
  },
  scrollViewContentContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 64,
  },
  logo: {
    width: 115,
    height: 34,
    resizeMode: "contain",
    marginBottom: 40,
  },
});
