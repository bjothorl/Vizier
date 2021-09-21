import React from "react";
import { View, StyleSheet } from "react-native";
import CameraView from "../components/CameraView";
import DMXGroupsView from "../components/DMXGroupsView";
import SendUDPSlider from "../components/SendUDPSlider";
import BoxView from "../components/BoxView";
export default function MainScreen({ route }) {
  return (
    <View style={styles.container}>
      <BoxView
        title="CAMERA EFFECTS"
        style={styles.cameraViewContainer}
        component={CameraView({ address: route.params.address, port: 4450 })}
      />
      <BoxView
        title="DMX GROUPS"
        style={styles.dmxGroupsViewContainer}
        component={DMXGroupsView({ address: route.params.address, port: 4460 })}
      />
      <View style={styles.sliders}>
        <SendUDPSlider
          name="animation speed"
          address={route.params.address}
          port={4444}
          style={styles.slider}
        />
        <SendUDPSlider
          name="audio sensitivity"
          address={route.params.address}
          port={4445}
          style={styles.slider}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cameraViewContainer: {
    width: "45%",
  },
  dmxGroupsViewContainer: {
    flex: 1,
  },
  sliders: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    alignSelf: "flex-end",
  },
  slider: {
    width: 80,
  },
});
