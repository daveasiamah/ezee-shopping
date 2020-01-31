import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../Screens/Home";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Checkout from "../Checkout/Checkout";
import Header from "../Shared/Header";
import ShoppingCartIcon from "../Shared/ShoppingCartIcon";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Ezee Shopping" />
        )
      };
    }
  },
  Cart: {
    screen: ShoppingCart,
    navigationOptions: {
      title: "Shopping Cart"
    }
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      title: "Checkout"
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerRight: () => <ShoppingCartIcon />
  }
});

export default HomeStack;
