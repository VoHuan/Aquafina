import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParams} from './RootStackParam';
import {Provider} from 'react-redux';
import store from '../app/store';

import LoginScreen from '../screens/LoginScreen';
import QuantityScreen from '../screens/QuantityScreen';
import ScanQRScreen from '../screens/ScanQRScreen';
import StaticsScreen from '../screens/StatisticsScreen';
import HomeScreen from '../screens/HomeScreen';
import AccumulatedPointsScreen from '../screens/AccumulatedPointsScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ScanQRScreen" component={ScanQRScreen} />
          {/* <Stack.Screen name="StaticsScreen" component={StaticsScreen} /> */}
          <Stack.Screen name="AccumulatedPointsScreen" component={AccumulatedPointsScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootStackNavigation;
