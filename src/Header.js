import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Albums</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#0B7189",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    // Android Only
  },
  textStyle: {
    fontSize: 20,
    color:"#FFD791"
  },
});

export default Header;
