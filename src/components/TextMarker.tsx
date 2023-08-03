import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';


type TextMakerProps = {
    text: string;
  };

  const TextMaker: React.FC<TextMakerProps> = ({ text }) => {
    return (
      <View style={styles.position}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

  export default TextMaker

  const styles = StyleSheet.create({
    position: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      position: 'absolute',
      top: "-35%",
      left: "0%",
      right: '0%',
      bottom: 0,
    },
    text:{
        color: 'white', 
        fontSize: 16, 
        textAlign: 'center', 
        fontFamily: 'SVN-Gotham Regular'
    }
  });