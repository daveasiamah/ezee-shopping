import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Header from "../Shared/Header";
import Checkout from "../Checkout/Checkout";

const screens = {
  Checkout: {
    screen: Checkout,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Checkout" />
      };
    }
  }
};

const CheckoutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#fff", height: 80 }
  }
});

export default CheckoutStack;
