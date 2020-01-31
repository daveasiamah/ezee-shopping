import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Item({ item, removeItem }) {
  return (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <TouchableOpacity
        onPress={() => {
          removeItem(item.id);
        }}
      >
        <MaterialIcons name="delete" size={18} color="maroon" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "dashed",
    borderRadius: 10,
    margin: 10,
    justifyContent: "space-between"
  }
});
