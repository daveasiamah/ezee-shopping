import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Button
} from "react-native";

import { connect } from "react-redux";

class Product extends Component {
  render() {
    const { cartItems, removeItemFromCart } = this.props;
    return (
      <ScrollView>
        {cartItems.map((item, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item name: {item.title}</Text>
              <Text style={styles.itemText}>Category: {item.category}</Text>
              <Text style={styles.itemText}>
                Price: {"$"}
                {item.price}
              </Text>
              <View style={styles.button}>
                <Button
                  title="remove from cart"
                  color="darkgrey"
                  onPress={() => removeItemFromCart(item.id)}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const mapSateToProps = state => {
  return { cartItems: state };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: item =>
      dispatch({ type: "REMOVE_FROM_CART", payload: item })
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(Product);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  },
  item: {
    height: 200,
    paddingHorizontal: 10,
    // paddingBottom: 80,
    paddingTop: 10,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "red",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black"
    // height: Dimensions.get("window").width / 2 // approximate a square
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "black",
    fontSize: 20
    // paddingTop: 20
  },
  button: {
    position: "absolute",
    bottom: 5,
    margin: 10,
    width: "100%"
  },
  card: {
    padding: 10,
    flex: 1,
    margin: 4,
    borderRadius: 10
    // height: Dimensions.get("window").width / numColumns
  }
});
