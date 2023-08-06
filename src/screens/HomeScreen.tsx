import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Alert,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Animated,
    InteractionManager,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Constants from '../ultils/Constants';
import Colors from '../ultils/Colors';
import FontSizes from '../ultils/FontSizes';
import Background from '../components/Background';
import Header from '../components/Header';
import UIButton from '../components/UIButton';
import QuantityScreen from './QuantityScreen';
import StaticsScreen from './StatisticsScreen';
import PopupRefresh from '../components/PopupRefresh';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { fetchRecycle } from '../features/recycling/recycleSlice';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import SuccessMesseage from '../components/SuccessMessage';


type HomeScreenProps = {
    navigation: any;
    route: any;
};

interface MyObject {
    AquaBottles: number;
    OtherBottles: number;
    quantity: number;
    time: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {

    const [selectQuantityButton, setSelectQuantityButton] = useState(true)
    
    const pan = useRef(new Animated.ValueXY({ x: 0, y: -500 })).current;

    const recycle = useSelector((state: RootState) => state.recycle.recycle);
    const recycle1 = useSelector((state: RootState) => state.recycle);
    const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
    const [nameRecycle, setNameRecycle] = useState('Unknown')

    // get data recycle01
    const handleFetchRecycle = async () => {
        if (recycle?.document !== undefined) {
            await dispatch(fetchRecycle(recycle?.document));
        }
    }

    useEffect(() => {
        if (recycle?.name !== undefined && recycle?.name !== null && recycle?.name !== '') {
            setNameRecycle(recycle?.name) // get name recycle
        }
        handleFetchRecycle()
    }, [recycle]);


    const handleNotificationSuccess = (reset: boolean) => {
        if(reset == true){
            Animated.timing(pan, {
                toValue: { x: 0, y:-80 },
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                InteractionManager.runAfterInteractions(() => {
                    // Animate back to origin
                    Animated.timing(pan, {
                        toValue: { x: 0, y: -500 },
                        duration: 500,
                        useNativeDriver: true,
                        delay: 500, 
                    }).start();
                })
            })
        }    
    }

    return (
        <View style={styles.container}>

            <Background />
            <Header text={nameRecycle} icon={nameRecycle === 'Unknown' ? Constants.UNIDENTIFIED_USER_ICON : Constants.IDENTIFIED_USER_ICON} />
            <View style={styles.switchButton}>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        setSelectQuantityButton(true)
                    }}>
                    {selectQuantityButton == true ? <ImageBackground
                        source={Constants.BACKGROUND_SMALL_BLUE_BUTTON}
                        style={styles.backgroundSmallBlueButton}>
                        <Text style={styles.textQuantityButton}>Số lượng</Text>
                    </ImageBackground> : <Text style={styles.textStatisticsButton}>Số lượng</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        setSelectQuantityButton(false)
                    }}>
                    {selectQuantityButton == false ? <ImageBackground
                        source={Constants.BACKGROUND_SMALL_BLUE_BUTTON}
                        style={styles.backgroundSmallBlueButton}
                    >
                        <Text style={styles.textQuantityButton}>Thống kê</Text>
                    </ImageBackground>
                        : <Text style={styles.textStatisticsButton}>Thống kê</Text>}
                </TouchableOpacity>
            </View>

            {/* Success Notification */}
            <View >
                <Animated.View
                    style={{
                        transform: [{ translateX: pan.x }, { translateY: pan.y }],
                        position: 'absolute',
                        width: '100%',
                        alignItems: 'center',
                    }}
                >
                    <SuccessMesseage />
                </Animated.View>
            </View>
            

            
            <View style={styles.body}>
                {selectQuantityButton == true ? <QuantityScreen /> : <StaticsScreen callback={handleNotificationSuccess} />}
            </View>

            
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: 15

            }}>
                <UIButton
                    onPress={()=>{}}
                    text={selectQuantityButton == true ? 'Xuất mã QR' : 'Xác nhận'}
                    color='blue'
                    disable={false}></UIButton>
            </View>

            

        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    switchButton: {
        //width:340,
        height: 46,
        backgroundColor: "white",
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 8,
        borderColor: '#0056D533',
        shadowColor: '#0056D533',
        shadowOpacity: 0.2,
        elevation: 6,
        marginTop: 15,
    },
    backgroundSmallBlueButton: {
        width: 340 / 2,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 8
    },
    button: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor:'pink'
    },
    textQuantityButton: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Regular',
        color: Colors.WHITE
    },
    textStatisticsButton: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Regular',
        color: Colors.DARK_GREY
    },
    body: {
        flex: 1
    }

})


