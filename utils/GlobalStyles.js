import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "white"
  }
});

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
  },
  titleText: {
    fontFamily: "Roboto",
    fontSize: 30,
    color: "#333"
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 24,
    fontSize: 18,
    fontFamily: "sans-serif"
  }
});
