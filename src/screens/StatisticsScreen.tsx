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
import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';

type StaticsScreenProps = {
    navigation: any;
    route: any;
};


const StaticsScreen: React.FC<StaticsScreenProps> = ({ navigation, route }) => {
    
    return (
        <View style={styles.container}>
            <Background />
            <Header />
            <View style={styles.switchButton}>
                <TouchableOpacity style={styles.button}
                onPress={() => {
                    navigation.replace('QuantityScreen')
                }}>
                    <Text style={styles.textStatisticsButton}>Số lượng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} 
                >
                    <ImageBackground
                        source={Constants.BACKGROUND_SMALL_BLUE_BUTTON}
                        style={styles.backgroundSmallBlueButton}
                    >
                        <Text style={styles.textQuantityButton}>Thống kê</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 15, marginHorizontal: 16 }}>
                <View style={{ height: 74, marginBottom: 16 }}>
                    <Text style={styles.label}>
                        Tổng sức chứa
                    </Text>
                    <View style={styles.layoutNumber}>
                        <Text style={styles.number}>100</Text>
                    </View>
                </View>

                <View style={{ height: 74 }}>
                    <Text style={styles.label}>
                        Sức chứa còn lại
                    </Text>
                    <View style={styles.layoutNumber}>
                        <Text style={styles.number}>2</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: 20 }}>
                <TouchableOpacity style={styles.resetButton}>
                    <Text style={styles.textResetButton}>
                        Đặt lại
                    </Text>
                </TouchableOpacity>
            </View>

            <DataTable tableHead={['Thời gian', 'Số lượng', 'Số chai Aqua', 'Khác']} tableData={[['12/05/2022', '14', '7', '7'],
            ['13/05/2022', '15', '10', '5'],
            ['11/06/2022', '10', '8', '2'],
            ['10/07/2022', '16', '15', '1'],
            ['10/07/2022', '16', '8', '8']]}
            ></DataTable>

            <Pagination totalPages ={4} startIndex={1} endIndex={10} ></Pagination>
            <UIButton
                    onPress={async () => { }}
                    text='Xác nhận'
                    background={Constants.BACKGROUND_BLUE_BUTTON}
                    disable={false}></UIButton>

        </View>
    )
}

export default StaticsScreen

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
    backgroundSmallBlueButton: {
        width: 340 / 2,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 8
    },
    label: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Regular',
        color: Colors.PRIMARY,
        //marginLeft: 16,
        //fontWeight:450,
        marginBottom: 10
    },
    layoutNumber: {
        height: 43,
        backgroundColor: Colors.MEDIUM_GREY,
        borderRadius: 8,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    number: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Book'
    },
    resetButton: {
        width: 136,
        height: 40,
        //backgroundColor:'green',
        borderRadius: 4,
        borderColor: Colors.PRIMARY,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    textResetButton: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Regular',
        color: Colors.PRIMARY
    },

   
})