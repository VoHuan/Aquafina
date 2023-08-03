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
import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';

type StaticsScreenProps = {
    navigation: any;
    route: any;
};


const StaticsScreen = () => {
    
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 10, marginHorizontal: 16 }}>
                <View style={{ height: 64, marginBottom: 16 }}>
                    <Text style={styles.label}>
                        Tổng sức chứa
                    </Text>
                    <View style={styles.layoutNumber}>
                        <Text style={styles.number}>100</Text>
                    </View>
                </View>

                <View style={{ height: 64 }}>
                    <Text style={styles.label}>
                        Sức chứa còn lại
                    </Text>
                    <View style={styles.layoutNumber}>
                        <Text style={styles.number}>2</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20, marginBottom:10 }}>
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
        </View>
    )
}

export default StaticsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
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