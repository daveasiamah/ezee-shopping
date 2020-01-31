import { createStackNavigator } from "react-navigation-stack";
import About from "../Screens/About";
import Header from "../Shared/Header";
import React from "react";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About EZee Shopping" />
        )
      };
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#fff", height: 80 }
  }
});

export default AboutStack;
