import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import AppButton from "../components/AppButton";
export default function ConnectScreen({ navigation }) {
  const [address, setAddress] = useState("10.133.13.69");
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>connect</Text>
        <View style={styles.content}>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>IP</Text>
            <TextInput
              style={styles.textInput}
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <AppButton
            title="connect"
            style={styles.button}
            onPress={() => navigation.navigate("Main", { address: address })}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "80%",
    height: 300,
    backgroundColor: "grey",
  },
  boxTitle: {
    backgroundColor: "lightgrey",
    width: "50%",
    padding: 20,
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    width: "70%",
    marginBottom: 40,
  },
  textInputTitle: {
    width: "50%",
    color: "black",
    padding: 5,
    backgroundColor: "lightgrey",
  },
  textInput: {
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
  },
  button: {
    width: 150,
    height: 50,
  },
});
