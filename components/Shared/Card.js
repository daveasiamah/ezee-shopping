import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 10,
    flex: 1,
    margin: 4,
    borderRadius: 10,
    height: Dimensions.get("window").width
  },
  content: {
    marginHorizontal: 18,
    marginVertical: 10
  }
});
