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
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.container}>
          <Text style={styles.cartHeader}>Items in cart</Text>
          <View style={styles.checkoutBtn}>
            <Button
              title="Checkout"
              color="deepskyblue"
              onPress={() => this.props.navigation.push("Checkout")}
            />
          </View>
        </View>
        {this.props.cartItems.length > 0 ? (
          <View style={{ marginHorizontal: 20 }}>
            <Product
              removeItemFromCart={removeItemFromCart}
              cartItems={cartItems}
            />
          </View>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     removeItemFromCart: item =>
//       dispatch({ type: "REMOVE_FROM_CART", payload: item })
//   };
// };

export default connect(mapStateToProps, null)(ShoppingCart);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10
  },
  cartHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 20,
    paddingLeft: 20,
    textTransform: "uppercase"
  }
});
