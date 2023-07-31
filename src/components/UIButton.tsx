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

interface ButtonWithTextProps {
    onPress: () => void;
    text: string;
    background: ImageSourcePropType;
    disable: boolean;
}

const UIButton: React.FC<ButtonWithTextProps> = ({ onPress, text, background, disable }) => {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <ImageBackground
                source={background}
                style={styles.background}
            >
                <Text style={disable == false ? styles.textBlueButton : styles.textWhiteButton}>{text}</Text>
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
        color: Colors.LIGHT_GREY,
        marginBottom: 6
    },
})