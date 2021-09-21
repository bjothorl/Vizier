import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ConnectScreen from "../screens/ConnectScreen";
import MainScreen from "../screens/MainScreen";
const Stack = createNativeStackNavigator();

export default function MainNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Connect"
        component={ConnectScreen}
        options={{ orientation: "portrait" }}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ orientation: "landscape_left" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
