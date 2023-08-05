import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import SquareMarker from '../components/SquareMarker';
import TextMaker from '../components/TextMarker';

import firestore from '@react-native-firebase/firestore';

import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../app/store';
import { fetchRecycle } from '../features/recycling/recycleSlice';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';

type QuantityScreenProps = {
  navigation: any;
  route: any;
};

const ScanQRScreen: React.FC<QuantityScreenProps> = ({ navigation, route }) => {

  const recycle = useSelector((state: RootState) => state.recycle.recycle);
  const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();

  const { width, height } = Dimensions.get('window');


  const handleFetchRecycle = async (doc: string) => {
    await dispatch(fetchRecycle(doc));
  }
 

  const onSuccess = async (e: { data: any; }) => {
    //Alert.alert(e.data);
    if(e.data !== null && e.data !==''){
      navigation.replace('HomeScreen')
      await handleFetchRecycle(e.data)
    }
  };

 
  useEffect(() => {
    console.log(recycle)
      console.log(recycle?.Exchanges)
      console.log(typeof recycle?.Exchanges )
}, [recycle]);

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