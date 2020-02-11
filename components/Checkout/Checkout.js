import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import { connect } from "react-redux";

class Checkout extends Component {
  render() {
    const { cartItems } = this.props;
    console.log(cartItems);
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Summary</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
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
            title="Confirm"
            onPress={() => {
              alert("Ready for Payment.");
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 30,
            paddingHorizontal: 10
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                // textAlign: "center",
                justifyContent: "flex-start"
              }}
            >
              Item Name
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                justifyContent: "flex-start"
              }}
            >
              Category
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                justifyContent: "flex-start"
              }}
            >
              Price
            </Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#d3d3d3",
            backgroundColor: "#fff"
          }}
        ></View>
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
          {cartItems.map((item, index) => (
            <View style={styles.item} key={item.id}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View>
                  <Text style={styles.itemHeader}>{item.title}</Text>
                </View>
                <View>
                  <Text style={styles.itemText1}>{item.category}</Text>
                </View>
                <View>
                  <Text style={styles.itemText}>
                    {"$"}
                    {item.price}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
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
    margin: 20
  },
  item: {
    // flex: 1,
    paddingBottom: 5,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff"
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
  itemTitle: { fontSize: 20, fontWeight: "bold" },
  card: {
    padding: 5,
    flex: 1,
    margin: 5,
    // borderRadius: 10,
    backgroundColor: "#fff"
    // alignItems: "center",
    // shadowOffset: { width: 1, height: 1 },
    // shadowColor: "#333",
    // shadowOpacity: 0.3,
    // shadowRadius: 2
  }
});
