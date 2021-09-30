import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SendUDPButton from "./SendUDPButton";
export default function DMXGroupsView({
  address,
  port,
  onDMXPress,
  onBlackOutPress,
  values,
}) {
  let buttons = [];

  for (let i = 0; i < 11; i++) {
    buttons.push({
      id: i,
      address: address,
      port: port + i,
      toggle: values[i],
    });
  }

  return (
    <View style={styles.container}>
      {buttons.map(({ id, address, port, toggle }, i) => (
        <SendUDPButton
          title={"DMX " + id + "\n" + port}
          key={id}
          id={id}
          address={address}
          port={port}
          style={styles.button}
          bang={false}
          toggle={toggle}
          onPress={onDMXPress}
        />
      ))}
      <SendUDPButton
        title={"BLACK\nOUT\n" + (port + 11)}
        blackOut={true}
        blackOutStartPort={port}
        id={11}
        address={address}
        port={4471}
        style={styles.button}
        bang={true}
        onPress={onBlackOutPress}
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
  },
  button: {
    width: "27%",
    height: "20%",
    margin: 5,
  },
});
