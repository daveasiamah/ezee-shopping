// const Home = ({ navigation }) => {
//   const [items, setItems] = useState([
//     { id: uuid(), title: "Cheese", price: 2.5, Location: "Refrigerated foods" },
//     { id: uuid(), title: "Crisps", price: 3, Location: "The Snack isle" },
//     { id: uuid(), title: "Pizza", price: 4, Location: "Refrigerated foods" },
//     { id: uuid(), title: "Chocolate", price: 1.5, Location: "The Snack isle" },
//     { id: uuid(), title: "Icing Sugar", price: 1.5, Location: "Home baking" },
//     { id: uuid(), title: "Cinnamon", price: 3, Location: "Home baking" }
//   ]);
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Button
} from "react-native";
// import Card from "../Shared/Card";

import uuid from "uuid/v4";
import { connect } from "react-redux";

const items = [
  { id: uuid(), title: "Cheese", price: 2.55, category: "Refrigerated foods" },
  { id: uuid(), title: "Crisps", price: 3.99, category: "The Snack isle" },
  { id: uuid(), title: "Pizza", price: 4.99, category: "Refrigerated foods" },
  { id: uuid(), title: "Chocolate", price: 1.99, category: "The Snack isle" },
  { id: uuid(), title: "Icing Sugar", price: 1.59, category: "Home baking" },
  { id: uuid(), title: "Yeast", price: 3.59, category: "Home baking" },
  { id: uuid(), title: "Cinnamon", price: 3, category: "Spices" }
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
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>
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
    marginVertical: 20
  },
  item: {
    backgroundColor: "#fff",
    alignItems: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    padding: 10,
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
    fontSize: 20
  },
  button: {
    // flex: 1,
    position: "absolute",
    bottom: 5,
    marginBottom: 10,
    width: 170
  },
  card: {
    padding: 10,
    flex: 1,
    margin: 4,
    borderRadius: 10,
    height: Dimensions.get("window").width / numColumns
  }
});
