import {
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
} from 'react-native';
import React from 'react';
import Constants from '../ultils/Constants';

type Background = {
    
}
const Background : React.FC<Background> = ({ }) => {
    return (
        <Image source={Constants.BACKGROUND} style={styles.background} />
    )
}
export default Background

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

