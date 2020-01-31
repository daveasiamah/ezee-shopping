import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

class ShoppingCartIcon extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <View style={[styles.container, styles.cartIcon]}>
        <View style={styles.cartCount}>
          <Text style={{ color: "white", fontSize: 20 }}>
            {cartItems.length}
          </Text>
        </View>
        <Icon
          onPress={() => alert(this.props.navigation)}
          name="ios-cart"
          size={40}
          style={{ color: "rgba(0,0,0,0.6)" }}
        />
      </View>
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
    justifyContent: "center",
    width: 100
  },
  cartCount: {
    height: 40,
    width: 40,
    backgroundColor: "rgba(95,197,123,0.8)",
    padding: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
