import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class App extends Component{
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };
  render() {
    return (
      <View style={styles.container}>
      {/* <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
      <TouchableOpacity
          onPress={this.takePicture.bind(this)}
          style = {styles.capture}
      >
          <Text style={{fontSize: 14}}> SNAP </Text>
      </TouchableOpacity> */}
      {/* </View> */}
      <RNCamera
        style={styles.preview}
        onBarCodeRead={(e) =>  console.warn(e.data)}
        barcodeTypes={(Platform.OS === 'android') ? ['qr'] : ['org.iso.QRCode']}
        ref={ref => { this.camera = ref }}
        onCameraReady={() => { console.log("onCameraReady") }}
        onMountError={() => { console.log("onMountError") }}
      >
      </RNCamera>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});