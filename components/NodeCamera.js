import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Text,
  Button,
} from "react-native";
import { NodeCameraView } from "react-native-nodemediaclient";

export default function NodeCamera(props) {
  const [isPublish, setIsPublish] = useState(false);

  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ],
      {
        title: "Cool Photo App Camera And Microphone Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  };

  return (
    <View style={styles.container}>
      <NodeCameraView
        style={{ height: 400 }}
        ref={(vb) => {
          this.vb = vb;
        }}
        outputUrl={"rtmp://192.168.0.10/live/stream"}
        camera={{ cameraId: 1, cameraFrontMirror: true }}
        audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
        video={{
          preset: 12,
          bitrate: 400000,
          profile: 1,
          fps: 15,
          videoFrontMirror: false,
        }}
        autopreview={true}
      />

      <Button title="request permissions" onPress={requestCameraPermission} />
      <Button
        onPress={() => {
          if (isPublish) {
            setIsPublish(false);
            this.vb.stop();
          } else {
            setIsPublish(true);
            this.vb.start();
          }
        }}
        title={isPublish ? "stop" : "start"}
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
