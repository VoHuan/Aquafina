import {
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native';
import React from 'react';
import Colors from '../ultils/Colors';
import FontSizes from '../ultils/FontSizes';
import Constants from '../ultils/Constants';

interface ButtonWithTextProps {
    onPress: () => void;
    text: string;
    color: string
    disable: boolean;
}

const UIButton: React.FC<ButtonWithTextProps> = ({ onPress, text, color, disable }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            disabled={disable}>
            <ImageBackground
                source={color === 'blue'?Constants.BACKGROUND_BLUE_BUTTON:Constants.BACKGROUND_WHITE_BUTTON}
                style={styles.background}
            >
                <Text style={disable == false &&color==='blue' ? styles.textBlueButton : 
                (disable == false && color==='white' ?styles.textWhiteButton1 :
                styles.textWhiteButton)}>{text}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
export default UIButton

const styles = StyleSheet.create({
    background: {
        width: 343,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textBlueButton: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Regular',
        color: Colors.WHITE,
        marginBottom: 6
    },
    textWhiteButton: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Regular',
        color:  Colors.LIGHT_GREY,
        marginBottom: 6
    },
    textWhiteButton1: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Regular',
        color:  Colors.MEDIUM_BLUE,
        marginBottom: 6
    },
})