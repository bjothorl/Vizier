import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/MainNavigator";
import theme from "./navigation/theme";

export default function App(props) {
  return (
    <NavigationContainer theme={theme}>
      <MainNavigator />
    </NavigationContainer>
  );
}
