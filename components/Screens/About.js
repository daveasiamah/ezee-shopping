import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../utils/GlobalStyles";
// import { globalStyles } from "../../utils/GlobalStyles";

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={globalStyles.titleText}>EZee Shopping</Text>
        <Text style={globalStyles.paragraph}> 2020, All Rights Reserved.</Text>
        <Text style={globalStyles.paragraph}>Powered by ❤-OS V.0.1.</Text>
      </View>
    );
  }
}
export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 100,
    backgroundColor: "#fff"
  }
});
