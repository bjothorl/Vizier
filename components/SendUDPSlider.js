import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import VerticalSlider from "rn-vertical-slider";

import { sendUDP } from "../utility/udp";

export default function SendUDPSlider({
  width,
  height,
  address,
  port,
  name,
  id,
  onChange,
  value,
}) {
  const handleValueChange = (value) => {
    sendUDP({ data: value, address: address, port: port });
    onChange(id, value);
  };

  return (
    <View style={[styles.container, { width: width }]}>
      <View style={styles.nameContainer}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
      </View>
      <VerticalSlider
        value={value}
        disabled={false}
        min={1}
        max={100}
        onChange={(value) => {
          handleValueChange(value);
        }}
        onComplete={() => {}}
        width={width - width / 4}
        height={(290 / 100) * height}
        step={1}
        borderRadius={5}
        minimumTrackTintColor={"gray"}
        maximumTrackTintColor={"darkgrey"}
      />
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  nameContainer: {
    width: "100%",
    padding: 5,
    backgroundColor: "darkgrey",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  name: {
    textAlign: "center",
  },
});
