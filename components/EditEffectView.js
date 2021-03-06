import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SendUDPButton from "./SendUDPButton";
import SendUDPSlider from "./SendUDPSlider";
export default function EditEffectView({
  address,
  port,
  onSliderChange,
  values,
  lastEffect,
}) {
  return (
    <View style={styles.container}>
      <SendUDPSlider
        id={0}
        name="feature 1"
        address={address}
        port={port + lastEffect * 3}
        width={80} // width in px
        height={90} // height in %
        onChange={onSliderChange}
        value={values[lastEffect][1]}
      />
      <SendUDPSlider
        id={1}
        name="feature 2"
        address={address}
        port={port + lastEffect * 3 + 1}
        width={80}
        height={90}
        onChange={onSliderChange}
        value={values[lastEffect][2]}
      />
      <SendUDPSlider
        id={2}
        name="feature 3"
        address={address}
        port={port + lastEffect * 3 + 2}
        width={80}
        height={90}
        onChange={onSliderChange}
        value={values[lastEffect][3]}
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
