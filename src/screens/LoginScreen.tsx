import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Constants from '../ultils/Constants';
import Colors from '../ultils/Colors';
import Background from '../components/Background';
import Header from '../components/Header';
import UIButton from '../components/UIButton';

import { getRecycleFromAsyncStorage } from '../AsyncStorage/recycle';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { fetchRecycle } from '../features/recycling/recycleSlice';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { addDataToFirebase } from '../features/recycling/recycleSlice';

type LoginScreenProps = {
  navigation: any;
  route: any;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, route }) => {

  const recycle = useSelector((state: RootState) => state.recycle.recycle);
  const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
  const [nameRecycle, setNameRecycle] = useState('Unknown')

  // function get recycle from AsyncStorage then update recycle in store
  const handleGetRecycleFromAsyncStorage = async () => {
    const recycleStorage = await getRecycleFromAsyncStorage()
    if (recycleStorage !== null && recycleStorage !== undefined) {
      await dispatch(fetchRecycle(recycleStorage.name))
      setNameRecycle(recycleStorage.name) //get name recycle for header
    }
  }

  useEffect(() => {
    if (recycle?.name === undefined || recycle?.name === null || recycle?.name === '') {
      handleGetRecycleFromAsyncStorage()
    }

    //get name recycle for header
    if (recycle?.name !== null && recycle?.name !== undefined) {
      setNameRecycle(recycle.name)
    }
  }, [recycle]);

  return (<View style={styles.container}>
    <Background />
    <Header text={nameRecycle} icon={nameRecycle === 'Unknown' ? Constants.UNIDENTIFIED_USER_ICON : Constants.IDENTIFIED_USER_ICON} />
    <Image source={Constants.RECYCLE_IMAGE} style={styles.recycleImage} />
    <View style={styles.groupText}>
      <Text style={{
        color: Colors.DARK_BLUE,
        fontSize: 24,
        marginBottom: 5,
        fontFamily: 'SVN-Gotham Bold',
        lineHeight: 28.8

      }}>QUÉT MÃ QR</Text>
      <Text style={{
        color: Colors.DARK_GREY,
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 55,
        fontFamily: 'SVN-Gotham Book',

        //backgroundColor: 'green'
      }}>Vui lòng quét mã QR trên thùng để tiếp tục sử dụng hệ thống!</Text>
    </View>

    <View style={styles.groupButton}>
      <UIButton
        onPress={() => {
          navigation.navigate('ScanQRScreen')
        }}
        text='Quét Mã'
        color='blue'
        disable={false}></UIButton>

      <UIButton
        onPress={() => {
          navigation.navigate('HomeScreen')
        }}
        text='Bỏ Qua'
        color='white'
        disable={nameRecycle == 'Unknown' ? true : false}></UIButton>
    </View>

  </View>)
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },


  recycleImage: {
    width: 244,
    height: 299,
    position: 'absolute',
    top: 88,
    left: 31,
    bottom: 0,
  },
  groupText: {
    paddingTop: '103%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'green' 
  },
  groupButton: {
    flex: 1,
    marginTop: 70,
    height: 112,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },

});