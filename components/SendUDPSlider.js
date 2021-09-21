import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import VerticalSlider from "rn-vertical-slider";

import { sendUDP } from "../utility/udp";

export default function SendUDPSlider({ style, address, port, name }) {
  const [value, setValue] = useState(50);

  const handleValueChange = (value) => {
    setValue(value);
    sendUDP({ data: value, address: address, port: port });
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.nameContainer}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
      </View>
      <VerticalSlider
        value={value}
        disabled={false}
        min={0}
        max={100}
        onChange={(value) => {
          handleValueChange(value);
        }}
        onComplete={() => {}}
        width={style.width - style.width / 4}
        height={290}
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
