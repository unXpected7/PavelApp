import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs'

import {Home, Welcome} from '../screens';
import {AuthLogin, AuthRegister} from '../screens/Auth';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthLogin"
        screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="AuthLogin" component={AuthLogin} />
          <Stack.Screen name="AuthRegister" component={AuthRegister} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Bottom" component={BottomTabs} />
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
