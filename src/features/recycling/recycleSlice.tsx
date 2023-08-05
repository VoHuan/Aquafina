import firestore from '@react-native-firebase/firestore';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
interface Recycle {
    document: string;
    AquaBottles: number
    OtherBottles: number
    Points: number
    RemainingCapacity: number
    TotalCapacity: number
    name: string
    Exchanges: []
}

interface Exchange {
    AquaBottles: number
    OtherBottles: number
    quantity: number
    time: string
}

interface recycleState {
    recycle: Recycle | undefined | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    
}

const initialState: recycleState = {
    recycle: undefined,
    status: 'idle',
    error: null,
    
};

// function get recycle from firebase
export const fetchRecycle = createAsyncThunk(
    'recycle/fetchRecycle',
    async (message: string) => {
        try {
            const recycleDocument = await firestore()
                .collection('recycle01')
                .doc(message)
                .get()

            if (!recycleDocument.exists) {
                return null
            }
            const recycle =  recycleDocument.data()  as Recycle
            recycle.document = message

            //console.log(recycle)
            return recycle
        } catch (error) {
            console.log(error)
            return null
        }
    }
)


export const addDataToFirebase = createAsyncThunk(
    'recycle/addDataToFirebase',
    async (objects: Object[]) => {
      try {
        const recycleDocumentRef = firestore()
          .collection('recycle01')
          .doc('3120410190');
  
        
        await recycleDocumentRef.update({
          Exchanges: firestore.FieldValue.arrayUnion(...objects),
        })
  
        console.log('Thêm dữ liệu thành công')
        return true
      } catch (error) {
        console.log('Lỗi khi thêm dữ liệu:', error)
        return false
      }
    }
  )

  export const resetDataInFirebase = createAsyncThunk(
    'recycle/resetDataInFirebase',
    async (message: string) => {
      try {
        const recycleDocumentRef = firestore()
          .collection('recycle01')
          .doc(message);
  
        await recycleDocumentRef.update({
          Exchanges: [],
        })
  
        console.log('Reset dữ liệu thành công');
        return true
      } catch (error) {
        console.log('Lỗi khi reset dữ liệu:', error);
        return false
      }
    }
  )


const recycleSlice = createSlice({
    name: 'recycle',
    initialState,
    reducers: {
        setRecycle: (state, action) => {
            //state.recycle = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchRecycle.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchRecycle.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.recycle = action.payload;
                //setRecycle(action)
            })
            .addCase(fetchRecycle.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Failed to fetch Recycle!';
            })


    },
});
export const { setRecycle } = recycleSlice.actions;

export default recycleSlice.reducer;