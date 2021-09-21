import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AppButton from "./AppButton";
import { sendUDP } from "../utility/udp";

export default function SendUDPButton({ title, style, address, port, bang }) {
  const [toggle, setToggle] = useState(false);
  const handleOnPress = () => {
    console.log(address, port);
    if (!bang) setToggle(!toggle);
    sendUDP({ data: toggle ? 0 : 1, address: address, port: port });
  };

  return (
    <AppButton
      style={style}
      title={title}
      bang={bang}
      onPress={handleOnPress}
    />
  );
}
