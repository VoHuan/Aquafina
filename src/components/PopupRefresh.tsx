import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Colors from '../ultils/Colors';
import FontSizes from '../ultils/FontSizes';
import { fetchRecycle, resetDataInFirebase } from '../features/recycling/recycleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../app/store';
import { Action } from '@reduxjs/toolkit';

interface ChildComponentProps {
    callback: (visible: boolean, reset: boolean) => void;  // visible value always return false to stop popup refesh
    visible: boolean   // visible value to turn on or turn off popup refresh
}

const PopupRefresh: React.FC<ChildComponentProps> = ({ callback, visible }) => {

    return (
        <Modal visible={visible} transparent>
            <View style={styles.container}>
                <View style={styles.alert}>
                    <Text style={styles.bigTitle}>Bạn có muốn đặt lại hệ thống?</Text>
                    <Text style={styles.smallTitle}>Tất cả dữ liệu sẽ được đặt lại</Text>
                    <View style={styles.groupButton}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => {
                            callback(false, false)
                        }}>
                            <Text style={styles.closeButtonText}>Hủy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.okButton} onPress={() => {
                            callback(false, true)
                        }}>
                            <Text style={styles.okButtonText}>Đặt lại</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alert: {
        width: 324,
        height: 161,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    closeButton: {
        width: 132,
        height: 48,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: "center",
        borderColor: Colors.PRIMARY,
        borderWidth: 1,
        marginRight: 8

    },
    closeButtonText: {
        color: Colors.PRIMARY,
        fontSize: 18,
        textAlign: 'center',
    },
    okButton: {
        width: 132,
        height: 48,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 8,
        justifyContent: "center",
        //marginLeft:10
        marginLeft: 8
    },
    okButtonText: {
        color: Colors.WHITE,
        fontSize: 18,
        textAlign: 'center',
    },
    groupButton: {
        width: 280,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    bigTitle: {
        fontFamily: 'SVN-Gotham Regular',
        color: '#00122F',
        fontSize: FontSizes.h4,
    },
    smallTitle: {
        fontFamily: 'SVN-Gotham Book',
        color: '#707172',
        fontSize: FontSizes.h5,
        marginTop: 10,
        marginBottom: 20
    }
});

export default PopupRefresh