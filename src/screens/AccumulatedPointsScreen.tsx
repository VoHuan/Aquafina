import {
    StyleSheet,
    View,
    Text,
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
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import QRCode from 'react-native-qrcode-svg';


type AccumulatedPointsScreenProps = {
    navigation: any;
    route: any;
};


const AccumulatedPointsScreen: React.FC<AccumulatedPointsScreenProps> = ({ navigation, route}) => {

    const recycle = useSelector((state: RootState) => state.recycle.recycle);
    const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
    const [nameRecycle, setNameRecycle] = useState('Unknown')
    const [time, setTime] = useState(15)


    
    useEffect(() => {
        if (time === 0) {
            return;
        }
        const timer = setInterval(() => {
            setTime(prevCount => prevCount - 1)
        }, 1000);
        return () => clearInterval(timer);
    }, [time])


    useEffect(() => {
        if (recycle?.name !== undefined && recycle?.name !== null && recycle?.name !== '') {
            setNameRecycle(recycle?.name) // get name recycle
        }
    }, [recycle]);

    return (<View style={styles.container}>
        <Background />
        <Header text={nameRecycle} icon={nameRecycle === 'Unknown' ? Constants.UNIDENTIFIED_USER_ICON : Constants.IDENTIFIED_USER_ICON} />
        <Text style={styles.Title}>Vui lòng quét mã QR tại đây để hoàn thành tích điểm nhé!</Text>

        <View style={styles.QR_Background}>
            <QRCode
                value = 'Value of QR code'
                size={230} 
            />
        </View>

        <Text style={{
            fontSize: FontSizes.h5,
            fontFamily: 'SVN-Gotham Book',
            color: '#707172',
            textAlign: 'center',
            marginTop: 10
        }}>Thời gian quét QR còn:
            <Text style={{
                fontSize: FontSizes.h3,
                fontFamily: 'SVN-Gotham Regular',
                color: '#FA4238',
                textAlign: 'center',
                marginTop: 15
            }}> {time}s</Text>
        </Text>

        <View style={styles.groupButton}>
            <UIButton
                onPress={() => {
                    setTime(15)
                }}
                text='Thêm thời gian'
                color='white'
                disable={time == 0 ? false : true}></UIButton>

            <UIButton
                onPress={() => {
                    navigation.navigate('HomeScreen')
                }}
                text='Kết thúc'
                color='blue'
                disable={false}></UIButton>
        </View>

    </View>)
}
export default AccumulatedPointsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Title: {
        fontSize: FontSizes.h3,
        fontFamily: 'SVN-Gotham Regular',
        color: Colors.MEDIUM_BLUE,
        textAlign: 'center',
        marginTop: 32
    },
    QR_Background: {
        marginHorizontal: 30,
        marginVertical: 30,
        width: 300,
        height: 300,
        backgroundColor: Colors.WHITE,
        elevation: 4,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    groupButton: {
        flex: 1,
        marginTop: 40,
        height: 92,
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },

})


