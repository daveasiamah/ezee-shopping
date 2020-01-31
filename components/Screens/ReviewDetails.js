import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../Shared/Card";
import { globalStyles } from "../../utils/GlobalStyles";

const ItemDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <View style={{ padding: 20 }}>
          <Text style={styles.itemTitle}>{navigation.getParam("title")}</Text>
          <Text style={styles.itemBody}>{navigation.getParam("body")}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{navigation.getParam("price")}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  itemTitle: {
    fontFamily: "righteous",
    fontSize: 24
  },
  itemBody: {
    fontSize: 20
  },
  price: {
    fontSize: 18,
    color: "darkgrey"
  },
  priceContainer: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: "violet",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  }
});
