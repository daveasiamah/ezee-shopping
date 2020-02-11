import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Button,
  Image
} from "react-native";

import { connect } from "react-redux";

const items = [
  {
    id: 1,
    title: "Cheese",
    price: 2.55,
    category: "Refrigerated foods",
    img: require("../../assets/images/cheese.jpg")
  },
  {
    id: 2,
    title: "Crisps",
    price: 3.99,
    category: "The Snack isle",
    img: require("../../assets/images/crisps.jpg")
  },
  {
    id: 3,
    title: "Pizza",
    price: 4.99,
    category: "Refrigerated foods",
    img: require("../../assets/images/pizza.jpeg")
  },
  {
    id: 4,
    title: "Chocolate",
    price: 1.99,
    category: "The Snack isle",
    img: require("../../assets/images/chocolate.jpg")
  },
  {
    id: 5,
    title: "Icing Sugar",
    price: 1.59,
    category: "Home baking",
    img: require("../../assets/images/icing_sugar.jpg")
  },
  {
    id: 6,
    title: "Yeast",
    price: 3.59,
    category: "Home baking",
    img: require("../../assets/images/yeast.jpg")
  },
  {
    id: 7,
    title: "Cinnamon",
    price: 3,
    category: "Spices",
    img: require("../../assets/images/cinnamon.jpg")
  }
];

const formatData = (items, numColumns) => {
  const numberOfFullRows = Math.floor(items.length / numColumns);

  let numberOfElementsLastRow = items.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    items.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return items;
};

const numColumns = 2;

class Home extends Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.card}>
        <Image
          source={item.img}
          style={{
            width: "100%",
            height: "60%",
            marginBottom: 6
            // resizeMode: "contain"
          }}
        />
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemPrice}>
          {"$"}
          {item.price}
        </Text>
        <View style={styles.button}>
          <Button
            title="Add to cart"
            onPress={() => this.props.addItemToCart(item)}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(items, numColumns)}
        keyExtractor={(item, index) => index.toString()}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch({ type: "ADD_TO_CART", payload: item })
  };
};

export default connect(null, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 20
    // width: "50%",
    height: 200
  },
  item: {
    backgroundColor: "#fff",
    alignItems: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    padding: 5,
    flex: 1,
    margin: 4,
    borderRadius: 10,
    height: Dimensions.get("window").width / numColumns // approximate a square
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#444440",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 7
  },
  itemPrice: {
    color: "#444440",
    fontSize: 20,
    paddingVertical: 7
  },
  button: {
    flex: 1,
    position: "absolute",
    bottom: 10,
    marginTop: 10,
    width: 170
  },
  card: {
    padding: 5,
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    height: 350
    // height: Dimensions.get("window").width / 1
  }
});
