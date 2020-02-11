import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <MaterialIcons
      name="menu"
      size={28}
      onPress={openMenu}
      style={styles.icon}
    />
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    // width: 320,
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    // marginLeft: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    position: "absolute",
    left: 10
  }
});
