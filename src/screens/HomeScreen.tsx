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
import QuantityScreen from './QuantityScreen';
import StaticsScreen from './StatisticsScreen';
type HomeScreenProps = {
    navigation: any;
    route: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {

    const [selectQuantityButton, setSelectQuantityButton] = useState(true)


    return (
        <View style={styles.container}>

            <Background />
            <Header />
            <View style={styles.switchButton}>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        //navigation.navigate('StaticsScreen')
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
                        //navigation.navigate('StaticsScreen')
                        setSelectQuantityButton(false)
                    }}>
                    {selectQuantityButton == false ? <ImageBackground
                        source={Constants.BACKGROUND_SMALL_BLUE_BUTTON}
                        style={styles.backgroundSmallBlueButton}
                    >
                        <Text style={styles.textQuantityButton}>Thống kê</Text>
                    </ImageBackground>
                    :<Text style={styles.textStatisticsButton}>Thống kê</Text>}
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                {selectQuantityButton == true ? <QuantityScreen /> : <StaticsScreen />}
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: 15

            }}>
                <UIButton
                    onPress={async () => { }}
                    text= {selectQuantityButton == true ?'Xuất mã QR': 'Xác nhận'}
                    background={Constants.BACKGROUND_BLUE_BUTTON}
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


