import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import SquareMarker from '../components/SquareMarker';
import TextMaker from '../components/TextMarker';

type QuantityScreenProps = {
  navigation: any;
  route: any;
};

const ScanQRScreen: React.FC<QuantityScreenProps> = ({ navigation, route }) => {

  const { width, height } = Dimensions.get('window');

  const onSuccess = (e: { data: any; }) => {
    //Alert.alert(e.data);
    if(e.data !== null && e.data !==''){
      navigation.replace('QuantityScreen')
    }
  };

  // UI ScanQR screen
  const combinedMarker = (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      {<TextMaker text={'Di chuyển camera đến mã QR để quét'} />}
      {<SquareMarker size={305} borderWidth={3} borderColor={'rgba(0,0,0,0)'} borderRadius={10} />}
    </View>
  );

  return (
    <QRCodeScanner
      onRead={onSuccess}
      showMarker={true}
      customMarker={combinedMarker}
      cameraStyle={{ height: height }}
      bottomViewStyle={{ display: 'none' }}
      topViewStyle={{ display: 'none' }}
    //cameraContainerStyle={{ flex: 1,backgroundColor: 'rgba(0, 0,0, 0.5)' }}
    />
  );
}
const styles = StyleSheet.create({

});

export default ScanQRScreen;