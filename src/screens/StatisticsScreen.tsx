import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Colors from '../ultils/Colors';
import FontSizes from '../ultils/FontSizes';
import DataTable from '../components/DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import Icon from 'react-native-vector-icons/FontAwesome5'
import PopupRefresh from '../components/PopupRefresh';

import { fetchRecycle, resetDataInFirebase, updateTotalRemain } from '../features/recycling/recycleSlice';


type StaticsScreenProps = {
    callback: (reset: boolean) => void;
};

interface MyObject {
    AquaBottles: number;
    OtherBottles: number;
    quantity: number;
    time: string;
}


const StaticsScreen: React.FC<StaticsScreenProps> = ({ callback }) => {

    const recycle = useSelector((state: RootState) => state.recycle.recycle);
    const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();

    const [currentPage, setCurrentPage] = useState(1);
    const [visiblePopupRresh, setVisiblePopupRresh] = useState(false)
    const [reset, setReset] = useState(false)

    const totalOfLineData: number = recycle?.Exchanges != undefined ? recycle?.Exchanges.length : 0
    const totalPages = totalOfLineData % 5 > 0 ? Math.floor(totalOfLineData / 5) + 1 : Math.floor(totalOfLineData / 5)  // total pages of pagination
    const startIndex = 5 * currentPage - 5  // start line data of table
    const endIndex = startIndex + 5    // end line data of table

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleSetVisiblePopup = (visible: boolean, reset: boolean) => {
        setVisiblePopupRresh(visible);
        setReset(reset)
    };

    const handleFetchRecycle = async () => {
        if (recycle?.document !== undefined) {
            await dispatch(fetchRecycle(recycle?.document));
        }
    }

    const data: MyObject[] | undefined | null = recycle?.Exchanges

    const convertObjectToArray = (arr: MyObject[] | undefined, start: number, end: number): any[][] => {
        const result: any[][] = [];
        if (arr != null && arr != undefined) {
            const slicedArr = arr.slice(start, end);  // get data by page number

            // returned data is NOT enough 5 lines
            if (5 - slicedArr.length > 0) {
                for (const obj of slicedArr) {
                    const values = Object.values(obj);
                    result.push(values);
                }
                // add blank line
                for (let i = 1; i <= 5 - slicedArr.length; i++) {
                    result.push([]);
                }
            }
            // data return has enough 5 lines
            else {
                for (const obj of slicedArr) {
                    const values = Object.values(obj);
                    result.push(values);
                }
            }

        }
        return result;
    };

    const convertedArray = convertObjectToArray(data, startIndex, endIndex);

    const renderPagination = () => {
        const pageButtons = []
        
        if (currentPage == totalPages - 3) {
            // pagination example
            // currentPage = 9, totalPages = 12
            // < 9 10 11 12 >
            for (let i = currentPage; i < totalPages + 1; i++) {
                pageButtons.push(
                    <Text
                        key={i}
                        style={[
                            styles.pageButton,
                            currentPage === i && styles.activePageButton,
                        ]}
                        onPress={() => {
                            setCurrentPage(i)
                        }}
                    >
                        {i}
                    </Text>
                )
            }
        }
        else if (currentPage > totalPages - 3) {
            // pagination example
            // currentPage = 10, totalPages = 12
            // < 9 10 11 12 >
            for (let i = totalPages - 3; i < totalPages + 1; i++) {
                pageButtons.push(
                    <Text
                        key={i}
                        style={[
                            styles.pageButton,
                            currentPage === i && styles.activePageButton,
                        ]}
                        onPress={() => {
                            setCurrentPage(i)
                        }}
                    >
                        {i}
                    </Text>
                )
            }
        }
        else {
            // pagination example
            // currentPage = 1, totalPages = 12
            // < 1 2 ... 12 >
            // < 2 3 ... 12 >
            for (let i = currentPage; i < 5 + currentPage; i++) {
                if (i == currentPage + 2) {
                    pageButtons.push(
                        <Text
                            key={i}
                            style={[
                                styles.pageButton,
                                currentPage === i && styles.activePageButton,
                            ]}>...</Text>
                    )
                    continue;
                }
                if (i == 5 + currentPage - 2) {
                    pageButtons.push(
                        <Text key={i}
                            style={[
                                styles.pageButton,
                                currentPage === i && styles.activePageButton,
                            ]}
                            onPress={() => {
                                setCurrentPage(i)
                            }}
                        >{totalPages.toString()}</Text>
                    )
                    break;
                }
                pageButtons.push(
                    <Text
                        key={i}
                        style={[
                            styles.pageButton,
                            currentPage === i && styles.activePageButton,
                        ]}
                        onPress={() => {
                            setCurrentPage(i)
                        }}
                    >
                        {i}
                    </Text>
                )
            }
        }

        return pageButtons
    }

    useEffect(() => {
        handleFetchRecycle
    }, [recycle]);


    const handleResetDataTable = async () => {
        if (recycle?.document !== undefined) {
            let success = await dispatch(resetDataInFirebase(recycle?.document))
            // reset success
            if (success) {
                await dispatch(updateTotalRemain({ message: recycle?.document, newData: recycle?.TotalContain})); // update total contain
                callback(true)  // callback HomeScreen display SuccessMesseage
            }
        }
    }

    useEffect(() => {
        if (reset == true) {
            handleResetDataTable()
            //handleFetchRecycle()
        }
    }, [reset]);



    return (
        <View style={styles.container}>
            <View style={{ marginTop: 10, marginHorizontal: 16 }}>
                <View style={{ height: 64, marginBottom: 16 }}>
                    <Text style={styles.label}>
                        Tổng sức chứa
                    </Text>
                    <View style={styles.layoutNumber}>
                        <Text style={styles.number}>{recycle?.TotalContain}</Text>
                    </View>
                </View>

                <View style={{ height: 64 }}>
                    <Text style={styles.label}>
                        Sức chứa còn lại
                    </Text>
                    <View style={styles.layoutNumber}>
                        <Text style={styles.number}>{recycle?.TotalRemain}</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20, marginBottom: 10 }}>
                <TouchableOpacity
                    style={styles.resetButton}
                    //onPress={handleResetDataTable}
                    onPress={() => {
                        setVisiblePopupRresh(true)
                    }}
                >
                    <Text style={styles.textResetButton}>
                        Đặt lại
                    </Text>
                </TouchableOpacity>
                <PopupRefresh callback={handleSetVisiblePopup} visible={visiblePopupRresh} />
            </View>

            <DataTable
                tableHead={['Thời gian', 'Số lượng', 'Số chai Aqua', 'Khác']}
                tableData={convertedArray}
            ></DataTable>

            {/* pagination */}
            {totalPages > 0 && <View style={styles.paginationContainer}>
                <TouchableOpacity
                    onPress={handlePrevPage}
                    disabled={currentPage == 1 ? true : false}
                >
                    <Icon name='chevron-left' style={[styles.prevButton, { opacity: currentPage == 1 ? 0.3 : 0.9 }]} size={22} />
                </TouchableOpacity>
                {renderPagination()}
                <TouchableOpacity
                    onPress={handleNextPage}
                    disabled={currentPage == totalPages ? true : false}
                >
                    <Icon name='chevron-right' style={[styles.prevButton, { opacity: currentPage == totalPages ? 0.3 : 0.9 }]} size={22} />
                </TouchableOpacity>
            </View>}


            {totalPages <= 0 && <Text style={{
                fontSize: FontSizes.h6,
                fontFamily: 'SVN-Gotham Book',
                color: Colors.LIGHT_GREY,
                position: 'absolute',
                top: '125%',
                left: '30%',
            }}>
                Hiện chưa có dữ liệu
            </Text>}

        </View>
    )
}

export default StaticsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Regular',
        color: Colors.PRIMARY,
        marginBottom: 10
    },
    layoutNumber: {
        height: 43,
        backgroundColor: Colors.MEDIUM_GREY,
        borderRadius: 8,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    number: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Book'
    },
    resetButton: {
        width: 136,
        height: 40,
        //backgroundColor:'green',
        borderRadius: 4,
        borderColor: Colors.PRIMARY,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    textResetButton: {
        fontSize: FontSizes.h5,
        fontFamily: 'SVN-Gotham Regular',
        color: Colors.PRIMARY
    },



    paginationContainer: {
        //width:164,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 7,
        paddingRight: 16
    },
    pageButton: {
        width: 28,
        height: 27,
        paddingTop: 3,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0)',
        borderRadius: 4,
        color: '#00122F80',
        fontFamily: 'SVN-Gotham Book',
        textAlign: 'center',
    },
    activePageButton: {
        backgroundColor: Colors.PRIMARY,
        color: 'white',
    },
    prevButton: {
        width: 24,
        height: 27,
        paddingTop: 2,
        borderColor: 'rgba(0,0,0,0)',
        borderRadius: 4,
        color: '#00122F80',
        textAlign: 'center',
    },



})