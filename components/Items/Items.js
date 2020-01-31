import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import AddItem from "./AddItem";

const Items = () => {
  const [items, setItems] = useState([
    { name: "Cheese", Price: 2.5, Location: "Refrigerated foods" },
    { name: "Crisps", Price: 3, Location: "the Snack isle" },
    { name: "Pizza", Price: 4, Location: "Refrigerated foods" },
    { name: "Chocolate", Price: 1.5, Location: "the Snack isle" },
    { name: "Self-raising flour", Price: 1.5, Location: "Home baking" },
    { name: "Ground almonds", Price: 3, Location: "Home baking" }
  ]);

  //delete a item
  const removeItem = id => {
    setItems(prevState => {
      return prevState.filter(item => item.id != id);
    });
  };

  const submitHandler = text => {
    if (text.length >= 3) {
      setItems(prevItems => {
        return [{ text, id: Math.random().toString() }, ...prevItems];
      });
    } else {
      Alert.alert("Oops!", "An item must be more than 3 characters long.", [
        { text: "Understood", onPress: () => console.log("Alert Closed.") }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* <Header /> */}
        <View style={styles.content}>
          <AddItem handleSubmit={submitHandler} />
          <View style={styles.list}>
            <Text style={styles.title}>Items</Text>
            <FlatList
              keyExtractor={item => item.id}
              data={items}
              renderItem={({ item }) => (
                <Item item={item} removeItem={removeItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1
  },
  title: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    fontSize: 19,
    fontWeight: "bold",
    borderBottomColor: "#ddd"
  }
});
