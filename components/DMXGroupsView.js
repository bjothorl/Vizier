import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SendUDPButton from "./SendUDPButton";
export default function DMXGroupsView({ address, port }) {
  let buttons = [];

  for (let i = port; i < port + 11; i++) {
    buttons.push({ id: i, address: address, port: i });
  }

  return (
    <View style={styles.container}>
      {buttons.map(({ id, address, port }, i) => (
        <SendUDPButton
          title={"DMX\n" + port}
          key={id}
          address={address}
          port={port}
          style={styles.button}
          bang={false}
        />
      ))}
      <SendUDPButton
        title={"BLACK\nOUT\n" + 4471}
        address={address}
        port={4471}
        style={styles.button}
        bang={false}
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
