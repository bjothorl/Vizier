import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { sendUDP } from "../utility/udp";

export default function SendUDPTextInput({ style, address, port }) {
  const [data, setData] = useState();

  const handleOnPress = () => {
    sendUDP({ data: data, address: address, port: port });
  };

  return (
    <View style={[styles.container, style]}>
      <Text>Input: </Text>
      <TextInput
        placeholder="input"
        style={styles.input}
        onChangeText={setData}
        value={data}
      />
      <Button title="send" onPress={handleOnPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    color: "black",
    flex: 1,
    borderWidth: 1,
  },
});
