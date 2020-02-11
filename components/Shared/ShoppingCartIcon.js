import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

class ShoppingCartIcon extends Component {
  render() {
    const { cartItems, navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("ShoppingCart")}
      >
        <View style={styles.cartCount}>
          <Text style={{ color: "white", fontSize: 12 }}>
            {cartItems.length}
          </Text>
        </View>
        <Icon
          // onPress={() => navigation.navigate("ShoppingCart")}
          name="ios-cart"
          size={30}
          style={{ color: "rgba(0,0,0,0.6)" }}
        />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return { cartItems: state };
};

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    right: 15,
    justifyContent: "center"
    // width: 100
  },
  cartIcon: {
    backgroundColor: "blue"
  },
  cartCount: {
    height: 30,
    width: 30,
    zIndex: 1,
    backgroundColor: "rgba(95,197,123,0.8)",
    padding: 3,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
