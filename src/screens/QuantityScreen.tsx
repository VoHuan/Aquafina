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




type QuantityScreenProps = {
    
};

const QuantityScreen : React.FC<QuantityScreenProps> = ({ }) => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: FontSizes.h3,
                fontFamily: 'SVN-Gotham Regular',
                color: Colors.MEDIUM_BLUE,
                textAlign: 'center',
                marginTop: 15
            }}>Vui lòng nhập số lượng chai</Text>

            <View style={{ marginTop: 22, justifyContent: 'space-between', height: 79 }}>
                <Text style={styles.label}>Chai Aqua</Text>
                <TextInput
                    style={styles.input}
                ></TextInput>
                <TouchableOpacity style={styles.x_circle_icon}>
                    <Image source={Constants.X_CIRCLE_ICON} ></Image>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 14, justifyContent: 'space-between', height: 79 }}>
                <Text style={styles.label}>Chai khác</Text>
                <TextInput
                    style={styles.input}
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

        </View>
    )
}
export default QuantityScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
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

    },
    label: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Regular',
        color: Colors.PRIMARY,
        marginLeft: 16
        //fontWeight:450,
    },
    input: {
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
    },
})


