import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  skeleton: {
    height: 285,
  },
  cardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  cardSide: {
    width: 148,
    height: 236,
    borderRadius: 14,
  },
  cardCenter: {
    width: 168,
    height: 268,
    borderRadius: 14,
  },
  dotContainer: {
    flexDirection: "row",
    gap: 6,
  },
  dorInactive: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  dotActive: {
    width: 17,
    height: 7,
    borderRadius: 99,
  },
});
