import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import AppButton from "./AppButton";
import SendUDPButton from "./SendUDPButton";
export default function CameraView({ address, port, onEditPress }) {
  // const address = "127.0.0.1";

  let buttons = [];

  for (let i = port; i < port + 6; i++) {
    buttons.push({ id: i, address: address, port: i });
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          // resizeMode="contain"
          style={styles.image}
          source={require("../assets/live.jpg")}
        >
          <AppButton
            title="edit effect"
            style={styles.editEffectButton}
            onPress={onEditPress}
            bang={false}
          />
        </ImageBackground>
      </View>

      <View style={styles.effectBank}>
        {buttons.map(({ id, address, port }) => (
          <SendUDPButton
            title={"effect\n" + port}
            address={address}
            port={port}
            key={id}
            style={styles.button}
            bang={false}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: "60%",
  },
  image: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
  },
  effectBank: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "27%",
    height: "40%",
    margin: 5,
  },
  editEffectButton: {
    width: "27%",
    height: "20%",
    margin: 5,
  },
});
