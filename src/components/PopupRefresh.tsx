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
    callback: (data: boolean) => void;
    visible: boolean
  }

const PopupRefresh: React.FC<ChildComponentProps> = ({ callback , visible}) => {
    const recycle = useSelector((state: RootState) => state.recycle.recycle);
    const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();

    const handleResetDataTable = async () => {
        if(recycle?.document !== undefined){
            await dispatch(resetDataInFirebase(recycle?.document))
        }
    }

    const handleFetchRecycle = async () => {
        if(recycle?.document !== undefined){
            await dispatch(fetchRecycle(recycle?.document));
        }
      }
   
    return (
        <Modal visible={visible} transparent>
            <View style={styles.container}>
                <View style={styles.alert}>
                    <Text style={styles.bigTitle}>Bạn có muốn đặt lại hệ thống?</Text>
                    <Text style={styles.smallTitle}>Tất cả dữ liệu sẽ được đặt lại</Text>
                    <View style={styles.groupButton}>
                        <TouchableOpacity style={styles.closeButton} onPress={()=>{
                            callback(false)
                        }}>
                            <Text style={styles.closeButtonText}>Hủy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.okButton} onPress={()=>{
                            handleResetDataTable()
                            callback(false)
                            handleFetchRecycle()
                        }}>
                            <Text style={styles.okButtonText}>Đặt lại</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

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
        width:132,
        height:48,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent:"center",
        borderColor:Colors.PRIMARY,
        borderWidth:1,
        marginRight:8

    },
    closeButtonText: {
        color: Colors.PRIMARY,
        fontSize: 18,
        textAlign:'center',
    },
    okButton: {
        width:132,
        height:48,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 8,
        justifyContent:"center",
        //marginLeft:10
        marginLeft:8
    },
    okButtonText: {
        color: Colors.WHITE,
        fontSize: 18,
        textAlign:'center',
    },
    groupButton:{ 
        width:280,
        height:48,
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    bigTitle:{
        fontFamily: 'SVN-Gotham Regular',
        color: '#00122F',
        fontSize: FontSizes.h4,
    },
    smallTitle:{
        fontFamily: 'SVN-Gotham Book',
        color: '#707172',
        fontSize: FontSizes.h5,
        marginTop:10,
        marginBottom:20
    }
});

export default PopupRefresh