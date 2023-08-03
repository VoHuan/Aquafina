import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';

type SquareMarkerProps = {
    size: number;
    borderWidth: number;
    borderColor: string;
    borderRadius: number;
};

const { width, height } = Dimensions.get('window');

const SquareMarker: React.FC<SquareMarkerProps> = ({ size, borderWidth, borderColor, borderRadius }) => {
    const cornerRadius = 2 * borderRadius;
    return (
        <View style={[styles.marker, { width: size, height: size, borderWidth: borderWidth, borderColor: borderColor, borderRadius: borderRadius }]}>
            <View style={[styles.corner, { top: 0, left: 0, borderTopWidth: borderWidth, borderLeftWidth: borderWidth, width: cornerRadius, height: cornerRadius, borderTopLeftRadius: borderRadius, borderColor: '#58AFFF', }]} />
            <View style={[styles.corner, { top: 0, right: 0, borderTopWidth: borderWidth, borderRightWidth: borderWidth, width: cornerRadius, height: cornerRadius, borderTopRightRadius: borderRadius, borderColor: '#58AFFF' }]} />
            <View style={[styles.corner, { bottom: 0, left: 0, borderBottomWidth: borderWidth, borderLeftWidth: borderWidth, width: cornerRadius, height: cornerRadius, borderBottomLeftRadius: borderRadius, borderColor: '#58AFFF' }]} />
            <View style={[styles.corner, { bottom: 0, right: 0, borderBottomWidth: borderWidth, borderRightWidth: borderWidth, width: cornerRadius, height: cornerRadius, borderBottomRightRadius: borderRadius, borderColor: '#58AFFF' }]} />
        </View>
    );
};

export default SquareMarker

const styles = StyleSheet.create({
    marker: {
      position: 'relative',
    },
    corner: {
      position: 'absolute',
      borderColor: 'white',
    },
  });