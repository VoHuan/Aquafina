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
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Constants from '../ultils/Constants';
import Colors from '../ultils/Colors';
import FontSizes from '../ultils/FontSizes';
import Background from '../components/Background';
import Header from '../components/Header';
import UIButton from '../components/UIButton';

type QuantityScreenProps = {
    navigation: any;
    route: any;
};

const QuantityScreen: React.FC<QuantityScreenProps> = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            
            <Background />
            <Header />
            <View style={styles.switchButton}>
                <TouchableOpacity style={styles.button}>
                    <ImageBackground
                        source={Constants.BACKGROUND_SMALL_BLUE_BUTTON}
                        style={styles.backgroundSmallBlueButton}
                    >
                        <Text style={styles.textQuantityButton}>Số lượng</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textStatisticsButton}>Thống kê</Text>
                </TouchableOpacity>
            </View>
            <Text style={{
                fontSize: FontSizes.h2,
                fontFamily: 'SVN-Gotham Regular',
                color: Colors.MEDIUM_BLUE,
                textAlign: 'center',
                marginTop: 20
            }}>Vui lòng nhập số lượng chai</Text>

            <View style={{ marginTop: 32, justifyContent: 'space-between', height: 79 }}>
                <Text style={{
                    fontSize: FontSizes.h5,
                    fontFamily: 'SVN-Gotham Regular',
                    color: Colors.PRIMARY,
                    marginLeft: 16
                    //fontWeight:450,
                }}>Chai Aqua</Text>
                <TextInput
                    style={{
                        //width:343,
                        height: 48,
                        backgroundColor: Colors.WHITE,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: '#CCDAF1',
                        paddingHorizontal: 12,
                        marginHorizontal: 16,
                        fontSize: FontSizes.h5,
                        fontFamily: 'SVN-Gotham Book',
                        color: Colors.DARK_GREY

                    }}
                ></TextInput>
                <TouchableOpacity style={styles.x_circle_icon}>
                    <Image source={Constants.X_CIRCLE_ICON} ></Image>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 24, justifyContent: 'space-between', height: 79 }}>
                <Text style={{
                    fontSize: FontSizes.h5,
                    fontFamily: 'SVN-Gotham Regular',
                    color: Colors.PRIMARY,
                    marginLeft: 16
                    //fontWeight:450,
                }}>Chai khác</Text>
                <TextInput
                    style={{
                        //width:343,
                        height: 48,
                        backgroundColor: Colors.WHITE,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: '#CCDAF1',
                        paddingHorizontal: 12,
                        marginHorizontal: 16,
                        fontSize: FontSizes.h5,
                        fontFamily: 'SVN-Gotham Book',
                        color: Colors.DARK_GREY

                    }}
                ></TextInput>
                <TouchableOpacity style={styles.x_circle_icon}>
                    <Image source={Constants.X_CIRCLE_ICON} ></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.boderAccumulatedPoints}>
                <Text style={{
                    fontSize: FontSizes.h6,
                    fontFamily: 'SVN-Gotham Regular',
                    color: Colors.PRIMARY,
                    textAlign: 'center',
                    paddingTop: 16
                }}>Tổng số điểm tích lũy hiện tại</Text>
                <Text style={{
                    fontSize: 40,
                    fontFamily: 'SVN-Gotham Bold',
                    color: Colors.MEDIUM_BLUE,
                    textAlign: 'center',
                    paddingTop: 25
                }}>210</Text>
            </View>

            <View style={{
                marginTop:70,
                
            }}>
                <UIButton
                    onPress={async () => { }}
                    text='Xuất mã QR'
                    background={Constants.BACKGROUND_BLUE_BUTTON}
                    disable={false}></UIButton>
            </View>

        </View>
    )
}
export default QuantityScreen

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
        marginTop: 20,


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
    x_circle_icon: {
        position: 'absolute',
        top: '55%',
        left: '85%',

    },
    boderAccumulatedPoints: {
        width: 327,
        height: 154,
        borderRadius: 12,
        elevation: 6,
        shadowColor: '#00000026',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginHorizontal: 16,
        backgroundColor: Colors.WHITE,
        marginTop: 20,

    }
})


