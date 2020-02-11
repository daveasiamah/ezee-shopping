import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../Screens/Home";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Checkout from "../Checkout/Checkout";
import Header from "../Shared/Header";
import ShoppingCartIcon from "../Shared/ShoppingCartIcon";
import { Text } from "react-native";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => <Header navigation={navigation} />
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
    headerTitleAlign: "center",
    headerTitle: () => (
      <Text style={{ fontSize: 25, fontWeight: "900" }}>Ezee-Shopping</Text>
    ),
    headerRight: () => <ShoppingCartIcon />
  }
});

export default HomeStack;
