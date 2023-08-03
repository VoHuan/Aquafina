import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Colors from '../ultils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5'

type PaginProps = {
  totalPages: number;
  startIndex: number;
  endIndex: number;
};

const Pagination: React.FC<PaginProps> = ({
  totalPages,
  startIndex,
  endIndex,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPagination = () => {
    const pageButtons = [];

    for (let i = 0; i < totalPages; i++) {
      pageButtons.push(
        <Text
          key={i}
          style={[
            styles.pageButton,
            currentPage === i && styles.activePageButton,
          ]}
          onPress={() => setCurrentPage(i)}
        >
          {i + 1}
        </Text>
      );
    }

    return pageButtons;
  };

  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity
        onPress={handlePrevPage}
        disabled={currentPage == 0 ? true : false}
      >
        <Icon name='chevron-left' style={[styles.prevButton, { opacity: currentPage == 0 ? 0.3 : 0.9 }]} size={22} />
      </TouchableOpacity>
      {renderPagination()}
      <TouchableOpacity
        onPress={handleNextPage}
        disabled={currentPage == totalPages ? true : false}
      >
        <Icon name='chevron-right' style={[styles.prevButton, { opacity: currentPage == totalPages - 1 ? 0.3 : 0.9 }]} size={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight:16
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

    //backgroundColor:'green'
  },

});

export default Pagination;