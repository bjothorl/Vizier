import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import WebView from "react-native-webview";
import AppButton from "./AppButton";
import SendUDPButton from "./SendUDPButton";
export default function CameraView({
  address,
  port,
  onEditPress,
  onEffectPress,
  lastEffect,
  values,
}) {
  // const address = "127.0.0.1";
  let buttons = [];
  const [editEffectToggle, setEditEffectToggle] = useState(false);
  for (let i = 0; i < 6; i++) {
    buttons.push({ address: address, port: port + i, toggle: values[i][0] });
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <WebView
          style={styles.cameraView}
          source={{ uri: "http://localhost:8080/video" }}
        ></WebView>
        <AppButton
          title={"edit effect " + lastEffect}
          style={styles.editEffectButton}
          onPress={() => {
            onEditPress();
            setEditEffectToggle(!editEffectToggle);
          }}
          bang={false}
          toggle={editEffectToggle}
        />
      </View>

      <View style={styles.effectBank}>
        {buttons.map(({ address, port, toggle }, i) => (
          <SendUDPButton
            key={i}
            id={i}
            title={"effect " + i + "\n" + port}
            address={address}
            port={port}
            style={styles.button}
            bang={false}
            onPress={onEffectPress}
            toggle={toggle}
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
  cameraContainer: {
    height: "60%",
    width: "100%",
  },
  cameraView: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    transform: [{ rotate: "180deg" }],
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
    height: 50,
    marginTop: -50,
    alignSelf: "flex-end",
  },
});
