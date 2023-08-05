import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';

import { Table, Row, Rows } from 'react-native-reanimated-table';
import Colors from '../ultils/Colors';


interface DataBleProps {
    tableHead: string[];
    tableData: string[][];
}

const DataTable: React.FC<DataBleProps> = ({ tableHead, tableData }) => {

   

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: 'rgba(0,0,0,0)', }} style={styles.table}>
                <Row data={tableHead} style={styles.head} textStyle={styles.textHeader} />
                <Rows data={tableData} style={styles.cells} textStyle={styles.textCell} />
            </Table>

            
        </View>
    )
}

export default DataTable

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        paddingHorizontal: 16,
    },
    table: {
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    head: {
        height: 40,
        backgroundColor: Colors.PRIMARY,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    textHeader: {
        margin: 4,
        fontSize: 12,
        textAlign: 'center',
        color: Colors.WHITE
    },
    textCell: {
        margin: 6,
        fontSize: 12,
        color: Colors.DARK_BLUE,
        textAlign: 'center',
    },
    cells: {
        height: 40,
    },




    
})