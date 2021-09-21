import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function WebRTC(props) {
  return (
    <View style={styles.container}>
      <Text>WebRTC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
