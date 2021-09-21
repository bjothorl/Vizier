import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SendUDPButton from "./SendUDPButton";
import SendUDPSlider from "./SendUDPSlider";
export default function EditEffectView({ address, port, onSliderChange }) {
  return (
    <View style={styles.container}>
      <SendUDPSlider
        id={0}
        name="feature 1"
        address={address}
        port={port}
        width={80} // width in px
        height={90} // height in %
        onChange={onSliderChange}
      />
      <SendUDPSlider
        id={1}
        name="feature 2"
        address={address}
        port={port}
        width={80}
        height={90}
        onChange={onSliderChange}
      />
      <SendUDPSlider
        id={2}
        name="feature 3"
        address={address}
        port={port}
        width={80}
        height={90}
        onChange={onSliderChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});
