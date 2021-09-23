import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

export default function AppButton({
  style,
  onPress,
  title,
  bang = true,
  toggle = false,
}) {
  const handleOnPress = () => {
    onPress();
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        { backgroundColor: toggle ? "lime" : "lightgrey" },
      ]}
      onPress={handleOnPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
