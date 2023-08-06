import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Alert,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Constants from '../ultils/Constants';
import Colors from '../ultils/Colors';
import FontSizes from '../ultils/FontSizes';
import Background from '../components/Background';
import Header from '../components/Header';
import UIButton from '../components/UIButton';


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

  const data = [{"AquaBottles": 5, "OtherBottles": 5, "quantity": 10, "time": "12/03/2023"}, 
  {"AquaBottles": 8, "OtherBottles": 2, "quantity": 10, "time": "15/03/2023"}, 
  {"AquaBottles": 10, "OtherBottles": 5, "quantity": 15, "time": "16/04/2023"}, 
  {"AquaBottles": 12, "OtherBottles": 1, "quantity": 13, "time": "17/04/2023"},
  {"AquaBottles": 7, "OtherBottles": 7, "quantity": 14, "time": "18/04/2023"}, 
  {"AquaBottles": 12, "OtherBottles": 3, "quantity": 15, "time": "19/04/2023"},
  {"AquaBottles": 10, "OtherBottles": 7, "quantity": 17, "time": "20/04/2023"}, 
  {"AquaBottles": 8, "OtherBottles": 3, "quantity": 11, "time": "01/05/2023"},
  {"AquaBottles": 10, "OtherBottles": 1, "quantity": 11, "time": "02/05/2023"}, 
  {"AquaBottles": 13, "OtherBottles": 5, "quantity": 18, "time": "05/05/2023"},
  {"AquaBottles": 5, "OtherBottles": 1, "quantity": 6, "time": "17/05/2023"}, 
  {"AquaBottles": 4, "OtherBottles": 6, "quantity": 10, "time": "15/03/2023"},
  {"AquaBottles": 12, "OtherBottles": 8, "quantity": 20, "time": "12/03/2023"}, 
  {"AquaBottles": 10, "OtherBottles": 10, "quantity": 20, "time": "15/03/2023"}]

  const recycle = useSelector((state: RootState) => state.recycle.recycle);
  const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
  const [nameRecycle,setNameRecycle] = useState('Unknown')


  const handleAddData= async (data: any) => {
    await dispatch(addDataToFirebase(data));
  }

  useEffect(() => {
    if(recycle?.name!== undefined && recycle?.name!== null && recycle?.name!== ''){
      setNameRecycle(recycle?.name)
    }
    //handleAddData(data)
  }, [recycle]);

  return (<View style={styles.container}>
    <Background />
    <Header text ={nameRecycle} icon ={nameRecycle === 'Unknown' ? Constants.UNIDENTIFIED_USER_ICON : Constants.IDENTIFIED_USER_ICON}/>
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
        onPress={ () => {
          navigation.navigate('HomeScreen')
        }}
        text='Bỏ Qua'
        color='white'
        disable={nameRecycle =='Unknown' ? true : false}></UIButton>
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