import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  FlatList
} from "react-native";
import { connect } from "react-redux";

class Checkout extends Component {
  render() {
    const { cartItems } = this.props;
    console.log(cartItems);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          width: Dimensions.get("window").width
        }}
      >
        <Text style={{ fontSize: 29, fontWeight: "700" }}>Summary</Text>
        <View
          style={{
            borderColor: "#c3c3c3",
            borderBottomWidth: 2,
            width: 400,
            paddingBottom: 10
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 400,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "rgba(0,0,0,0.6)",
              fontWeight: "bold"
            }}
          >
            Total: $
            {cartItems.reduce(function(res, item) {
              return item.price + res;
            }, 0)}
          </Text>
          <Button
            style={{ justifyContent: "center" }}
            title="Confirm"
            onPress={() => {
              alert("Ready for Payment.");
            }}
          />
        </View>
        <View style={styles.items}>
          {cartItems.map(item => (
            <View style={styles.container}>
              <View>
                <Text style={styles.itemTitle}>Item Name:</Text>
                <View>
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state
  };
};

export default connect(mapStateToProps, null)(Checkout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderWidth: 1,
    borderColor: "gold"
  },
  items: {
    flex: 1,
    width: 440,
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  itemText: {
    fontSize: 20,
    padding: 5
  },
  itemTitle: { fontSize: 20, fontWeight: "bold" }
});
