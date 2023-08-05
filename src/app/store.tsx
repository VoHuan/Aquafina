import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import recycleSlice from '../features/recycling/recycleSlice';
import {useDispatch} from 'react-redux';

const store = configureStore({
  reducer: {
    recycle: recycleSlice,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
