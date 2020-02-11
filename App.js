import React, { Component } from "react";
// import { StyleSheet, View, Platform } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { Store } from "./Store";
import { Text } from "react-native";
import Navigator from "./components/Routes/Drawer";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    );
  }
}
