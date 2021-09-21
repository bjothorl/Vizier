import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CameraView from "../components/CameraView";
import DMXGroupsView from "../components/DMXGroupsView";
import SendUDPSlider from "../components/SendUDPSlider";
import BoxView from "../components/BoxView";
import EditEffectView from "../components/EditEffectView";
export default function MainScreen({ route }) {
  const [state, setState] = useState({
    effects: [
      [0, 50, 50, 50],
      [0, 50, 50, 50],
      [0, 50, 50, 50],
      [0, 50, 50, 50],
      [0, 50, 50, 50],
      [0, 50, 50, 50],
    ],
    dmxGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    sliders: [50, 50],
  });

  const [showingEffectBox, setShowingEffectBox] = useState(false);

  const handleClickEffect = () => {
    setShowingEffectBox(!showingEffectBox);
  };

  return (
    <View style={styles.container}>
      <BoxView
        title="CAMERA EFFECTS"
        style={styles.cameraViewContainer}
        component={CameraView({
          address: route.params.address,
          port: 4450,
          onEditPress: handleClickEffect,
        })}
      />
      {showingEffectBox ? (
        <BoxView
          title="EDIT EFFECT"
          style={styles.dmxGroupsViewContainer}
          component={EditEffectView({
            address: route.params.address,
            port: 4480,
          })}
        />
      ) : (
        <BoxView
          title="DMX GROUPS"
          style={styles.dmxGroupsViewContainer}
          component={DMXGroupsView({
            address: route.params.address,
            port: 4460,
          })}
        />
      )}
      <View style={styles.sliders}>
        <SendUDPSlider
          name="animation speed"
          address={route.params.address}
          port={4444}
          width={80}
          height={100}
        />
        <SendUDPSlider
          name="audio sensitivity"
          address={route.params.address}
          port={4445}
          width={80}
          height={100}
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
    alignSelf: "flex-end",
  },
});
