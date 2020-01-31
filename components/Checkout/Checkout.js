import React, { Component } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { connect } from "react-redux";

class Checkout extends Component {
  render() {
    const { cartItems } = this.props;
    console.log(cartItems);
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 29, fontWeight: "700" }}>Checkout</Text>
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
          <Text style={{ fontSize: 29, fontWeight: "700" }}>
            Total: $
            {cartItems.reduce(function(res, item) {
              return item.price + res;
            }, 0)}
          </Text>
          <Button
            title="Confirm"
            onPress={() => {
              alert("Ready for Payment.");
            }}
          />
        </View>
        <View style={styles.items}>
          {cartItems.map(item => (
            <View>
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
    alignItems: "center",
    // justifyContent: "center",
    margin: 20
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
