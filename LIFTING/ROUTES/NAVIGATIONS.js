import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import STARTED from '../SCREENS/STARTED';
import SIGNIN from '../SCREENS/SIGNIN';
import SIGNUP from '../SCREENS/SIGNUP';
import DRAWERNAVIGATOR from './DRAWERNAVIGATOR';  // Import DRAWERNAVIGATOR for HOME and ABOUT

const Stack = createStackNavigator();

export default function NAVIGATIONS() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='STARTED'>
        <Stack.Screen
          name='STARTED'
          component={STARTED}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SIGNIN'
          component={SIGNIN}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SIGNUP'
          component={SIGNUP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Drawer"
          component={DRAWERNAVIGATOR}  // Drawer Navigator for HOME and ABOUT
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
