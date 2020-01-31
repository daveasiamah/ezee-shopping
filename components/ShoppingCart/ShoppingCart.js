import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import renderItem from "../Screens/Home";
import Product from "../Shared/Product";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cartItems, removeItemFromCart } = this.props;
    console.log(cartItems);
    return (
      <View style={styles.container}>
        <View style={styles.cartHeader}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cart Items</Text>
          <Button
            title="Checkout"
            color="deepskyblue"
            onPress={() => this.props.navigation.push("Checkout")}
          />
        </View>
        {this.props.cartItems.length > 0 ? (
          <Product
            removeItemFromCart={removeItemFromCart}
            cartItems={cartItems}
          />
        ) : (
          <Text>No items in your cart</Text>
        )}
      </View>
    );
  }
}
const mapStateToProps = state => {
  return { cartItems: state };
};

export default connect(mapStateToProps, null)(ShoppingCart);

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  cartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 20
  }
});
