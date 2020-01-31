import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import CheckoutStack from "./CheckoutStack";
import CartStack from "./CartStack";

RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  About: {
    screen: AboutStack
  },
  Cart: {
    screen: CartStack
  },

  Checkout: {
    screen: CheckoutStack
  }
});

export default createAppContainer(RootDrawerNavigator);
