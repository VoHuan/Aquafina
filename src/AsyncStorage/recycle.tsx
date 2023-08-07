import AsyncStorage from '@react-native-async-storage/async-storage';

interface Recycle {
    document: string;
    AccumulatedPoints: number
    TotalRemain: number
    TotalContain: number
    name: string
    Exchanges: []
  }

export const getRecycleFromAsyncStorage = async (): Promise<Recycle | null> => {
    try {
      // Lấy dữ liệu từ AsyncStorage theo key tương ứng
      const data = await AsyncStorage.getItem('recycleData');
  
      // Kiểm tra nếu dữ liệu không tồn tại
      if (data === null) {
        return null;
      }
  
      // Giải mã và trả về dữ liệu
      const parsedData: Recycle = JSON.parse(data);
      console.log('Recycle get success');
      return parsedData;
    } catch (error) {
      console.log('Failed to get recycle data from AsyncStorage:', error);
      return null;
    }
  };

  
export const saveRecycleToAsyncStorage = async (recycleData: Recycle): Promise<boolean> => {
    try {
      // Chuyển đổi dữ liệu thành JSON và lưu vào AsyncStorage theo key tương ứng
      const data = JSON.stringify(recycleData);
      await AsyncStorage.setItem('recycleData', data);
      console.log('Recycle data saved to AsyncStorage');
      return true;
    } catch (error) {
      console.log('Failed to save recycle data to AsyncStorage:', error);
      return false;
    }
  };