import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParams} from './RootStackParam';
import {Provider} from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import QuantityScreen from '../screens/QuantityScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigation = () => {
  return (
    //<Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="QuantityScreen">
          {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
          <Stack.Screen name="QuantityScreen" component={QuantityScreen} />
        </Stack.Navigator>
      </NavigationContainer>
   // </Provider>
  );
};

export default RootStackNavigation;