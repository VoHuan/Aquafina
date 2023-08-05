import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageSourcePropType,
} from 'react-native';
import React from 'react';
import Constants from '../ultils/Constants';
import Colors from '../ultils/Colors';
import FontSizes from '../ultils/FontSizes';


type HeaderProps = {
    text : string
    icon: ImageSourcePropType;
  };
  
const Header: React.FC<HeaderProps> = ({ text, icon }) => {
    return (
        <View style={styles.header}>
            <Image source={Constants.LOGO} style={styles.logo} />
            <View style={{
                flexDirection: 'row',
                paddingRight: 16,
            }}>
                <Text style={styles.nameText}>{text}</Text>
                <Image source={icon} />
            </View>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    header: {
        width: 375,
        height: 44,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,

    },
    nameText: {
        paddingEnd: 4,
        color: Colors.LIGHT_BLUE,
        fontSize: FontSizes.h6,
        fontFamily: 'SVN-Gotham Regular'
    },
    logo: {
        width: 58,
        height: 24,
    },
})