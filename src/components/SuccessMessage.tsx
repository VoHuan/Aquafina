import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Colors from '../ultils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5'
import FontSizes from '../ultils/FontSizes';

type SuccessMessageProps = {

}
const SuccessMesseage : React.FC<SuccessMessageProps> = ({  }) => {
    return (
        <View>
            <View style={styles.container}>
                <Icon name='check'style={styles.icon} size={22} color={'green'} />
                <Text style={styles.text}>Đặt lại thành công</Text>
            </View>
        </View>

    )
}

export default SuccessMesseage

const styles = StyleSheet.create({
    container: {
       // marginTop: 20,
        width: 324,
        height: 40,
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        
    },
    text: {
        fontFamily: 'SVN-Gotham Regular',
        fontSize: FontSizes.h4,
        color: Colors.PRIMARY,   
    },
    icon: {
       marginRight:10
    }

})
