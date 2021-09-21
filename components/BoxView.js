import React, { Children } from "react";
import { View, Text, StyleSheet } from "react-native";
export default function BoxView({ title, component, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
      {component}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    marginRight: 5,
  },
  titleContainer: {
    width: "50%",
    backgroundColor: "lightgrey",
    padding: 5,
  },
});
