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

type LoginScreenProps = {
  navigation: any;
  route: any;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, route }) => {
  return (<View style={styles.container}>
    <Background />
    <Header/>
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
      onPress={async () => {}}
      text='Quét Mã'
      background={Constants.BACKGROUND_BLUE_BUTTON}
      disable = {false}></UIButton>
      
      <UIButton 
      onPress={async () => {}}
      text='Bỏ Qua'
      background={Constants.BACKGROUND_WHITE_BUTTON}
      disable = {true}></UIButton>
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
    marginTop:70,
    height:112,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
});