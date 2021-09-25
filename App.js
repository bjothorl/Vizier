import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./navigation/MainNavigator";
// import NodeCamera from "./components/NodeCamera";

import theme from "./navigation/theme";
import CameraViewExample from "./CameraViewExample";

export default function App(props) {
  return (
    // <NavigationContainer theme={theme}>
    //   <MainNavigator />
    // </NavigationContainer>
    <CameraViewExample />
  );
}
