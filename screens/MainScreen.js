import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CameraView from "../components/CameraView";
import DMXGroupsView from "../components/DMXGroupsView";
import SendUDPSlider from "../components/SendUDPSlider";
import BoxView from "../components/BoxView";
import EditEffectView from "../components/EditEffectView";
import {
  //   storedLastEffect,
  initialStore,
  //   handleEditPress,
  //   handleEffectPress,
  //   handleEditEffects,
  //   handleEffectSliderValueChange,
  //   handleSliderValueChange,
  //   handleDMXPress,
} from "../utility/store";

export default function MainScreen({ route }) {
  // https://reactjs.org/docs/hooks-reference.html#usereducer
  const [state, setState] = useState(initialStore);
  const [showingEffectBox, setShowingEffectBox] = useState(false);
  const [lastEffect, setLastEffect] = useState(0);

  const handleEditPress = () => {
    setShowingEffectBox(!showingEffectBox);
  };

  const handleEffectPress = (id, toggle) => {
    setLastEffect(id);
    let effects = [...state.effects];
    effects[id] = [toggle, effects[id][1], effects[id][2], effects[id][3]];
    setState({
      ...state,
      effects: effects,
    });
    console.log(state.effects);
  };

  const handleEditEffects = (values) => {
    console.log(lastEffect, values);
  };

  const handleEffectSliderValueChange = (id, value) => {
    console.log(id, value);
    // clone current values
    let effects = [...state.effects];
    effects[lastEffect][id + 1] = value;

    setState({
      ...state,
      effects: effects,
    });
    console.log(state.effects[lastEffect]);
  };

  const handleSliderValueChange = (id, value) => {
    let sliders = [...state.sliders];
    sliders[id] = value;
    setState({
      ...state,
      sliders,
    });
  };

  const handleDMXPress = (id, value) => {
    let dmxGroups = [...state.dmxGroups];
    dmxGroups[id] = value;
    setState({
      ...state,
      dmxGroups: dmxGroups,
    });
    console.log(state.dmxGroups);
  };

  const handleBlackOutPress = () => {
    let dmxGroups = [...state.dmxGroups];
    dmxGroups.forEach((val, index, arr) => {
      arr[index] = false;
    });
    setState({
      ...state,
      dmxGroups: dmxGroups,
    });
    console.log(dmxGroups);
  };

  return (
    <View style={styles.container}>
      <BoxView
        title="CAMERA EFFECTS"
        style={styles.cameraViewContainer}
        component={CameraView({
          address: route.params.address,
          port: 4450,
          onEditPress: handleEditPress,
          onEffectPress: handleEffectPress,
          values: state.effects,
          lastEffect: lastEffect,
        })}
      />
      {showingEffectBox ? (
        <BoxView
          title={"EDIT EFFECT " + lastEffect}
          style={styles.dmxGroupsViewContainer}
          component={EditEffectView({
            address: route.params.address,
            port: 4480,
            values: state.effects,
            lastEffect: lastEffect,
            onEditEffects: handleEditEffects,
            onSliderChange: handleEffectSliderValueChange,
          })}
        />
      ) : (
        <BoxView
          title="DMX GROUPS"
          style={styles.dmxGroupsViewContainer}
          component={DMXGroupsView({
            address: route.params.address,
            port: 4460,
            onDMXPress: handleDMXPress,
            onBlackOutPress: handleBlackOutPress,
            values: state.dmxGroups,
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
          id={0}
          onChange={handleSliderValueChange}
          value={state.sliders[0]}
        />
        <SendUDPSlider
          name="audio sensitivity"
          address={route.params.address}
          port={4445}
          width={80}
          height={100}
          id={1}
          onChange={handleSliderValueChange}
          value={state.sliders[1]}
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
