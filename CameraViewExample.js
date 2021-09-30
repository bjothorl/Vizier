import React, { PureComponent } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import StaticServer from "react-native-static-server";
import WebView from "react-native-webview";
import ViewShot from "react-native-view-shot";
import RNFS from "react-native-fs";

// https://www.npmjs.com/package/react-native-ffmpeg
// https://trac.ffmpeg.org/wiki/StreamingGuide
// https://github.com/tanersener/react-native-ffmpeg/issues/15
// https://stackoverflow.com/questions/43037267/how-to-set-androids-camera-as-the-input-of-ffmpeg
// https://stackoverflow.com/questions/15280722/android-camera-capture-using-ffmpeg

export default class CameraViewExample extends PureComponent {
  state = {
    imageUrl: null,
    url: null,
    recording: false,
  };

  async componentDidMount() {
    moveAndroidFiles();
    let path = getPath();
    this.server = new StaticServer(8080, path);
    this.server.start().then((url) => {
      this.setState({ url });
    });
  }
  componentWillUnmount() {
    if (this.server && this.server.isRunning()) {
      this.server.stop();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ViewShot
          options={{ format: "jpg", quality: 0.5 }}
          // captureMode={"continuous"}
          // onCapture={(uri) => this.handleOnCapture(uri)}
          ref={(ref) => {
            this.viewShot = ref;
          }}
          style={styles.viewShow}
        >
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: "Permission to use camera",
              message: "We need your permission to use your camera",
              buttonPositive: "Ok",
              buttonNegative: "Cancel",
            }}
            androidRecordAudioPermissionOptions={{
              title: "Permission to use audio recording",
              message: "We need your permission to use your audio",
              buttonPositive: "Ok",
              buttonNegative: "Cancel",
            }}
          />
        </ViewShot>
        {this.state.imageUrl && (
          <Image style={styles.img} source={{ uri: this.state.imageUrl }} />
        )}
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <Text style={{ backgroundColor: "white", alignSelf: "center" }}>
            {this.state.url}
          </Text>
          <TouchableOpacity
            onPress={this.startRecord.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}>
              {this.state.recording ? "STOP" : "START"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}>SNAP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleOnCapture = async (uri) => {
    RNFS.moveFile(uri, RNFS.DocumentDirectoryPath + "/www/img.jpg");
  };

  takePicture = async () => {
    if (this.camera) {
      // const options = { quality: 0.5, base64: true };
      // const data = await this.camera.takePictureAsync(options);
      // this.setState({ imageUrl: data.uri });
      // console.log(data.uri);
      // console.log(this.state.url);
      this.viewShot.capture().then((uri) => {
        console.log("do something with ", uri);
        this.setState({ imageUrl: uri });
        const data = RNFS.moveFile(
          uri,
          RNFS.DocumentDirectoryPath + "/www/img.jpg"
        );
      });
    }
  };
  startRecord = async () => {
    if (!this.state.recording) {
      if (this.camera) {
        this.setState({ recording: true });
        console.log("starting recording...");
        const data = await this.camera.recordAsync({
          videoBitrate: 1000,
          quality: "480p",
          path: RNFS.DocumentDirectoryPath + "/www/vid.mp4",
        });
        // const data = this.camera.resumePreview();
        console.log(data);
      }
    } else {
      console.log("stopping recording...");
      this.camera.stopRecording();
      // this.camera.pausePreview();
      this.setState({ recording: false });
    }
  };
}

async function moveAndroidFiles() {
  if (Platform.OS === "android") {
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + "/www");
    const files = [
      "www/index.html",
      "www/index.css",
      "www/index.js",
      "www/2.jpg",
    ];
    await files.forEach(async (file) => {
      await RNFS.copyFileAssets(file, RNFS.DocumentDirectoryPath + "/" + file);
      console.log(file);
    });
  }
}
function getPath() {
  return Platform.OS === "android"
    ? RNFS.DocumentDirectoryPath + "/www"
    : RNFS.MainBundlePath + "/www";
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  viewShow: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
  img: {
    position: "absolute",
    bottom: 100,
    width: 300,
    height: 200,
  },
  img: {
    position: "absolute",
    bottom: 400,
    width: 300,
    height: 200,
  },
});
