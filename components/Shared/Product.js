import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Button,
  Image
} from "react-native";

import { connect } from "react-redux";

class Product extends Component {
  render() {
    const { cartItems, removeItemFromCart } = this.props;
    return (
      <View>
        <ScrollView>
          {cartItems.map((item, index) => (
            <View style={styles.container} key={index}>
              <View style={styles.item}>
                <Image
                  source={item.img}
                  style={{ width: "45%", height: "50%", marginRight: 10 }}
                />
                <View>
                  <Text style={styles.itemHeader}>{item.title}</Text>
                  <Text style={styles.itemText1}>{item.category}</Text>
                  <Text style={styles.itemText}>
                    {"$"}
                    {item.price}
                  </Text>
                </View>
                <View style={styles.button}>
                  <Button
                    title="remove from cart"
                    color="crimson"
                    onPress={() => removeItemFromCart(item.id)}
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
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
    flexDirection: "row",
    height: 200,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "red",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 10
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemHeader: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20
  },
  itemText1: {
    color: "#333",
    fontSize: 15
  },
  itemText: {
    color: "#333",
    fontSize: 20
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
