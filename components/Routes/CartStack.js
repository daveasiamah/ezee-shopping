import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Header from "../Shared/Header";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const screens = {
  ShoppingCart: {
    screen: ShoppingCart,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Shopping Cart" />
        )
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
