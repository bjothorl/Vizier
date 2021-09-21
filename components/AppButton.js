import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

export default function AppButton({ style, onPress, title, bang = true }) {
  const [toggle, setToggle] = useState(false);

  const handleOnPress = () => {
    if (!bang) setToggle(!toggle);
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
